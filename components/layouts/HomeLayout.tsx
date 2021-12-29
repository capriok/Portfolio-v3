import React, { useState, useEffect } from 'react'
import { useScrollDirection } from "react-hooks-lab";

import Stars from '../Stars';
import Switch from '../Switch';
import Header from '../Header'

import styles from '../../shared/styles/components/Layouts.module.scss'

const Layout: React.FC = ({ children }) => {
  const [dir, setDir] = useState<string>('top')
  const [pos, setPos] = useState<number>(0)

  const [theme, setTheme] = useState<ThemeState>({ bright: true, night: false })

  const scrollingDir = useScrollDirection()

  const value = v => {
    theme.bright
      ? document.documentElement.style.setProperty('--star-color', `rgba(70, 131, 180, ${v})`)
      : document.documentElement.style.setProperty('--star-color', `rgba(255, 255, 255, ${v})`)
  }
  let atHome
  let isMobile
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === '/'
    isMobile = window.innerWidth < 550
  }

  useEffect(() => {
    let delay = setTimeout(() => {
      setDir(scrollingDir)
      clearTimeout(delay)
    }, 50)
  }, [pos, scrollingDir])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (pos > 500) value(0.3)
    if (pos <= 500) value(0.4)
    if (pos <= 400) value(0.5)
    if (pos <= 300) value(0.6)
    if (pos <= 200) value(0.7)
    if (pos <= 100) value(0.8)

    if (!atHome) return value(0.3)
    if (isMobile) return value(0.2)
  }, [pos, theme])

  function handleScroll() {
    let position
    if (typeof window !== `undefined`) {
      position = window.pageYOffset
    }
    setPos(position)
  }

  return (
    <>
      <Switch isMobile={isMobile} theme={theme} setTheme={setTheme} />
      <Stars />
      <Header dir={dir} pos={pos} atHome={atHome} isMobile={isMobile} />
      <div className={styles.homeLayout}>
        <main>{children}</main>
        <footer className={styles.homeFooter}>
          <p>Built by Kyle Caprio | {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
