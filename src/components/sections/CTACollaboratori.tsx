'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function CTACollaboratori() {
  const t = useTranslations('cta');

  return (
    <section className="section bg-dominant-orange relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 border-4 border-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-64 h-64 border-4 border-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"
        />
        
        {/* Accent shapes */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-white opacity-20 rounded-lg rotate-12" />
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-white opacity-20 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8"
          >
            <svg
              className="w-10 h-10 text-[#f08e1e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </motion.div>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            {t('title')}
          </h2>
          
          <p className="font-[family-name:var(--font-body)] text-xl text-white opacity-90 mb-8 leading-relaxed">
            {t('description')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contattaci" className="btn-primary bg-white text-[#f08e1e] hover:bg-gray-100">
              {t('button')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}