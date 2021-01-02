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
              <span title="Go to Start Page" onClick={() => router.push('/')}>
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
