import Link from 'next/link'
import {
  TopAppBar,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@rmwc/top-app-bar'
import { IconButton } from '@rmwc/icon-button'
import { useRouter } from 'next/router'
import css from '../public/styles/global.module.css'

interface TopBarProps {
  title?: string
  openDrawer: boolean
  showBackBtn?: boolean
  showHomeBtn?: boolean
  setOpenDrawer: Function
}

export const TopBar = ({
  title,
  openDrawer,
  showBackBtn,
  showHomeBtn,
  setOpenDrawer,
}: TopBarProps) => {
  const router = useRouter()

  return (
    <>
      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <IconButton
              icon="menu"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
            <TopAppBarTitle>
              <span
                onClick={() => router.push('/')}
                className={css.appBarTitle}>
                {title}
              </span>
            </TopAppBarTitle>
          </TopAppBarSection>
          {showHomeBtn && (
            <TopAppBarSection alignEnd>
              <Link href="/">
                <a title="Return to Home Page">
                  <TopAppBarActionItem icon="home" />
                </a>
              </Link>
            </TopAppBarSection>
          )}
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  )
}
