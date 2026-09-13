'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function JoinUsPage() {
  const { locale, t } = useLanguage();

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-32 py-12">
        {/* Students Section */}
        <section id="students">
          <div className="border-l-4 border-[#A61B1B] pl-4">
            <h2 className="text-[20px] font-semibold text-[#171717]">{t('joinUs.students.title')}</h2>
          </div>

          <div className="mt-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded border border-gray-200 p-4 hover:border-[#A61B1B] transition-colors">
                <h3 className="text-[14px] font-medium text-[#171717]">{t('joinUs.students.phd')}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#555555]">
                  {t('joinUs.students.phdDesc')}
                </p>
              </div>
              <div className="rounded border border-gray-200 p-4 hover:border-[#A61B1B] transition-colors">
                <h3 className="text-[14px] font-medium text-[#171717]">{t('joinUs.students.master')}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#555555]">
                  {t('joinUs.students.masterDesc')}
                </p>
              </div>
              <div className="rounded border border-gray-200 p-4 hover:border-[#A61B1B] transition-colors">
                <h3 className="text-[14px] font-medium text-[#171717]">{t('joinUs.students.undergrad')}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#555555]">
                  {t('joinUs.students.undergradDesc')}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-[#171717]">{t('joinUs.students.requirements')}</h3>
              <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-[#555555]">
                <li>{t('joinUs.students.req1')}</li>
                <li>{t('joinUs.students.req2')}</li>
                <li>{t('joinUs.students.req3')}</li>
                <li>{t('joinUs.students.req4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-[#171717]">{t('joinUs.students.contact')}</h3>
              <div className="mt-3 rounded border border-gray-300 bg-[#F7F7F7] p-4">
                <p className="text-[13px] leading-relaxed text-[#555555]">
                  {t('joinUs.students.contactDesc')}
                </p>
                <p className="mt-3 text-[13px] text-[#555555]">
                  <span className="font-medium text-[#171717]">{t('joinUs.students.email')}</span>
                  <a href="mailto:laijunzuo@jnu.edu.cn" className="text-[#A61B1B] hover:text-[#861616]">
                    laijunzuo@jnu.edu.cn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Postdoc Section */}
        <section id="postdoc" className="mt-12 border-t border-gray-200 pt-10">
          <div className="border-l-4 border-[#A61B1B] pl-4">
            <h2 className="text-[20px] font-semibold text-[#171717]">{t('joinUs.postdoc.title')}</h2>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-[16px] font-medium text-[#171717]">{t('joinUs.postdoc.directions')}</h3>
              <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[#555555]">
                <li>
                  <span className="font-medium text-[#171717]">{t('joinUs.postdoc.dir1')}</span>
                  {t('joinUs.postdoc.dir1Desc')}
                </li>
                <li>
                  <span className="font-medium text-[#171717]">{t('joinUs.postdoc.dir2')}</span>
                  {t('joinUs.postdoc.dir2Desc')}
                </li>
                <li>
                  <span className="font-medium text-[#171717]">{t('joinUs.postdoc.dir3')}</span>
                  {t('joinUs.postdoc.dir3Desc')}
                </li>
              </ul>
              <p className="mt-3 text-[13px] text-[#555555]">
                {t('joinUs.postdoc.dirNote')}
              </p>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-[#171717]">{t('joinUs.postdoc.qualifications')}</h3>
              <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-[#555555]">
                <li>{t('joinUs.postdoc.qual1')}</li>
                <li>{t('joinUs.postdoc.qual2')}</li>
                <li>{t('joinUs.postdoc.qual3')}</li>
                <li>{t('joinUs.postdoc.qual4')}</li>
              </ul>
              <p className="mt-3 text-[13px] text-[#555555]">
                {t('joinUs.postdoc.qualNote')}
              </p>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-[#171717]">{t('joinUs.postdoc.salary')}</h3>
              <div className="mt-3 rounded bg-[#F2F0EE] border border-gray-300 p-4">
                <p className="text-[13px] leading-relaxed text-[#555555]">
                  {t('joinUs.postdoc.salaryDesc1')}
                  <span className="font-medium text-[#171717]">{t('joinUs.postdoc.salaryAmount')}</span>
                  {locale === 'zh' ? '。' : '.'}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#555555]">
                  {t('joinUs.postdoc.salaryDesc2')}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#171717] font-medium">
                  {t('joinUs.postdoc.salaryDesc3')}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-[#171717]">{t('joinUs.postdoc.benefits')}</h3>
              <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-[#555555]">
                <li>{t('joinUs.postdoc.benefit1')}</li>
                <li>{t('joinUs.postdoc.benefit2')}</li>
                <li>{t('joinUs.postdoc.benefit3')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-medium text-[#171717]">{t('joinUs.postdoc.application')}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#555555]">
                {t('joinUs.postdoc.appDesc')}
              </p>
              <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-[#555555]">
                <li>{t('joinUs.postdoc.appItem1')}</li>
                <li>{t('joinUs.postdoc.appItem2')}</li>
                <li>{t('joinUs.postdoc.appItem3')}</li>
              </ul>
              <div className="mt-4 rounded border border-gray-300 bg-[#F7F7F7] p-4">
                <p className="text-[13px] text-[#555555]">
                  <span className="font-medium text-[#171717]">{t('joinUs.postdoc.emailSubject')}</span>
                  {t('joinUs.postdoc.emailSubjectFormat')}
                </p>
                {locale === 'zh' && (
                  <p className="mt-1.5 text-[13px] text-[#888888]">
                    {t('joinUs.postdoc.emailExample')}
                  </p>
                )}
                <div className="mt-3 space-y-1 text-[13px]">
                  <p className="text-[#555555]">
                    <span className="font-medium text-[#171717]">{t('joinUs.postdoc.supervisor')}</span>
                    {t('joinUs.postdoc.supervisorName')}
                  </p>
                  <p className="text-[#555555]">
                    <span className="font-medium text-[#171717]">{t('joinUs.postdoc.contactPerson')}</span>
                    {t('joinUs.postdoc.contactPersonName')}
                  </p>
                  <p className="text-[#555555]">
                    <span className="font-medium text-[#171717]">{t('joinUs.postdoc.contactEmail')}</span>
                    <a href="mailto:liuyi@jnu.edu.cn" className="text-[#A61B1B] hover:text-[#861616]">
                      liuyi@jnu.edu.cn
                    </a>
                  </p>
                  <p className="text-[#555555]">
                    <span className="font-medium text-[#171717]">{t('joinUs.postdoc.location')}</span>
                    {t('joinUs.postdoc.locationName')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
