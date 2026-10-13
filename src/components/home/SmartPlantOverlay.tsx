import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, SunMedium } from 'lucide-react';

/** Illustrative AR storybook preview; not connected to live IoT sensors. */
const states = [
  { title: 'Growth', description: 'A young tomato plant develops in healthy conditions.' },
  { title: 'Stress', description: 'Low light and moisture can affect plant health.' },
  { title: 'Recovery', description: 'With water and sunlight, the plant becomes healthy again.' },
] as const;

export const SmartPlantOverlay: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStage((current) => (current + 1) % states.length);
      setCycle((current) => current + 1);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[580px] mx-auto bg-transparent">
      <style>{`
        @keyframes tomato-grow-natural {
          0% { transform: scaleY(.03) scaleX(.36); opacity: 0; }
          12% { opacity: 1; }
          68% { transform: scaleY(1.02) scaleX(1); opacity: 1; }
          85% { transform: scaleY(.99) scaleX(1.005); }
          100% { transform: scaleY(1) scaleX(1); opacity: 1; }
        }
        @keyframes tomato-soft-sway {
          0%, 100% { transform: rotate(-.55deg); }
          50% { transform: rotate(.55deg); }
        }
        @keyframes tomato-water-drop {
          0% { transform: translateY(-12px); opacity: 0; }
          25% { opacity: .75; }
          95%, 100% { transform: translateY(100px); opacity: 0; }
        }
        .tomato-botanical-grow { transform-origin: 50% 100%; animation: tomato-grow-natural 4.5s cubic-bezier(.2,.72,.3,1) both; }
        .tomato-botanical-sway { transform-origin: 50% 100%; animation: tomato-soft-sway 5s ease-in-out infinite; }
        .tomato-botanical-drop { animation: tomato-water-drop 3.2s ease-in infinite; }
        @media (prefers-reduced-motion: reduce) {
          .tomato-botanical-grow, .tomato-botanical-sway, .tomato-botanical-drop { animation: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* No white card: the entire illustration sits on the hero's botanical background. */}
      <div className="relative flex items-center justify-between gap-2 px-2 pb-2">
        <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-[#166534]">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Storybook AR Overlay
        </span>
        <span className="rounded-full border border-emerald-200/80 bg-white/55 px-3 py-1 text-[10px] font-semibold text-emerald-700 backdrop-blur-sm">
          Conceptual Prototype
        </span>
      </div>

      <div className="relative overflow-hidden bg-transparent">
        <div className="relative z-20 mt-3 ml-2 inline-flex items-center gap-2 rounded-full border border-emerald-100/80 bg-white/75 px-3 py-2 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-bold uppercase text-[#166534]">Plant Response Preview</span>
        </div>

        <div className="relative z-20 mx-2 mt-3 flex items-start justify-between gap-3">
          <div className="rounded-xl border border-amber-100/80 bg-white/75 px-3 py-2 shadow-sm backdrop-blur-sm">
            <SunMedium className="h-5 w-5 text-amber-500" />
            <p className="mt-1 text-[11px] font-bold text-[#172B26]">Sunlight</p>
            <p className="text-[9px] text-[#4A6B61]">Environmental input</p>
          </div>
          <div className="rounded-xl border border-sky-100/80 bg-white/75 px-3 py-2 shadow-sm backdrop-blur-sm">
            <Droplets className="h-5 w-5 text-sky-500" />
            <p className="mt-1 text-[11px] font-bold text-[#172B26]">Water</p>
            <p className="text-[9px] text-[#4A6B61]">Care interaction</p>
          </div>
        </div>

        {/* Larger plant; only leaves/stem grow while the soil stays fixed. */}
        <div className="relative mx-auto h-[370px] w-full sm:h-[420px]">
          <div className="pointer-events-none absolute bottom-6 left-1/2 h-16 w-64 -translate-x-1/2 rounded-full bg-emerald-300/15 blur-3xl" />
          <div className="absolute bottom-[16px] left-1/2 h-[355px] w-[min(100%,410px)] -translate-x-1/2 sm:h-[405px] sm:w-[460px]">
            <div className="tomato-botanical-sway absolute inset-x-0 bottom-[52px] h-[315px] sm:bottom-[58px] sm:h-[360px]">
              <img
                key={cycle}
                src="/home/tomato-leaves-fruit.png"
                alt="Tomato plant with green leaves and ripe tomatoes growing above the soil"
                draggable={false}
                className="tomato-botanical-grow h-full w-full select-none object-contain object-bottom"
                style={{ filter: stage === 1 ? 'saturate(.78) brightness(.93)' : 'saturate(1.07)' }}
              />
            </div>
            <img
              src="/home/tomato-soil.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="pointer-events-none absolute bottom-0 left-0 z-10 h-[125px] w-full select-none object-contain object-bottom sm:h-[142px]"
            />
          </div>
          <span className="tomato-botanical-drop pointer-events-none absolute right-[29%] top-2 h-3 w-2 rounded-full bg-sky-300/60" />
          <span className="tomato-botanical-drop pointer-events-none absolute right-[38%] top-8 h-2 w-1.5 rounded-full bg-sky-200/60" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Only compact, semi-transparent labels remain. */}
        <div className="relative z-20 mx-2 mb-2 rounded-2xl border border-emerald-100/70 bg-white/65 p-3 shadow-sm backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2">
            {states.map((item, i) => (
              <span
                key={item.title}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${i === stage ? 'bg-[#166534] text-white' : 'bg-emerald-50/75 text-[#166534]/70'}`}
              >
                {item.title}
              </span>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-[#4A6B61]">{states[stage].description}</p>
        </div>
      </div>

      <div className="mx-2 mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-emerald-900/10 pt-3 text-[11px]">
        <span className="text-[#4A6B61]">Physical Print + Handheld AR</span>
        <Link to="/showcase" className="font-bold text-[#166534] hover:underline">View Showcase Gallery →</Link>
      </div>
    </div>
  );
};

export default SmartPlantOverlay;
