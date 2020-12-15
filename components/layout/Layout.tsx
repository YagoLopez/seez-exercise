// todo: review Readme.md
import { TopBar } from '../TopBar'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
} from '@rmwc/drawer'
import { List, ListItem } from '@rmwc/list'
import React, { FormEvent, Ref, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './Layout.module.css'
import { CONST } from '../../constants'
import { Icon } from '@rmwc/icon'
import { Switch } from '@rmwc/switch'
import { NoteConsumer } from '../../context/NoteProvider'

export default function Layout({ children }) {
  const layoutDivRef = useRef<HTMLDivElement>(null)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [checked, setChecked] = useState(false)

  // const { variableState, setVariableState } = useAppContext()

  const onClickRandomJoke = () => {
    setOpenDrawer(!openDrawer)
  }

  const onClickRTL = (
    evt: FormEvent,
    layoutDivRef: { current: HTMLDivElement }
  ) => {
    setChecked(!!(evt.currentTarget as HTMLInputElement).checked)
    const layoutDivElement = layoutDivRef.current
    layoutDivElement.setAttribute('dir', 'rtl')
  }

  return (
    <div ref={layoutDivRef}>
      <Drawer modal open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerHeader>
          <DrawerTitle>Chuck Norries Jokes</DrawerTitle>
          <DrawerSubtitle>Seez Exercise</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem onClick={onClickRandomJoke}>
              <Icon icon="search" className={styles.icon_color} />
              <Link href="/">
                <a className={styles.menu_item}>Search</a>
              </Link>
            </ListItem>
            <ListItem onClick={onClickRandomJoke}>
              <Icon icon="exit_to_app" className={styles.icon_color} />
              <Link href="/random/[]">
                <a className={styles.menu_item}>Get Random Jokes</a>
              </Link>
            </ListItem>
            <DrawerHeader>
              <DrawerSubtitle>Text Direction:</DrawerSubtitle>
              <Switch
                checked={checked}
                onChange={(evt) => onClickRTL(evt, layoutDivRef)}
                label="RTL"
              />
            </DrawerHeader>
          </List>
        </DrawerContent>
      </Drawer>
      <TopBar
        title={CONST.APP_TITLE}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />

      <NoteConsumer>
        {({ state, toggleRtl }) => (
          <>
            <button onClick={toggleRtl}>Toggle Rtl</button>
            <div>rtl value: {state.isRtl.toString()}</div>
            <div>
              <Link href="/notelist2">
                <a>go to notelist 2</a>
              </Link>
            </div>
          </>
        )}
      </NoteConsumer>

      {children}
    </div>
  )
}
