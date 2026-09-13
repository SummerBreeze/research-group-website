'use client';

import { teamData } from '@/lib/data/team';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<'pi' | 'postdoc'>('pi');
  const { t } = useLanguage();

  const pi = teamData.filter(m => m.role === 'PI');
  const postdocs = teamData.filter(m => m.role === 'postdoc');

  const currentMembers = activeTab === 'pi' ? pi : postdocs;

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-20 py-8">
        <h1 className="text-[24px] font-semibold text-[#171717]">{t('team.title')}</h1>
        <p className="mt-2 text-[14px] text-[#555555]">
          {t('team.description')}
        </p>

        {/* Tab Navigation */}
        <div className="mt-6 border-b border-gray-200">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('pi')}
              className={`relative pb-3 text-[16px] font-medium transition-colors ${
                activeTab === 'pi'
                  ? 'text-[#171717] font-bold'
                  : 'text-[#888888] hover:text-[#555555]'
              }`}
            >
              {t('team.pi')}
              {activeTab === 'pi' && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#A61B1B]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('postdoc')}
              className={`relative pb-3 text-[16px] font-medium transition-colors ${
                activeTab === 'postdoc'
                  ? 'text-[#171717] font-bold'
                  : 'text-[#888888] hover:text-[#555555]'
              }`}
            >
              {t('team.postdoc')}
              {activeTab === 'postdoc' && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#A61B1B]" />
              )}
            </button>
          </div>
        </div>

        {/* Members Grid */}
        <div className="mt-6">
          <div className="grid gap-5 md:grid-cols-2">
            {currentMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-gray-200 p-8 transition-all hover:border-[#A61B1B] hover:shadow-lg bg-white flex flex-col"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Photo placeholder */}
                  <div className="w-32 h-32 rounded-full bg-[#F7F7F7] mb-4" />

                  <h3 className="text-[18px] font-bold text-[#171717]">
                    {member.name}
                  </h3>
                  {member.nameEn && (
                    <p className="mt-1 text-[15px] text-[#888888]">{member.nameEn}</p>
                  )}
                  {member.title && (
                    <p className="mt-1 text-[14px] text-[#555555]">{member.title}</p>
                  )}
                </div>

                {member.bio && (
                  <p className="mt-4 text-[14px] leading-relaxed text-[#555555]">
                    {member.bio}
                  </p>
                )}

                <div className="mt-auto pt-4">
                  {member.email && (
                    <p className="text-[14px] text-center text-[#555555]">
                      <a href={`mailto:${member.email}`} className="hover:text-[#A61B1B]">
                        {member.email}
                      </a>
                    </p>
                  )}

                  {member.homepage && (
                    <div className="mt-3 flex justify-center text-[14px]">
                      <a
                        href={member.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#A61B1B] hover:text-[#861616] flex items-center gap-1"
                      >
                        {t('team.website')}
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
