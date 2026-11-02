import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, ListChecks, Robot, Cloud, Stack, ChatCircle } from '@/components/slab'
const cards=[
 {to:'/projects',slot:'projects',Icon:FolderOpen,title:'Projects',desc:'Personal work in automation and web development.',image:'/projects/inquiry-demo.webp'},
 {to:'/services',slot:'method',Icon:ListChecks,title:'How I work',desc:'We agree on the work before I build it, then review it together.',points:['Understand the task','Set the scope','Build, test and hand over']},
 {to:'/services',slot:'ai',Icon:Robot,title:'Automation',desc:'I use n8n, APIs and webhooks to cut down manual follow-up.',points:['n8n workflows','APIs and webhooks']},
 {to:'/services',slot:'creds',Icon:Cloud,title:'Cloud consulting',desc:'I review cloud setups and write down what to fix first.',points:['Azure and AWS','A written priority list']},
 {to:'/services',slot:'services',Icon:Stack,title:'Services',desc:'Choose one workflow or business task to start with.',points:['Inquiry and follow-up','APIs and integrations','Custom web tools']},
 {to:'/contact',slot:'quotes',Icon:ChatCircle,title:'Contact',desc:'Tell me what is taking too much manual work.',points:['WhatsApp: +63 917 142 0582','dverzola26@gmail.com','Philippines · Working worldwide']},
]
export default function HomeBento(){return <nav className="bento" aria-label="Explore the portfolio">{cards.map(({to,slot,Icon,title,desc,image,points})=><Link key={title} aria-label={`${title}: ${desc}`} to={to} className={`bento__card bento__card--${slot}`}><header className="bento__head"><span className="bento__label"><span className="bento__icon"><Icon size={20} weight="fill" aria-hidden="true"/></span><h3 className="bento__title">{title}</h3></span><p className="bento__desc">{desc}</p><ArrowUpRight size={15} className="bento__arrow" aria-hidden="true"/></header>{image?<div className={`bento__media ${slot==='about'?'native-portrait':'native-project-shot'}`} aria-hidden="true"><img src={image} alt="" loading="lazy"/></div>:<ul className="bento__media native-points">{points?.map(p=><li key={p}>{p}</li>)}</ul>}</Link>)}</nav>}
