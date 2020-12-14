import { TopBar } from '../TopBar'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
} from '@rmwc/drawer'
import { List, ListItem } from '@rmwc/list'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import styles from './Layout.module.css'
import { CONST } from '../../constants'
import { Icon } from '@rmwc/icon'
import { Switch } from '@rmwc/switch'

export default function Layout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [checked, setChecked] = useState(false)

  const onClickRandomJoke = () => {
    setOpenDrawer(!openDrawer)
  }

  const onClickRTL = (evt: FormEvent) => {
    setChecked(!!(evt.currentTarget as HTMLInputElement).checked)
    const htmlElement = document.getElementsByTagName('html')[0]
    htmlElement.setAttribute('dir', 'rtl')
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
                onChange={(evt) => onClickRTL(evt)}
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
      {children}
    </>
  )
}
