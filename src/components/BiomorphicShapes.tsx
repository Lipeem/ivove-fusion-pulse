
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
      <div className="absolute inset-0 opacity-40">
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
      
      {/* SISTEMA PLANETÁRIO PRINCIPAL - Júpiter com Luas */}
      <div className="absolute top-32 left-1/3 animate-orbit-slow" style={{ animationDelay: '0s' }}>
        {/* Júpiter - Planeta gasoso com faixas */}
        <div className="relative w-16 h-16 rounded-full opacity-70 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-300/60 via-orange-500/60 via-yellow-600/60 to-orange-700/60 rounded-full"></div>
          <div className="absolute inset-1 bg-gradient-to-b from-orange-400/40 via-red-500/40 to-orange-800/40 rounded-full"></div>
          <div className="absolute top-4 left-2 right-2 h-1 bg-orange-200/30 rounded-full"></div>
          <div className="absolute top-8 left-3 right-3 h-0.5 bg-red-300/30 rounded-full"></div>
          <div className="absolute top-11 left-2 right-4 h-1 bg-yellow-300/30 rounded-full"></div>
          {/* Lua Europa */}
          <div className="absolute -top-2 -right-6 w-3 h-3 bg-gradient-to-br from-blue-200/60 to-blue-400/60 rounded-full animate-orbit-fast"></div>
          {/* Lua Io */}
          <div className="absolute -bottom-3 -left-7 w-2.5 h-2.5 bg-gradient-to-br from-yellow-200/60 to-yellow-500/60 rounded-full animate-orbit-medium" style={{ animationDelay: '10s' }}></div>
        </div>
      </div>

      {/* SISTEMA PLANETÁRIO SECUNDÁRIO - Saturno com Anéis */}
      <div className="absolute top-2/5 right-1/3 animate-orbit-medium" style={{ animationDelay: '5s' }}>
        <div className="relative w-12 h-12 opacity-65">
          {/* Saturno */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/60 via-yellow-400/60 to-yellow-600/60 rounded-full shadow-lg"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-yellow-300/40 to-yellow-500/40 rounded-full"></div>
          {/* Anéis de Saturno */}
          <div className="absolute inset-0 border-2 border-yellow-300/40 rounded-full transform rotate-12"></div>
          <div className="absolute inset-1 border border-yellow-400/30 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-1 border border-yellow-200/25 rounded-full transform rotate-12"></div>
          {/* Lua Titã */}
          <div className="absolute -top-4 right-2 w-2 h-2 bg-gradient-to-br from-orange-300/60 to-orange-500/60 rounded-full animate-orbit-fast" style={{ animationDelay: '20s' }}></div>
        </div>
      </div>

      {/* PLANETA TERRA - Sistema Terra-Lua */}
      <div className="absolute bottom-1/3 left-2/5 animate-orbit-slow" style={{ animationDelay: '10s' }}>
        <div className="relative w-10 h-10 opacity-70">
          {/* Terra */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/70 via-green-500/60 to-blue-600/70 rounded-full shadow-lg"></div>
          <div className="absolute top-1 left-1 w-2 h-2 bg-green-400/50 rounded-full"></div>
          <div className="absolute bottom-2 right-1 w-1.5 h-1.5 bg-green-500/50 rounded-full"></div>
          <div className="absolute top-3 right-2 w-1 h-1 bg-green-300/50 rounded-full"></div>
          {/* Lua da Terra */}
          <div className="absolute -top-3 -right-5 w-2.5 h-2.5 bg-gradient-to-br from-gray-200/60 to-gray-400/60 rounded-full animate-orbit-medium shadow-md">
            <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-gray-500/60 rounded-full"></div>
            <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-gray-600/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* PLANETA MARTE */}
      <div className="absolute bottom-1/4 right-2/5 animate-orbit-fast" style={{ animationDelay: '15s' }}>
        <div className="relative w-8 h-8 opacity-65">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/70 via-red-500/70 to-red-700/70 rounded-full shadow-lg"></div>
          <div className="absolute inset-0.5 bg-gradient-to-br from-red-300/50 to-red-600/50 rounded-full"></div>
          {/* Crateras marcianas */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-red-800/50 rounded-full"></div>
          <div className="absolute bottom-1 right-1.5 w-0.5 h-0.5 bg-red-900/50 rounded-full"></div>
          {/* Lua Fobos */}
          <div className="absolute -top-2 -right-4 w-1.5 h-1.5 bg-gradient-to-br from-gray-400/60 to-gray-600/60 rounded-full animate-orbit-fast" style={{ animationDelay: '25s' }}></div>
        </div>
      </div>

      {/* EXOPLANETAS DISTANTES */}
      <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-br from-purple-400/50 via-purple-600/50 to-indigo-700/50 rounded-full animate-orbit-medium opacity-55 shadow-lg" style={{ animationDelay: '30s' }}>
        <div className="absolute inset-0.5 bg-gradient-to-br from-purple-300/40 to-purple-500/40 rounded-full"></div>
      </div>

      <div className="absolute top-3/5 right-1/4 w-5 h-5 bg-gradient-to-br from-cyan-300/50 via-cyan-500/50 to-blue-600/50 rounded-full animate-orbit-slow opacity-55 shadow-lg" style={{ animationDelay: '35s' }}>
        <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-200/40 to-cyan-400/40 rounded-full"></div>
      </div>

      {/* ESTAÇÃO ESPACIAL E SATÉLITES */}
      <div className="absolute top-1/3 left-3/5 w-4 h-1 bg-gradient-to-r from-gray-300/60 to-gray-500/60 animate-orbit-fast opacity-60" style={{ animationDelay: '40s' }}>
        <div className="absolute -top-0.5 left-1 w-1 h-2 bg-gray-400/60"></div>
        <div className="absolute -top-0.5 right-1 w-1 h-2 bg-gray-400/60"></div>
      </div>

      <div className="absolute bottom-2/5 left-1/3 w-3 h-3 bg-gradient-to-br from-silver/50 to-gray-400/50 animate-orbit-medium opacity-55 shadow-md" style={{ animationDelay: '45s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-gray-300/30 rounded-sm transform rotate-45"></div>
      </div>

      {/* ASTEROIDES */}
      <div className="absolute top-3/5 right-3/5 w-2 h-2 bg-gradient-to-br from-gray-500/50 to-gray-700/50 animate-orbit-slow opacity-50 shadow-sm transform rotate-45" style={{ animationDelay: '50s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-br from-gray-400/50 to-gray-600/50 animate-orbit-fast opacity-50 shadow-sm" style={{ animationDelay: '55s' }}></div>

      {/* GALÁXIAS DISTANTES */}
      <div className="absolute top-1/4 right-1/3 w-12 h-12 opacity-25">
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/15 via-purple-600/10 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute inset-2 bg-gradient-radial from-pink-400/10 via-purple-500/8 to-transparent rounded-full"></div>
        <div className="absolute inset-4 bg-gradient-radial from-white/15 to-transparent rounded-full animate-twinkle"></div>
      </div>

      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/12 via-blue-500/8 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '15s' }}></div>
        <div className="absolute inset-2 bg-gradient-radial from-cyan-300/8 via-blue-400/6 to-transparent rounded-full"></div>
        <div className="absolute inset-3 bg-gradient-radial from-white/12 to-transparent rounded-full"></div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-14 h-14 opacity-15">
        <div className="absolute inset-0 bg-gradient-radial from-pink-400/10 via-purple-500/6 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '30s' }}></div>
        <div className="absolute inset-3 bg-gradient-radial from-pink-300/8 via-purple-400/5 to-transparent rounded-full"></div>
        <div className="absolute inset-5 bg-gradient-radial from-white/10 to-transparent rounded-full animate-twinkle" style={{ animationDelay: '10s' }}></div>
      </div>

      {/* ÓRBITAS PLANETÁRIAS */}
      <div className="absolute top-1/3 left-2/5 w-20 h-20 border border-ivove-fuchsia/20 rounded-full animate-spin-slow opacity-25" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-2/5 right-2/5 w-16 h-16 border border-ivove-blue/20 rounded-full animate-spin-reverse opacity-20" style={{ animationDelay: '30s' }} />
      <div className="absolute top-2/5 right-1/2 w-24 h-24 border border-purple-400/15 rounded-full animate-spin-slow opacity-15" style={{ animationDelay: '60s' }} />

      {/* COMETAS E METEOROS */}
      <div className="absolute top-1/5 left-1/4 w-1 h-12 bg-gradient-to-b from-white/50 via-ivove-fuchsia/40 to-transparent rounded-full animate-meteor opacity-40" style={{ animationDelay: '70s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-8 bg-gradient-to-b from-ivove-fuchsia/50 via-pink-400/40 to-transparent rounded-full animate-meteor opacity-35" style={{ animationDelay: '80s' }} />
      <div className="absolute top-3/5 left-3/5 w-0.5 h-6 bg-gradient-to-b from-ivove-blue/50 via-cyan-400/40 to-transparent rounded-full animate-meteor opacity-30" style={{ animationDelay: '90s' }} />
    </div>
  );
};

export default BiomorphicShapes;
