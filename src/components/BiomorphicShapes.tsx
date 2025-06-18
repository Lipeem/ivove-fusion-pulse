
const BiomorphicShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="bio-shape bio-shape-1" />
      <div className="bio-shape bio-shape-2" />
      <div className="bio-shape bio-shape-3" />
      
      {/* Additional floating elements */}
      <div className="absolute top-20 left-1/4 w-4 h-4 bg-ivove-fuchsia rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-ivove-blue rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-5 h-5 border border-ivove-fuchsia rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default BiomorphicShapes;
