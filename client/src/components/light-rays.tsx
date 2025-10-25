export default function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="light-rays-container">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              '--ray-angle': `${i * 30}deg`,
              animationDelay: `${i * 0.2}s`
            } as React.CSSProperties}
          />
        ))}
      </div>
      <style>{`
        .light-rays-container {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200%;
          height: 100%;
        }
        
        .light-ray {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.05) 30%,
            transparent 70%
          );
          transform-origin: top center;
          transform: translateX(-50%) rotate(var(--ray-angle));
          animation: pulse-ray 4s ease-in-out infinite;
          opacity: 0.6;
        }
        
        @keyframes pulse-ray {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
