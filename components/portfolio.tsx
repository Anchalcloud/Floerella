'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Menu,
  Network,
  Quote,
  Server,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PORTFOLIO_DATA as data } from '@/data/portfolio'

const sectionLinks = [
  ['About', '#about'], ['Education', '#education'], ['Experience', '#experience'],
  ['Problem Solving', '#problem-solving'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact'],
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="font-display text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          AK<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {sectionLinks.map(([label, href]) => <a key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 text-sm font-medium text-primary lg:flex">Let&apos;s connect <ArrowUpRight className="size-4" /></a>
        <button aria-label={open ? 'Close menu' : 'Open menu'} className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden"><div className="flex flex-col gap-4">{sectionLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{label}</a>)}</div></nav>}
    </header>
  )
}

function Hero() {
  return <section id="home" className="relative overflow-hidden border-b border-border pt-32 pb-20 sm:pt-40 sm:pb-28">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,oklch(0.92_0.07_270),transparent_32%),linear-gradient(to_bottom,transparent,oklch(0.98_0.01_270))]" />
    <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"><span className="size-1.5 rounded-full bg-primary" /> Open to learning &amp; opportunities</div>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl">Building practical software<span className="text-primary">,</span><br /><span className="text-muted-foreground">working toward intelligent solutions.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">{data.personal.intro}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button render={<a href="#projects" />} size="lg" className="rounded-full px-6">View projects <ArrowDown data-icon="inline-end" /></Button>
          <Button render={<a href="#contact" />} variant="outline" size="lg" className="rounded-full px-6 bg-background/50">Connect with me <ArrowUpRight data-icon="inline-end" /></Button>
        </div>
        <div className="mt-9 flex items-center gap-5 text-sm text-muted-foreground"><a href={data.personal.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><Link className="size-4" /> LinkedIn</a><a href={data.personal.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><GitBranch className="size-4" /> GitHub</a></div>
      </div>
      <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-[0_24px_80px_-32px_oklch(0.35_0.12_270)]">
          <div className="absolute right-7 top-7 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><BrainCircuit className="size-6" /></div>
          <div className="flex h-full flex-col justify-end"><div className="mb-16 font-mono text-xs leading-6 text-muted-foreground"><span className="text-primary">const</span> direction = <span className="text-foreground">&quot;AI Engineer&quot;</span><br /><span className="text-primary">const</span> approach = <span className="text-foreground">&quot;build, learn, repeat&quot;</span><br /><span className="text-primary">return</span> <span className="text-foreground">{`{ curiosity, consistency }`}</span></div><p className="font-display text-3xl font-semibold tracking-tight">Curious by default.<br /><span className="text-muted-foreground">Grounded in fundamentals.</span></p></div>
          <div className="absolute bottom-7 right-7 size-20 rounded-full border border-primary/20 bg-primary/5" /><div className="absolute bottom-11 right-11 size-2 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  </section>
}

function About() { return <section id="about" className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading eyebrow="01 — About" title="Learning by building, one layer at a time." /><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]"><div className="text-base leading-8 text-muted-foreground">{data.about.fullText.split('\n\n').map((p) => <p key={p} className="mb-5">{p}</p>)}</div><div className="rounded-3xl border border-border bg-muted/30 p-7"><div className="mb-6 flex items-center gap-3"><Sparkles className="size-5 text-primary" /><h3 className="font-display text-xl font-semibold">Currently learning</h3></div><div className="flex flex-wrap gap-2">{data.about.currentlyLearning.map((item) => <span key={item} className="rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground">{item}</span>)}</div></div></div></section> }

function EducationExperience() { return <section className="border-y border-border bg-muted/20"><div className="mx-auto grid max-w-6xl gap-20 px-5 py-24 lg:grid-cols-2 lg:px-8"><div id="education"><SectionHeading eyebrow="02 — Education" title="Building a durable foundation." /><div className="flex flex-col gap-8">{data.education.map((item, i) => <div key={item.degree} className="relative border-l-2 border-primary/25 pl-6"><div className="absolute -left-[7px] top-1 size-3 rounded-full border-2 border-primary bg-background" /><p className="text-xs font-semibold uppercase tracking-wider text-primary">{i === 0 ? 'Present' : 'Completed'}</p><h3 className="mt-2 font-display text-xl font-semibold">{item.degree}</h3><p className="mt-1 text-muted-foreground">{item.field}</p><p className="mt-3 text-sm text-muted-foreground">{item.status}{item.expectedGraduation ? ` · Expected graduation: ${item.expectedGraduation}` : ''}{item.currentSemester ? ` · ${item.currentSemester}` : ''}</p></div>)}</div></div><div id="experience"><SectionHeading eyebrow="03 — Experience" title="A first look at industry." /><div className="rounded-3xl border border-border bg-background p-7"><div className="flex items-start justify-between gap-4"><div><div className="mb-3 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Network className="size-5" /></div><h3 className="font-display text-xl font-semibold">{data.experience[0].company}</h3><p className="mt-1 text-sm text-primary">{data.experience[0].role}</p></div><span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{data.experience[0].duration}</span></div><p className="mt-6 text-sm leading-7 text-muted-foreground">{data.experience[0].description}</p></div></div></div></section> }

function ProblemSolving() { return <section id="problem-solving" className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading eyebrow="04 — Problem solving" title="Patterns over shortcuts." description="Following the NeetCode roadmap to develop stronger algorithmic thinking and a repeatable approach to problem solving." /><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-3xl bg-foreground p-8 text-background"><div className="flex items-start justify-between"><Code2 className="size-7 text-primary" /><span className="font-mono text-xs text-background/50">01 / 03</span></div><p className="mt-16 font-mono text-6xl font-semibold tracking-tight">{data.problemSolving.count}<span className="text-primary">+</span></p><p className="mt-2 text-sm text-background/60">problems solved</p><div className="mt-12 grid grid-cols-2 gap-4 border-t border-background/15 pt-5 text-sm"><div><p className="text-background/50">Focus</p><p className="mt-1">{data.problemSolving.focus}</p></div><div><p className="text-background/50">Roadmap</p><p className="mt-1">{data.problemSolving.roadmap}</p></div></div></div><div className="rounded-3xl border border-border p-8"><h3 className="font-display text-xl font-semibold">Topics currently practiced</h3><div className="mt-7 grid gap-3 sm:grid-cols-2">{data.problemSolving.topics.map((topic) => <div key={topic} className="flex items-center gap-3 text-sm text-muted-foreground"><Check className="size-4 shrink-0 text-primary" />{topic}</div>)}</div><Button asChild variant="outline" className="mt-8 rounded-full"><a href="#contact">View problem solving <ArrowUpRight data-icon="inline-end" /></a></Button></div></div></section> }

function ProjectVisual({ id }: { id: string }) { const icons = { prescripto: <><div className="h-2 w-24 rounded-full bg-primary/60" /><div className="mt-5 grid grid-cols-3 gap-2"><div className="h-20 rounded-xl bg-primary/10" /><div className="col-span-2 h-20 rounded-xl bg-primary/5" /></div><div className="mt-3 h-3 w-3/4 rounded-full bg-primary/10" /></>, flowerella: <><div className="flex gap-2"><div className="h-28 flex-1 rounded-xl bg-[#eadfd9]" /><div className="h-28 flex-1 rounded-xl bg-[#d8e1da]" /><div className="h-28 flex-1 rounded-xl bg-[#e7dce9]" /></div><div className="mt-4 h-3 w-1/2 rounded-full bg-primary/10" /></>, 'ai-chatbot': <><div className="ml-auto h-8 w-2/3 rounded-2xl rounded-br-sm bg-primary/15" /><div className="mt-3 h-12 w-3/4 rounded-2xl rounded-bl-sm bg-primary/5" /><div className="mt-3 h-8 w-1/2 rounded-2xl rounded-br-sm bg-primary/15" /></> }; return <div className="flex h-full flex-col justify-end p-7">{icons[id as keyof typeof icons]}</div> }

function ProjectCard({ project }: { project: typeof data.projects[number] }) { return <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"><div className="relative h-56 overflow-hidden bg-muted/60"><img src={project.image} alt={`${project.name} project preview`} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" /><div className="absolute left-5 top-5 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">{project.category}</div></div><div className="p-7"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-semibold">{project.name}</h3><ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.length ? project.technologies.map((tech) => <span key={tech} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">{tech}</span>) : <span className="text-xs italic text-muted-foreground">Technologies to be added</span>}</div><div className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-sm">{project.github ? <a href={project.github} className="inline-flex items-center gap-2 text-primary">GitHub <ExternalLink className="size-3.5" /></a> : <span className="text-muted-foreground/60">GitHub — coming soon</span>}{project.liveDemo ? <a href={project.liveDemo} className="inline-flex items-center gap-2 text-primary">Live demo <ExternalLink className="size-3.5" /></a> : <span className="text-muted-foreground/60">Live demo — coming soon</span>}</div></div></article> }

function Projects() { return <section id="projects" className="border-y border-border bg-muted/20"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading eyebrow="05 — Selected work" title="Things I&apos;ve built to learn." description="A growing collection of practical projects—each one a chance to understand a little more deeply." /><div className="grid gap-7 lg:grid-cols-2">{data.projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div><div className="mt-7 grid gap-7 rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"><Sparkles className="size-4" /> Featured project</div><h3 className="font-display text-2xl font-semibold">{data.featuredProject.status}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{data.featuredProject.subtitle}</p></div><span className="font-mono text-sm text-primary">01 / next chapter</span></div></div></section> }

function Skills() { const groups = [['Programming', data.skills.programming, Terminal], ['Web Development', data.skills.webDevelopment, Code2], ['Database', data.skills.database, Server], ['Computer Science', data.skills.computerScience, GraduationCap], ['AI / ML', data.skills.aiML, BrainCircuit], ['Tools', data.skills.tools, Network]] as const; return <section id="skills" className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><SectionHeading eyebrow="06 — Skills" title="A toolkit in progress." description="No percentages, no inflated claims—just the technologies and concepts I&apos;m actively learning and using." /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{groups.map(([name, skills, Icon]) => <div key={name} className="rounded-2xl border border-border p-6"><Icon className="size-5 text-primary" /><h3 className="mt-5 font-display font-semibold">{name}</h3><div className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="text-sm text-muted-foreground">{skill}{skill !== skills[skills.length - 1] && <span className="ml-2 text-border">·</span>}</span>)}</div></div>)}</div></section> }

function Journey() { return <section className="border-y border-border bg-foreground text-background"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><div className="max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">07 — The path ahead</p><h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">My journey toward AI engineering.</h2><p className="mt-5 text-base leading-7 text-background/60">{data.journeyDescription}</p></div><div className="mt-14 grid gap-3 md:grid-cols-7">{data.learningJourney.map((step, i) => <div key={step} className="flex items-center gap-3 md:block"><div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/50 font-mono text-xs text-primary">0{i + 1}</div><p className="mt-0 text-sm text-background/75 md:mt-4">{step}</p>{i < data.learningJourney.length - 1 && <ChevronRight className="ml-auto size-4 text-primary/60 md:mt-4" />}</div>)}</div></div></section> }

