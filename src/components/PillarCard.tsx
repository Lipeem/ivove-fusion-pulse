
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  onClick: () => void;
}

const PillarCard = ({ title, description, icon, color, onClick }: PillarCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-${color} hover:shadow-lg hover:shadow-${color}/20 backdrop-blur-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CardContent className="p-8 text-center">
        <div className={`text-4xl mb-4 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-space font-semibold mb-3 text-white group-hover:text-${color} transition-colors`}>
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
        <div className={`mt-4 h-1 bg-gradient-to-r from-${color}/50 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </CardContent>
    </Card>
  );
};

export default PillarCard;
