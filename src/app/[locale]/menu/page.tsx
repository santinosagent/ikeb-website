'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'kebab' | 'piadine' | 'panini' | 'bevande';

export default function MenuPage() {
  const t = useTranslations('menu');
  const [activeCategory, setActiveCategory] = useState<Category>('kebab');

  const categories: Category[] = ['kebab', 'piadine', 'panini', 'bevande'];

  const getCategoryItems = (category: Category) => {
    const items = t.raw(`items.${category}`) as Array<{ name: string; description?: string; price: string }>;
    return items || [];
  };

  const categoryColors: Record<Category, string> = {
    kebab: 'var(--color-primary)',
    piadine: 'var(--color-secondary)',
    panini: 'var(--color-accent)',
    bevande: 'var(--color-quaternary)',
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-secondary)] opacity-10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[var(--color-accent)] opacity-10 rounded-lg rotate-12" />
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

      {/* Category Tabs */}
      <section className="bg-[var(--color-background)] sticky top-20 z-40 border-b border-[var(--color-border)]">
        <div className="container-custom">
          <div className="flex overflow-x-auto py-4 gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 font-[family-name:var(--font-heading)] font-bold text-lg rounded-lg border-2 border-[var(--color-border)] transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'shadow-lg'
                    : 'bg-transparent hover:bg-[var(--color-surface)]'
                }`}
                style={{
                  backgroundColor: activeCategory === category ? categoryColors[category] : 'transparent',
                  color: activeCategory === category ? 'white' : 'var(--color-text-primary)',
                }}
              >
                {t(`categories.${category}`)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section bg-[var(--color-background)] min-h-[60vh]">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {getCategoryItems(activeCategory).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="card p-6 flex justify-between items-start gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-black text-[var(--color-text-primary)] mb-2">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-text-secondary)]">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span
                    className="font-[family-name:var(--font-heading)] text-2xl font-black whitespace-nowrap"
                    style={{ color: categoryColors[activeCategory] }}
                  >
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4">
              {t('categories.promozioni')}
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Menu Kebab + Bibita', price: '€9,00', description: 'Kebab classico + bibita 33cl' },
              { name: 'Piada + Bibita', price: '€8,00', description: 'Piada a scelta + bibita 33cl' },
              { name: '2 Kebab al prezzo di 1', price: '€7,50', description: 'Validi dal lunedì al mercoledì' },
            ].map((promo, index) => (
              <motion.div
                key={promo.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 border-4 border-[var(--color-accent)]"
              >
                <div className="absolute -top-3 -right-3 bg-[var(--color-accent)] text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] font-bold px-3 py-1 rounded-full text-sm">
                  OFFERTA
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-black text-[var(--color-text-primary)] mb-2">
                  {promo.name}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-text-secondary)] mb-4">
                  {promo.description}
                </p>
                <span className="font-[family-name:var(--font-heading)] text-3xl font-black text-[var(--color-primary)]">
                  {promo.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}