function GitHubContact() { return <><section className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><div><GitBranch className="size-8 text-primary" /><h2 className="mt-6 font-display text-4xl font-semibold tracking-tight">I learn by building.</h2><p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">Explore my projects, experiments and progress as I continue developing my software engineering and AI skills.</p></div><div className="lg:text-right"><Button asChild size="lg" className="rounded-full"><a href={data.personal.links.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight data-icon="inline-end" /></a></Button></div></div></section><section id="contact" className="border-t border-border bg-muted/30"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="08 — Contact" title="Let&apos;s connect." description="I&apos;m always interested in learning, building, collaborating and connecting with other developers and technology professionals." /></div><div className="flex flex-col gap-4"><a href={data.personal.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"><span className="flex items-center gap-4"><Link className="size-5 text-primary" /><span><span className="block text-sm font-medium">LinkedIn</span><span className="block text-xs text-muted-foreground">Connect professionally</span></span></span><ArrowUpRight className="size-4 text-muted-foreground" /></a><a href={data.personal.links.github} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"><span className="flex items-center gap-4"><GitBranch className="size-5 text-primary" /><span><span className="block text-sm font-medium">GitHub</span><span className="block text-xs text-muted-foreground">Explore my work</span></span></span><ArrowUpRight className="size-4 text-muted-foreground" /></a><a href={`mailto:${data.personal.email}`} className="flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary"><span className="flex items-center gap-4"><Mail className="size-5 text-primary" /><span><span className="block text-sm font-medium">Email</span><span className="block text-xs text-muted-foreground">{data.personal.email}</span></span></span><ArrowUpRight className="size-4 text-muted-foreground" /></a></div></div></div></section></> }

export function Portfolio() { return <div className="min-h-screen bg-background"><Navbar /><main><Hero /><About /><EducationExperience /><ProblemSolving /><Projects /><Skills /><Journey /><GitHubContact /></main><footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© {new Date().getFullYear()} {data.personal.name}. Built with curiosity.</p><div className="flex items-center gap-4"><span className="inline-flex items-center gap-2"><MapPin className="size-3.5" /> {data.personal.location}</span><a href="#home" className="inline-flex items-center gap-1 text-primary">Back to top <ArrowUpRight className="size-3.5" /></a></div></div></footer></div> }

export default Portfolio
