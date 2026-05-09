const teamMembers = [
  {
    id: 1,
    role: 'Co-Founder',
  },
  {
    id: 2,
    role: 'Co-Founder',
  },
  {
    id: 3,
    role: 'Co-Founder',
  },
];

export function OurTeamPage() {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Team
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Meet the team behind A&amp;S WebWorks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm"
            >
              <div className="aspect-[4/5] w-full rounded-lg bg-slate-200 dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm font-medium mb-5">
                Photo Placeholder
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Team Member {member.id}
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                {member.role}
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Short bio placeholder. Add a 2-3 sentence intro about expertise, role, and
                what this team member brings to client projects.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
