# Mobile Navigation Deadlock Fix Plan

## Context
Fixing a mobile navigation bug where clicking a menu link causes the Next.js App Router to deadlock with Framer Motion's `AnimatePresence`, leaving the app stuck on a loading screen and the body unscrollable. The fix involves implementing `<Suspense>` boundaries, robust scroll-lock cleanup, and deterministic navigation sequencing.

## Root Cause
When a mobile menu link is clicked:
1. `setIsMobileOpen(false)` fires → Menu overlay starts exit animation.
2. Next.js router starts navigation → `PageTransition` starts page exit animation.
3. Next.js App Router (without Suspense boundaries) tries to render the new page but hits the global `loading.tsx`.
4. The combination of simultaneous `AnimatePresence` unmounts + `mode="wait"` deadlocks Framer Motion. The exit animation is never considered "complete", so `mode="wait"` never allows the new page to mount.
5. Additionally: The `overflow: hidden` on the body from the mobile menu never gets cleared because the unmount is interrupted, leaving the new page unscrollable (appearing frozen).

## Execution Plan

### Task 1: Write Playwright E2E Tests for Mobile Navigation
- **What**: Create `tests/mobile-nav.spec.ts`. Mock mobile viewport (e.g. 375x812). Click hamburger menu -> click a link (like About) -> assert URL changes -> assert `document.body` does not have `overflow: hidden` -> assert new page content is visible.
- **Goal**: Ensure the test FAILS initially, reproducing the bug.

### Task 2: Implement `<Suspense>` Boundaries in Layout
- **What**: Wrap the `children` prop in `src/app/layout.tsx` (inside the `main` or `PageTransition` wrapper) with `<Suspense fallback={<Loading />}>`. 
- **Goal**: Prevent Next.js from using the global `loading.tsx` to instantly unmount the entire page tree.

### Task 3: Implement Robust Scroll Lock Cleanup
- **What**: In `src/components/layout/Navbar.tsx`, update the `overflow: hidden` `useEffect`. 
  1. Add a cleanup return: `return () => { document.body.style.overflow = ''; }`
  2. Add a second `useEffect` depending on `pathname` (via `usePathname`) that explicitly sets `document.body.style.overflow = ''` when the route changes.

### Task 4: Refactor Navbar Navigation Sequencing
- **What**: In `Navbar.tsx`, update the mobile menu links. They should use programmatic navigation to ensure the menu state updates properly during the route change without arbitrary timeouts.
  - Rely on the `<Suspense>` boundaries added in Task 2 to handle the simultaneous animations safely.

### Task 5: Verify Fix
- **What**: Run the Playwright test from Task 1.
- **Goal**: Ensure it PASSES successfully, proving the deadlock is resolved and scroll is restored.

## Final Verification Wave
- Run `npm run build` to ensure no build errors.
- Run `npx playwright test tests/mobile-nav.spec.ts` to ensure the E2E test passes.
