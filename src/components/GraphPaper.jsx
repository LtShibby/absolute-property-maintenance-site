export default function GraphPaper({ className = '', opacity = "0.1" }) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="grid" 
            width="20" 
            height="20" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 20 0 L 0 0 0 20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
} 