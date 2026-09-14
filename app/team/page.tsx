'use client';

import { teamData } from '@/lib/data/team';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<'pi' | 'postdoc' | 'phd' | 'master'>('pi');
  const { t } = useLanguage();

  const pi = teamData.filter(m => m.role === 'PI');
  const postdocs = teamData.filter(m => m.role === 'postdoc');
  const phdCurrent = teamData.filter(m => m.role === 'phd' && m.status === 'current');
  const phdAlumni = teamData.filter(m => m.role === 'phd' && m.status === 'alumni');
  const masterCurrent = teamData.filter(m => m.role === 'master' && m.status === 'current');
  const masterAlumni = teamData.filter(m => m.role === 'master' && m.status === 'alumni');

  const getCurrentMembers = () => {
    switch (activeTab) {
      case 'pi': return pi;
      case 'postdoc': return postdocs;
      case 'phd': return phdCurrent;
      case 'master': return masterCurrent;
      default: return pi;
    }
  };

  const getAlumniMembers = () => {
    switch (activeTab) {
      case 'phd': return phdAlumni;
      case 'master': return masterAlumni;
      default: return [];
    }
  };

  const currentMembers = getCurrentMembers();
  const alumniMembers = getAlumniMembers();

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
                  ? 'text-[#171717] font-bold after:w-full'
                  : 'text-[#888888] hover:text-[#555555]'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#A61B1B] after:transition-all after:duration-300 after:ease-out ${
                activeTab === 'pi' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              {t('team.pi')}
            </button>
            <button
              onClick={() => setActiveTab('postdoc')}
              className={`relative pb-3 text-[16px] font-medium transition-colors ${
                activeTab === 'postdoc'
                  ? 'text-[#171717] font-bold after:w-full'
                  : 'text-[#888888] hover:text-[#555555]'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#A61B1B] after:transition-all after:duration-300 after:ease-out ${
                activeTab === 'postdoc' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              {t('team.postdoc')}
            </button>
            <button
              onClick={() => setActiveTab('phd')}
              className={`relative pb-3 text-[16px] font-medium transition-colors ${
                activeTab === 'phd'
                  ? 'text-[#171717] font-bold after:w-full'
                  : 'text-[#888888] hover:text-[#555555]'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#A61B1B] after:transition-all after:duration-300 after:ease-out ${
                activeTab === 'phd' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              {t('team.phd')}
            </button>
            <button
              onClick={() => setActiveTab('master')}
              className={`relative pb-3 text-[16px] font-medium transition-colors ${
                activeTab === 'master'
                  ? 'text-[#171717] font-bold after:w-full'
                  : 'text-[#888888] hover:text-[#555555]'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#A61B1B] after:transition-all after:duration-300 after:ease-out ${
                activeTab === 'master' ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              {t('team.master')}
            </button>
          </div>
        </div>

        {/* Members Grid */}
        <div className="mt-6">
          {/* 在校成员 */}
          {currentMembers.length > 0 && (
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
                    <p className="mt-4 text-[14px] leading-relaxed text-[#555555] text-center">
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
          )}

          {/* 已毕业成员 */}
          {alumniMembers.length > 0 && (
            <div className="mt-12">
              <h2 className="text-[20px] font-semibold text-[#171717] mb-4">
                {t('team.alumni')}
              </h2>
              <div className="bg-[#F7F7F7] rounded-xl p-6">
                <div className="space-y-3">
                  {alumniMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between py-2 border-b border-gray-300 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[15px] font-medium text-[#171717]">
                          {member.name}
                        </span>
                        {member.nameEn && (
                          <span className="text-[14px] text-[#888888]">
                            ({member.nameEn})
                          </span>
                        )}
                      </div>
                      {member.destination && (
                        <span className="text-[14px] text-[#555555]">
                          {member.destination}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
