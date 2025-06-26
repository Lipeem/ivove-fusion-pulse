

const BiomorphicShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Neural Network Background Image with stellar overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 md:opacity-70"
        style={{
          backgroundImage: "url('/lovable-uploads/0dbee74c-e196-44ba-bb42-49d4136303d4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.3px) brightness(0.8) contrast(1.2)',
        }}
      />
      
      {/* Stellar field overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 right-1/5 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/5 left-3/4 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '8s' }} />
        <div className="absolute bottom-1/3 right-2/3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '10s' }} />
        <div className="absolute top-2/3 left-1/8 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '12s' }} />
        <div className="absolute bottom-1/5 right-1/8 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '14s' }} />
      </div>
      
      {/* Nebula overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivove-fuchsia/5 via-transparent to-ivove-blue/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/3 via-transparent to-cyan-500/3" />
      
      {/* Adjusted gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivove-dark/70 via-ivove-dark/50 to-ivove-dark/60" />
      
      {/* Header area overlay */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-ivove-dark/80 to-transparent" />
      
      {/* Original biomorphic shapes with reduced opacity */}
      <div className="bio-shape bio-shape-1 opacity-15" />
      <div className="bio-shape bio-shape-2 opacity-10" />
      <div className="bio-shape bio-shape-3 opacity-20" />
      
      {/* Planetary elements repositioned away from edges - Large planets */}
      <div className="absolute top-32 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full animate-orbit-slow opacity-40 shadow-lg shadow-blue-400/10 border border-blue-300/20" style={{ animationDelay: '0s' }} />
      <div className="absolute top-2/5 right-1/3 w-8 h-8 bg-gradient-to-br from-red-400/30 to-orange-500/30 rounded-full animate-orbit-medium opacity-45 shadow-lg shadow-red-400/10 border border-red-300/20" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-1/3 left-2/5 w-10 h-10 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full animate-orbit-slow opacity-40 shadow-lg shadow-green-400/10 border border-green-300/20" style={{ animationDelay: '10s' }} />
      <div className="absolute bottom-1/4 right-2/5 w-6 h-6 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full animate-orbit-fast opacity-50 shadow-lg shadow-purple-400/10 border border-purple-300/20" style={{ animationDelay: '15s' }} />
      
      {/* Medium planets with moon-like craters */}
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-br from-gray-300/25 to-gray-500/25 rounded-full animate-orbit-medium opacity-35 shadow-md shadow-gray-400/10 relative">
        <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-gray-600/40 rounded-full" />
        <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-gray-600/40 rounded-full" />
      </div>
      <div className="absolute top-3/5 right-1/4 w-5 h-5 bg-gradient-to-br from-cyan-400/25 to-blue-500/25 rounded-full animate-orbit-slow opacity-35 shadow-md shadow-cyan-400/10 border border-cyan-300/15" style={{ animationDelay: '25s' }} />
      <div className="absolute top-1/3 left-3/5 w-3 h-3 bg-gradient-to-br from-indigo-400/25 to-purple-500/25 rounded-full animate-orbit-fast opacity-40 shadow-md shadow-indigo-400/10" style={{ animationDelay: '30s' }} />
      <div className="absolute bottom-2/5 left-1/3 w-4 h-4 bg-gradient-to-br from-rose-400/25 to-pink-500/25 rounded-full animate-orbit-medium opacity-40 shadow-md shadow-rose-400/10" style={{ animationDelay: '35s' }} />
      
      {/* Small satellites and asteroids with geometric shapes */}
      <div className="absolute top-1/3 right-2/5 w-2 h-2 bg-gradient-to-br from-gray-300/20 to-gray-500/20 rounded-sm animate-orbit-fast opacity-30 shadow-sm rotate-45" style={{ animationDelay: '40s' }} />
      <div className="absolute bottom-2/5 left-2/5 w-1.5 h-1.5 bg-gradient-to-br from-white/20 to-gray-200/20 rounded-full animate-orbit-medium opacity-35 shadow-sm" style={{ animationDelay: '45s' }} />
      <div className="absolute top-3/5 right-3/5 w-1.5 h-1.5 bg-gradient-to-br from-amber-300/20 to-yellow-400/20 rounded-full animate-orbit-slow opacity-40" style={{ animationDelay: '50s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full animate-orbit-fast opacity-30 shadow-sm" style={{ animationDelay: '55s' }} />
      
      {/* Orbital rings and paths - more centered */}
      <div className="absolute top-1/3 left-2/5 w-16 h-16 border border-ivove-fuchsia/15 rounded-full animate-spin-slow opacity-20" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-2/5 right-2/5 w-12 h-12 border border-ivove-blue/15 rounded-full animate-spin-reverse opacity-15" style={{ animationDelay: '30s' }} />
      <div className="absolute top-2/5 right-1/2 w-20 h-20 border border-purple-400/10 rounded-full animate-spin-slow opacity-12" style={{ animationDelay: '60s' }} />
      
      {/* Shooting stars/meteors */}
      <div className="absolute top-1/5 left-1/4 w-1 h-8 bg-gradient-to-b from-white/30 to-transparent rounded-full animate-meteor opacity-25" style={{ animationDelay: '70s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-6 bg-gradient-to-b from-ivove-fuchsia/30 to-transparent rounded-full animate-meteor opacity-30" style={{ animationDelay: '80s' }} />
      <div className="absolute top-3/5 left-3/5 w-0.5 h-4 bg-gradient-to-b from-ivove-blue/30 to-transparent rounded-full animate-meteor opacity-25" style={{ animationDelay: '90s' }} />
      
      {/* Distant galaxies and nebulae - more centered */}
      <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gradient-radial from-purple-400/8 to-transparent rounded-full animate-pulse-slow opacity-20" />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-gradient-radial from-cyan-400/8 to-transparent rounded-full animate-pulse-slow opacity-15" style={{ animationDelay: '15s' }} />
      <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-gradient-radial from-pink-400/6 to-transparent rounded-full animate-pulse-slow opacity-12" style={{ animationDelay: '30s' }} />
    </div>
  );
};

export default BiomorphicShapes;

