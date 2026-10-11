import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  Award, 
  RotateCcw, 
  Sparkles, 
  MessageSquare, 
  Heart, 
  ShieldCheck, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { Badge } from './Badge';

interface StoryNode {
  chapter: string;
  dialogue: string;
  sproutMood: string;
  stewardshipScore: number;
  options: {
    text: string;
    actionType: 'water' | 'sun' | 'neglect' | 'rescue';
    impactDesc: string;
    scoreDelta: number;
    nextNodeId: string;
  }[];
}

export const DecisionTreeDemo: React.FC = () => {
  const [currentNodeKey, setCurrentNodeKey] = useState<string>('node-start');
  const [careHistory, setCareHistory] = useState<string[]>([]);
  const [stewardshipScore, setStewardshipScore] = useState<number>(60);
  const [badgeUnlocked, setBadgeUnlocked] = useState<boolean>(false);

  const storyNodes: Record<string, StoryNode> = {
    'node-start': {
      chapter: "Chapter 2: Sprout's Parched Morning",
      dialogue: "“Oh dear… My leaves feel dry, and the sun is climbing higher! Little Gardner, can you help me check what my roots need today?”",
      sproutMood: "Thirsty & Hopeful",
      stewardshipScore: 60,
      options: [
        {
          text: "💧 Pour a measured cup of water around Sprout's roots",
          actionType: "water",
          impactDesc: "Roots absorb moisture, stem perks up immediately!",
          scoreDelta: 25,
          nextNodeId: "node-watered"
        },
        {
          text: "☀️ Move Sprout to the blazing noon windowsill without water",
          actionType: "sun",
          impactDesc: "High heat without moisture increases transpiration stress.",
          scoreDelta: -15,
          nextNodeId: "node-scorched"
        },
        {
          text: "🧸 Just give Sprout a gentle pat and run off to play",
          actionType: "neglect",
          impactDesc: "Neglect causes soil to dry out further into afternoon wilt.",
          scoreDelta: -25,
          nextNodeId: "node-neglected"
        }
      ]
    },
    'node-watered': {
      chapter: "Chapter 2: A Refreshing Drink!",
      dialogue: "“Ahhh! Thank you! My stem feels strong and my green leaves are dancing in the breeze! You are a wonderful caretaker!”",
      sproutMood: "Thriving & Happy",
      stewardshipScore: 85,
      options: [
        {
          text: "🌱 Place Sprout in gentle morning sunlight to make food",
          actionType: "sun",
          impactDesc: "Photosynthesis is balanced! Sprout prepares to bloom a bright flower bud.",
          scoreDelta: 15,
          nextNodeId: "node-bloom"
        },
        {
          text: "📚 Note your observation in the Cambridge Science logbook",
          actionType: "rescue",
          impactDesc: "Reinforces Stage 1 scientific recording and observation skills.",
          scoreDelta: 10,
          nextNodeId: "node-bloom"
        }
      ]
    },
    'node-scorched': {
      chapter: "Chapter 2 (Branch): The Heatwave Challenge",
      dialogue: "“Phew! It is so warm out here! My soil is baking like a dry cookie! Little Gardener, plants need water when it gets sunny!”",
      sproutMood: "Overheated & Stressed",
      stewardshipScore: 45,
      options: [
        {
          text: "🛡️ Redemption Quest: Move Sprout to filtered shade and water gently",
          actionType: "rescue",
          impactDesc: "Redemption mechanism triggered! Sprout cools down and recovers.",
          scoreDelta: 30,
          nextNodeId: "node-recovered"
        }
      ]
    },
    'node-neglected': {
      chapter: "Chapter 2 (Branch): The Wilted Afternoon",
      dialogue: "“My head is drooping low… Without water, my stems cannot stand tall. Will you come back and rescue me?”",
      sproutMood: "Wilted & Needing Care",
      stewardshipScore: 35,
      options: [
        {
          text: "❤️ Rescue Quest: Give Sprout deep watering and apologise gently",
          actionType: "rescue",
          impactDesc: "Care history logs redemption action. Plants can heal when nurtured!",
          scoreDelta: 40,
          nextNodeId: "node-recovered"
        }
      ]
    },
    'node-recovered': {
      chapter: "Chapter 2: The Comeback!",
      dialogue: "“Look! My stem is lifting back up! Thank you for not giving up on me! Mistakes happen, but gentle care fixes everything!”",
      sproutMood: "Recovered & Grateful",
      stewardshipScore: 75,
      options: [
        {
          text: "✨ Celebrate Sprout's resilience and earn the Caretaker badge",
          actionType: "water",
          impactDesc: "Learner discovers that living things respond to timely stewardship.",
          scoreDelta: 15,
          nextNodeId: "node-bloom"
        }
      ]
    },
    'node-bloom': {
      chapter: "Chapter 3: The Little Botanist's Reward",
      dialogue: "“Pop! Look at my beautiful pink blossom! You understood what plants need to live: water, sunlight, soil, and loving care!”",
      sproutMood: "Bloomed & Ecstatic",
      stewardshipScore: 100,
      options: []
    }
  };

  const currentNode = storyNodes[currentNodeKey] || storyNodes['node-start'];

  const handleSelectOption = (option: StoryNode['options'][0]) => {
    const newScore = Math.min(100, Math.max(0, stewardshipScore + option.scoreDelta));
    setStewardshipScore(newScore);
    setCareHistory((prev) => [...prev, option.impactDesc]);
    setCurrentNodeKey(option.nextNodeId);

    if (option.nextNodeId === 'node-bloom') {
      setBadgeUnlocked(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetStory = () => {
    setCurrentNodeKey('node-start');
    setCareHistory([]);
    setStewardshipScore(60);
    setBadgeUnlocked(false);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FEF3C7] via-[#F2EDFF] to-[#EAF6FF] px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white shadow-2xs text-[#D97706]">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Component 03 Interactive Demo
            </span>
            <h4 className="text-base font-bold text-[#17243D]">
              Gamified Story Branching & Stewardship Tracker
            </h4>
          </div>
        </div>

        <button
          onClick={resetStory}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Narrative
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        {/* Story Canvas (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-white via-amber-50/20 to-white">
          <div>
            {/* Chapter Meta */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#D97706] tracking-wide flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {currentNode.chapter}
              </span>
              <Badge variant={stewardshipScore >= 70 ? 'green' : 'amber'} size="sm">
                Sprout Mood: {currentNode.sproutMood}
              </Badge>
            </div>

            {/* Storybook Illustrated Page Simulation */}
            <div className="relative p-6 rounded-2xl bg-white border border-amber-200/80 shadow-sm mb-6">
              <div className="absolute top-3 right-3 text-amber-300">
                <Sparkles className="w-5 h-5" />
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#E2F8EE] border border-emerald-200 flex items-center justify-center shrink-0 text-2xl shadow-2xs">
                  {currentNodeKey === 'node-bloom' ? '🌸' : currentNodeKey === 'node-scorched' ? '🥵' : currentNodeKey === 'node-neglected' ? '🥀' : '🌱'}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Sprout the Seedling Speaks:
                  </span>
                  <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed italic">
                    {currentNode.dialogue}
                  </p>
                </div>
              </div>
            </div>

            {/* Decision Choices */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                {currentNode.options.length > 0 ? "What will you do next?" : "Story Ending Reached!"}
              </span>

              {currentNode.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  className="w-full text-left p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#7966E8] hover:bg-purple-50/30 transition-all duration-200 flex items-center justify-between group shadow-2xs hover:shadow-xs"
                >
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-[#7966E8]">
                    {option.text}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#7966E8] shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              ))}

              {currentNode.options.length === 0 && (
                <div className="p-5 rounded-2xl bg-[#E2F8EE] border border-emerald-200 text-center">
                  <span className="text-3xl block mb-2">🎉</span>
                  <h5 className="text-base font-bold text-emerald-900 mb-1">
                    Congratulations! Stage 1 Objective Mastered!
                  </h5>
                  <p className="text-xs text-emerald-800 mb-4 max-w-md mx-auto">
                    You demonstrated that living plants flourish with light, water, and attentive stewardship!
                  </p>
                  <button
                    onClick={resetStory}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs"
                  >
                    Play Again to Explore Other Branches
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">StoryBranchController.cs Active</span>
            <span>Cambridge Primary Science: Plants & Living Things</span>
          </div>
        </div>

        {/* Narrative Engine Telemetry (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <h5 className="text-sm font-bold text-[#17243D] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#54B987]" />
              Stewardship Tracker Metrics
            </h5>

            {/* Score Bar */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Stewardship Empathy Quotient
                </span>
                <span className="text-sm font-bold font-mono text-[#7966E8]">
                  {stewardshipScore} / 100
                </span>
              </div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 via-[#54B987] to-[#7966E8] rounded-full transition-all duration-500"
                  style={{ width: `${stewardshipScore}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Emerging Care</span>
                <span>Attentive Learner</span>
                <span>Master Botanist</span>
              </div>
            </div>

            {/* Unlocked Badge */}
            <div className="mb-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Gamified Reward Badge
              </span>
              <div className={`p-4 rounded-2xl border transition-all flex items-center gap-3.5 ${
                badgeUnlocked
                  ? 'bg-gradient-to-r from-amber-50 to-emerald-50 border-emerald-200 shadow-sm'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                  badgeUnlocked ? 'bg-amber-400 text-white shadow-sm' : 'bg-slate-200 text-slate-400'
                }`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-800">
                    {badgeUnlocked ? "🌟 Certified Young Botanist" : "🔒 Locked Badge"}
                  </h6>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {badgeUnlocked
                      ? "Earned by guiding Sprout through environmental challenges to a full flower bloom!"
                      : "Complete the caring sequence without abandoning Sprout to unlock."}
                  </p>
                </div>
              </div>
            </div>

            {/* Care History Log */}
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Stewardship Care History
              </span>
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {careHistory.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">No care decisions recorded yet.</p>
                ) : (
                  careHistory.map((item, idx) => (
                    <div key={idx} className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#54B987] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <p className="text-[11px] text-slate-500 leading-tight">
              <strong>Technical Implementation:</strong> In the full system, <code>StewardshipTracker.cs</code> stores multi-session care events to cloud persistence so children return each day to see their plant's longitudinal progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
