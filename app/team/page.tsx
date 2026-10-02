'use client';

import { teamData, type TeamMember } from '@/lib/data/team';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function MemberGrid({ members }: { members: TeamMember[] }) {
  const { t } = useLanguage();

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {members.map((member) => (
        <div
          key={member.id}
          className="rounded-2xl border border-gray-200 p-8 transition-all hover:border-[#A61B1B] hover:shadow-lg bg-white flex flex-col"
        >
          <div className="flex flex-col items-center text-center">
            {/* Photo placeholder */}
            <div className="w-32 h-32 rounded-full bg-[#F7F7F7] mb-4" />

            <h3 className="text-[18px] font-bold text-[#171717]">{member.name}</h3>
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
  );
}

function MemberSection({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  if (members.length === 0) return null;

  return (
    <section>
      <h2 className="text-[20px] font-semibold text-[#171717] mb-4">{title}</h2>
      <MemberGrid members={members} />
    </section>
  );
}

function AlumniTable({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  const { t } = useLanguage();

  if (members.length === 0) return null;

  const sorted = [...members].sort(
    (a, b) => (b.graduationYear ?? 0) - (a.graduationYear ?? 0)
  );

  return (
    <section>
      <h2 className="text-[20px] font-semibold text-[#171717] mb-4">{title}</h2>
      <div className="bg-[#F7F7F7] rounded-xl p-6">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="text-left text-[#888888]">
              <th className="w-32 pb-3 font-medium">{t('team.colYear')}</th>
              <th className="w-40 pb-3 font-medium">{t('team.colName')}</th>
              <th className="pb-3 font-medium">{t('team.colDestination')}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((member) => (
              <tr key={member.id} className="border-t border-gray-300">
                <td className="py-2.5 pr-4 text-[#555555] align-top">
                  {member.graduationYear}
                </td>
                <td className="py-2.5 pr-4 font-medium text-[#171717] align-top">
                  {member.name}
                </td>
                <td className="py-2.5 text-[#555555] align-top">
                  {member.destination}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function TeamPage() {
  const { t } = useLanguage();

  const pi = teamData.filter(m => m.role === 'PI');
  const postdocs = teamData.filter(m => m.role === 'postdoc');
  const phdCurrent = teamData.filter(m => m.role === 'phd' && m.status === 'current');
  const phdAlumni = teamData.filter(m => m.role === 'phd' && m.status === 'alumni');
  const masterCurrent = teamData.filter(m => m.role === 'master' && m.status === 'current');
  const masterAlumni = teamData.filter(m => m.role === 'master' && m.status === 'alumni');

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-20 py-8">
        <h1 className="text-[24px] font-semibold text-[#171717]">{t('team.title')}</h1>
        <p className="mt-2 text-[14px] text-[#555555]">{t('team.description')}</p>

        <div className="mt-10 space-y-12">
          <MemberSection title={t('team.pi')} members={pi} />
          <MemberSection title={t('team.postdoc')} members={postdocs} />
          <MemberSection title={t('team.phd')} members={phdCurrent} />
          <MemberSection title={t('team.master')} members={masterCurrent} />
          <AlumniTable title={t('team.alumniPhd')} members={phdAlumni} />
          <AlumniTable title={t('team.alumniMaster')} members={masterAlumni} />
        </div>
      </div>
    </main>
  );
}
