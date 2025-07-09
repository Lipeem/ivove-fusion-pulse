
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-07-16T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Timer reached zero - start dissipation animation
        setIsAnimatingOut(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 1500); // Wait for animation to complete
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-40 bg-ivove-dark/95 backdrop-blur-sm flex items-center justify-center transition-all duration-1500 ${
      isAnimatingOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      <div className={`text-center transform transition-all duration-1500 ${
        isAnimatingOut ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100'
      }`}>
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-ivove-fuchsia to-ivove-blue rounded-full flex items-center justify-center animate-pulse">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-space font-bold mb-4 bg-gradient-to-r from-white via-ivove-fuchsia to-ivove-blue bg-clip-text text-transparent">
            The biggest innovation event at GBC Curitiba is coming:
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-2xl md:text-4xl font-space font-bold text-white mb-2">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-inter">
                Dias
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-2xl md:text-4xl font-space font-bold text-white mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-inter">
                Horas
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-2xl md:text-4xl font-space font-bold text-white mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-inter">
                Minutos
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-2xl md:text-4xl font-space font-bold text-white mb-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-inter">
                Segundos
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-300 text-lg font-inter">
            IN01: Thank you for meeting me. I want to invite you on a journey of exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
