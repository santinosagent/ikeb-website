'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ContattaciPage() {
  const t = useTranslations('contattaci');
  const tForm = useTranslations('contattaci.form');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-40 h-40 bg-[var(--color-primary)] opacity-10 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-[var(--color-secondary)] opacity-10 rounded-lg rotate-12" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-[var(--color-primary)] font-[family-name:var(--font-heading)] font-bold text-lg uppercase tracking-wider mb-4">
              {t('subtitle')}
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-black text-[var(--color-text-primary)] mb-6">
              {t('title')}
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card p-8">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-black text-[var(--color-text-primary)] mb-6">
                  Inviaci un messaggio
                </h2>

                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                  >
                    <p className="font-[family-name:var(--font-body)] font-medium">
                      {tForm('success')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-[family-name:var(--font-body)] font-medium text-[var(--color-text-primary)] mb-2">
                        {tForm('name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border-2 border-[var(--color-border)] rounded-lg font-[family-name:var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-[family-name:var(--font-body)] font-medium text-[var(--color-text-primary)] mb-2">
                        {tForm('email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border-2 border-[var(--color-border)] rounded-lg font-[family-name:var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-[family-name:var(--font-body)] font-medium text-[var(--color-text-primary)] mb-2">
                        {tForm('phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border-2 border-[var(--color-border)] rounded-lg font-[family-name:var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-[family-name:var(--font-body)] font-medium text-[var(--color-text-primary)] mb-2">
                        {tForm('message')} *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border-2 border-[var(--color-border)] rounded-lg font-[family-name:var(--font-body)] text-[var(--color-text-primary)] bg-[var(--color-surface)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      {tForm('submit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="card p-8">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-black text-[var(--color-text-primary)] mb-6">
                  Informazioni di contatto
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)]">Indirizzo</h3>
                      <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                        {t('info.address')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)]">Telefono</h3>
                      <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                        {t('info.phone')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-accent)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)]">Email</h3>
                      <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                        {t('info.email')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card p-8">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-black text-[var(--color-text-primary)] mb-6">
                  {t('orari.title')}
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-border)]">
                    <span className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                      {t('orari.lunGio')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-border)]">
                    <span className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                      {t('orari.venSab')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                      {t('orari.domenica')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-[var(--color-surface)]">
        <div className="w-full h-full bg-[var(--color-background)] flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-20 h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-black text-[var(--color-text-primary)] mb-2">
              Vieni a trovarci
            </h3>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
              {t('info.address')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}