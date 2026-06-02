'use client';

import React, { useState } from 'react';
import { Question } from '@/types';
import { Edit2, Check, X, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface QuestionManagerProps {
  questions: Question[];
  onUpdate: (questions: Question[]) => void;
  readOnly?: boolean;
}

export function QuestionManager({ questions, onUpdate, readOnly = false }: QuestionManagerProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Question | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredQuestions = questions.filter(q => 
    q.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.id.toString().includes(searchTerm)
  );

  const handleEdit = (question: Question) => {
    setEditingId(question.id);
    setEditData({ ...question });
  };

  const handleSave = () => {
    if (editData) {
      onUpdate(questions.map(q => q.id === editData.id ? editData : q));
      setEditingId(null);
      setEditData(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData(null);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
        <input
          type="text"
          placeholder="Tìm kiếm câu hỏi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
        />
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.map((question) => {
          const isEditing = editingId === question.id;
          const isExpanded = expandedId === question.id;

          return (
            <div
              key={question.id}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:bg-white/[0.07]"
            >
              {/* Question Header */}
              <div 
                className="flex items-center gap-4 p-4 cursor-pointer"
                onClick={() => !isEditing && setExpandedId(isExpanded ? null : question.id)}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-sm font-bold text-white/60 border border-white/10 flex-shrink-0">
                  {question.id}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white/80 truncate">{question.text}</p>
                </div>
                {!readOnly && !isEditing && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleEdit(question); }}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
                  >
                    <Edit2 className="w-4 h-4 text-white/60" />
                  </button>
                )}
                <button className="w-8 h-8 rounded-lg flex items-center justify-center">
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-white/40" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/40" />
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              {(isExpanded || isEditing) && (
                <div className="px-4 pb-4 border-t border-white/5 pt-4">
                  {isEditing && editData ? (
                    <div className="space-y-4">
                      {/* Question Text */}
                      <div>
                        <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
                          Nội dung câu hỏi
                        </label>
                        <textarea
                          value={editData.text}
                          onChange={(e) => setEditData({ ...editData, text: e.target.value })}
                          className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 resize-none"
                          rows={3}
                        />
                      </div>

                      {/* Options */}
                      <div>
                        <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-2">
                          Các đáp án
                        </label>
                        <div className="space-y-2">
                          {editData.options.map((option, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <button
                                onClick={() => setEditData({ ...editData, correctIndex: index })}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                                  editData.correctIndex === index
                                    ? 'bg-green-500 text-white'
                                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                                }`}
                              >
                                {String.fromCharCode(65 + index)}
                              </button>
                              <input
                                type="text"
                                value={option}
                                onChange={(e) => {
                                  const newOptions = [...editData.options];
                                  newOptions[index] = e.target.value;
                                  setEditData({ ...editData, options: newOptions });
                                }}
                                className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/20"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] text-white/30 mt-2">
                          * Nhấn vào chữ cái để chọn đáp án đúng
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={handleSave}
                          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl text-sm transition-all"
                        >
                          <Check className="w-4 h-4" />
                          Lưu
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white font-semibold py-2 px-4 rounded-xl text-sm transition-all border border-white/10"
                        >
                          <X className="w-4 h-4" />
                          Hủy
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                            question.correctIndex === index
                              ? 'bg-green-500/20 border border-green-500/30'
                              : 'bg-white/5 border border-white/5'
                          }`}
                        >
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                            question.correctIndex === index
                              ? 'bg-green-500 text-white'
                              : 'bg-white/10 text-white/40'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-sm text-white/80">{option}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
