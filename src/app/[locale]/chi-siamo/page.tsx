'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function ChiSiamoPage() {
  const t = useTranslations('chiSiamo');

  const values = [
    {
      key: 'quality',
      color: 'var(--color-primary)',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: 'tradition',
      color: 'var(--color-secondary)',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      key: 'passion',
      color: 'var(--color-accent)',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const team = [
    { role: 'Fondatore', name: 'Marco' },
    { role: 'Chef', name: 'Alessandro' },
    { role: 'Responsabile', name: 'Giulia' },
  ];

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

      {/* Story Section */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-6">
                La Nostra Storia
              </h2>
              <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {t('description')}
              </p>
              <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Il nostro nome, IKEB, nasce dalla fusione di "Italiano" e "Kebab", rappresentando la nostra missione: portare l'eccellenza della cucina italiana nel mondo del kebab. Ogni giorno selezioniamo personalmente gli ingredienti, lavoriamo la carne con cura e prepariamo le nostre salse seguendo ricette segrete tramandate nel tempo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-[var(--color-primary)] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl font-black text-white">
                      IKEB
                    </span>
                    <p className="text-white opacity-80 mt-4">Dal 2020 a Pisa</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-[var(--color-accent)] rounded-full opacity-60" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[var(--color-secondary)] rounded-lg opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4">
              {t('values.title')}
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                  style={{ backgroundColor: `${value.color}20`, color: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-black text-[var(--color-text-primary)] mb-4">
                  {t(`values.${value.key}.title`)}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                  {t(`values.${value.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4">
              Il Nostro Team
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                  <span className="font-[family-name:var(--font-heading)] text-4xl font-black text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-black text-[var(--color-text-primary)]">
                  {member.name}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-text-primary)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-black text-[var(--color-surface)] mb-6">
              Vuoi far parte del progetto?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xl text-[var(--color-background)] opacity-80 mb-8 max-w-2xl mx-auto">
              Stiamo cercando persone appassionate per far crescere insieme il progetto IKEB.
            </p>
            <Link href="/contattaci" className="btn-primary bg-[var(--color-accent)] text-[var(--color-text-primary)]">
              {t('cta')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}