'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const navItems = [
  { href: '/', key: 'nav.home' },
  { href: '/research', key: 'nav.research' },
  { href: '/team', key: 'nav.team' },
  { href: '/publications', key: 'nav.publications' },
  { href: '/join-us', key: 'nav.join' },
];

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const toggleLocale = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    setLocale(newLocale);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#0F131C]/65 backdrop-blur-sm">
      <nav className="mx-auto max-w-5xl px-8 py-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[16px] transition-colors pb-1 ${
                  pathname === item.href
                    ? 'text-white font-bold after:w-full'
                    : 'text-white/80 hover:text-white'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-out ${
                  pathname === item.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <button
              onClick={toggleLocale}
              className="text-[16px] text-white/60 hover:text-white transition-colors"
            >
              {locale === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
