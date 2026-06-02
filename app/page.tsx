'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LeftPanel, MainGame, RightPanel, QuestionManager, QuizModal } from '@/components/game';
import { Question, Student, PlayerScore } from '@/types';
import { INITIAL_QUESTIONS } from '@/constants';
import { Flower2, List, Shuffle, Edit, Lock, Volume2, VolumeX } from 'lucide-react';

type ViewMode = 'grid' | 'list';

export default function QuizGame() {
  // States
  const [students, setStudents] = useState<Student[]>([]);
  const [questions, setQuestions] = useState<Question[]>(INITIAL_QUESTIONS);
  const [flowerNumbers, setFlowerNumbers] = useState<number[]>(Array.from({ length: 60 }, (_, i) => i + 1));
  const [leaderboard, setLeaderboard] = useState<PlayerScore[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null);
  const [answeredFlowers, setAnsweredFlowers] = useState<Set<number>>(new Set());
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  // Timer States
  const [timeConfig, setTimeConfig] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Audio References
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    bgMusicRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3');
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.2;
    
    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
      }
    };
  }, []);

  // Timer Logic
  useEffect(() => {
    let timer: number;
    if (isTimerRunning && timeLeft > 0) {
      timer = window.setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const playSound = useCallback((type: 'hover' | 'correct' | 'wrong' | 'win') => {
    const urls = {
      hover: 'https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-selection-917.mp3',
      correct: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chime-2064.mp3',
      wrong: 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3',
      win: 'https://assets.mixkit.co/sfx/preview/mixkit-clapping-crowd-applauding-472.mp3'
    };
    const audio = new Audio(urls[type]);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  const handleShuffle = () => {
    const shuffled = [...flowerNumbers].sort(() => Math.random() - 0.5);
    setFlowerNumbers(shuffled);
  };

  const handleAddStudent = (className: string, studentName: string) => {
    const newStudent = { id: Date.now().toString(), className, name: studentName };
    setStudents(prev => [...prev, newStudent]);
  };

  const handleSelectFlower = (num: number) => {
    if (answeredFlowers.has(num)) return;
    setSelectedFlower(num);
    const question = questions.find(q => q.id === num) || {
      id: num,
      text: `Câu hỏi số ${num} chưa được thiết lập.`,
      options: ['A', 'B', 'C', 'D'],
      correctIndex: 0
    };
    setActiveQuestion(question);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      playSound('correct');
      setAnsweredFlowers(prev => new Set([...prev, selectedFlower!]));
      if (students.length > 0) {
        const topStudent = students[students.length - 1];
        setLeaderboard(prev => {
          const existing = prev.find(p => p.name === topStudent.name);
          if (existing) {
            return prev.map(p => p.name === topStudent.name ? { ...p, score: p.score + 10 } : p)
                       .sort((a, b) => b.score - a.score);
          }
          return [...prev, { name: topStudent.name, score: 10 }].sort((a, b) => b.score - a.score);
        });
      }
    } else {
      playSound('wrong');
    }
    setActiveQuestion(null);
    setSelectedFlower(null);
  };

  const toggleMusic = () => {
    if (bgMusicRef.current) {
      if (bgMusicRef.current.paused) {
        bgMusicRef.current.play();
        setIsMusicPlaying(true);
      } else {
        bgMusicRef.current.pause();
        setIsMusicPlaying(false);
      }
    }
  };

  return (
    <div className="flex h-screen w-screen mesh-bg overflow-hidden text-white font-sans">
      {/* Floating Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      <LeftPanel 
        students={students} 
        onAdd={handleAddStudent} 
      />

      <div className="flex-1 flex flex-col min-w-0 border-x border-white/10 glass-panel">
        <header className="p-4 flex flex-col gap-4 border-b border-white/5">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
              <button 
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[11px] font-bold transition-all ${viewMode === 'grid' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <Flower2 className="w-4 h-4" />
                VƯỜN HOA
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[11px] font-bold transition-all ${viewMode === 'list' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <List className="w-4 h-4" />
                DANH SÁCH
              </button>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={handleShuffle}
                className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md rounded-xl hover:bg-white/10 transition-all active:scale-95 group"
                title="Trộn vị trí hoa"
              >
                <Shuffle className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </button>
              <button 
                onClick={() => setIsAdminMode(!isAdminMode)}
                className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-[11px] font-bold transition-all active:scale-95 ${isAdminMode ? 'bg-red-500/20 border-red-500/30 text-red-400' : 'border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10'}`}
              >
                {isAdminMode ? <Lock className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                {isAdminMode ? 'Xong' : 'Sửa'}
              </button>
              <button 
                onClick={toggleMusic} 
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
                title={isMusicPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
              >
                {isMusicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-white/40" />}
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar relative">
          {viewMode === 'list' || isAdminMode ? (
            <QuestionManager 
              questions={questions} 
              onUpdate={setQuestions}
              readOnly={!isAdminMode}
            />
          ) : (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 items-center mb-4 text-center relative">
                {/* Logo as large background behind title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img 
                    src="/images/logo.png" 
                    alt="" 
                    className="w-48 h-48 object-contain opacity-20"
                  />
                </div>
                <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 uppercase drop-shadow-2xl relative z-10">
                  Hái hoa kiến thức
                </h1>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent relative z-10" />
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black relative z-10">
                  Chinh phục 60 đóa hoa tri thức
                </p>
              </div>
              <MainGame 
                items={flowerNumbers} 
                answered={answeredFlowers}
                onSelect={handleSelectFlower}
                onHover={() => playSound('hover')}
              />
            </div>
          )}
        </div>
      </div>

      <RightPanel 
        leaderboard={leaderboard} 
        timeLeft={timeLeft}
        timeConfig={timeConfig}
        isTimerRunning={isTimerRunning}
        onSetTime={(t) => {
          setTimeConfig(t);
          setTimeLeft(t);
        }}
        onStart={() => setIsTimerRunning(true)}
      />

      {activeQuestion && (
        <QuizModal 
          question={activeQuestion} 
          onAnswer={handleAnswer} 
          onClose={() => { setActiveQuestion(null); setSelectedFlower(null); }}
        />
      )}
    </div>
  );
}
