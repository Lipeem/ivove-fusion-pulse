
const BiomorphicShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Neural Network Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 md:opacity-40"
        style={{
          backgroundImage: "url('/lovable-uploads/0dbee74c-e196-44ba-bb42-49d4136303d4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.5px) brightness(0.7) contrast(1.1)',
        }}
      />
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivove-dark/60 via-ivove-dark/40 to-ivove-dark/80" />
      
      {/* Original biomorphic shapes with reduced opacity */}
      <div className="bio-shape bio-shape-1 opacity-20" />
      <div className="bio-shape bio-shape-2 opacity-15" />
      <div className="bio-shape bio-shape-3 opacity-25" />
      
      {/* Enhanced floating elements that complement the neural network theme */}
      <div className="absolute top-20 left-1/4 w-4 h-4 bg-ivove-fuchsia rounded-full animate-float opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-ivove-blue rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse-glow opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-5 h-5 border border-ivove-fuchsia rounded-full animate-float opacity-25" style={{ animationDelay: '3s' }} />
      
      {/* Additional neural-inspired elements */}
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-ivove-blue rounded-full animate-pulse opacity-50" style={{ animationDelay: '4s' }} />
      <div className="absolute top-3/4 right-1/5 w-2 h-2 bg-ivove-fuchsia/60 rounded-full animate-float" style={{ animationDelay: '5s' }} />
    </div>
  );
};

export default BiomorphicShapes;
