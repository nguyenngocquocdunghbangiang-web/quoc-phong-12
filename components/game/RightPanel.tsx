'use client';

import React from 'react';
import { PlayerScore } from '@/types';
import { Trophy, Timer, Play, Crown, Medal, Award } from 'lucide-react';

interface RightPanelProps {
  leaderboard: PlayerScore[];
  timeLeft: number;
  timeConfig: number;
  isTimerRunning: boolean;
  onSetTime: (time: number) => void;
  onStart: () => void;
}

export function RightPanel({ 
  leaderboard, 
  timeLeft, 
  timeConfig, 
  isTimerRunning, 
  onSetTime, 
  onStart 
}: RightPanelProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (timeLeft / timeConfig) * 100;

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-4 h-4 text-yellow-400" />;
      case 2: return <Medal className="w-4 h-4 text-gray-300" />;
      case 3: return <Award className="w-4 h-4 text-amber-600" />;
      default: return <span className="text-xs font-bold text-white/40">{rank}</span>;
    }
  };

  const getRankGradient = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30';
      case 2: return 'from-gray-400/20 to-gray-500/20 border-gray-400/30';
      case 3: return 'from-amber-600/20 to-orange-600/20 border-amber-600/30';
      default: return 'from-white/5 to-white/5 border-white/10';
    }
  };

  return (
    <aside className="w-80 glass-panel flex flex-col">
      {/* Timer Section */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
            <Timer className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">THỜI GIAN</h2>
            <p className="text-[10px] text-white/40 uppercase tracking-wider">Đếm ngược</p>
          </div>
        </div>

        {/* Timer Display */}
        <div className="relative bg-black/30 rounded-2xl p-6 border border-white/10 overflow-hidden">
          {/* Progress Bar Background */}
          <div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
          
          <div className="text-center">
            <span className={`text-5xl font-black font-mono tracking-tight ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Timer Controls */}
        <div className="flex gap-2 mt-4">
          {[30, 60, 90, 120].map((time) => (
            <button
              key={time}
              onClick={() => onSetTime(time)}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                timeConfig === time 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {time}s
            </button>
          ))}
        </div>

        <button
          onClick={onStart}
          disabled={isTimerRunning}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all active:scale-[0.98] shadow-lg shadow-green-500/20 disabled:shadow-none"
        >
          <Play className="w-4 h-4" />
          {isTimerRunning ? 'Đang chạy...' : 'Bắt đầu'}
        </button>
      </div>

      {/* Leaderboard Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white tracking-wide">BẢNG XẾP HẠNG</h2>
              <p className="text-[10px] text-white/40 uppercase tracking-wider">Top điểm cao</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6">
          {leaderboard.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-white/20" />
              </div>
              <p className="text-white/30 text-sm">Chưa có điểm</p>
              <p className="text-white/20 text-xs mt-1">Trả lời đúng để ghi điểm</p>
            </div>
          ) : (
            <div className="space-y-2">
              {leaderboard.map((player, index) => (
                <div
                  key={player.name}
                  className={`flex items-center gap-3 p-3 bg-gradient-to-r ${getRankGradient(index + 1)} rounded-xl border transition-all animate-pop`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center">
                    {getRankIcon(index + 1)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{player.name}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-white">{player.score}</span>
                    <span className="text-xs text-white/40 ml-1">điểm</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
