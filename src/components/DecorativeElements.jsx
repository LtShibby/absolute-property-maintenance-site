export function Ruler({ className = '' }) {
  return (
    <div className={`absolute left-0 top-0 h-full w-8 bg-white/50 ${className}`}>
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="relative h-8 border-b border-gray-300"
        >
          <span className="absolute right-2 bottom-1 text-[10px] text-gray-400">
            {i * 5}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CompassRose({ className = '' }) {
  return (
    <div className={`absolute right-8 bottom-8 w-24 h-24 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
        {/* Add compass rose SVG path here */}
      </svg>
    </div>
  );
}

export function GridLines({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute left-0 top-0 w-full h-full border border-gray-200 opacity-20" />
      <div className="absolute left-1/2 top-0 w-px h-full bg-gray-200 opacity-20" />
      <div className="absolute left-0 top-1/2 w-full h-px bg-gray-200 opacity-20" />
    </div>
  );
} 