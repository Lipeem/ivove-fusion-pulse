
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
      
      {/* Abstract Stars Field */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/5 left-1/6 w-1 h-1 bg-gradient-to-r from-[#02D3F3] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 right-1/5 w-0.5 h-0.5 bg-gradient-to-r from-[#C400E9] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-[#02D3F3] to-[#C400E9] rounded-full animate-cosmic-twinkle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-white/80 rounded-full animate-cosmic-twinkle" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/6 left-3/4 w-1 h-1 bg-gradient-to-r from-[#C400E9] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '8s' }} />
        <div className="absolute bottom-1/4 right-2/3 w-0.5 h-0.5 bg-gradient-to-r from-[#02D3F3] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '10s' }} />
        <div className="absolute top-3/5 left-1/8 w-1.5 h-1.5 bg-gradient-to-r from-white to-[#C400E9] rounded-full animate-cosmic-twinkle" style={{ animationDelay: '12s' }} />
        <div className="absolute bottom-1/6 right-1/8 w-0.5 h-0.5 bg-gradient-to-r from-[#02D3F3] to-[#C400E9] rounded-full animate-cosmic-twinkle" style={{ animationDelay: '14s' }} />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/70 rounded-full animate-cosmic-twinkle" style={{ animationDelay: '16s' }} />
        <div className="absolute bottom-2/5 right-1/6 w-0.5 h-0.5 bg-gradient-to-r from-[#C400E9] to-white rounded-full animate-cosmic-twinkle" style={{ animationDelay: '18s' }} />
      </div>
      
      {/* Abstract Planet 1 - Large Artistic Sphere */}
      <div className="absolute top-1/5 left-1/6 animate-cosmic-float opacity-25" style={{ animationDelay: '0s' }}>
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#02D3F3]/40 via-[#02D3F3]/20 to-[#C400E9]/40 rounded-full blur-sm"></div>
          <div className="absolute inset-2 bg-gradient-to-tl from-[#C400E9]/30 to-[#02D3F3]/30 rounded-full"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
          {/* Abstract orbital ring */}
          <div className="absolute -inset-8 border border-[#02D3F3]/20 rounded-full animate-spin-very-slow"></div>
        </div>
      </div>

      {/* Abstract Planet 2 - Medium Cosmic Body */}
      <div className="absolute top-2/5 right-1/5 animate-cosmic-drift opacity-30" style={{ animationDelay: '10s' }}>
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C400E9]/50 via-transparent to-[#02D3F3]/50 rounded-full blur-sm"></div>
          <div className="absolute inset-1 bg-gradient-to-bl from-[#02D3F3]/40 to-[#C400E9]/40 rounded-full"></div>
          <div className="absolute inset-3 bg-gradient-radial from-white/30 to-transparent rounded-full"></div>
          {/* Small satellite */}
          <div className="absolute -top-4 -right-6 w-3 h-3 bg-gradient-to-r from-[#02D3F3]/60 to-white/60 rounded-full animate-satellite-orbit"></div>
        </div>
      </div>

      {/* Abstract Planet 3 - Ringed Planet */}
      <div className="absolute bottom-1/4 left-1/4 animate-cosmic-sway opacity-28" style={{ animationDelay: '20s' }}>
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#02D3F3]/45 to-[#C400E9]/45 rounded-full blur-sm"></div>
          <div className="absolute inset-1 bg-gradient-to-tr from-[#C400E9]/35 to-[#02D3F3]/35 rounded-full"></div>
          {/* Abstract rings */}
          <div className="absolute -inset-3 border-2 border-[#02D3F3]/25 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-5 border border-[#C400E9]/20 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-6 border border-white/15 rounded-full transform rotate-12"></div>
        </div>
      </div>

      {/* Small Cosmic Bodies */}
      <div className="absolute top-3/5 right-1/3 animate-cosmic-float opacity-35" style={{ animationDelay: '30s' }}>
        <div className="w-12 h-12 bg-gradient-to-br from-[#02D3F3]/50 to-[#C400E9]/50 rounded-full blur-sm"></div>
        <div className="absolute inset-1 bg-gradient-radial from-white/40 to-transparent rounded-full"></div>
      </div>

      <div className="absolute bottom-1/3 right-1/6 animate-cosmic-drift opacity-25" style={{ animationDelay: '40s' }}>
        <div className="w-16 h-16 bg-gradient-to-tl from-[#C400E9]/45 to-[#02D3F3]/45 rounded-full blur-sm"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
      </div>

      {/* Abstract Galaxies */}
      <div className="absolute top-1/8 right-1/8 w-28 h-28 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-[#C400E9]/30 via-[#02D3F3]/20 to-transparent rounded-full animate-pulse-very-slow blur-md"></div>
        <div className="absolute inset-4 bg-gradient-radial from-white/25 via-[#C400E9]/15 to-transparent rounded-full"></div>
        <div className="absolute inset-8 bg-gradient-radial from-[#02D3F3]/20 to-transparent rounded-full animate-cosmic-twinkle"></div>
        {/* Spiral arms */}
        <div className="absolute top-8 left-2 w-12 h-0.5 bg-gradient-to-r from-[#C400E9]/30 to-transparent rounded-full transform rotate-45 blur-sm"></div>
        <div className="absolute bottom-8 right-2 w-10 h-0.5 bg-gradient-to-l from-[#02D3F3]/30 to-transparent rounded-full transform -rotate-45 blur-sm"></div>
      </div>

      <div className="absolute bottom-1/8 left-1/8 w-24 h-24 opacity-18">
        <div className="absolute inset-0 bg-gradient-radial from-[#02D3F3]/28 via-[#C400E9]/18 to-transparent rounded-full animate-pulse-very-slow blur-md" style={{ animationDelay: '25s' }}></div>
        <div className="absolute inset-3 bg-gradient-radial from-[#C400E9]/20 via-white/12 to-transparent rounded-full"></div>
        <div className="absolute inset-6 bg-gradient-radial from-white/18 to-transparent rounded-full"></div>
      </div>

      {/* Satellite/Space Station */}
      <div className="absolute top-1/2 left-2/3 animate-satellite-drift opacity-30" style={{ animationDelay: '50s' }}>
        <div className="relative w-8 h-3">
          <div className="absolute inset-0 bg-gradient-to-r from-[#02D3F3]/60 to-[#C400E9]/60 rounded-sm blur-sm"></div>
          <div className="absolute inset-0.5 bg-gradient-to-r from-white/40 to-[#02D3F3]/40 rounded-sm"></div>
          {/* Solar panels */}
          <div className="absolute -top-1 left-0 w-2 h-5 bg-gradient-to-b from-[#02D3F3]/40 to-transparent rounded-sm blur-sm"></div>
          <div className="absolute -top-1 right-0 w-2 h-5 bg-gradient-to-b from-[#C400E9]/40 to-transparent rounded-sm blur-sm"></div>
        </div>
      </div>

      {/* Abstract Comets/Meteors */}
      <div className="absolute top-4/5 right-2/5 animate-comet-trail opacity-25" style={{ animationDelay: '60s' }}>
        <div className="relative">
          <div className="w-2 h-2 bg-gradient-to-br from-[#02D3F3]/70 to-white/70 rounded-full blur-sm"></div>
          <div className="absolute -right-8 top-0 w-12 h-0.5 bg-gradient-to-r from-[#C400E9]/40 via-[#02D3F3]/30 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      <div className="absolute bottom-2/5 left-1/3 animate-comet-trail opacity-20" style={{ animationDelay: '70s' }}>
        <div className="relative">
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#C400E9]/60 to-white/60 rounded-full blur-sm"></div>
          <div className="absolute -right-6 top-0 w-8 h-0.5 bg-gradient-to-r from-[#02D3F3]/35 via-white/25 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Subtle Nebula Clouds */}
      <div className="absolute top-1/3 left-1/2 w-40 h-40 opacity-15">
        <div className="absolute inset-0 bg-gradient-radial from-[#C400E9]/20 via-[#02D3F3]/10 to-transparent rounded-full animate-nebula-drift blur-xl"></div>
        <div className="absolute inset-8 bg-gradient-radial from-white/15 via-[#C400E9]/8 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="absolute bottom-1/2 right-1/2 w-32 h-32 opacity-12">
        <div className="absolute inset-0 bg-gradient-radial from-[#02D3F3]/18 via-[#C400E9]/8 to-transparent rounded-full animate-nebula-drift blur-xl" style={{ animationDelay: '30s' }}></div>
        <div className="absolute inset-6 bg-gradient-radial from-[#C400E9]/12 via-white/6 to-transparent rounded-full blur-lg"></div>
      </div>

      {/* Content readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivove-dark/60 via-ivove-dark/40 to-ivove-dark/50" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-ivove-dark/70 to-transparent" />
    </div>
  );
};

export default BiomorphicShapes;
