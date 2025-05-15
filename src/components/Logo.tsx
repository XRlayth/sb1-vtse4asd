import React from 'react';
import { Dumbbell } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Dumbbell className="w-8 h-8 text-red-600 mr-2" strokeWidth={2.5} />
      <span className="text-xl font-bold tracking-tight">ERYK PUZIO</span>
    </div>
  );
};

export default Logo;