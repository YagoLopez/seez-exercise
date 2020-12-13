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
  const goBack = () => router.back()

  return (
    <>
      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <IconButton
              icon="menu"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
            {/*<IconButton onClick={goBack} icon="arrow_back" title="Go Back" />*/}
            <TopAppBarTitle>{title}</TopAppBarTitle>
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
