import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  isRtl: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  num,
  title,
  desc,
  icon,
  isRtl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="group p-8 glass rounded-2xl accent-border hover:border-[#E5D5C0]/30 transition-all"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5D5C0]/40">
          {num}
        </span>
        <div className="text-[#E5D5C0]/60 group-hover:text-[#E5D5C0] transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#E5D5C0]">{title}</h3>
      <p className="text-[#E5D5C0]/50 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};
