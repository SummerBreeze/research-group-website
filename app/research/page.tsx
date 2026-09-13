'use client';

import { researchAreas } from '@/lib/data/research';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ResearchPage() {
  const { locale, t } = useLanguage();

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-26 py-12">
        <div className="space-y-6">
          {researchAreas.map((area) => (
            <article
              key={area.id}
              className="rounded-2xl border border-gray-200 p-8 hover:border-[#A61B1B] hover:shadow-lg transition-all bg-white"
            >
              <div className="flex items-start gap-8">
                {/* Left side - Image placeholder */}
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-[#F7F7F7] to-[#F2F0EE] flex items-center justify-center">
                    <div className="text-center text-[#888888]">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs">Project image / logo</p>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <p className="text-[13px] font-medium text-[#888888] uppercase tracking-wide">
                    {area.title.en}
                  </p>
                  <h2 className="mt-2 text-[20px] font-bold text-[#171717]">
                    {area.title[locale]}
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-[#555555]">
                    {area.description[locale]}
                  </p>
                  {area.keywords && area.keywords[locale].length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {area.keywords[locale].map((keyword, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full px-3 py-1 text-[13px] font-medium bg-[#F0F0F5] text-[#555555] hover:bg-[#E5E5EA] transition-colors"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-[#F7F7F7] border border-gray-200 p-6">
          <h3 className="text-[16px] font-medium text-[#171717]">{t('research.collaboration')}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-[#555555]">
            {t('research.collaborationDesc')}
          </p>
        </div>
      </div>
    </main>
  );
}
