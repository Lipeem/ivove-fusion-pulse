
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
      
      {/* PLANETA TERRA - Sistema Terra-Lua */}
      <div className="absolute top-1/4 left-1/4 animate-orbit-slow opacity-75" style={{ animationDelay: '0s' }}>
        <div className="relative w-20 h-20">
          {/* Terra - Base azul com continentes */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 via-blue-500/80 to-blue-700/80 rounded-full shadow-2xl"></div>
          {/* Atmosfera */}
          <div className="absolute -inset-1 bg-gradient-to-br from-sky-300/20 via-transparent to-transparent rounded-full"></div>
          {/* Continentes verdes */}
          <div className="absolute top-2 left-3 w-6 h-4 bg-green-500/70 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-3 right-2 w-4 h-3 bg-green-600/70 rounded-full"></div>
          <div className="absolute top-6 right-4 w-3 h-2 bg-green-400/70 rounded-full"></div>
          <div className="absolute bottom-6 left-4 w-2 h-2 bg-green-500/70 rounded-full"></div>
          {/* Nuvens */}
          <div className="absolute top-1 left-6 w-3 h-1 bg-white/40 rounded-full"></div>
          <div className="absolute top-8 left-2 w-4 h-1 bg-white/30 rounded-full"></div>
          
          {/* Lua da Terra */}
          <div className="absolute -top-6 -right-8 w-6 h-6 bg-gradient-to-br from-gray-200/70 to-gray-500/70 rounded-full animate-orbit-medium shadow-lg">
            {/* Crateras lunares */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-gray-600/60 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-gray-700/60 rounded-full"></div>
            <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-gray-600/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* PLANETA JÚPITER com Luas */}
      <div className="absolute top-1/3 right-1/4 animate-orbit-slow opacity-80" style={{ animationDelay: '10s' }}>
        <div className="relative w-24 h-24">
          {/* Júpiter - Planeta gasoso com faixas características */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-300/80 via-orange-500/80 via-red-500/80 to-orange-700/80 rounded-full shadow-2xl"></div>
          {/* Faixas de Júpiter */}
          <div className="absolute top-3 left-1 right-1 h-1.5 bg-orange-200/50 rounded-full"></div>
          <div className="absolute top-8 left-2 right-2 h-1 bg-red-400/50 rounded-full"></div>
          <div className="absolute top-12 left-1 right-3 h-1.5 bg-yellow-400/50 rounded-full"></div>
          <div className="absolute top-16 left-2 right-1 h-1 bg-orange-600/50 rounded-full"></div>
          {/* Grande Mancha Vermelha */}
          <div className="absolute top-10 right-3 w-3 h-2 bg-red-600/70 rounded-full"></div>
          
          {/* Lua Europa (azul-gelo) */}
          <div className="absolute -top-4 -right-10 w-4 h-4 bg-gradient-to-br from-blue-100/70 to-blue-300/70 rounded-full animate-orbit-fast">
            <div className="absolute inset-0.5 bg-gradient-to-br from-white/30 to-blue-200/30 rounded-full"></div>
          </div>
          
          {/* Lua Io (vulcânica) */}
          <div className="absolute -bottom-5 -left-10 w-3.5 h-3.5 bg-gradient-to-br from-yellow-300/70 to-orange-500/70 rounded-full animate-orbit-medium" style={{ animationDelay: '15s' }}>
            <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-red-500/70 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* PLANETA SATURNO com Anéis */}
      <div className="absolute bottom-1/3 left-1/3 animate-orbit-medium opacity-75" style={{ animationDelay: '20s' }}>
        <div className="relative w-18 h-18">
          {/* Saturno */}
          <div className="absolute inset-0 w-18 h-18 bg-gradient-to-br from-yellow-200/80 via-yellow-400/80 to-yellow-600/80 rounded-full shadow-xl"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-yellow-300/50 to-yellow-500/50 rounded-full"></div>
          
          {/* Anéis de Saturno - múltiplos anéis com diferentes opacidades */}
          <div className="absolute -inset-2 w-22 h-22 border-2 border-yellow-300/60 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-1 w-20 h-20 border border-yellow-400/50 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-3 w-24 h-24 border border-yellow-200/40 rounded-full transform rotate-12"></div>
          <div className="absolute -inset-4 w-26 h-26 border border-yellow-100/30 rounded-full transform rotate-12"></div>
          
          {/* Lua Titã */}
          <div className="absolute -top-6 right-4 w-3 h-3 bg-gradient-to-br from-orange-200/70 to-orange-400/70 rounded-full animate-orbit-fast" style={{ animationDelay: '25s' }}>
            <div className="absolute inset-0.5 bg-orange-300/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* PLANETA MARTE */}
      <div className="absolute bottom-1/4 right-1/3 animate-orbit-fast opacity-70" style={{ animationDelay: '30s' }}>
        <div className="relative w-14 h-14">
          {/* Marte - Planeta vermelho */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/80 via-red-500/80 to-red-700/80 rounded-full shadow-xl"></div>
          <div className="absolute inset-0.5 bg-gradient-to-br from-red-300/50 to-red-600/50 rounded-full"></div>
          
          {/* Características marcianas */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-red-800/60 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-red-900/60 rounded-full"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-orange-600/60 rounded-full"></div>
          {/* Calotas polares */}
          <div className="absolute top-0 left-2 right-2 h-1 bg-white/50 rounded-full"></div>
          <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-white/40 rounded-full"></div>
          
          {/* Lua Fobos */}
          <div className="absolute -top-3 -right-6 w-2 h-2 bg-gradient-to-br from-gray-400/70 to-gray-600/70 rounded-full animate-orbit-fast" style={{ animationDelay: '35s' }}></div>
        </div>
      </div>

      {/* EXOPLANETAS DISTANTES */}
      <div className="absolute top-3/5 left-1/5 animate-orbit-medium opacity-65" style={{ animationDelay: '40s' }}>
        <div className="relative w-12 h-12">
          {/* Planeta rochoso alienígena */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/70 via-purple-600/70 to-indigo-700/70 rounded-full shadow-lg"></div>
          <div className="absolute inset-0.5 bg-gradient-to-br from-purple-300/40 to-purple-500/40 rounded-full"></div>
          {/* Características alienígenas */}
          <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-purple-800/60 rounded-full"></div>
          <div className="absolute bottom-2 right-1 w-1 h-1 bg-indigo-800/60 rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/5 animate-orbit-slow opacity-60" style={{ animationDelay: '45s' }}>
        <div className="relative w-10 h-10">
          {/* Planeta oceânico */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/70 via-cyan-500/70 to-blue-600/70 rounded-full shadow-lg"></div>
          <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-200/40 to-cyan-400/40 rounded-full"></div>
          {/* Padrões oceânicos */}
          <div className="absolute top-2 left-1 w-2 h-1 bg-blue-700/50 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-1.5 h-0.5 bg-blue-800/50 rounded-full"></div>
        </div>
      </div>

      {/* GALÁXIAS DISTANTES */}
      <div className="absolute top-1/6 right-1/6 w-16 h-16 opacity-40">
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/20 via-purple-600/15 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute inset-2 bg-gradient-radial from-pink-400/15 via-purple-500/10 to-transparent rounded-full"></div>
        <div className="absolute inset-4 bg-gradient-radial from-white/20 to-transparent rounded-full animate-twinkle"></div>
        {/* Braços espirais */}
        <div className="absolute top-6 left-2 w-8 h-0.5 bg-purple-400/25 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-6 right-2 w-6 h-0.5 bg-pink-400/25 rounded-full transform -rotate-45"></div>
      </div>

      <div className="absolute bottom-1/6 left-1/6 w-14 h-14 opacity-35">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/18 via-blue-500/12 to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '20s' }}></div>
        <div className="absolute inset-2 bg-gradient-radial from-cyan-300/12 via-blue-400/8 to-transparent rounded-full"></div>
        <div className="absolute inset-3 bg-gradient-radial from-white/15 to-transparent rounded-full"></div>
      </div>

      {/* ESTAÇÃO ESPACIAL */}
      <div className="absolute top-2/5 left-3/5 animate-orbit-fast opacity-70" style={{ animationDelay: '50s' }}>
        <div className="relative w-6 h-2">
          {/* Módulo central */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300/80 to-gray-500/80 rounded-sm shadow-md"></div>
          {/* Painéis solares */}
          <div className="absolute -top-1 left-0 w-1.5 h-4 bg-blue-900/60 rounded-sm"></div>
          <div className="absolute -top-1 right-0 w-1.5 h-4 bg-blue-900/60 rounded-sm"></div>
          {/* Antenas */}
          <div className="absolute -top-2 left-2 w-0.5 h-2 bg-gray-400/80"></div>
          <div className="absolute -bottom-2 right-2 w-0.5 h-2 bg-gray-400/80"></div>
        </div>
      </div>

      {/* ASTEROIDES E COMETAS */}
      <div className="absolute top-4/5 right-2/5 animate-orbit-slow opacity-55" style={{ animationDelay: '55s' }}>
        <div className="w-3 h-3 bg-gradient-to-br from-gray-500/70 to-gray-700/70 shadow-sm transform rotate-45 rounded-sm">
          <div className="absolute inset-0.5 bg-gray-600/50 rounded-sm"></div>
        </div>
      </div>

      <div className="absolute bottom-2/5 left-2/5 animate-orbit-fast opacity-50" style={{ animationDelay: '60s' }}>
        <div className="relative">
          {/* Núcleo do cometa */}
          <div className="w-2 h-2 bg-gradient-to-br from-gray-400/70 to-gray-600/70 rounded-full"></div>
          {/* Cauda do cometa */}
          <div className="absolute -right-6 top-0 w-8 h-0.5 bg-gradient-to-r from-white/50 via-blue-300/30 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* ÓRBITAS PLANETÁRIAS SUTIS */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-ivove-fuchsia/15 rounded-full animate-spin-slow opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border border-ivove-blue/15 rounded-full animate-spin-reverse opacity-15" />
      <div className="absolute top-1/2 left-1/3 w-36 h-36 border border-purple-400/10 rounded-full animate-spin-slow opacity-10" />
    </div>
  );
};

export default BiomorphicShapes;
