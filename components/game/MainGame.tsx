'use client';

import React from 'react';
import { FLOWER_EMOJIS, FLOWER_COLORS } from '@/constants';

interface MainGameProps {
  items: number[];
  answered: Set<number>;
  onSelect: (num: number) => void;
  onHover: () => void;
}

export function MainGame({ items, answered, onSelect, onHover }: MainGameProps) {
  return (
    <div className="flower-grid">
      {items.map((num, index) => {
        const isAnswered = answered.has(num);
        const emoji = FLOWER_EMOJIS[num % FLOWER_EMOJIS.length];
        const color = FLOWER_COLORS[num % FLOWER_COLORS.length];
        
        return (
          <div
            key={num}
            className={`flower-item animate-pop ${isAnswered ? 'answered' : ''}`}
            style={{ 
              animationDelay: `${index * 20}ms`,
              color: color
            }}
            onClick={() => !isAnswered && onSelect(num)}
            onMouseEnter={() => !isAnswered && onHover()}
          >
            <span 
              className="flower-icon"
              style={{ 
                filter: isAnswered ? 'none' : `drop-shadow(0 0 10px ${color}40)` 
              }}
            >
              {emoji}
            </span>
            <span className="flower-number">{num}</span>
          </div>
        );
      })}
    </div>
  );
}
