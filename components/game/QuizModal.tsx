'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Question } from '@/types';
import { X, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizModalProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onClose: () => void;
}

export function QuizModal({ question, onAnswer, onClose }: QuizModalProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Fireworks effect for correct answer
  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Fire from left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff', '#ffa500'],
      });
      
      // Fire from right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff', '#ffa500'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Play sound effects
  const playSound = useCallback((type: 'correct' | 'wrong') => {
    const urls = {
      correct: 'https://assets.mixkit.co/sfx/preview/mixkit-small-crowd-ovation-475.mp3',
      wrong: 'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-failure-piano-473.mp3',
    };
    const audio = new Audio(urls[type]);
    audio.volume = 0.6;
    audio.play().catch(() => {});
  }, []);

  const handleSelect = (index: number) => {
    if (showResult) return;
    
    setSelectedIndex(index);
    const correct = index === question.correctIndex;
    setIsCorrect(correct);
    setShowResult(true);

    // Play sound and effects based on answer
    if (correct) {
      playSound('correct');
      fireConfetti();
    } else {
      playSound('wrong');
    }

    setTimeout(() => {
      onAnswer(correct);
    }, 2500);
  };

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedIndex === index
        ? 'border-blue-500 bg-blue-500/20'
        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20';
    }

    if (index === question.correctIndex) {
      return 'border-green-500 bg-green-500/20';
    }

    if (selectedIndex === index && index !== question.correctIndex) {
      return 'border-red-500 bg-red-500/20';
    }

    return 'border-white/10 bg-white/5 opacity-50';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-pop">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Câu hỏi #{question.id}</h2>
              <p className="text-xs text-white/40">Chọn đáp án đúng</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Question */}
        <div className="p-6 border-b border-white/5">
          <p className="text-lg text-white leading-relaxed">{question.text}</p>
        </div>

        {/* Options */}
        <div className="p-6 space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${getOptionStyle(index)}`}
            >
              <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                showResult && index === question.correctIndex
                  ? 'bg-green-500 text-white'
                  : showResult && selectedIndex === index && index !== question.correctIndex
                  ? 'bg-red-500 text-white'
                  : 'bg-white/10 text-white/60'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-left text-white/80">{option}</span>
              {showResult && index === question.correctIndex && (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              )}
              {showResult && selectedIndex === index && index !== question.correctIndex && (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </button>
          ))}
        </div>

        {/* Result Message */}
        {showResult && (
          <div className={`p-6 border-t border-white/5 ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
            <div className="flex items-center gap-3">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-8 h-8 text-green-500 animate-bounce" />
                  <div>
                    <p className="text-lg font-bold text-green-400">Tuyet voi! Chinh xac!</p>
                    <p className="text-sm text-green-400/60">Ban da tra loi dung +10 diem</p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="w-8 h-8 text-red-500 animate-pulse" />
                  <div>
                    <p className="text-lg font-bold text-red-400">Ohhh! Sai roi!</p>
                    <p className="text-sm text-red-400/60">
                      Dap an dung la: {String.fromCharCode(65 + question.correctIndex)}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
