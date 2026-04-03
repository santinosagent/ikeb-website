'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function ChiSiamoPreview() {
  const t = useTranslations('chiSiamo');

  const values = [
    {
      key: 'quality',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: 'tradition',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      key: 'passion',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-[var(--color-surface)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-secondary)] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[var(--color-primary)] font-[family-name:var(--font-heading)] font-bold text-lg uppercase tracking-wider mb-4">
              {t('subtitle')}
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6">
              {t('title')}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--color-background)] rounded-full mb-3 text-[var(--color-primary)]">
                    {value.icon}
                  </div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--color-text-primary)]">
                    {t(`values.${value.key}.title`)}
                  </h4>
                </motion.div>
              ))}
            </div>

            <Link href="/chi-siamo" className="btn-primary">
              {t('cta')}
            </Link>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Geometric composition */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main rectangle */}
                <div className="w-4/5 h-4/5 bg-[var(--color-primary)] rounded-lg rotate-3" />
                
                {/* Secondary rectangle */}
                <div className="absolute w-3/5 h-3/5 bg-[var(--color-secondary)] rounded-lg -rotate-2" />
                
                {/* Circle overlay */}
                <div className="absolute w-1/2 h-1/2 bg-[var(--color-accent)] rounded-full opacity-80" />
                
                {/* Text overlay */}
                <div className="absolute text-center p-8">
                  <span className="font-[family-name:var(--font-heading)] text-6xl md:text-7xl font-black text-[var(--color-text-primary)]">
                    IKEB
                  </span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--color-tertiary)] rounded-lg"
              />
              <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--color-quaternary)] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}