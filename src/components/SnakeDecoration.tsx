export const SnakeDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Decorative circles/lanterns */}
      <div className="absolute top-10 left-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/20 blur-xl lantern-glow" />
      <div className="absolute top-20 right-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-accent/15 blur-2xl lantern-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary/15 blur-xl lantern-glow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-20 right-1/3 w-16 h-16 md:w-28 md:h-28 rounded-full bg-accent/10 blur-2xl lantern-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-foreground/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Corner decorations */}
      <svg
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 text-accent/10"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M0 0 Q50 20, 40 50 Q30 80, 0 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="20" r="8" fill="currentColor" />
      </svg>
      
      <svg
        className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 text-primary/10 rotate-90"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M0 0 Q50 20, 40 50 Q30 80, 0 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="20" r="8" fill="currentColor" />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 text-primary/10 -rotate-90"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M0 0 Q50 20, 40 50 Q30 80, 0 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="20" r="8" fill="currentColor" />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 text-accent/10 rotate-180"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M0 0 Q50 20, 40 50 Q30 80, 0 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="20" r="8" fill="currentColor" />
      </svg>
    </div>
  );
};
