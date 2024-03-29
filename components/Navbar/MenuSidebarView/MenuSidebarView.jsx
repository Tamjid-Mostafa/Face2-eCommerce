import SidebarLayout from '@/components/common/SidebarLayout'
import { useUI } from '@/components/ui/context'
import Link from 'next/link'
import s from './MenuSidebarView.module.css'


export default function MenuSidebarView({
  links = [],
}) {
  const { closeSidebar } = useUI()

  return (
    <SidebarLayout handleClose={() => closeSidebar()}>
      <div className={s.root}>
        <nav>
          <ul>
            <li className={s.item} onClick={() => closeSidebar()}>
              <Link href="/search">All</Link>
            </li>
            {links.map((l) => (
              <li
                key={l.href}
                className={s.item}
                onClick={() => closeSidebar()}
              >
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </SidebarLayout>
  )
}

MenuSidebarView
