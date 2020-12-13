import { TopBar } from '../TopBar'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
} from '@rmwc/drawer'
import { List, ListItem } from '@rmwc/list'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Layout.module.css'
import { CONST } from '../../constants'

export default function Layout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false)

  const onClickRandomJoke = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      <Drawer modal open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerHeader>
          <DrawerTitle>Chuck Norries Jokes</DrawerTitle>
          <DrawerSubtitle>Seez Exercise</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem onClick={onClickRandomJoke}>
              <Link href="/">
                <a className={styles.menu_item}>Search</a>
              </Link>
            </ListItem>
            <ListItem onClick={onClickRandomJoke}>
              <Link href="/random/[]">
                <a className={styles.menu_item}>Get Random Jokes</a>
              </Link>
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
    </>
  )
}
