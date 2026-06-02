'use client';

import React, { useState } from 'react';
import { Student } from '@/types';
import { Users, Plus, GraduationCap, Sparkles } from 'lucide-react';

interface LeftPanelProps {
  students: Student[];
  onAdd: (className: string, studentName: string) => void;
}

export function LeftPanel({ students, onAdd }: LeftPanelProps) {
  const [className, setClassName] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (className.trim() && studentName.trim()) {
      onAdd(className.trim(), studentName.trim());
      setClassName('');
      setStudentName('');
    }
  };

  return (
    <aside className="w-80 glass-panel flex flex-col border-r border-white/5">
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">HỌC SINH</h2>
            <p className="text-[10px] text-white/40 uppercase tracking-wider">Danh sách tham gia</p>
          </div>
        </div>
      </div>

      {/* Add Student Form */}
      <form onSubmit={handleSubmit} className="p-4 border-b border-white/5">
        <div className="space-y-3">
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Tên lớp (VD: 10A1)"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
            />
          </div>
          <div className="relative">
            <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Tên học sinh"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20"
          >
            <Plus className="w-4 h-4" />
            Thêm học sinh
          </button>
        </div>
      </form>

      {/* Student List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
        {students.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white/20" />
            </div>
            <p className="text-white/30 text-sm">Chưa có học sinh</p>
            <p className="text-white/20 text-xs mt-1">Thêm học sinh để bắt đầu</p>
          </div>
        ) : (
          <div className="space-y-2">
            {students.map((student, index) => (
              <div
                key={student.id}
                className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all group animate-pop"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-sm font-bold text-white/60 border border-white/10">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{student.name}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wide">{student.className}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/40">Tổng số học sinh</span>
          <span className="text-white font-bold">{students.length}</span>
        </div>
      </div>
    </aside>
  );
}
