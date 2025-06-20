
const BiomorphicShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Neural Network Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 md:opacity-60"
        style={{
          backgroundImage: "url('/lovable-uploads/0dbee74c-e196-44ba-bb42-49d4136303d4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.3px) brightness(0.9) contrast(1.3)',
        }}
      />
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivove-dark/50 via-ivove-dark/30 to-ivove-dark/70" />
      
      {/* Original biomorphic shapes with enhanced visibility */}
      <div className="bio-shape bio-shape-1 opacity-30" />
      <div className="bio-shape bio-shape-2 opacity-25" />
      <div className="bio-shape bio-shape-3 opacity-35" />
      
      {/* Enhanced floating elements with more variety and intensity */}
      <div className="absolute top-20 left-1/4 w-4 h-4 bg-ivove-fuchsia rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-ivove-blue rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-5 h-5 border border-ivove-fuchsia rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }} />
      
      {/* Additional layer of floating elements */}
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-ivove-blue rounded-full animate-pulse opacity-70" style={{ animationDelay: '4s' }} />
      <div className="absolute top-3/4 right-1/5 w-2 h-2 bg-ivove-fuchsia/80 rounded-full animate-float" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/5 left-2/3 w-3 h-3 bg-ivove-blue/60 rounded-full animate-pulse-glow opacity-60" style={{ animationDelay: '6s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white rounded-full animate-float opacity-80" style={{ animationDelay: '7s' }} />
      
      {/* More dynamic floating elements */}
      <div className="absolute top-40 right-1/6 w-2 h-2 bg-ivove-fuchsia rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '8s' }} />
      <div className="absolute bottom-40 left-2/5 w-4 h-4 border border-ivove-blue rounded-full animate-float opacity-35" style={{ animationDelay: '9s' }} />
      <div className="absolute top-2/3 right-2/5 w-1 h-1 bg-ivove-blue rounded-full animate-pulse opacity-90" style={{ animationDelay: '10s' }} />
      <div className="absolute bottom-1/5 right-1/4 w-3 h-3 bg-white/70 rounded-full animate-float opacity-45" style={{ animationDelay: '11s' }} />
      
      {/* Extra scattered elements for more intensity */}
      <div className="absolute top-3/5 left-1/8 w-2 h-2 bg-ivove-fuchsia/70 rounded-full animate-pulse-glow opacity-55" style={{ animationDelay: '12s' }} />
      <div className="absolute bottom-2/5 right-1/8 w-1 h-1 bg-ivove-blue rounded-full animate-float opacity-75" style={{ animationDelay: '13s' }} />
      <div className="absolute top-1/6 right-3/5 w-2 h-2 border border-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '14s' }} />
      <div className="absolute bottom-3/5 left-3/4 w-3 h-3 bg-ivove-fuchsia/50 rounded-full animate-float opacity-50" style={{ animationDelay: '15s' }} />
    </div>
  );
};

export default BiomorphicShapes;
