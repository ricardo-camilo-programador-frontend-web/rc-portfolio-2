import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  id: number;
  period: string;
  company: string;
  role: string;
  desc: string;
  tags: string[];
}

interface CareerProps {
  title: string;
  subtitle: string;
  present: string;
  timeline: TimelineItem[];
  isRtl: boolean;
}

export const Career: React.FC<CareerProps> = ({ title, subtitle, present, timeline, isRtl }) => {
  return (
    <section
      id="career"
      className="py-40 px-6 bg-[#0A0A0A] scroll-mt-20"
      aria-label="Career section"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif mb-20 text-center">
          {title} <span className="italic opacity-50">{subtitle}</span>
        </h2>

        <div className="space-y-12" dir={isRtl ? 'rtl' : 'ltr'}>
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 border-l border-[#E5D5C0]/10"
            >
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#E5D5C0]/20" />
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/40 mb-2">
                {item.period}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#E5D5C0] mb-1">
                {item.role}
              </h3>
              <div className="text-sm text-[#E5D5C0]/60 mb-3">{item.company}</div>
              <p className="text-[#E5D5C0]/50 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#E5D5C0]/10 text-[#E5D5C0]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
