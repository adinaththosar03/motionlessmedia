import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ShowcaseSectionProps {
  onOpenBooking?: () => void;
}

type CategoryType = 'All' | '16:9 Films' | 'Cafes & Restro' | 'Health Care' | 'Gym & Fitness' | 'Commercial';

interface ReelProject {
  id: string;
  category: '16:9 Films' | 'Cafes & Restro' | 'Health Care' | 'Gym & Fitness' | 'Commercial';
  title: string;
  videoSrc: string;
  fallbackSrc?: string;
  poster: string;
  aspectRatio?: '9/16' | '16/9';
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('All');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filterTabs: CategoryType[] = [
    'All',
    '16:9 Films',
    'Cafes & Restro',
    'Health Care',
    'Gym & Fitness',
    'Commercial',
  ];

  const allReels: ReelProject[] = [
    // --- 16:9 Cinematic Video (Single Full-Size Widescreen Production) ---
    {
      id: 'wide-1',
      category: '16:9 Films',
      title: 'Opening Ceremony Exindra',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791717395/OPENING_CEREMONY_EXINDRAFINAL_VERSION.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791717395/OPENING_CEREMONY_EXINDRAFINAL_VERSION.jpg',
      aspectRatio: '16/9',
    },

    // --- Cafes & Restro (6 Live Client Reels) ---
    {
      id: 'cr-1',
      category: 'Cafes & Restro',
      title: 'Artisan Cafe Pour & Extraction',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653281/cafe01.mp4',
      fallbackSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653281/cafe01.mov',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653281/cafe01.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cr-2',
      category: 'Cafes & Restro',
      title: 'Restro Culinary Artistry',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653174/cafe02.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653174/cafe02.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cr-3',
      category: 'Cafes & Restro',
      title: 'Gourmet Bistro Dining',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653143/cafe03.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653143/cafe03.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cr-4',
      category: 'Cafes & Restro',
      title: 'Espresso Bar Craft',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653422/cafe04.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653422/cafe04.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cr-5',
      category: 'Cafes & Restro',
      title: 'Cocktail & Kitchen Story',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653161/cafe05.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653161/cafe05.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cr-6',
      category: 'Cafes & Restro',
      title: 'Pastry & Cafe Ambience',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653259/cafe06.mp4',
      fallbackSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653259/cafe06.mov',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791653259/cafe06.jpg',
      aspectRatio: '9/16',
    },

    // --- Health Care (8 Live Doctor & Clinical Client Reels) ---
    {
      id: 'hc-1',
      category: 'Health Care',
      title: 'Doctor Consultation & Clinical Care',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713630/dr1.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713630/dr1.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'hc-2',
      category: 'Health Care',
      title: 'Specialist Medical Diagnosis',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713616/dr2.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713616/dr2.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'hc-3',
      category: 'Health Care',
      title: 'Advanced Surgical & Dental Care',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713632/dr3.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713632/dr3.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'hc-4',
      category: 'Health Care',
      title: 'Patient Treatment & Recovery',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713606/dr4.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713606/dr4.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'hc-5',
      category: 'Health Care',
      title: 'Dermatology & Skin Science',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713618/dr5.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713618/dr5.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'hc-6',
      category: 'Health Care',
      title: 'Clinical Facility & Diagnostics',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713618/dr6.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713618/dr6.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'hc-7',
      category: 'Health Care',
      title: 'Healthcare Specialist Insight',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713610/dr7.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713610/dr7.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'hc-8',
      category: 'Health Care',
      title: 'Integrative Wellness & Rehabilitation',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713616/dr8.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791713616/dr8.jpg',
      aspectRatio: '9/16',
    },

    // --- Gym & Fitness (4 Live Client Reels) ---
    {
      id: 'gf-1',
      category: 'Gym & Fitness',
      title: 'Strength Training & Barbell Power',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714272/gym1.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714272/gym1.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'gf-2',
      category: 'Gym & Fitness',
      title: 'High Intensity Conditioning',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714259/gym2.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714259/gym2.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'gf-3',
      category: 'Gym & Fitness',
      title: 'Athletic Performance Drills',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714268/gym3.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714268/gym3.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'gf-4',
      category: 'Gym & Fitness',
      title: 'Elite Bodybuilding & Focus',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714288/gym4.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714288/gym4.jpg',
      aspectRatio: '9/16',
    },

    // --- Commercial (4 Live Client Ad Reels) ---
    {
      id: 'cm-1',
      category: 'Commercial',
      title: 'Direct Response Commercial Spot 01',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791715033/ad1.mp4',
      fallbackSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791715033/ad1.mov',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791715033/ad1.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cm-2',
      category: 'Commercial',
      title: 'High-Converting Product Commercial 02',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714919/ad2.mp4',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714919/ad2.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cm-3',
      category: 'Commercial',
      title: 'Brand Story Ad Sequence 03',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714867/ad3.mp4',
      fallbackSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714867/ad3.mov',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714867/ad3.jpg',
      aspectRatio: '9/16',
    },
    {
      id: 'cm-4',
      category: 'Commercial',
      title: 'Direct-To-Consumer Campaign Ad 04',
      videoSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714798/ad4.mp4',
      fallbackSrc: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714798/ad4.mov',
      poster: 'https://res.cloudinary.com/gx7ysx1z/video/upload/v1791714798/ad4.jpg',
      aspectRatio: '9/16',
    },
  ];

