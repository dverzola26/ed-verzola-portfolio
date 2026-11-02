import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlass, Wrench, BookOpen, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the automation workflow
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Every string below is a PLACEHOLDER. Replace it, or hand this file to your
 * AI assistant and tell it what to put in each spot.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Understand',
    body: 'Show me the task, the tools involved and what a useful result looks like.',
    Icon: MagnifyingGlass,
    chips: ['Workflow', 'Scope', 'Dependencies', 'Quote'],
  },
  {
    index: '02',
    label: 'Build & review',
    body: 'I build the agreed workflow and test it with realistic examples.',
    Icon: Wrench,
    chips: ['Testing', 'Review', 'Documentation'],
  },
  {
    index: '03',
    label: 'Hand over',
    body: 'You get documentation and a walkthrough. We can agree separately on ongoing support.',
    Icon: BookOpen,
    chips: ['Documentation', 'Walkthrough', 'Support scope'],
  },
]

/* ---------- The services ---------- */

// Example tool marks from /public/icons. Swap for the tools you actually use.
const REACT = '/icons/ai/react.svg'
const TAILWIND = '/icons/ai/tailwindcss.svg'
const N8N = '/icons/ai/n8n.svg'
const OPENAI = '/icons/openai.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
{index:'01',title:'Inquiry capture and follow-up',description:'A form feeds one lead tracker and alerts the person who needs to respond.',chip:'Starter project',logos:[N8N],bullets:['Inquiry form','Duplicate checks','Handover notes']},
{index:'02',title:'APIs and integrations',description:'I connect tools through APIs and webhooks, or troubleshoot an existing n8n workflow.',chip:'Integration',logos:[N8N],bullets:['Field mapping','Error handling','External costs listed']},
{index:'03',title:'Custom apps and dashboards',description:'A small web tool for a task your team currently manages in spreadsheets.',chip:'Web app',logos:[REACT,TAILWIND],bullets:['Agreed screens','Core workflow','Handover test']},
{index:'04',title:'Cloud architecture review',description:'I review Azure or AWS architecture and give you a short action list.',chip:'Consulting',logos:['/icons/azure.svg'],bullets:['Current setup','Priority fixes','Written findings']},
{index:'05',title:'AI-assisted inquiry drafts',description:'Add a response draft to an inquiry workflow, with a person approving it before anything is sent.',chip:'Manual approval',logos:[OPENAI],bullets:['Data limits','Review step','Tone and content rules']},
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Start with one workflow.
        </h1>
        <p className="pgrid__lede">
          For a first project, we agree on the problem, deliverables, dependencies and price before I build anything.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How we work</span>
            <h2 className="sgrid__method-title" id="method-title">
              You work directly with me from scope to handover.
            </h2>
            <p className="sgrid__method-sub">
              I handle the scoping and the build, with review points agreed in advance.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Possible first projects</h2>
            <p className="sgrid__offers-sub">We narrow the work before I quote.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Inquiry workflow</span>
              <h2 className="sgrid__flow-title">A request comes in. The next action stays visible.</h2>
              <p className="sgrid__flow-sub">
                The workflow checks the details, notifies the owner and tracks follow-up. I adapt each step to your tools and process.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Illustrated tools in this concept">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
      <div className="native-service-contact"><Link className="home__cta" to="/contact">Discuss a project</Link></div>
    </section>
  )
}
