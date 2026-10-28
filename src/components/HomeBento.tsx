import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, User, Robot, Cloud, Stack, ChatCircle } from '@/components/slab'
import { profile } from '@/data/profile'
const cards=[
 {to:'/projects',slot:'projects',Icon:FolderOpen,title:'Projects',desc:'Self-initiated prototypes. Open the work and see its limits.',image:'/projects/inquiry-demo.webp'},
 {to:'/about',slot:'about',Icon:User,title:'About Ed',desc:'Cloud consulting background. Developing automation skills.',image:profile.avatarSrc},
 {to:'/demo',slot:'ai',Icon:Robot,title:'Try a sample',desc:'Inquiry capture, duplicate checks and human review.',points:['Synthetic data','Browser-only demo','No messages sent']},
 {to:'/services',slot:'creds',Icon:Cloud,title:'Cloud consulting',desc:'Architecture reviews, reliability and prioritized recommendations.',points:['Defined scope','Practical recommendations','Documented handover']},
 {to:'/services',slot:'services',Icon:Stack,title:'Services',desc:'A focused first project for a small business.',points:['Inquiry capture & follow-up','APIs & webhook integrations','Custom apps & dashboards']},
 {to:'/contact',slot:'quotes',Icon:ChatCircle,title:'Let’s talk',desc:'Tell me where inquiries get stuck. We can scope a useful next step.',points:['WhatsApp: +63 917 142 0582','dverzola26@gmail.com','Philippines · Working worldwide']},
]
export default function HomeBento(){return <nav className="bento" aria-label="Explore the portfolio">{cards.map(({to,slot,Icon,title,desc,image,points})=><Link key={title} aria-label={`${title}: ${desc}`} to={to} className={`bento__card bento__card--${slot}`}><header className="bento__head"><span className="bento__label"><span className="bento__icon"><Icon size={20} weight="fill" aria-hidden="true"/></span><h3 className="bento__title">{title}</h3></span><p className="bento__desc">{desc}</p><ArrowUpRight size={15} className="bento__arrow" aria-hidden="true"/></header>{image?<div className={`bento__media ${slot==='about'?'native-portrait':'native-project-shot'}`} aria-hidden="true"><img src={image} alt="" loading="lazy"/></div>:<ul className="bento__media native-points">{points?.map(p=><li key={p}>{p}</li>)}</ul>}</Link>)}</nav>}
