import { useTranslation } from 'react-i18next'
import { motion, useScroll, useSpring } from 'framer-motion'
import { photo, links, experience, projects, courses, skills, langs } from './data'

const ids = ['about', 'experience', 'projects', 'education', 'courses', 'skills', 'languages', 'contact']
const list = (t, key) => t(key, { returnObjects: true })

const Chip = ({ children }) => (
  <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-moss">{children}</span>
)

function Section({ id, children }) {
  const { t } = useTranslation()
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16">
      <h2 className="mb-10 font-display text-4xl font-extrabold text-moss md:text-5xl">{t(`nav.${id}`)}</h2>
      {children}
    </section>
  )
}

function Nav() {
  const { t, i18n } = useTranslation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const rtl = i18n.dir() === 'rtl'
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-display text-xl font-extrabold text-moss">Sara.</a>
        <nav className="hidden gap-5 text-sm font-semibold lg:flex">
          {ids.map((i) => <a key={i} href={`#${i}`} className="text-bark transition hover:text-avo">{t(`nav.${i}`)}</a>)}
        </nav>
        <button onClick={() => i18n.changeLanguage(rtl ? 'en' : 'ar')} className="rounded-full bg-moss px-4 py-1 text-sm font-bold text-cream transition hover:bg-avo">
          {rtl ? 'EN' : 'عربي'}
        </button>
      </div>
      <motion.div style={{ scaleX, transformOrigin: rtl ? 'right' : 'left' }} className="h-1 bg-avo" />
    </header>
  )
}

// 🥑 الأفوكادو: يتبدل بصورتك لما تحطين المسار في data.js
function Avatar() {
  const shape = 'rounded-[50%_50%_50%_50%/62%_62%_38%_38%]'
  return (
    <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} className="mx-auto h-80 w-64 md:h-96 md:w-72">
      {photo ? (
        <img src={photo} alt="Sara Sheariya" className={`h-full w-full object-cover ring-[10px] ring-moss ${shape}`} />
      ) : (
        <div className={`grid h-full w-full place-items-center bg-lime ring-[10px] ring-moss ${shape}`}>
          <div className="mt-16 grid h-32 w-32 place-items-center rounded-full bg-bark font-display text-5xl font-extrabold text-cream shadow-inner">S</div>
        </div>
      )}
    </motion.div>
  )
}

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

function Hero() {
  const { t } = useTranslation()
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
      <motion.div variants={parent} initial="hidden" animate="show">
        <motion.p variants={rise} className="text-xl text-bark">{t('hero.hi')}</motion.p>
        <motion.h1 variants={rise} className="my-2 font-display text-6xl font-extrabold leading-[1.1] text-moss md:text-8xl">{t('hero.name')}</motion.h1>
        <motion.p variants={rise} className="inline-block -rotate-1 rounded-lg bg-lime px-4 py-1 font-display text-2xl font-bold text-espresso">{t('hero.role')}</motion.p>
        <motion.p variants={rise} className="mt-6 max-w-md text-lg leading-relaxed">{t('hero.tagline')}</motion.p>
        <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-moss px-6 py-3 font-bold text-cream transition hover:bg-avo">{t('hero.cta1')}</a>
          <a href="#contact" className="rounded-full border-2 border-moss px-6 py-3 font-bold text-moss transition hover:bg-sand">{t('hero.cta2')}</a>
        </motion.div>
      </motion.div>
      <Avatar />
    </section>
  )
}