  const filteredReels = activeFilter === 'All'
    ? allReels
    : allReels.filter(r => r.category === activeFilter);

  const togglePlay = (id: string, videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;

    if (playingId === id && !videoElement.paused) {
      videoElement.pause();
      setPlayingId(null);
    } else {
      // Pause any other playing video element
      document.querySelectorAll('video').forEach((v) => {
        if (v !== videoElement && !v.paused) {
          v.pause();
        }
      });

      // Enable audio on user interaction!
      videoElement.muted = false;
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback to muted playback if browser blocks unmuted play
          videoElement.muted = true;
          videoElement.play();
        });
      }
      setPlayingId(id);
    }
  };

  const isWideOnly = activeFilter === '16:9 Films';

  return (
    <section id="reels" className="section-scroll-fade py-20 sm:py-24 px-4 sm:px-6 border-t border-neutral-200 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
            Watch Our Live Reels In Action
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Click any reel below to play and pause directly on this screen.
          </p>
        </div>

        {/* Section Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            const count = tab === 'All' 
              ? allReels.length 
              : allReels.filter(r => r.category === tab).length;

            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 text-xs sm:text-[13px] font-semibold rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200 border border-neutral-200/60'
                }`}
              >
                <span>{tab}</span>
                <span className={`ml-1.5 text-[11px] font-mono tabular-nums ${isActive ? 'text-white/70' : 'text-neutral-500'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Grid: 16:9 view shows full-size widescreen videos one per row */}
        {isWideOnly ? (
          <div className="w-full max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {filteredReels.map((reel, idx) => (
              <ScrollReveal 
                key={reel.id}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={50}
                className="w-full"
              >
                <ReelCard
                  project={reel}
                  isPlaying={playingId === reel.id}
                  onTogglePlay={togglePlay}
                  hideLabels={true}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
            {filteredReels.map((reel, idx) => (
              <ScrollReveal 
                key={reel.id}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                delay={(idx % 5) * 40}
                className={reel.aspectRatio === '16/9' ? "col-span-full" : ""}
              >
                <ReelCard
                  project={reel}
                  isPlaying={playingId === reel.id}
                  onTogglePlay={togglePlay}
                  hideLabels={reel.aspectRatio === '16/9'}
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface ReelCardProps {
  project: ReelProject;
  isPlaying: boolean;
  onTogglePlay: (id: string, el: HTMLVideoElement | null) => void;
  hideLabels?: boolean;
}

const ReelCard: React.FC<ReelCardProps> = ({
  project,
  isPlaying,
  onTogglePlay,
  hideLabels = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const is16by9 = project.aspectRatio === '16/9';

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div
      onClick={() => onTogglePlay(project.id, videoRef.current)}
      className={`relative w-full bg-neutral-950 overflow-hidden cursor-pointer select-none shadow-xl hover:shadow-2xl transition-all duration-300 group/player border border-neutral-800/80 ${
        is16by9 
          ? 'aspect-[16/9] rounded-2xl sm:rounded-3xl lg:rounded-[36px]' 
          : 'aspect-[9/16] rounded-2xl sm:rounded-3xl'
      }`}
    >
      {/* HTML5 In-Place Video Tag */}
      <video
        ref={videoRef}
        poster={project.poster}
        loop
        playsInline
        className="w-full h-full object-cover filter brightness-95"
      >
        <source src={project.videoSrc} type="video/mp4" />
        {project.fallbackSrc && (
          <source src={project.fallbackSrc} type="video/mp4" />
        )}
      </video>

      {/* Floating Sound Toggle Button (Visible when playing) */}
      {isPlaying && (
        <button
          onClick={handleToggleMute}
          className={`absolute z-20 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-all cursor-pointer shadow-lg ${
            is16by9 ? 'top-5 right-5 w-11 h-11' : 'top-4 right-4 w-9 h-9'
          }`}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? (
            <VolumeX size={is16by9 ? 18 : 15} />
          ) : (
            <Volume2 size={is16by9 ? 18 : 15} />
          )}
        </button>
      )}

      {/* Center Play Button (shown when paused or hovered) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none bg-black/25 transition-opacity">
          <div className={`rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-neutral-950 shadow-2xl transition-transform duration-200 group-hover/player:scale-110 ${
            is16by9 ? 'w-20 h-20 sm:w-24 sm:h-24' : 'w-16 h-16'
          }`}>
            <Play size={is16by9 ? 32 : 24} className="translate-x-0.5 fill-neutral-950" />
          </div>
        </div>
      )}

      {/* Only show title text if hideLabels is false */}
      {!hideLabels && (
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none">
          <p className="text-[11px] font-medium text-white/90 truncate">
            {project.title}
          </p>
        </div>
      )}
    </div>
  );
};
