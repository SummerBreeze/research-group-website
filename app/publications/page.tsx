'use client';

import { publications } from '@/lib/data/publications';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PublicationsPage() {
  const { locale, t } = useLanguage();

  const publicationsByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, typeof publications>);

  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // 格式化作者列表：显示前4位作者，其余显示"and X more authors"
  const formatAuthors = (authors: string[]) => {
    const maxDisplay = 4;
    if (authors.length <= maxDisplay) {
      return authors;
    }
    const moreText = locale === 'zh' ? `及其他 ${authors.length - maxDisplay} 位作者` : `and ${authors.length - maxDisplay} more authors`;
    return [...authors.slice(0, maxDisplay), moreText];
  };

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-32 py-8">
        <div className="mt-6">
          {years.map((year) => (
            <section
              key={year}
              className="relative pt-3 pb-6 border-t border-gray-200"
            >
              <div className="mb-4">
                <div className="text-[24px] font-bold leading-none" style={{ color: '#555555' }}>
                  {year}
                </div>
              </div>

              <div className="space-y-4">
                {publicationsByYear[year].map((pub) => (
                  <article
                    key={pub.id}
                    className="relative max-w-4xl"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-[16px] leading-snug" style={{ color: 'var(--color-deep-red)', fontWeight: 700 }}>
                          {pub.title}
                        </h3>
                        <p className="mt-1.5 text-[14px] text-[#555555]" style={{ fontWeight: 400 }}>
                          {formatAuthors(pub.authors).map((author, idx) => (
                            <span key={idx}>
                              {author === 'Junzuo Lai' ? (
                                <span className="text-[#171717]" style={{ fontWeight: 500 }}>{author}</span>
                              ) : (author.startsWith('and ') || author.startsWith('及其他')) ? (
                                <span className="italic text-[#888888]">{author}</span>
                              ) : (
                                <span>{author}</span>
                              )}
                              {idx < formatAuthors(pub.authors).length - 1 && !(formatAuthors(pub.authors)[idx + 1]?.startsWith('and ') || formatAuthors(pub.authors)[idx + 1]?.startsWith('及其他')) && ', '}
                              {idx < formatAuthors(pub.authors).length - 1 && (formatAuthors(pub.authors)[idx + 1]?.startsWith('and ') || formatAuthors(pub.authors)[idx + 1]?.startsWith('及其他')) && ' '}
                            </span>
                          ))}
                        </p>
                        <p className="mt-1 text-[13px]" style={{ fontWeight: 400, color: '#555555' }}>
                          <span className="italic" style={{ color: '#888888' }}>{pub.venue}</span>
                          <span style={{ color: '#555555' }}>, {pub.year}</span>
                        </p>
                      </div>

                      <div className="flex-shrink-0 flex items-center gap-3 text-[13px]">
                        {pub.doi && (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline transition-colors"
                            style={{ color: 'var(--color-deep-red)' }}
                          >
                            DOI
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {pub.pdf && (
                          <a
                            href={pub.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline transition-colors"
                            style={{ color: 'var(--color-deep-red)' }}
                          >
                            PDF
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {pub.code && (
                          <a
                            href={pub.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline transition-colors"
                            style={{ color: 'var(--color-deep-red)' }}
                          >
                            Code
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {pub.project && (
                          <a
                            href={pub.project}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline transition-colors"
                            style={{ color: 'var(--color-deep-red)' }}
                          >
                            Project
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {pub.scholar && (
                          <a
                            href={pub.scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline transition-colors"
                            style={{ color: 'var(--color-deep-red)' }}
                          >
                            Scholar
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