function Marquee() {
  const all = [...skills.frontend, ...skills.backend, ...skills.tools]
  return (
    <div dir="ltr" className="overflow-hidden bg-moss py-4 text-cream">
      <div className="marquee flex w-max gap-10">
        {[...all, ...all].map((k, i) => (
          <span key={i} className="whitespace-nowrap font-display text-2xl font-bold">{k} <span className="text-lime">✦</span></span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const { t } = useTranslation()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />

        <Section id="about">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <p className="text-lg leading-loose">{t('about.text')}</p>
            <ul className="space-y-4">
              {list(t, 'about.stats').map((s) => (
                <li key={s.l} className="border-s-4 border-avo ps-4">
                  <span className="font-display text-4xl font-extrabold text-moss">{s.v}</span>
                  <span className="block text-sm text-bark">{s.l}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="experience">
          <div className="space-y-10 border-s-2 border-latte ps-8">
            {experience.map((e, i) => {
              const x = list(t, `experience.items.${i}`)
              return (
                <article key={e.company} className="relative">
                  <span className="absolute -start-[41px] top-2 h-4 w-4 rounded-full border-4 border-cream bg-avo" />
                  <p className="text-sm font-semibold text-bark">{x.period}</p>
                  <h3 className="font-display text-2xl font-bold text-moss">
                    {x.role} <span className="text-latte">· {e.company}</span>
                  </h3>
                  {e.extra && <span className="mt-1 inline-block rounded-full bg-sand px-3 py-0.5 text-xs font-semibold text-bark">{t('experience.extra')}</span>}
                  <ul className="mt-3 list-disc space-y-1 ps-5 leading-relaxed">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </article>
              )
            })}
          </div>
        </Section>

        <Section id="projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => {
              const x = list(t, `projects.items.${i}`)
              return (
                <motion.article key={p.name} whileHover={{ y: -6 }} className="rounded-[2rem] rounded-ss-md bg-sand p-8">
                  <h3 className="font-display text-4xl font-extrabold text-moss">{p.name}</h3>
                  <p className="mb-4 font-semibold text-bark">{x.type}</p>
                  <p className="mb-2 leading-relaxed">{x.desc}</p>
                  <p className="mb-5 text-sm text-bark">{x.role}</p>
                  <div className="flex flex-wrap gap-2">{p.tech.map((k) => <Chip key={k}>{k}</Chip>)}</div>
                  {(p.live || p.repo) && (
                    <div className="mt-5 flex gap-5 text-sm font-bold text-moss">
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="underline">{t('ui.live')}</a>}
                      {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="underline">{t('ui.code')}</a>}
                    </div>
                  )}
                </motion.article>
              )
            })}
          </div>
        </Section>

        <Section id="education">
          <div className="rounded-[2rem] bg-moss p-8 text-cream">
            <p className="font-display text-3xl font-bold">{t('education.degree')}</p>
            <p className="mt-1 text-lg">{t('education.school')}</p>
            <p className="mt-4 text-lime">{t('education.period')} · {t('education.gpa')}</p>
          </div>
        </Section>

        <Section id="courses">
          <ul className="grid gap-4 sm:grid-cols-2">
            {courses.map(([name, org]) => (
              <li key={name} dir="ltr" className="rounded-2xl border-2 border-sand px-5 py-4 text-start">
                <p className="font-display text-lg font-bold text-moss">{name}</p>
                <p className="text-sm text-bark">{org}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills">
          <div className="grid gap-8 md:grid-cols-2">
            {[...Object.entries(skills), ['soft', list(t, 'skills.softItems')]].map(([k, items]) => (
              <div key={k}>
                <h3 className="mb-3 font-display text-xl font-bold text-bark">{t(`skills.groups.${k}`)}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => <span key={s} className="rounded-full bg-sand px-3 py-1 text-sm font-semibold text-moss">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="languages">
          <div className="max-w-xl space-y-6">
            {langs.map(([k, level]) => (
              <div key={k}>
                <div className="mb-1 flex justify-between font-semibold">
                  <span>{t(`languages.names.${k}`)}</span>
                  <span className="text-bark">{t(`languages.levels.${k}`)}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-sand">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${level * 10}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }} className="h-full rounded-full bg-avo" />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact">
          <div className="rounded-[2rem] bg-lime p-10 text-center">
            <h3 className="font-display text-4xl font-extrabold text-moss">{t('contact.title')}</h3>
            <p className="mx-auto mt-2 max-w-md">{t('contact.text')}</p>
            <a href={`mailto:${links.email}`} dir="ltr" className="mt-6 inline-block font-display text-2xl font-bold text-espresso underline decoration-moss decoration-4 underline-offset-4">{links.email}</a>
            <div className="mt-6 flex justify-center gap-3">
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-moss px-5 py-2 font-bold text-cream transition hover:bg-bark">LinkedIn</a>
              <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full bg-moss px-5 py-2 font-bold text-cream transition hover:bg-bark">GitHub</a>
            </div>
          </div>
        </Section>
      </main>
      <footer className="py-8 text-center text-sm text-bark">🥑 {t('ui.footer')}</footer>
    </>
  )
}
