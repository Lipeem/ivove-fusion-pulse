
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import BiomorphicShapes from '@/components/BiomorphicShapes';
import PillarCard from '@/components/PillarCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const pillars = [
  {
    title: "Purposeful Innovation",
    description: "Innovation that creates meaningful impact and drives positive change in society.",
    icon: "🎯",
    color: "ivove-fuchsia",
    content: "Discover how technology can be directed towards solving real-world problems and creating value that transcends profit. Learn from leaders who have built purpose-driven innovations."
  },
  {
    title: "Courage to Transform",
    description: "Embracing bold changes and fearless adaptation in the face of uncertainty.",
    icon: "⚡",
    color: "ivove-blue",
    content: "Transformation requires courage to leave comfort zones and embrace uncertainty. Explore stories of individuals and organizations that have reinvented themselves through bold decisions."
  },
  {
    title: "Innovation and Career",
    description: "Reshaping professional paths through innovative thinking and creative approaches.",
    icon: "🚀",
    color: "ivove-fuchsia",
    content: "The future of work demands new skills and mindsets. Learn how to build a career that thrives on innovation and adapts to the changing landscape of technology and AI."
  },
  {
    title: "Creative Resilience",
    description: "Building strength through creativity and finding opportunities in challenges.",
    icon: "🌟",
    color: "ivove-blue",
    content: "Resilience isn't just about bouncing back—it's about bouncing forward with creativity. Discover how creative thinking can turn obstacles into opportunities for growth."
  },
  {
    title: "Balance that Liberates",
    description: "Achieving harmony between innovation, well-being, and personal fulfillment.",
    icon: "⚖️",
    color: "ivove-fuchsia",
    content: "True innovation comes from balanced minds and healthy environments. Explore how sustainable practices and well-being contribute to more effective and meaningful innovation."
  }
];

const Index = () => {
  const [selectedPillar, setSelectedPillar] = useState<typeof pillars[0] | null>(null);

  return (
    <div className="min-h-screen bg-ivove-dark text-white overflow-x-hidden">
      <BiomorphicShapes />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-6xl md:text-8xl font-space font-bold mb-8 bg-gradient-to-r from-white via-ivove-fuchsia to-ivove-blue bg-clip-text text-transparent animate-fade-in">
            Innovation moves us.<br />
            Overcoming transforms us.
          </h1>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-inter">
              Ivove is born as a space to collectively expand the meaning of innovation — not just through technology, 
              but in how we face challenges, shape careers, and pursue well-being.
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
            Five Pillars of Innovation
          </h2>
          <p className="text-center text-gray-300 mb-16 text-lg">
            Explore the foundational themes that drive meaningful change
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
            Where AI Meets 3D Printing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary intersection of artificial intelligence and additive manufacturing. 
            From generative design to smart fabrication, explore how these technologies are reshaping 
            the future of creation and innovation.
          </p>
        </div>
      </section>

      {/* Pillar Modal */}
      <Dialog open={!!selectedPillar} onOpenChange={() => setSelectedPillar(null)}>
        <DialogContent className="bg-ivove-dark border border-white/20 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-space font-bold text-ivove-fuchsia flex items-center gap-3">
              <span className="text-3xl">{selectedPillar?.icon}</span>
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
