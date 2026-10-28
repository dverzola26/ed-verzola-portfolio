import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { WhatsappLogo, LinkedinLogo, Globe, CaretLeft, CaretRight } from '@/components/slab'
import {
  HomeIcon,
  FolderIcon,
  StackIcon,
  DemoIcon,
  UserIcon,
  MessageIcon,
} from './RailIcons'
import { profile } from '@/data/profile'

/**
 * The profile rail: the fixed left column of the shell. It carries identity,
 * the theme switch and the section index, and it is the site's only navigation
 * surface from 1100px up - the floating NavBar pill hides there and takes over
 * again below it.
 *
 * The links are ROUTES, not anchors. Home is a fixed non-scrolling viewport, so
 * there is nothing for a scrollspy to spy on; the panel to the right swaps
 * instead. `NavLink` owns the active state, which is why there is no
 * IntersectionObserver here.
 */
export const RAIL_LINKS = [
  { label: 'Home', to: '/', Icon: HomeIcon },
  { label: 'Projects', to: '/projects', Icon: FolderIcon },
  { label: 'Services', to: '/services', Icon: StackIcon },
  { label: 'Sample demo', to: '/demo', Icon: DemoIcon },
  { label: 'About', to: '/about', Icon: UserIcon },
  { label: 'FAQs / Contact', to: '/contact', Icon: MessageIcon },
] as const

export default function Rail() {
  const [collapsed, setCollapsed] = useState(false)

  // The pre-paint script owns the real value; read it once mounted so the
  // button shows the icon for the action, not for the current state.

  return (
    <aside className={`rail ${collapsed ? 'rail--collapsed' : ''}`} aria-label="Profile and site navigation"><button className="native-collapse" onClick={()=>setCollapsed(!collapsed)} aria-expanded={!collapsed} aria-label={collapsed?'Expand sidebar':'Collapse sidebar'}>{collapsed?<CaretRight size={18}/>:<CaretLeft size={18}/>} </button>
      <div className="rail__inner">
        <span className="rail__avatar">
          <img
            src={profile.avatarSrc}
            alt={profile.name}
            width={120}
            height={120}
          />
        </span>

        <h2 className="rail__name">
          {profile.name}

        </h2>
        <p className="rail__handle">
          {profile.handle}
        </p>

        <div className="rail__actions">
          <ul className="rail__socials" role="list" aria-label="Social profiles">
          {profile.socials.map(({ label, href }) => (
            <li key={label}>
              <a
                className="rail__social"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {label==='LinkedIn'?<LinkedinLogo size={20}/>:label==='WhatsApp'?<WhatsappLogo size={20}/>:<Globe size={20}/>}

              </a>
              </li>
            ))}
          </ul>


        </div>

        <nav className="rail__nav" aria-label="Sections">
          <ul>
            {RAIL_LINKS.map(({ label, to, Icon }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className="rail__link" title={label} aria-label={label}>
                  <Icon size={21} />
                  <span className="native-nav-label">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="rail__copy">
          &copy; {new Date().getFullYear()}
          <br />
          {profile.name}.<br/>Version 1.2 · Template-based<br/><a href="https://github.com/brewed-ops/portfolio-template">BrewedOps template</a>
        </p>
      </div>
    </aside>
  )
}
