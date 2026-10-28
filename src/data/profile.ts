/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, Robot, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Ed David Verzola',
  firstName: 'Ed',
  handle: 'Philippines / Worldwide',
  role: 'AI Automation & Integrations',
  avatarSrc: '/profile.png',
  verifiedLabel: '',
  email: 'dverzola26@gmail.com',
  location: 'Philippines · UTC+8',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: 'Cloud', label: 'Consulting background', Icon: Briefcase },
    { value: 'n8n', label: 'Learning focus', Icon: Robot },
    { value: 'UTC+8', label: 'Philippines', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Clear inquiries.', line2: 'Simpler follow-ups.' },
  hero: {
    body: 'I help small businesses organize inquiries and simplify follow-ups, backed by cloud consulting experience.',
    portraitSrc: '/profile.png',
    portraitAlt: 'Ed David Verzola',
  },
  socials: [
    {label:'LinkedIn',href:'https://www.linkedin.com/in/ed-david-verzola-456269a3/',iconPath:'/icons/linkedin.svg'},
    {label:'WhatsApp',href:'https://wa.me/639171420582',iconPath:'/icons/whatsapp.svg'},
    {label:'OnlineJobs.ph',href:'https://v2.onlinejobs.ph/jobseekers/info/459478',iconPath:'/icons/globe.svg'},
  ],
}
