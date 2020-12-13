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
          <DrawerTitle>Search Jokes</DrawerTitle>
          <DrawerSubtitle>About Chuck Norris</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListItem onClick={onClickRandomJoke}>
              <Link href="/">
                <a className={styles.menu_item}>Home</a>
              </Link>
            </ListItem>
            <ListItem onClick={onClickRandomJoke}>
              <Link href="/random/[]">
                <a className={styles.menu_item}>Random Jokes</a>
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
