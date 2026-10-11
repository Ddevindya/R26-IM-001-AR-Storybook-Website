import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  Sun, 
  Sparkles, 
  RefreshCw, 
  Sliders, 
  Activity, 
  Volume2, 
  Layers, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { Badge } from './Badge';

export const InteractivePlant: React.FC = () => {
  const [moisture, setMoisture] = useState<number>(65); // 0 - 100%
  const [light, setLight] = useState<number>(850); // 0 - 2000 lux
  const [isIotStreaming, setIsIotStreaming] = useState<boolean>(false);
  const [bloomOpen, setBloomOpen] = useState<boolean>(true);
  const [soundPlayed, setSoundPlayed] = useState<string | null>(null);

  // Compute physiological state
  const isHydrated = moisture >= 40 && moisture <= 85;
  const isThirsty = moisture < 40;
  const isOverwatered = moisture > 85;

  const isGoodLight = light >= 500 && light <= 1400;
  const isDim = light < 500;
  const isScorched = light > 1400;

  let stateName = "Thriving";
  let stateColor = "#54B987";
  let stateDesc = "Optimal turgor pressure and photosynthesis. Seedling is perky, vibrant, and blooming!";
  let mood = "happy"; // happy, thirsty, sad, sun-starved

  if (isThirsty && isDim) {
    stateName = "Neglected & Wilted";
    stateColor = "#B45309";
    stateDesc = "Low water and low sunlight. Stem droops, turgor pressure lost, leaf curl active.";
    mood = "sad";
  } else if (isThirsty) {
    stateName = "Thirsty (Low Moisture)";
    stateColor = "#D97706";
    stateDesc = "Soil moisture critically low. Stem angles downward, awaiting child watering action.";
    mood = "thirsty";
  } else if (isDim) {
    stateName = "Sun-Starved";
    stateColor = "#6366F1";
    stateDesc = "Insufficient lux. Chlorophyll synthesis slows down; plant seeks sunlight direction.";
    mood = "sun-starved";
  } else if (isScorched) {
    stateName = "Heat Stressed";
    stateColor = "#EF4444";
    stateDesc = "Excessive thermal radiation. Leaves curl inwards to prevent excessive transpiration.";
    mood = "stressed";
  } else if (isOverwatered) {
    stateName = "Waterlogged Soil";
    stateColor = "#0284C7";
    stateDesc = "Excess moisture reducing root aeration. Child advised to pause watering.";
    mood = "droopy";
  }

  // IoT Live Telemetry Simulation
  useEffect(() => {
    if (!isIotStreaming) return;
    const interval = setInterval(() => {
      setMoisture((prev) => Math.min(95, Math.max(15, prev + (Math.random() * 6 - 3))));
      setLight((prev) => Math.min(1800, Math.max(200, prev + Math.floor(Math.random() * 80 - 40))));
    }, 2000);
    return () => clearInterval(interval);
  }, [isIotStreaming]);

  // Play audio visual simulation cue
  const triggerAudioEffect = (name: string) => {
    setSoundPlayed(name);
    setTimeout(() => setSoundPlayed(null), 2500);
  };

  // Stem curvature based on health
  const stemDroopAngle = mood === 'happy' ? 0 : mood === 'thirsty' || mood === 'sad' ? 24 : 12;
  const stemHeight = mood === 'happy' ? 180 : 155;
  const leafColor = mood === 'happy' 
    ? '#54B987' 
    : mood === 'thirsty' 
    ? '#A3984E' 
    : mood === 'sun-starved' 
    ? '#74A78A' 
    : mood === 'stressed' 
    ? '#C27341' 
    : '#439A72';

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#EAF6FF] via-[#F2EDFF] to-[#E2F8EE] px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white shadow-2xs text-[#7966E8]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7966E8]">
              Interactive Educational Demonstration
            </span>
            <h4 className="text-base font-bold text-[#17243D]">
              Affective Plant Health & IoT Context Simulator
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsIotStreaming(!isIotStreaming)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              isIotStreaming
                ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-200'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Activity className={`w-3.5 h-3.5 ${isIotStreaming ? 'animate-pulse' : ''}`} />
            {isIotStreaming ? 'Streaming IoT Telemetry' : 'Simulate IoT Stream'}
          </button>
        </div>
      </div>

      {/* Main Grid: Visualizer & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        {/* Left Side: Affective 3D Plant Canvas (6 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col items-center justify-between bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 relative">
          {/* Status HUD Pill */}
          <div className="w-full flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full animate-ping"
                style={{ backgroundColor: stateColor }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Plant State: <strong style={{ color: stateColor }}>{stateName}</strong>
              </span>
            </div>

            <Badge
              variant={mood === 'happy' ? 'green' : mood === 'thirsty' ? 'amber' : 'purple'}
              size="sm"
            >
              {mood === 'happy' ? '✨ Cheerful & Blooming' : '🥀 Stress State Active'}
            </Badge>
          </div>

          {/* Plant SVG Stage */}
          <div className="relative w-full max-w-[340px] h-[340px] my-4 flex items-center justify-center">
            {/* Ambient Sunlight Glow */}
            <motion.div
              animate={{
                scale: light > 1000 ? [1, 1.15, 1] : [1, 1.05, 1],
                opacity: Math.min(0.9, light / 1400),
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 w-36 h-36 rounded-full bg-gradient-to-br from-amber-200/50 via-yellow-100/30 to-transparent blur-2xl pointer-events-none"
            />

            {/* Dewdrop Particles when watering */}
            <AnimatePresence>
              {moisture > 60 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <motion.div
                    animate={{ y: [0, 40], opacity: [0, 0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, delay: 0.2 }}
                    className="absolute top-12 left-16 text-sky-400"
                  >
                    <Droplets className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 35], opacity: [0, 0.9, 0] }}
                    transition={{ repeat: Infinity, duration: 2.6, delay: 0.8 }}
                    className="absolute top-16 right-20 text-sky-400"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SVG Plant Graphic */}
            <svg
              viewBox="0 0 300 320"
              className="w-full h-full drop-shadow-md select-none transition-transform duration-700"
            >
              {/* Ground & Terracotta Pot */}
              <ellipse cx="150" cy="285" rx="90" ry="16" fill="#E2E8F0" opacity="0.6" />
              
              {/* Pot Base */}
              <polygon
                points="105,230 195,230 185,290 115,290"
                fill="#E07A5F"
                className="transition-colors duration-500"
              />
              {/* Pot Rim */}
              <rect x="98" y="218" width="104" height="15" rx="4" fill="#D36B50" />
              {/* Pot Rim Highlight */}
              <line x1="104" y1="223" x2="196" y2="223" stroke="#F4A261" strokeWidth="2" strokeLinecap="round" />
              
              {/* Soil Layer */}
              <ellipse
                cx="150"
                cy="222"
                rx="48"
                ry="9"
                fill={moisture > 40 ? "#3E2723" : "#795548"}
                className="transition-colors duration-700"
              />

              {/* Plant Stem with Dynamic Turgor Curve */}
              <g
                style={{
                  transformOrigin: '150px 222px',
                  transform: `rotate(${stemDroopAngle}deg)`,
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Main Stem */}
                <path
                  d={`M 150 222 Q ${150 - stemDroopAngle * 0.8} ${140} ${150} ${222 - stemHeight}`}
                  fill="none"
                  stroke={leafColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />

                {/* Left Leaf */}
                <g transform={`translate(${146 - stemDroopAngle * 0.4}, 160)`}>
                  <path
                    d="M 0 0 C -45 -15 -55 -40 -35 -50 C -15 -45 5 -15 0 0"
                    fill={leafColor}
                    opacity="0.95"
                    className="transition-colors duration-700"
                  />
                  <line x1="0" y1="0" x2="-35" y2="-45" stroke="#37825E" strokeWidth="1.5" opacity="0.5" />
                </g>

                {/* Right Leaf */}
                <g transform={`translate(${152 - stemDroopAngle * 0.3}, 130)`}>
                  <path
                    d="M 0 0 C 45 -10 60 -35 40 -48 C 20 -40 -2 -15 0 0"
                    fill={leafColor}
                    opacity="0.95"
                    className="transition-colors duration-700"
                  />
                  <line x1="0" y1="0" x2="38" y2="-44" stroke="#37825E" strokeWidth="1.5" opacity="0.5" />
                </g>

                {/* Sprout Head / Blossom at Tip */}
                <g transform={`translate(150, ${222 - stemHeight})`}>
                  {/* Flower Petals (open when happy) */}
                  {bloomOpen && (
                    <g className="transition-transform duration-500">
                      <circle cx="0" cy="-22" r="11" fill="#F472B6" opacity="0.9" />
                      <circle cx="-18" cy="-8" r="11" fill="#F472B6" opacity="0.9" />
                      <circle cx="18" cy="-8" r="11" fill="#F472B6" opacity="0.9" />
                      <circle cx="-12" cy="14" r="11" fill="#F472B6" opacity="0.9" />
                      <circle cx="12" cy="14" r="11" fill="#F472B6" opacity="0.9" />
                    </g>
                  )}

                  {/* Seedling Face Center */}
                  <circle cx="0" cy="0" r="18" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2" />

                  {/* Eyes & Expression */}
                  {mood === 'happy' ? (
                    <>
                      {/* Happy Sparkle Eyes */}
                      <circle cx="-6" cy="-3" r="3" fill="#17243D" />
                      <circle cx="6" cy="-3" r="3" fill="#17243D" />
                      <circle cx="-5" cy="-4" r="1" fill="#FFFFFF" />
                      <circle cx="7" cy="-4" r="1" fill="#FFFFFF" />
                      {/* Big Cheerful Smile */}
                      <path d="M -7 4 Q 0 11 7 4" fill="none" stroke="#17243D" strokeWidth="2" strokeLinecap="round" />
                      {/* Rosy Cheeks */}
                      <circle cx="-10" cy="3" r="2.5" fill="#F87171" opacity="0.7" />
                      <circle cx="10" cy="3" r="2.5" fill="#F87171" opacity="0.7" />
                    </>
                  ) : mood === 'thirsty' || mood === 'sad' ? (
                    <>
                      {/* Sad Droopy Eyes */}
                      <ellipse cx="-6" cy="-2" rx="2.5" ry="3" fill="#17243D" />
                      <ellipse cx="6" cy="-2" rx="2.5" ry="3" fill="#17243D" />
                      {/* Frown */}
                      <path d="M -6 7 Q 0 2 6 7" fill="none" stroke="#17243D" strokeWidth="2" strokeLinecap="round" />
                      {/* Sweat / Thirst Drop */}
                      <circle cx="12" cy="-6" r="2" fill="#38BDF8" />
                    </>
                  ) : (
                    <>
                      {/* Neutral / Sleepy Eyes */}
                      <line x1="-8" y1="-2" x2="-4" y2="-2" stroke="#17243D" strokeWidth="2" strokeLinecap="round" />
                      <line x1="4" y1="-2" x2="8" y2="-2" stroke="#17243D" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="0" cy="5" r="2" fill="#17243D" />
                    </>
                  )}
                </g>
              </g>
            </svg>
          </div>

          {/* Plant State Explanation Card */}
          <div className="w-full bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/80 text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#7966E8]" />
                Affective Cue Output:
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                PlantHealthState.cs: {mood.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {stateDesc}
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Controls & System Metrics (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-sm font-bold text-[#17243D] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#7966E8]" />
                Environmental Variables
              </h5>
              <span className="text-xs text-slate-400 font-mono">ESP32-S3 Feed</span>
            </div>

            {/* Slider 1: Soil Moisture */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-sky-500" />
                  Soil Moisture (VWC%)
                </label>
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                  isHydrated ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                }`}>
                  {Math.round(moisture)}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={moisture}
                disabled={isIotStreaming}
                onChange={(e) => setMoisture(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#54B987] disabled:opacity-50"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                <span>10% (Dry Soil)</span>
                <span className="text-emerald-600 font-bold">50-75% Optimal</span>
                <span>95% (Waterlogged)</span>
              </div>
            </div>

            {/* Slider 2: Light Exposure */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  Ambient Light Level (Lux)
                </label>
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                  isGoodLight ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-700'
                }`}>
                  {Math.round(light)} lx
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="25"
                value={light}
                disabled={isIotStreaming}
                onChange={(e) => setLight(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F59E0B] disabled:opacity-50"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                <span>100 lx (Dark)</span>
                <span className="text-amber-600 font-bold">850 lx Classroom</span>
                <span>2000 lx (Blazing)</span>
              </div>
            </div>

            {/* Quick Test Presets */}
            <div className="mb-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Quick Test Scenarios
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMoisture(70);
                    setLight(900);
                    triggerAudioEffect("Joyful Bloom Chime");
                  }}
                  className="px-3 py-2 rounded-xl text-xs font-medium bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-left transition-colors flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Ideal Classroom Care
                </button>
                <button
                  onClick={() => {
                    setMoisture(20);
                    setLight(350);
                    triggerAudioEffect("Thirsty Sigh Audio");
                  }}
                  className="px-3 py-2 rounded-xl text-xs font-medium bg-amber-50 hover:bg-amber-100 text-amber-800 text-left transition-colors flex items-center gap-2"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  Neglected Weekend
                </button>
              </div>
            </div>

            {/* Audio Cue Feedback Trigger */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <Volume2 className="w-4 h-4 text-[#7966E8]" />
                <span>Audio Feedback Cue:</span>
              </div>
              <span className="text-xs font-semibold text-[#7966E8]">
                {soundPlayed ? soundPlayed : mood === 'happy' ? 'Cheerful Chime' : 'Sigh Audio Cue'}
              </span>
            </div>
          </div>

          {/* Academic Transparency Note */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-tight">
              <strong className="text-slate-700">Notice:</strong> This web interactive visual demonstrates the affective visualization concept (Component 02) and IoT parameters (Component 04). In the physical setup, sensor data is gathered via an ESP32-S3 and projected in mobile AR via Unity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
