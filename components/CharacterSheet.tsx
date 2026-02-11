
import React from 'react';
import { Character } from '../types';
import { Shield, Zap, Heart, Star, Package, Award } from 'lucide-react';

interface Props {
  character: Character;
}

export const CharacterSheet: React.FC<Props> = ({ character }) => {
  const xpProgress = (character.xp % 100);
  
  return (
    <div className="glass rounded-xl p-6 rpg-shadow border-l-4 border-red-600">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-black flex items-center justify-center border-2 border-red-500/50">
          <span className="text-2xl font-cinzel font-bold">{character.name[0]}</span>
        </div>
        <div>
          <h2 className="text-xl font-cinzel font-bold text-white tracking-widest">{character.name}</h2>
          <p className="text-red-500 text-xs font-mono uppercase tracking-tighter">{character.archetype} • Nível {character.level}</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* HP Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="flex items-center gap-1"><Heart size={12} className="text-red-500"/> VITALIDADE</span>
            <span>{character.hp}/{character.maxHp}</span>
          </div>
          <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600 transition-all duration-500" 
              style={{ width: `${(character.hp / character.maxHp) * 100}%` }}
            />
          </div>
        </div>

        {/* XP Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="flex items-center gap-1"><Star size={12} className="text-yellow-500"/> EXPERIÊNCIA</span>
            <span>{character.xp} total</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-500 transition-all duration-500" 
              style={{ width: `${xpProgress}%` }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
          <StatItem label="FOR" value={character.stats.strength} icon={<Shield size={14}/>} />
          <StatItem label="INT" value={character.stats.intelligence} icon={<Zap size={14}/>} />
          <StatItem label="CHA" value={character.stats.charisma} icon={<Award size={14}/>} />
          <StatItem label="SOR" value={character.stats.luck} icon={<Star size={14}/>} />
        </div>

        {/* Inventory */}
        <div className="pt-4">
          <h3 className="text-xs font-mono mb-2 flex items-center gap-1 uppercase opacity-50"><Package size={14}/> Inventário</h3>
          <div className="flex flex-wrap gap-2">
            {character.inventory.length > 0 ? character.inventory.map((item, i) => (
              <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">
                {item}
              </span>
            )) : <span className="text-[10px] text-zinc-500 italic">Vazio</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<{ label: string; value: number; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
    <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">{icon} {label}</span>
    <span className="text-sm font-cinzel font-bold text-white">{value}</span>
  </div>
);
