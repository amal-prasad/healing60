export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated loading orbs */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-lavender/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-lavender animate-spin" />
          <div className="absolute inset-2 rounded-full bg-lavender/10 animate-pulse-glow" />
        </div>
        <p className="text-sm text-charcoal-light tracking-widest uppercase">
          Loading
        </p>
      </div>
    </main>
  );
}
