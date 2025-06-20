const BiomorphicShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Neural Network Background Image - More visible and clear */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 md:opacity-70"
        style={{
          backgroundImage: "url('/lovable-uploads/0dbee74c-e196-44ba-bb42-49d4136303d4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.3px) brightness(0.8) contrast(1.2)',
        }}
      />
      
      {/* Adjusted gradient overlay for better text readability while keeping image visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivove-dark/70 via-ivove-dark/50 to-ivove-dark/60" />
      
      {/* Header area overlay - lighter for better image visibility */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-ivove-dark/80 to-transparent" />
      
      {/* Original biomorphic shapes with adjusted opacity */}
      <div className="bio-shape bio-shape-1 opacity-25" />
      <div className="bio-shape bio-shape-2 opacity-20" />
      <div className="bio-shape bio-shape-3 opacity-30" />
      
      {/* Enhanced floating elements with more variety and colors */}
      <div className="absolute top-20 left-1/4 w-4 h-4 bg-ivove-fuchsia rounded-full animate-float opacity-70" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-ivove-blue rounded-full animate-float opacity-85" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse-glow opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-5 h-5 border border-ivove-fuchsia rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />
      
      {/* Additional floating elements with more colors */}
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-ivove-blue rounded-full animate-pulse opacity-80" style={{ animationDelay: '4s' }} />
      <div className="absolute top-3/4 right-1/5 w-2 h-2 bg-ivove-fuchsia/90 rounded-full animate-float" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/5 left-2/3 w-3 h-3 bg-ivove-blue/70 rounded-full animate-pulse-glow opacity-70" style={{ animationDelay: '6s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white rounded-full animate-float opacity-90" style={{ animationDelay: '7s' }} />
      
      {/* More dynamic floating elements */}
      <div className="absolute top-40 right-1/6 w-2 h-2 bg-ivove-fuchsia rounded-full animate-pulse-glow opacity-60" style={{ animationDelay: '8s' }} />
      <div className="absolute bottom-40 left-2/5 w-4 h-4 border border-ivove-blue rounded-full animate-float opacity-45" style={{ animationDelay: '9s' }} />
      <div className="absolute top-2/3 right-2/5 w-1 h-1 bg-ivove-blue rounded-full animate-pulse opacity-95" style={{ animationDelay: '10s' }} />
      <div className="absolute bottom-1/5 right-1/4 w-3 h-3 bg-white/80 rounded-full animate-float opacity-55" style={{ animationDelay: '11s' }} />
      
      {/* Extra scattered elements for more intensity */}
      <div className="absolute top-3/5 left-1/8 w-2 h-2 bg-ivove-fuchsia/80 rounded-full animate-pulse-glow opacity-65" style={{ animationDelay: '12s' }} />
      <div className="absolute bottom-2/5 right-1/8 w-1 h-1 bg-ivove-blue rounded-full animate-float opacity-85" style={{ animationDelay: '13s' }} />
      <div className="absolute top-1/6 right-3/5 w-2 h-2 border border-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '14s' }} />
      <div className="absolute bottom-3/5 left-3/4 w-3 h-3 bg-ivove-fuchsia/60 rounded-full animate-float opacity-60" style={{ animationDelay: '15s' }} />
      
      {/* New colorful floating elements with various shapes and sizes */}
      <div className="absolute top-10 right-2/3 w-6 h-6 border-2 border-ivove-fuchsia/60 rounded-full animate-float opacity-40" style={{ animationDelay: '16s' }} />
      <div className="absolute top-1/4 left-1/12 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '17s' }} />
      <div className="absolute bottom-10 left-2/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse-glow opacity-60" style={{ animationDelay: '18s' }} />
      <div className="absolute top-3/4 left-3/5 w-4 h-4 border border-cyan-400 rounded-full animate-float opacity-45" style={{ animationDelay: '19s' }} />
      <div className="absolute bottom-1/2 right-1/12 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '20s' }} />
      
      {/* More varied floating elements */}
      <div className="absolute top-1/8 left-1/2 w-3 h-3 bg-green-400/70 rounded-full animate-float opacity-55" style={{ animationDelay: '21s' }} />
      <div className="absolute bottom-1/8 right-1/2 w-2 h-2 border border-orange-400 rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '22s' }} />
      <div className="absolute top-5/6 left-1/6 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-75" style={{ animationDelay: '23s' }} />
      <div className="absolute bottom-5/6 right-1/6 w-5 h-5 border-2 border-blue-400/50 rounded-full animate-float opacity-35" style={{ animationDelay: '24s' }} />
      <div className="absolute top-2/5 right-4/5 w-2 h-2 bg-teal-400 rounded-full animate-pulse-glow opacity-65" style={{ animationDelay: '25s' }} />
      
      {/* Additional micro elements for enhanced dynamics */}
      <div className="absolute top-1/7 left-4/5 w-1 h-1 bg-violet-400 rounded-full animate-float opacity-70" style={{ animationDelay: '26s' }} />
      <div className="absolute bottom-1/7 left-4/5 w-1 h-1 bg-amber-400 rounded-full animate-pulse opacity-65" style={{ animationDelay: '27s' }} />
      <div className="absolute top-4/5 right-3/4 w-2 h-2 border border-lime-400 rounded-full animate-pulse-glow opacity-45" style={{ animationDelay: '28s' }} />
      <div className="absolute bottom-4/5 left-1/4 w-3 h-3 bg-rose-400/60 rounded-full animate-float opacity-50" style={{ animationDelay: '29s' }} />
      <div className="absolute top-1/12 right-1/12 w-1 h-1 bg-sky-400 rounded-full animate-pulse opacity-85" style={{ animationDelay: '30s' }} />
    </div>
  );
};

export default BiomorphicShapes;
