export function LLMSecurityIcon() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* AI Brain with Shield */}
      <circle cx="100" cy="100" r="60" fill="#F9EEEE" stroke="#A61B1B" strokeWidth="2"/>

      {/* Neural network nodes */}
      <circle cx="80" cy="80" r="8" fill="#A61B1B"/>
      <circle cx="120" cy="80" r="8" fill="#A61B1B"/>
      <circle cx="100" cy="110" r="8" fill="#A61B1B"/>
      <circle cx="70" cy="110" r="6" fill="#8B1A1A"/>
      <circle cx="130" cy="110" r="6" fill="#8B1A1A"/>

      {/* Neural connections */}
      <line x1="80" y1="80" x2="100" y2="110" stroke="#A61B1B" strokeWidth="2" opacity="0.6"/>
      <line x1="120" y1="80" x2="100" y2="110" stroke="#A61B1B" strokeWidth="2" opacity="0.6"/>
      <line x1="80" y1="80" x2="70" y2="110" stroke="#A61B1B" strokeWidth="1.5" opacity="0.4"/>
      <line x1="120" y1="80" x2="130" y2="110" stroke="#A61B1B" strokeWidth="1.5" opacity="0.4"/>
      <line x1="80" y1="80" x2="120" y2="80" stroke="#A61B1B" strokeWidth="1.5" opacity="0.4"/>

      {/* Shield overlay */}
      <path d="M100 55 L115 60 L115 80 C115 90 110 95 100 100 C90 95 85 90 85 80 L85 60 Z"
            fill="#A61B1B" opacity="0.9"/>
      <path d="M95 75 L98 80 L105 70" stroke="white" strokeWidth="2.5" strokeLinecap="round"
            strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function CognitiveSecurityIcon() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Human head silhouette with information flow */}
      <ellipse cx="100" cy="90" rx="50" ry="60" fill="#F9EEEE" stroke="#A61B1B" strokeWidth="2"/>

      {/* Brain representation */}
      <path d="M80 70 Q75 85 80 95 Q85 90 90 95 Q95 85 100 90 Q105 85 110 90 Q115 85 120 95 Q125 85 120 70"
            stroke="#A61B1B" strokeWidth="2" fill="none"/>

      {/* Information streams - true/false indicators */}
      <g opacity="0.8">
        {/* Incoming info - mixed signals */}
        <circle cx="60" cy="100" r="4" fill="#A61B1B"/>
        <circle cx="50" cy="110" r="4" fill="#8B1A1A"/>
        <circle cx="55" cy="125" r="4" fill="#A61B1B"/>

        {/* Lines showing flow */}
        <line x1="60" y1="100" x2="75" y2="95" stroke="#A61B1B" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="50" y1="110" x2="70" y2="105" stroke="#8B1A1A" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="55" y1="125" x2="73" y2="115" stroke="#A61B1B" strokeWidth="1.5" strokeDasharray="3 2"/>
      </g>

      {/* Verification shield */}
      <rect x="85" y="110" width="30" height="35" rx="3" fill="#A61B1B" opacity="0.9"/>
      <path d="M93 125 L97 130 L107 118" stroke="white" strokeWidth="2.5" strokeLinecap="round"
            strokeLinejoin="round" fill="none"/>

      {/* Eye for detection */}
      <ellipse cx="100" cy="80" rx="12" ry="8" fill="white" stroke="#A61B1B" strokeWidth="1.5"/>
      <circle cx="100" cy="80" r="4" fill="#A61B1B"/>
    </svg>
  );
}

export function PostQuantumIcon() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Quantum bit representation with lock */}
      <circle cx="100" cy="100" r="55" fill="#F9EEEE" stroke="#A61B1B" strokeWidth="2"/>

      {/* Quantum superposition - orbital paths */}
      <ellipse cx="100" cy="100" rx="45" ry="20" stroke="#A61B1B" strokeWidth="1.5"
               opacity="0.6" transform="rotate(0 100 100)"/>
      <ellipse cx="100" cy="100" rx="45" ry="20" stroke="#A61B1B" strokeWidth="1.5"
               opacity="0.6" transform="rotate(60 100 100)"/>
      <ellipse cx="100" cy="100" rx="45" ry="20" stroke="#A61B1B" strokeWidth="1.5"
               opacity="0.6" transform="rotate(120 100 100)"/>

      {/* Center quantum particle */}
      <circle cx="100" cy="100" r="8" fill="#A61B1B"/>
      <circle cx="100" cy="100" r="12" fill="none" stroke="#A61B1B" strokeWidth="1" opacity="0.4"/>

      {/* Lock symbol - representing cryptography */}
      <rect x="88" y="85" width="24" height="20" rx="2" fill="#8B1A1A"/>
      <path d="M92 85 V80 C92 75 95 72 100 72 C105 72 108 75 108 80 V85"
            stroke="#8B1A1A" strokeWidth="3" fill="none"/>
      <circle cx="100" cy="95" r="2.5" fill="white"/>

      {/* Key particles at orbit intersections */}
      <circle cx="145" cy="100" r="4" fill="#A61B1B" opacity="0.7"/>
      <circle cx="55" cy="100" r="4" fill="#A61B1B" opacity="0.7"/>
      <circle cx="122" cy="131" r="4" fill="#A61B1B" opacity="0.7"/>
      <circle cx="78" cy="69" r="4" fill="#A61B1B" opacity="0.7"/>
    </svg>
  );
}
