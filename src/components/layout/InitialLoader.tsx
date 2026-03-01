import React from "react";

export default function InitialLoader() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #initial-loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              height: 100dvh;
              background-color: #FAF7F2;
              z-index: 9999;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              transition: opacity 400ms ease-out, visibility 400ms ease-out;
              opacity: 1;
              visibility: visible;
              pointer-events: auto;
            }
            #initial-loader.hidden {
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
            }
            .loader-logo {
              width: 180px;
              max-width: 60vw;
              height: auto;
              opacity: 0;
              transform: translateY(12px);
              animation: loaderFadeInUp 600ms ease-out forwards;
              will-change: opacity, transform;
            }
            .loader-indicator {
              margin-top: 40px;
              width: 64px;
              height: 2px;
              background-color: rgba(139, 123, 184, 0.2);
              position: relative;
              overflow: hidden;
              border-radius: 2px;
              opacity: 0;
              animation: loaderFadeIn 400ms ease-out 400ms forwards;
              will-change: opacity;
            }
            .loader-indicator-bar {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 30%;
              background-color: #8B7BB8;
              border-radius: 2px;
              animation: loaderProgress 1.4s ease-in-out infinite;
              will-change: transform;
            }
            @keyframes loaderFadeInUp {
              0% { opacity: 0; transform: translateY(12px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes loaderFadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes loaderProgress {
              0% { transform: translateX(-150%); }
              100% { transform: translateX(350%); }
            }
          `,
        }}
      />
      {/* 
        Using dangerouslySetInnerHTML for the structure prevents hydration errors 
        where the client script modifies the DOM before React hydrates.
      */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div id="initial-loader">
              <img src="/LOGO.png" alt="Healing60 Logo" class="loader-logo" />
              <div class="loader-indicator">
                <div class="loader-indicator-bar"></div>
              </div>
            </div>
            <script>
              (function() {
                var loader = document.getElementById('initial-loader');
                if (!loader) return;
                
                var hasFired = false;

                var executeHide = function() {
                  if (hasFired) return;
                  hasFired = true;
                  
                  // Set a global flag so client-side navigation or slow hydration knows it's done
                  window.__HEALING60_LOADER_DONE = true;
                  
                  // Dispatch the hero sync event exactly as the loader begins fade-out
                  document.dispatchEvent(new CustomEvent('hero:release'));
                  loader.classList.add('hidden');
                };

                var minDelayPromise = new Promise(function(resolve) {
                  setTimeout(resolve, 3000);
                });

                var windowLoadPromise = new Promise(function(resolve) {
                  if (document.readyState === 'complete') {
                    resolve();
                  } else {
                    window.addEventListener('load', resolve);
                  }
                });

                Promise.all([windowLoadPromise, minDelayPromise]).then(executeHide);
                
                // Hard fallback timeout: 6000ms max (3s min + 3s buffer)
                setTimeout(executeHide, 6000);
              })();
            </script>
          `,
        }}
      />
    </>
  );
}
