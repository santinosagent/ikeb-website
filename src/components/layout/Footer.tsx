'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <footer className="bg-[#d67a10] text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo-con-motto.png"
                  alt="IKEB Logo con motto"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="font-[family-name:var(--font-body)] text-white opacity-90 leading-relaxed">
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
            <h3 className="font-[family-name:var(--font-heading)] text-xl mb-4 text-white">
              Menu
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-white opacity-90 hover:opacity-100 hover:text-white transition-all duration-200"
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
            <h3 className="font-[family-name:var(--font-heading)] text-xl mb-4 text-white">
              Contatti
            </h3>
            <ul className="space-y-2 font-[family-name:var(--font-body)] text-white opacity-90">
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
          className="mt-12 pt-8 border-t border-white opacity-30 text-center"
        >
          <p className="font-[family-name:var(--font-body)] text-sm">
            {t('copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}