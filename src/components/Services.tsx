import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Zap } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

interface ServicesProps {
  s1: { title: string; desc: string };
  s2: { title: string; desc: string };
  s3: { title: string; desc: string };
  isRtl: boolean;
}

export const Services: React.FC<ServicesProps> = ({ s1, s2, s3, isRtl }) => {
  return (
    <section
      id="services"
      className="py-40 px-6 scroll-mt-20"
      aria-label="Services section"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12" dir={isRtl ? 'rtl' : 'ltr'}>
        <ServiceCard
          num="01"
          title={s1.title}
          desc={s1.desc}
          icon={<Layers size={22} />}
          isRtl={isRtl}
        />
        <ServiceCard
          num="02"
          title={s2.title}
          desc={s2.desc}
          icon={<Code size={22} />}
          isRtl={isRtl}
        />
        <ServiceCard
          num="03"
          title={s3.title}
          desc={s3.desc}
          icon={<Zap size={22} />}
          isRtl={isRtl}
        />
      </div>
    </section>
  );
};
