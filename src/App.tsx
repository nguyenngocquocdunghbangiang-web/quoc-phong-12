/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, CheckCircle2, XCircle, Trophy } from 'lucide-react';

interface QuizItem {
  question: string;
  options: string[];
  correct: number;
}

const quizData: QuizItem[] = [
  {
    question: "An Giang có vị trí chiến lược quan trọng do nằm ở khu vực nào của Tổ quốc?",
    options: ["Đông Nam Bộ", "Tây Bắc", "Tây Nam Bộ", "Duyên hải Miền Trung"],
    correct: 2 
  },
  {
    question: "Đặc điểm địa hình nào KHÔNG phải của An Giang gây khó khăn cho kẻ thù?",
    options: ["Sông ngòi chằng chịt", "Vùng núi như Núi Cấm", "Sa mạc rộng lớn", "Kênh rạch đan xen"],
    correct: 2 
  },
  {
    question: "Anh hùng Lực lượng vũ trang nhân dân Nguyễn Thành Kính thường được nhân dân gọi với tên thân mật là gì?",
    options: ["Hai Kính", "Ba Kính", "Tư Kính", "Năm Kính"],
    correct: 1 
  },
  {
    question: "Trận đánh tiêu biểu gây thiệt hại lớn cho địch gắn liền với tên tuổi Anh hùng Ba Kính diễn ra năm 1966 là trận nào?",
    options: ["Trận Ấp Bắc", "Trận Núi Sam", "Trận Tức Dụp", "Trận Rọc Lá"],
    correct: 3 
  },
  {
    question: "Lực lượng nào KHÔNG tham gia vào truyền thống đánh giặc của An Giang theo bài học?",
    options: ["Bộ đội chủ lực", "Quân viễn chinh", "Du kích xã ấp", "Dân quân tự vệ"],
    correct: 1 
  },
  {
    question: "Trong thời bình, học sinh thể hiện lòng yêu nước bằng cách nào?",
    options: ["Bỏ học đi làm kinh tế", "Học tập tốt, rèn luyện sức khỏe", "Chỉ cần chơi game giỏi", "Không cần quan tâm luật pháp"],
    correct: 1 
  }
];

