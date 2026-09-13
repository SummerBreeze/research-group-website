'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-26">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-[28px] font-bold text-[#171717] leading-tight">
                {t('home.title')}
              </h1>
              <p className="mt-2 text-[15px] text-[#555555]">
                {t('home.subtitle')}
              </p>
              <p className="mt-6 text-[14px] leading-relaxed text-[#555555]">
                {t('home.intro1')}
                <strong className="text-[#171717]">{t('home.intro1Bold1')}</strong>、
                <strong className="text-[#171717]">{t('home.intro1Bold2')}</strong>、
                <strong className="text-[#171717]">{t('home.intro1Bold3')}</strong>以及
                <strong className="text-[#171717]">{t('home.intro1Bold4')}</strong>
                {t('home.intro1End')}
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#555555]">
                {t('home.intro2Start')}
                <strong className="text-[#171717]">{t('home.intro2Bold1')}</strong>、
                <strong className="text-[#171717]">{t('home.intro2Bold2')}</strong>、
                <strong className="text-[#171717]">{t('home.intro2Bold3')}</strong>以及
                <strong className="text-[#171717]">{t('home.intro2Bold4')}</strong>
                {t('home.intro2End')}
              </p>
              <div className="mt-8 flex gap-3">
                <Link
                  href="/research"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#A61B1B] bg-white px-6 py-2 text-[13px] font-medium text-[#A61B1B] transition-colors hover:bg-[#A61B1B] hover:text-white"
                >
                  {t('home.learnMore')}
                </Link>
                <Link
                  href="/join-us"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#171717] bg-white px-6 py-2 text-[13px] font-medium text-[#171717] transition-colors hover:bg-[#171717] hover:text-white"
                >
                  {t('home.joinUs')}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#F7F7F7] to-[#F2F0EE] flex items-center justify-center">
                <div className="text-center text-[#888888]">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">图片占位</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="border-t border-gray-200 bg-[#F7F7F7] py-10">
        <div className="mx-auto max-w-6xl px-26">
          <h2 className="text-[32px] font-bold text-[#171717] mb-10">{t('home.contactUs')}</h2>

          <div className="space-y-6">
            {/* Address 1 - 石牌校区 */}
            <div className="flex gap-4">
              <div className="w-1 bg-[#A61B1B] flex-shrink-0"></div>
              <div>
                <p className="text-[15px] leading-relaxed text-[#171717]">
                  <span className="font-medium">{t('home.addressLabel')}</span>{t('home.address1')}
                </p>
                {t('home.address1En') && (
                  <p className="mt-1 text-[15px] leading-relaxed text-[#555555]">
                    {t('home.address1En')}
                  </p>
                )}
              </div>
            </div>

            {/* Address 2 - 番禺校区 */}
            <div className="flex gap-4">
              <div className="w-1 bg-[#A61B1B] flex-shrink-0"></div>
              <div>
                <p className="text-[15px] leading-relaxed text-[#171717]">
                  <span className="font-medium">{t('home.addressLabel')}</span>{t('home.address2')}
                </p>
                {t('home.address2En') && (
                  <p className="mt-1 text-[15px] leading-relaxed text-[#555555]">
                    {t('home.address2En')}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-1 bg-[#A61B1B] flex-shrink-0"></div>
              <div>
                <p className="text-[15px] leading-relaxed text-[#171717]">
                  <span className="font-medium">{t('home.emailLabel')}</span>
                  <a href="mailto:laijunzuo@jnu.edu.cn" className="text-[#A61B1B] hover:text-[#861616] hover:underline">
                    laijunzuo@jnu.edu.cn
                  </a>
                  {' '}({t('home.profLai')})，{' '}
                  <a href="mailto:liuyi@jnu.edu.cn" className="text-[#A61B1B] hover:text-[#861616] hover:underline">
                    liuyi@jnu.edu.cn
                  </a>
                  {' '}({t('home.teacherLiu')})
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
