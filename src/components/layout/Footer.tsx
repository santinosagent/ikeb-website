'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const links = [
    { href: '/', label: tNav('home') },
    { href: '/chi-siamo', label: tNav('chiSiamo') },
    { href: '/menu', label: tNav('menu') },
    { href: '/contattaci', label: tNav('contattaci') },
  ];

  return (
    <footer className="bg-[var(--color-text-primary)] text-[var(--color-surface)] py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-[var(--color-primary)] rounded-full">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] text-2xl font-black">
                IKEB
              </span>
            </Link>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-background)] opacity-80 leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-[family-name:var(--font-heading)] text-xl mb-4 text-[var(--color-accent)]">
              Menu
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-[var(--color-background)] opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-heading)] text-xl mb-4 text-[var(--color-accent)]">
              Contatti
            </h3>
            <ul className="space-y-2 font-[family-name:var(--font-body)] text-[var(--color-background)] opacity-80">
              <li>Via Roma, 123 - Pisa</li>
              <li>+39 050 123 4567</li>
              <li>info@ikeb.it</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[var(--color-background)] opacity-30 text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-sm">
            {t('copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}