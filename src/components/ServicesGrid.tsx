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
 * the marks of what each one is built with, and the live automation demo
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
    body: 'Map your workflow, agree on scope and identify dependencies.',
    Icon: MagnifyingGlass,
    chips: ['Workflow', 'Scope', 'Dependencies', 'Quote'],
  },
  {
    index: '02',
    label: 'Build & review',
    body: 'Build the agreed flow and review realistic test scenarios.',
    Icon: Wrench,
    chips: ['Testing', 'Review', 'Documentation'],
  },
  {
    index: '03',
    label: 'Hand over',
    body: 'Document the solution and agree on any ongoing support.',
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
{index:'01',title:'Inquiry capture & follow-up',description:'One form, one lead tracker and an owner alert, scoped to your business.',chip:'Starter scope',logos:[N8N],bullets:['Structured inquiry capture','Duplicate and review checks','Handover notes']},
{index:'02',title:'APIs & integrations',description:'Connect your tools or troubleshoot a focused workflow.',chip:'Scoped integration',logos:[N8N],bullets:['Field mapping','Failure scenarios','Provider costs identified']},
{index:'03',title:'Custom apps & dashboards',description:'A small tool for a spreadsheet-heavy business task.',chip:'Focused web app',logos:[REACT,TAILWIND],bullets:['Agreed screens','Essential workflow','Tested handover']},
{index:'04',title:'Cloud architecture review',description:'Review architecture, reliability and cost considerations.',chip:'Consulting',logos:['/icons/azure.svg'],bullets:['Current-state review','Prioritized recommendations','Defined deliverable']},
{index:'05',title:'AI-assisted inquiry drafts',description:'An optional response-drafting step with human review.',chip:'Review first',logos:[OPENAI],bullets:['Agreed data boundaries','Human approval','No automatic promises']},
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
          Focused builds for small businesses. Final scope, dependencies and quote are agreed before implementation.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How we work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Understand. Build. Hand over.
              <br />
              <span>Direct collaboration at each step.</span>
            </h2>
            <p className="sgrid__method-sub">
              Work directly with the person scoping and building your solution.
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
            <h2 className="sgrid__offers-title">What we can scope together.</h2>
            <p className="sgrid__offers-sub">A focused first project, with clear deliverables.</p>
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

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Browser simulation</span>
              <h2 className="sgrid__flow-title">A workflow concept to explore.</h2>
              <p className="sgrid__flow-sub">
                This template animation illustrates a workflow. It is not a connected client system. <Link to="/demo" className="native-inline-link">Try the inquiry demo</Link> for a working browser prototype.
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
