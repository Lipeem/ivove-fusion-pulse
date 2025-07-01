
const BiomorphicShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Neural Network Background Image with stellar overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 md:opacity-40"
        style={{
          backgroundImage: "url('/lovable-uploads/0dbee74c-e196-44ba-bb42-49d4136303d4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.5px) brightness(0.6) contrast(1.1)',
        }}
      />
      
      {/* Cosmic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02D3F3]/10 via-transparent to-[#C400E9]/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#C400E9]/8 via-transparent to-[#02D3F3]/8" />
      
      {/* Floating Stars Field */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-1/5 left-1/6 w-1 h-1 bg-gradient-to-r from-[#02D3F3] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 right-1/5 w-0.5 h-0.5 bg-gradient-to-r from-[#C400E9] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-[#02D3F3] to-[#C400E9] rounded-full animate-cosmic-twinkle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-white/80 rounded-full animate-cosmic-twinkle" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/6 left-3/4 w-1 h-1 bg-gradient-to-r from-[#C400E9] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '8s' }} />
        <div className="absolute bottom-1/4 right-2/3 w-0.5 h-0.5 bg-gradient-to-r from-[#02D3F3] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '10s' }} />
        <div className="absolute top-3/5 left-1/8 w-1.5 h-1.5 bg-gradient-to-r from-white to-[#C400E9] rounded-full animate-cosmic-twinkle" style={{ animationDelay: '12s' }} />
        <div className="absolute bottom-1/6 right-1/8 w-0.5 h-0.5 bg-gradient-to-r from-[#02D3F3] to-[#C400E9] rounded-full animate-cosmic-twinkle" style={{ animationDelay: '14s' }} />
      </div>
      
      {/* Planet 1 - Large Blue Gas Giant */}
      <div className="absolute top-1/6 left-1/8 animate-cosmic-float opacity-40" style={{ animationDelay: '0s' }}>
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#02D3F3]/60 via-blue-400/40 to-[#C400E9]/50 rounded-full"></div>
          <div className="absolute inset-1 bg-gradient-to-tl from-blue-300/30 to-[#02D3F3]/40 rounded-full"></div>
          <div className="absolute inset-3 bg-gradient-radial from-white/20 to-transparent rounded-full"></div>
          {/* Atmospheric bands */}
          <div className="absolute inset-2 border-t border-blue-200/20 rounded-full"></div>
          <div className="absolute inset-4 border-t border-[#02D3F3]/15 rounded-full"></div>
          {/* Small moon */}
          <div className="absolute -top-6 -right-8 w-4 h-4 bg-gradient-to-r from-gray-300/60 to-white/60 rounded-full animate-satellite-orbit"></div>
        </div>
      </div>

      {/* Planet 2 - Purple Rocky Planet */}
      <div className="absolute top-2/5 right-1/6 animate-cosmic-drift opacity-45" style={{ animationDelay: '10s' }}>
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C400E9]/65 via-purple-500/45 to-pink-400/50 rounded-full"></div>
          <div className="absolute inset-1 bg-gradient-to-bl from-purple-400/35 to-[#C400E9]/45 rounded-full"></div>
          <div className="absolute inset-3 bg-gradient-radial from-white/25 to-transparent rounded-full"></div>
          {/* Surface craters */}
          <div className="absolute top-2 left-3 w-2 h-2 bg-purple-900/30 rounded-full"></div>
          <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-purple-800/25 rounded-full"></div>
          {/* Two small moons */}
          <div className="absolute -top-4 -left-6 w-3 h-3 bg-gradient-to-r from-gray-200/50 to-white/50 rounded-full animate-satellite-orbit" style={{ animationDelay: '5s' }}></div>
          <div className="absolute -bottom-5 -right-7 w-2.5 h-2.5 bg-gradient-to-r from-gray-300/45 to-white/45 rounded-full animate-satellite-orbit" style={{ animationDelay: '15s', animationDirection: 'reverse' }}></div>
        </div>
      </div>

      {/* Planet 3 - Ringed Planet (Saturn-like) */}
      <div className="absolute bottom-1/5 left-1/3 animate-cosmic-sway opacity-42" style={{ animationDelay: '20s' }}>
        <div className="relative w-22 h-22">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-orange-400/55 rounded-full"></div>
          <div className="absolute inset-1 bg-gradient-to-tr from-orange-300/40 to-yellow-200/40 rounded-full"></div>
          <div className="absolute inset-3 bg-gradient-radial from-white/30 to-transparent rounded-full"></div>
          {/* Ring system */}
          <div className="absolute -inset-4 border-2 border-orange-200/30 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-6 border border-orange-300/25 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-7 border border-yellow-200/20 rounded-full transform rotate-12"></div>
        </div>
      </div>

      {/* Planet 4 - Earth-like Planet */}
      <div className="absolute top-3/5 left-2/3 animate-cosmic-float opacity-38" style={{ animationDelay: '30s' }}>
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/55 via-green-400/45 to-blue-600/50 rounded-full"></div>
          <div className="absolute inset-1 bg-gradient-to-tl from-green-300/35 to-blue-400/40 rounded-full"></div>
          <div className="absolute inset-3 bg-gradient-radial from-white/20 to-transparent rounded-full"></div>
          {/* Continents */}
          <div className="absolute top-1 left-2 w-3 h-2 bg-green-600/40 rounded-sm"></div>
          <div className="absolute bottom-2 right-1 w-2 h-3 bg-green-700/35 rounded-sm"></div>
          {/* Moon */}
          <div className="absolute -top-3 -right-5 w-3 h-3 bg-gradient-to-r from-gray-300/60 to-white/60 rounded-full animate-satellite-orbit"></div>
        </div>
      </div>

      {/* Small Asteroid Belt */}
      <div className="absolute bottom-1/3 right-1/4 animate-cosmic-drift opacity-35" style={{ animationDelay: '40s' }}>
        <div className="w-3 h-3 bg-gradient-to-br from-gray-400/60 to-brown-400/50 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/5 animate-cosmic-float opacity-30" style={{ animationDelay: '45s' }}>
        <div className="w-2 h-2 bg-gradient-to-br from-gray-500/55 to-brown-500/45 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/6 animate-cosmic-sway opacity-32" style={{ animationDelay: '50s' }}>
        <div className="w-2.5 h-2.5 bg-gradient-to-br from-gray-300/50 to-brown-300/40 rounded-full"></div>
      </div>

      {/* Space Stations / Satellites */}
      <div className="absolute top-1/2 left-3/4 animate-satellite-drift opacity-45" style={{ animationDelay: '35s' }}>
        <div className="relative w-8 h-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#02D3F3]/70 to-[#C400E9]/70 rounded-sm"></div>
          <div className="absolute inset-0.5 bg-gradient-to-r from-white/50 to-[#02D3F3]/50 rounded-sm"></div>
          {/* Solar panels */}
          <div className="absolute -top-1 left-0 w-2 h-6 bg-gradient-to-b from-[#02D3F3]/50 to-transparent rounded-sm"></div>
          <div className="absolute -top-1 right-0 w-2 h-6 bg-gradient-to-b from-[#C400E9]/50 to-transparent rounded-sm"></div>
        </div>
      </div>

      <div className="absolute bottom-2/5 left-1/5 animate-satellite-drift opacity-40" style={{ animationDelay: '55s' }}>
        <div className="relative w-6 h-3">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300/60 to-white/60 rounded-sm"></div>
          <div className="absolute inset-0.5 bg-gradient-to-r from-white/40 to-gray-200/40 rounded-sm"></div>
          {/* Antenna */}
          <div className="absolute -top-2 left-1/2 w-0.5 h-4 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Distant Galaxies */}
      <div className="absolute top-1/8 right-1/8 w-32 h-32 opacity-25">
        <div className="absolute inset-0 bg-gradient-radial from-[#C400E9]/35 via-[#02D3F3]/25 to-transparent rounded-full animate-pulse-very-slow blur-lg"></div>
        <div className="absolute inset-6 bg-gradient-radial from-white/30 via-[#C400E9]/20 to-transparent rounded-full"></div>
        <div className="absolute inset-10 bg-gradient-radial from-[#02D3F3]/25 to-transparent rounded-full animate-cosmic-twinkle"></div>
        {/* Spiral arms */}
        <div className="absolute top-10 left-4 w-16 h-0.5 bg-gradient-to-r from-[#C400E9]/40 to-transparent rounded-full transform rotate-45 blur-sm animate-spin-very-slow"></div>
        <div className="absolute bottom-10 right-4 w-14 h-0.5 bg-gradient-to-l from-[#02D3F3]/35 to-transparent rounded-full transform -rotate-45 blur-sm animate-spin-very-slow"></div>
      </div>

      <div className="absolute bottom-1/8 left-1/12 w-28 h-28 opacity-22">
        <div className="absolute inset-0 bg-gradient-radial from-[#02D3F3]/32 via-[#C400E9]/22 to-transparent rounded-full animate-pulse-very-slow blur-lg" style={{ animationDelay: '25s' }}></div>
        <div className="absolute inset-5 bg-gradient-radial from-[#C400E9]/25 via-white/15 to-transparent rounded-full"></div>
        <div className="absolute inset-8 bg-gradient-radial from-white/22 to-transparent rounded-full"></div>
        {/* Spiral structure */}
        <div className="absolute top-8 left-2 w-12 h-0.5 bg-gradient-to-r from-[#02D3F3]/30 to-transparent rounded-full transform rotate-30 blur-sm animate-spin-very-slow" style={{ animationDelay: '15s' }}></div>
      </div>

      {/* Comets */}
      <div className="absolute top-4/5 right-2/5 animate-comet-trail opacity-35" style={{ animationDelay: '60s' }}>
        <div className="relative">
          <div className="w-3 h-3 bg-gradient-to-br from-[#02D3F3]/80 to-white/80 rounded-full"></div>
          <div className="absolute -right-12 top-0 w-16 h-0.5 bg-gradient-to-r from-[#C400E9]/50 via-[#02D3F3]/40 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="absolute bottom-3/5 left-1/4 animate-comet-trail opacity-30" style={{ animationDelay: '70s' }}>
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#C400E9]/75 to-white/75 rounded-full"></div>
          <div className="absolute -right-10 top-0 w-12 h-0.5 bg-gradient-to-r from-[#02D3F3]/45 via-white/35 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Nebula Clouds */}
      <div className="absolute top-1/3 left-1/2 w-48 h-48 opacity-18">
        <div className="absolute inset-0 bg-gradient-radial from-[#C400E9]/25 via-[#02D3F3]/15 to-transparent rounded-full animate-nebula-drift blur-2xl"></div>
        <div className="absolute inset-12 bg-gradient-radial from-white/20 via-[#C400E9]/12 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="absolute bottom-1/2 right-1/3 w-36 h-36 opacity-15">
        <div className="absolute inset-0 bg-gradient-radial from-[#02D3F3]/22 via-[#C400E9]/12 to-transparent rounded-full animate-nebula-drift blur-2xl" style={{ animationDelay: '30s' }}></div>
        <div className="absolute inset-8 bg-gradient-radial from-[#C400E9]/15 via-white/8 to-transparent rounded-full blur-xl"></div>
      </div>

      {/* Content readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivove-dark/60 via-ivove-dark/40 to-ivove-dark/50" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-ivove-dark/70 to-transparent" />
    </div>
  );
};

export default BiomorphicShapes;
