'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function MenuHighlight() {
  const t = useTranslations('menu');

  const featuredDishes = [
    {
      name: 'Kebab Classico',
      description: 'Carne di vitello e pollo, verdure grigliate, salsa tzatziki',
      price: '€7,50',
      color: 'var(--color-primary)',
    },
    {
      name: 'Kebab Spettacolare',
      description: 'Carne mista, bacon croccante, uovo, formaggio',
      price: '€10,00',
      color: 'var(--color-secondary)',
    },
    {
      name: 'Piada Romagnola',
      description: 'Crostino, rucola, prosciutto crudo di Parma',
      price: '€6,50',
      color: 'var(--color-accent)',
    },
  ];

  return (
    <section className="section bg-[var(--color-background)] relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-[var(--color-primary)] opacity-10 rounded-full -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[var(--color-secondary)] opacity-10 rounded-full translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--color-accent)] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-primary)] font-[family-name:var(--font-heading)] font-bold text-lg uppercase tracking-wider mb-4">
            {t('subtitle')}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full" />
        </motion.div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card group"
            >
              {/* Color bar */}
              <div
                className="h-3 w-full"
                style={{ backgroundColor: dish.color }}
              />
              
              <div className="p-6">
                {/* Icon placeholder */}
                <div
                  className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${dish.color}20` }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: dish.color }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl font-black text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {dish.name}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)] text-sm mb-4">
                  {dish.description}
                </p>
                <span
                  className="inline-block font-[family-name:var(--font-heading)] text-2xl font-black"
                  style={{ color: dish.color }}
                >
                  {dish.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/menu" className="btn-primary">
            {t('cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}