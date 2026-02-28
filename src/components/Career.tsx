import type { FC } from 'react';
import { memo } from 'react';

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

export const Career: FC<CareerProps> = memo(({ title, subtitle, present, timeline, isRtl }) => {
  return (
    <section
      id="career"
      className="py-40 px-6 bg-[#0A0A0A] scroll-mt-20"
      aria-label="Career section"
      style={{ contain: 'layout style paint' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif mb-20 text-center" style={{ willChange: 'transform' }}>
          {title} <span className="italic opacity-50">{subtitle}</span>
        </h2>

        <div className="space-y-12" dir={isRtl ? 'rtl' : 'ltr'}>
          {timeline.map((item, index) => (
            <div
              key={item.id}
              className="relative pl-8 md:pl-12 border-l border-[#E5D5C0]/10"
              style={{ contain: 'layout style' }}
            >
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-[#E5D5C0]/20" />
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5D5C0]/70 mb-2">
                {item.period}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#E5D5C0] mb-1">
                {item.role}
              </h3>
              <div className="text-sm text-[#E5D5C0]/80 mb-3">{item.company}</div>
              <p className="text-[#E5D5C0]/80 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#E5D5C0]/10 text-[#E5D5C0]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Career.displayName = 'Career';
