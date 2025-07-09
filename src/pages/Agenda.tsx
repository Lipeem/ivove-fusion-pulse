
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import BiomorphicShapes from '@/components/BiomorphicShapes';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Session {
  id: string;
  title: string;
  shortTitle: string;
  time: string;
  location: string;
  speaker: string;
  speakerImage?: string;
  description: string;
  pillar: string;
  pillarColor: string;
  day: string;
}

const sessions: Session[] = [
  {
    id: '1',
    title: 'Opening + (Title to be defined)',
    shortTitle: 'Opening Event',
    time: '2:00 PM',
    location: 'Online',
    speaker: 'Marcelo Figueiral',
    speakerImage: 'https://via.placeholder.com/40x40/666/fff?text=MF',
    description: 'Join us for the grand opening of Innoverse and discover the revolutionary potential of innovation in our universe. This session will set the tone for our journey through the cosmos of creativity and transformation.',
    pillar: 'Purposeful Innovation',
    pillarColor: 'bg-ivove-fuchsia',
    day: 'Day 1 - August 7'
  },
  {
    id: '2',
    title: '(Title to be defined)',
    shortTitle: 'Morning Session',
    time: '10:30 AM',
    location: 'Online',
    speaker: 'Professor Henrique',
    speakerImage: 'https://via.placeholder.com/40x40/666/fff?text=PH',
    description: 'Explore innovative approaches and methodologies that are reshaping our understanding of technology and human potential. Details and title to be confirmed.',
    pillar: 'Courage to Transform',
    pillarColor: 'bg-ivove-blue',
    day: 'Day 2 - August 14 (Morning)'
  },
  {
    id: '3',
    title: 'Resilience in Difficult Times',
    shortTitle: 'Resilience Workshop',
    time: '2:00 PM',
    location: 'Online',
    speaker: 'Ericsson Souza',
    speakerImage: 'https://via.placeholder.com/40x40/666/fff?text=ES',
    description: 'Discover strategies for building resilience and maintaining innovation momentum during challenging periods. Learn how to transform obstacles into opportunities for growth and breakthrough innovation.',
    pillar: 'Creative Resilience',
    pillarColor: 'bg-ivove-blue',
    day: 'Day 2 - August 14 (Afternoon)'
  },
  {
    id: '4',
    title: '3D Printing Workshop',
    shortTitle: '3D Printing Workshop',
    time: 'All Day',
    location: 'In-Person: Rooms to be defined',
    speaker: 'Speakers to be defined',
    speakerImage: 'https://via.placeholder.com/40x40/666/fff?text=3D',
    description: 'Hands-on workshop exploring the revolutionary world of 3D printing and additive manufacturing. Learn how these technologies are reshaping design, prototyping, and production across industries.',
    pillar: 'Innovation and Career',
    pillarColor: 'bg-ivove-fuchsia',
    day: 'Day 3 - August 19'
  },
  {
    id: '5',
    title: 'From Emotional Intelligence to Artificial Intelligence',
    shortTitle: 'EI to AI',
    time: '10:30 AM',
    location: 'Online',
    speaker: 'Fabrício Pupo',
    speakerImage: 'https://via.placeholder.com/40x40/666/fff?text=FP',
    description: 'Explore the fascinating connection between human emotional intelligence and artificial intelligence. Understand how these two forms of intelligence can work together to create more meaningful and impactful innovations.',
    pillar: 'Balance that Liberates',
    pillarColor: 'bg-ivove-fuchsia',
    day: 'Day 4 - August 21 (Morning)'
  },
  {
    id: '6',
    title: 'Closing: Zezinho Talk + Gralha Award',
    shortTitle: 'Closing Ceremony',
    time: '2:00 PM onwards',
    location: 'Church',
    speaker: 'Zezinho + Award Ceremony',
    speakerImage: 'https://via.placeholder.com/40x40/666/fff?text=Z+',
    description: 'Join us for the grand finale of Innoverse featuring an inspiring talk by Zezinho and the presentation of the prestigious Gralha Award. Celebrate the innovations and breakthroughs discovered during our cosmic journey.',
    pillar: 'Purposeful Innovation',
    pillarColor: 'bg-ivove-fuchsia',
    day: 'Day 4 - August 21 (Afternoon)'
  }
];

