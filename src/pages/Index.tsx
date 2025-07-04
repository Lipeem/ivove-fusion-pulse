
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import BiomorphicShapes from '@/components/BiomorphicShapes';
import PillarCard from '@/components/PillarCard';
import CountdownTimer from '@/components/CountdownTimer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Earth, Sun, Rocket, Moon, Satellite } from 'lucide-react';

const pillars = [
  {
    title: "Purposeful Innovation",
    description: "Innovation that creates meaningful impact and drives positive change in our world.",
    icon: Earth,
    color: "ivove-fuchsia",
    content: "Discover how technology can be directed towards solving real-world problems and creating value that transcends profit. Like caring for our home planet, learn from leaders who have built purpose-driven innovations that benefit humanity."
  },
  {
    title: "Courage to Transform",
    description: "Embracing bold changes with the energy needed to illuminate new possibilities.",
    icon: Sun,
    color: "ivove-blue",
    content: "Transformation requires the courage to harness immense energy and leave comfort zones. Like the Sun powers our solar system, explore stories of individuals and organizations that have reinvented themselves through bold, radiant decisions."
  },
  {
    title: "Innovation and Career",
    description: "Launching professional paths through innovative thinking and exploration of new frontiers.",
    icon: Rocket,
    color: "ivove-fuchsia",
    content: "The future of work demands new skills and mindsets for exploring uncharted territories. Learn how to build a career that launches beyond conventional boundaries and adapts to the expanding landscape of technology and AI."
  },
  {
    title: "Creative Resilience",
    description: "Building strength through creativity and finding light in the darkness of challenges.",
    icon: Moon,
    color: "ivove-blue",
    content: "Resilience isn't just about bouncing back—it's about finding new perspectives through cycles of change. Like the Moon guides us through darkness, discover how creative thinking can turn obstacles into opportunities for growth."
  },
  {
    title: "Balance that Liberates",
    description: "Achieving orbital harmony between innovation, well-being, and personal fulfillment.",
    icon: Satellite,
    color: "ivove-fuchsia",
    content: "True innovation comes from balanced systems and sustainable orbits. Like satellites maintain perfect equilibrium in space, explore how sustainable practices and well-being contribute to more effective and meaningful innovation."
  }
];

const Index = () => {
  const [selectedPillar, setSelectedPillar] = useState<typeof pillars[0] | null>(null);

  return (
    <div className="min-h-screen bg-ivove-dark text-white overflow-x-hidden">
      <CountdownTimer />
      <BiomorphicShapes />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-6 bg-gradient-to-r from-white via-ivove-fuchsia to-ivove-blue bg-clip-text text-transparent animate-fade-in">
            Innovation propels us forward.<br />
            Overcoming launches us beyond.
          </h1>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-inter">
              Ivove emerges as a cosmic space to collectively expand the meaning of innovation — not just through technology, 
              but in how we navigate challenges, chart new career paths, and orbit around well-being in our vast universe of possibilities.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-ivove-fuchsia to-ivove-blue rounded-full" />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-4 text-white">
            Five Celestial Pillars of Innovation
          </h2>
          <p className="text-center text-gray-300 mb-16 text-lg">
            Navigate the cosmic foundations that drive meaningful transformation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={index}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
                color={pillar.color}
                onClick={() => setSelectedPillar(pillar)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI & 3D Printing Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-8 text-white">
            Terraforming the Future: AI Meets 3D Printing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary intersection where artificial intelligence and additive manufacturing 
            converge to build new worlds. From generative design that mimics cosmic structures to smart fabrication 
            systems, explore how these technologies are reshaping our ability to create and colonize the future of innovation.
          </p>
        </div>
      </section>

      {/* Pillar Modal */}
      <Dialog open={!!selectedPillar} onOpenChange={() => setSelectedPillar(null)}>
        <DialogContent className="bg-ivove-dark border border-white/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-space font-bold text-ivove-fuchsia flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-ivove-fuchsia to-ivove-blue flex items-center justify-center">
                {selectedPillar?.icon && <selectedPillar.icon className="w-5 h-5 text-white" />}
              </div>
              {selectedPillar?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              {selectedPillar?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
