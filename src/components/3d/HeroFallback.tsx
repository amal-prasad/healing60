"use client";

export default function HeroFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Primary lavender orb */}
      <div
        className="absolute w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full top-1/4 -left-20 lg:left-10 animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(196,181,224,0.5) 0%, rgba(196,181,224,0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "0s",
        }}
      />

      {/* Sage orb */}
      <div
        className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bottom-10 right-0 lg:right-20 animate-float-medium"
        style={{
          background:
            "radial-gradient(circle, rgba(168,197,160,0.45) 0%, rgba(168,197,160,0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "-3s",
        }}
      />

      {/* Warm cream orb */}
      <div
        className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full top-10 right-1/4 animate-float-fast"
        style={{
          background:
            "radial-gradient(circle, rgba(232,213,183,0.4) 0%, rgba(232,213,183,0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "-1.5s",
        }}
      />

      {/* Extra subtle glow center */}
      <div
        className="absolute w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full top-1/3 left-1/3 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(196,181,224,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream/80" />
    </div>
  );
}