const Agenda = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [filterPillar, setFilterPillar] = useState<string>('All');
  const [filterDay, setFilterDay] = useState<string>('All');

  const pillars = ['All', 'Purposeful Innovation', 'Courage to Transform', 'Innovation and Career', 'Creative Resilience', 'Balance that Liberates'];
  const days = ['All', 'Day 1 - August 7', 'Day 2 - August 14 (Morning)', 'Day 2 - August 14 (Afternoon)', 'Day 3 - August 19', 'Day 4 - August 21 (Morning)', 'Day 4 - August 21 (Afternoon)'];

  const filteredSessions = sessions.filter(session => {
    const pillarMatch = filterPillar === 'All' || session.pillar === filterPillar;
    const dayMatch = filterDay === 'All' || session.day === filterDay;
    return pillarMatch && dayMatch;
  });

  return (
    <div className="min-h-screen bg-ivove-dark text-white">
      <BiomorphicShapes />
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        {/* Enhanced header section with better contrast */}
        <div className="text-center mb-12 relative">
          {/* Additional background for better text visibility */}
          <div className="absolute inset-0 bg-ivove-dark/40 backdrop-blur-sm rounded-2xl -m-8"></div>
          <div className="relative z-10 py-8">
            <h1 className="text-5xl md:text-6xl font-space font-bold mb-6 bg-gradient-to-r from-ivove-fuchsia to-ivove-blue bg-clip-text text-transparent drop-shadow-lg">
              Event Agenda
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium drop-shadow-md">
              Four days of immersive sessions exploring the intersection of AI, 3D printing, and human innovation
            </p>
          </div>
        </div>

        {/* Enhanced Filters with better visibility */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center relative z-10">
          <div className="bg-ivove-dark/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-white/90 self-center mr-2 font-medium">Filter by Pillar:</span>
              {pillars.map(pillar => (
                <button
                  key={pillar}
                  onClick={() => setFilterPillar(pillar)}
                  className={`px-3 py-1 rounded-full text-sm transition-all font-medium ${
                    filterPillar === pillar 
                      ? 'bg-ivove-fuchsia text-white shadow-lg' 
                      : 'bg-white/15 text-white hover:bg-white/25'
                  }`}
                >
                  {pillar}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-ivove-dark/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-white/90 self-center mr-2 font-medium">Filter by Day:</span>
              {days.slice(0, 4).map(day => (
                <button
                  key={day}
                  onClick={() => setFilterDay(day)}
                  className={`px-3 py-1 rounded-full text-sm transition-all font-medium ${
                    filterDay === day 
                      ? 'bg-ivove-blue text-white shadow-lg' 
                      : 'bg-white/15 text-white hover:bg-white/25'
                  }`}
                >
                  {day.includes('Day') ? day.split(' - ')[0] : day}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Download Button */}
        <div className="text-center mb-12 relative z-10">
          <div className="bg-ivove-dark/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 inline-block">
            <Button asChild className="bg-gradient-to-r from-ivove-fuchsia to-ivove-blue hover:from-ivove-fuchsia/80 hover:to-ivove-blue/80 shadow-xl">
              <a href="https://example.com/agenda.pdf" target="_blank" rel="noopener noreferrer">
                Download Full Agenda (PDF)
              </a>
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-ivove-fuchsia to-ivove-blue"></div>
          
          {filteredSessions.map((session, index) => (
            <div key={session.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-ivove-fuchsia to-ivove-blue rounded-full border-4 border-ivove-dark z-10"></div>
              
              {/* Session card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div 
                  className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-ivove-fuchsia hover:shadow-lg hover:shadow-ivove-fuchsia/20 backdrop-blur-sm"
                  onClick={() => setSelectedSession(session)}
                >
                  <div className="flex items-start gap-6">
                    {/* Content section */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={`${session.pillarColor} text-white text-xs`}>
                          {session.pillar}
                        </Badge>
                        <Badge variant="outline" className="text-gray-300 border-gray-500 text-xs">
                          {session.day}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-space font-semibold text-white hover:text-ivove-fuchsia transition-colors mb-3">
                        {session.shortTitle}
                      </h3>
                      
                      <div className="space-y-1 text-sm text-gray-300">
                        <p><span className="text-ivove-fuchsia">⏰</span> {session.time}</p>
                        <p><span className="text-ivove-blue">📍</span> {session.location}</p>
                        <p><span className="text-ivove-fuchsia">🎤</span> {session.speaker}</p>
                      </div>
                    </div>

                    {/* Speaker image section */}
                    <div className="flex-shrink-0">
                      <img 
                        src={session.speakerImage} 
                        alt={session.speaker}
                        className="w-20 h-20 object-cover rounded-lg border-2 border-ivove-fuchsia/50 shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Session Modal */}
      <Dialog open={!!selectedSession} onOpenChange={() => setSelectedSession(null)}>
        <DialogContent className="bg-ivove-dark border border-white/20 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-space font-bold text-ivove-fuchsia mb-4">
              {selectedSession?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Session details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-ivove-fuchsia mb-2">Session Details</h4>
                <div className="space-y-1 text-gray-300">
                  <p><span className="text-ivove-fuchsia">⏰</span> {selectedSession?.time}</p>
                  <p><span className="text-ivove-blue">📍</span> {selectedSession?.location}</p>
                  <p><span className="text-ivove-fuchsia">🎤</span> {selectedSession?.speaker}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-ivove-blue mb-2">Thematic Focus</h4>
                <Badge className={`${selectedSession?.pillarColor} text-white`}>
                  {selectedSession?.pillar}
                </Badge>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-white mb-3">About this Session</h4>
              <p className="text-gray-300 leading-relaxed">
                {selectedSession?.description}
              </p>
            </div>

            {/* Placeholder image */}
            <div className="bg-gradient-to-br from-ivove-fuchsia/20 to-ivove-blue/20 rounded-lg h-48 flex items-center justify-center">
              <p className="text-gray-400">AI-Generated Session Visual (Placeholder)</p>
            </div>

            {/* Registration button */}
            <div className="text-center">
              <Button asChild className="bg-gradient-to-r from-ivove-fuchsia to-ivove-blue hover:from-ivove-fuchsia/80 hover:to-ivove-blue/80 text-white px-8 py-3">
                <a href="https://example.com/register-session" target="_blank" rel="noopener noreferrer">
                  Register for this Session
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Agenda;
