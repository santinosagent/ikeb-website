'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Shapes - Bauhaus Style */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle - top right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--color-secondary)] rounded-full opacity-20"
        />
        
        {/* Medium circle - bottom left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-40 -left-32 w-80 h-80 bg-[var(--color-primary)] rounded-full opacity-20"
        />
        
        {/* Rectangle - center */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-accent)] opacity-10 rotate-45"
        />
        
        {/* Small accent circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-32 left-1/4 w-24 h-24 bg-[var(--color-tertiary)] rounded-full opacity-40"
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-[var(--color-quaternary)] rounded-full opacity-40"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-[var(--color-primary)] text-white font-[family-name:var(--font-heading)] text-sm font-bold rounded-full uppercase tracking-wider">
                Kebab Italiano
              </span>
            </motion.div>

            <h1 className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6">
              <span className="block text-[var(--color-text-primary)]">{t('title')}</span>
              <span className="block gradient-text">{t('titleAccent')}</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-[family-name:var(--font-body)] text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8 max-w-lg"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/menu" className="btn-primary">
                {t('cta')}
              </Link>
              <Link href="/contattaci" className="btn-secondary">
                {t('ctaSecondary')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Content - Abstract Kebab Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Main kebab representation - geometric shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Vertical stack of geometric shapes */}
                <div className="flex flex-col items-center gap-2">
                  {/* Top cone */}
                  <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-[var(--color-primary)]" />
                  
                  {/* Meat layers - rectangles */}
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-24 h-8 bg-[var(--color-primary)] rounded-sm"
                    />
                    <motion.div
                      animate={{ scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                      className="w-24 h-8 bg-[var(--color-secondary)] rounded-sm"
                    />
                  </div>
                  
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                      className="w-28 h-8 bg-[var(--color-primary)] rounded-sm"
                    />
                    <motion.div
                      animate={{ scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="w-28 h-8 bg-[var(--color-accent)] rounded-sm"
                    />
                  </div>
                  
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                      className="w-20 h-8 bg-[var(--color-secondary)] rounded-sm"
                    />
                    <motion.div
                      animate={{ scaleX: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-20 h-8 bg-[var(--color-tertiary)] rounded-sm"
                    />
                  </div>
                  
                  {/* Bottom cone */}
                  <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[60px] border-t-[var(--color-primary)]" />
                </div>
              </motion.div>

              {/* Decorative elements around */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 w-16 h-16 bg-[var(--color-accent)] rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-20 left-10 w-12 h-12 bg-[var(--color-secondary)] rounded-full opacity-40"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--color-text-primary)] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[var(--color-primary)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}