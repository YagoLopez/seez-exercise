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
import React, { FormEvent, Ref, useState } from 'react'
import Link from 'next/link'
import styles from './Layout.module.css'
import { CONST } from '../../constants'
import { Icon } from '@rmwc/icon'
import { AppContextConsumer } from '../../context/AppContextProvider'
import { Button } from '@rmwc/button'

export default function Layout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [checked, setChecked] = useState(false)

  const onClickRandomJoke = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <AppContextConsumer>
      {({ state, toggleRtl }) => (
        <>
          <div dir={state.isRtl ? 'rtl' : 'ltr'}>
            <Drawer
              modal
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}>
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
                    <DrawerSubtitle>Text Direction</DrawerSubtitle>
                    <br />
                    {state.isRtl ? (
                      <Button
                        onClick={toggleRtl}
                        label="Change to LTR"
                        raised
                      />
                    ) : (
                      <Button
                        onClick={toggleRtl}
                        label="Change to RTL"
                        raised
                      />
                    )}
                  </DrawerHeader>
                  <ListItem onClick={onClickRandomJoke}>
                    <span className={styles.menu_item}>Close Drawer</span>
                  </ListItem>
                </List>
              </DrawerContent>
            </Drawer>
            <TopBar
              title={CONST.APP_TITLE}
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
            {children}
          </div>
        </>
      )}
    </AppContextConsumer>
  )
}