export default function App() {
  const [openedCrates, setOpenedCrates] = useState<number[]>([]);
  const [currentCrate, setCurrentCrate] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const handleOpenCrate = (index: number) => {
    if (openedCrates.includes(index)) return;
    setCurrentCrate(index);
    setSelectedOption(null);
  };

  const handleAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);
    setOpenedCrates(prev => [...prev, currentCrate!]);
  };

  const closeModal = () => {
    setCurrentCrate(null);
    setSelectedOption(null);
    if (openedCrates.length === quizData.length) {
      setTimeout(() => setIsGameComplete(true), 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 max-w-5xl mx-auto">
      {/* HEADER SECTION */}
      <header className="w-full bg-black/40 border-2 border-army-green p-4 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 mb-8 shadow-2xl">
        <div className="text-khaki font-black text-xl md:text-2xl tracking-widest uppercase text-center md:text-left">
          ✍️ THỰC HIỆN: NGUYỄN NGỌC QUỐC DŨNG
        </div>
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-khaki overflow-hidden bg-white shadow-[0_0_20px_rgba(240,230,140,0.5)]">
            <img 
              src="/logo.png" 
              alt="Logo Tổ GDTC-GDQP&AN" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback icon if logo.png doesn't exist
                (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/initials/svg?seed=VTT&backgroundColor=4A5D23';
              }}
            />
          </div>
        </div>
      </header>

      {/* TITLES */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-impact text-khaki uppercase tracking-widest drop-shadow-2xl mb-4">
          Hòm Quân Nhu Bí Ẩn
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto italic border-b border-army-green pb-2">
          Chuyên đề: Truyền thống đánh giặc giữ nước của địa phương An Giang
        </p>
      </div>

      {/* CRATE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {quizData.map((_, index) => (
          <Crate 
            key={index}
            index={index}
            isOpened={openedCrates.includes(index)}
            onClick={() => handleOpenCrate(index)}
          />
        ))}
      </div>

      {/* QUIZ MODAL */}
      <AnimatePresence>
        {currentCrate !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={selectedOption !== null ? closeModal : undefined}
            />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              className="relative w-full max-w-xl bg-army-green border-4 border-khaki rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div className="text-khaki font-black text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                <Star size={16} fill="currentColor" /> Hòm Quân Nhu {currentCrate + 1}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                {quizData[currentCrate].question}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizData[currentCrate].options.map((opt, i) => {
                  const isCorrect = i === quizData[currentCrate].correct;
                  const isSelected = selectedOption === i;
                  
                  let buttonClass = "w-full p-4 text-left font-bold rounded-lg transition-all border-2 ";
                  if (selectedOption === null) {
                    buttonClass += "bg-white text-army-dark hover:bg-khaki hover:border-black cursor-pointer border-transparent";
                  } else {
                    if (isCorrect) {
                      buttonClass += "bg-green-600 text-white border-green-900 animate-pulse";
                    } else if (isSelected) {
                      buttonClass += "bg-red-600 text-white border-red-900 animate-shake";
                    } else {
                      buttonClass += "bg-gray-200 text-gray-500 border-transparent opacity-50";
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={selectedOption !== null}
                      onClick={() => handleAnswer(i)}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {selectedOption !== null && isCorrect && <CheckCircle2 size={20} />}
                        {selectedOption !== null && isSelected && !isCorrect && <XCircle size={20} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={closeModal}
                  className="mt-8 w-full bg-khaki text-army-dark font-black py-4 rounded-lg uppercase tracking-wider hover:bg-yellow-200 transition-colors shadow-lg"
                >
                  Thu thập hòm & Tiếp tục
                </motion.button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WIN OVERLAY */}
      <AnimatePresence>
        {isGameComplete && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md"
            >
              <Trophy size={100} className="text-khaki mx-auto mb-6 drop-shadow-[0_0_15px_rgba(240,230,140,0.8)]" />
              <h2 className="text-4xl font-impact text-khaki uppercase mb-4">
                Chiến dịch thành công!
              </h2>
              <p className="text-xl text-white mb-8">
                Bạn đã thu thập toàn bộ hòm quân nhu và nắm vững truyền thống lịch sử quê hương An Giang.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-khaki text-army-dark font-black px-10 py-4 rounded-full uppercase tracking-tighter hover:scale-105 transition-transform"
              >
                Làm lại nhiệm vụ
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-auto pt-10 text-army-green/60 text-xs font-mono uppercase tracking-widest text-center">
        &copy; 2026 - Tổ GDTC-GDQP&AN - THPT Võ Thành Trinh
      </footer>
    </div>
  );
}

function Crate({ index, isOpened, onClick }: { index: number; isOpened: boolean; onClick: () => void }) {
  return (
    <motion.div
      whileHover={!isOpened ? { y: -10, scale: 1.05 } : {}}
      whileTap={!isOpened ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={`
        relative h-40 flex flex-col items-center justify-center cursor-pointer rounded-md border-4 transition-all overflow-hidden
        ${isOpened 
          ? 'bg-gradient-to-br from-gray-600 to-gray-800 border-black opacity-60 shadow-inner' 
          : 'bg-gradient-to-br from-crate-olive to-crate-dark border-army-dark shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:border-khaki'
        }
      `}
    >
      {/* STAR BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Star size={120} fill="white" stroke="none" />
      </div>

      {/* DECORATIVE STRIPE */}
      <div className="absolute left-3 top-4 bottom-4 w-1 bg-khaki/20 rounded-full" />

      {/* CONTENT */}
      <div className={`
        text-4xl font-impact tracking-tighter z-10 transition-all 
        ${isOpened ? 'text-gray-900 opacity-20' : 'text-khaki drop-shadow-md'}
      `}>
        0{index + 1}
      </div>

      {isOpened && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="border-4 border-red-600 px-3 py-1 rounded text-red-600 font-impact text-xl rotate-[-15deg] bg-black/60 shadow-lg">
            ĐÃ MỞ
          </div>
        </div>
      )}
    </motion.div>
  );
}
