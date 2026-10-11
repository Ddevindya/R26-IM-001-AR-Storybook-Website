import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Timer, 
  Smartphone, 
  BookOpen, 
  AlertCircle, 
  CheckCircle, 
  Activity, 
  ShieldAlert, 
  RotateCcw,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Badge } from './Badge';

export const FatigueDemo: React.FC = () => {
  const [secondsElapsed, setSecondsElapsed] = useState<number>(45);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [currentModality, setCurrentModality] = useState<'3D_AR' | 'RESTING_2D'>('3D_AR');
  const [promptDismissed, setPromptDismissed] = useState<boolean>(false);

  const FATIGUE_THRESHOLD = 180; // 3 minutes = 180 seconds

  useEffect(() => {
    if (!isRunning || currentModality === 'RESTING_2D') return;
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, currentModality]);

  const isFatigued = secondsElapsed >= FATIGUE_THRESHOLD;
  const progressPercent = Math.min(100, (secondsElapsed / FATIGUE_THRESHOLD) * 100);

  const simulateFastForward = () => {
    setSecondsElapsed(180);
    setPromptDismissed(false);
  };

  const resetTimer = () => {
    setSecondsElapsed(0);
    setCurrentModality('3D_AR');
    setPromptDismissed(false);
  };

  const switchToResting = () => {
    setCurrentModality('RESTING_2D');
    setPromptDismissed(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F2EDFF] via-[#EAF6FF] to-[#E2F8EE] px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white shadow-2xs text-[#7966E8]">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7966E8]">
              Component 01 Interactive Demo
            </span>
            <h4 className="text-base font-bold text-[#17243D]">
              Child Ergonomics & AR-to-2D Modality Transition
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={simulateFastForward}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs transition-all"
          >
            Fast Forward to 3:00 Min
          </button>
          <button
            onClick={resetTimer}
            className="p-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs transition-all"
            title="Reset Timer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        {/* Device Viewport Simulation (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col items-center justify-between bg-gradient-to-b from-slate-900 to-[#17243D] text-white relative overflow-hidden">
          {/* Status Overlay */}
          <div className="w-full flex items-center justify-between z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${currentModality === '3D_AR' ? 'bg-emerald-400 animate-ping' : 'bg-sky-400'}`} />
              Active Modality: {currentModality === '3D_AR' ? 'Handheld 3D AR Passthrough' : 'Resting 2D Desk Mode'}
            </span>
            <Badge variant={currentModality === '3D_AR' ? 'purple' : 'blue'} size="sm">
              {currentModality === '3D_AR' ? 'Camera Elevation ~45°' : 'Flat on Desk ~0°'}
            </Badge>
          </div>

          {/* Visual Tablet Screen */}
          <div className="relative w-full max-w-[420px] h-[280px] my-6 rounded-2xl border-4 border-slate-700 bg-slate-950 overflow-hidden shadow-2xl flex flex-col justify-between p-4">
            {currentModality === '3D_AR' ? (
              // 3D AR Mode View
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Simulated AR Camera Reticle & Storybook Page on Desk */}
                <div className="absolute inset-4 border border-dashed border-white/20 rounded-xl flex items-center justify-center pointer-events-none">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/40">
                    Marker Tracked: Page 02 [Sprout's Garden]
                  </span>
                </div>

                {/* 3D Holographic Sprout Plant Floating Over Book */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="z-10 text-center"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400/80 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <p className="text-xs font-bold text-white mt-2">Holographic 3D Plant</p>
                  <span className="text-[10px] text-emerald-300 font-mono">60 FPS • AR Anchor Lock</span>
                </motion.div>

                {/* Child Touch Target Overlay */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between z-10">
                  <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Enlarged Touch Target: 64pt
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-black/60 text-[10px] text-slate-300">
                    Kalman Filter: 0.98
                  </div>
                </div>
              </div>
            ) : (
              // Resting 2D Mode View
              <div className="relative w-full h-full bg-[#FAF8F5] text-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-xs font-bold text-[#7966E8] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Resting 2D Illustrated Storybook
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    Zero Arm Fatigue
                  </span>
                </div>

                <div className="flex items-center gap-4 my-2">
                  <div className="w-16 h-16 rounded-xl bg-[#E2F8EE] flex items-center justify-center text-3xl shadow-2xs shrink-0">
                    🌱
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-slate-800">Sprout Rests Comfortably</h6>
                    <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                      “Take your time reading! When you are ready to explore the 3D garden again, lift the tablet up!”
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                  <span>Desk Orthographic View</span>
                  <button
                    onClick={() => setCurrentModality('3D_AR')}
                    className="text-[#7966E8] font-bold underline"
                  >
                    Resume 3D AR Mode
                  </button>
                </div>
              </div>
            )}

            {/* Fatigue Warning Banner Pop-up */}
            <AnimatePresence>
              {isFatigued && currentModality === '3D_AR' && !promptDismissed && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-3 bg-[#17243D]/95 backdrop-blur-md rounded-xl p-4 border border-purple-400 flex flex-col justify-between text-white z-30 shadow-2xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/30 text-purple-300 shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">
                        Ergonomic Safeguard: Time to Rest Arms!
                      </h5>
                      <p className="text-[11px] text-purple-200 mt-1 leading-snug">
                        Young learner has held the tablet upright for 3 continuous minutes. ErgonomicTimer.cs triggers a gentle posture pause.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 mt-2">
                    <button
                      onClick={() => setPromptDismissed(true)}
                      className="px-2.5 py-1 text-[11px] rounded-lg text-slate-300 hover:text-white"
                    >
                      Keep in AR
                    </button>
                    <button
                      onClick={switchToResting}
                      className="px-3 py-1.5 text-xs font-bold rounded-xl bg-[#7966E8] hover:bg-[#6853DF] text-white shadow-xs transition-all"
                    >
                      Switch to Resting 2D Mode →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full flex justify-between items-center text-[11px] text-slate-400 z-10">
            <span>ErgonomicTimer.cs Sensor Hook</span>
            <span>Target: Cambridge Stage 1 (Age 5–6)</span>
          </div>
        </div>

        {/* Ergonomic Analytics Panel (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-sm font-bold text-[#17243D] flex items-center gap-2">
                <Timer className="w-4 h-4 text-[#7966E8]" />
                Continuous Elevation Timer
              </h5>
              <span className={`text-sm font-mono font-bold px-2.5 py-0.5 rounded-lg ${
                isFatigued ? 'bg-rose-100 text-rose-700' : 'bg-purple-50 text-[#7966E8]'
              }`}>
                {formatTime(secondsElapsed)} / 3:00
              </span>
            </div>

            {/* Fatigue Meter */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#7966E8]" />
                  Deltoid & Neck Strain Index
                </span>
                <span className={`text-xs font-bold font-mono ${
                  isFatigued ? 'text-rose-600' : 'text-slate-600'
                }`}>
                  {isFatigued ? 'FATIGUE THRESHOLD EXCEEDED' : `${Math.round(progressPercent)}% Normal Load`}
                </span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isFatigued
                      ? 'bg-rose-500'
                      : progressPercent > 70
                      ? 'bg-amber-400'
                      : 'bg-[#7966E8]'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0:00 (Fresh)</span>
                <span>1:30 (Moderate)</span>
                <span className="text-rose-600 font-bold">3:00 (Rest Prompt)</span>
              </div>
            </div>

            {/* Research Contribution Callout */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Framework Ergonomic Innovations
              </span>
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-xs text-purple-900 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#7966E8] shrink-0 mt-0.5" />
                <span>
                  <strong>Dynamic UI Resizing:</strong> Touch buttons expand automatically to 64px with tactile visual ripples for emergent fine-motor control.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-xs text-purple-900 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#7966E8] shrink-0 mt-0.5" />
                <span>
                  <strong>Modal Blend Transition:</strong> Allows tablet to be laid flat on the desk without dropping AR state or restarting the narrative.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-tight">
              <strong>HCI Literature Basis:</strong> Studies in early childhood ergonomics demonstrate that 5–6-year-olds begin experiencing deltoid discomfort after 180 seconds of continuous handheld tablet holding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
