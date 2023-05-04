import React, { useEffect } from "react"
import { isEqual } from "lodash"

import { IoMdPartlySunny } from "react-icons/io"
import { IoMdCloudyNight } from "react-icons/io"

import styles from "@styles/components/switch.module.scss"

interface Props {
  isMobile: boolean
  theme: ThemeState
  setTheme: SetTheme
}

const Switch: React.FC<Props> = ({ isMobile, theme, setTheme }) => {
  function set(mode: ThemeState) {
    setTheme(mode)
    localStorage.setItem("theme-settings", JSON.stringify(mode))
  }

  const paintTheme = (arr) => {
    arr.forEach((a) => {
      document.documentElement.style.setProperty(a[0], a[1])
    })
  }

  useEffect(() => {
    const TS = localStorage.getItem("theme-settings")
    if (TS) {
      isEqual(theme, JSON.parse(TS))
        ? theme.bright
          ? paintTheme(modes.bright)
          : paintTheme(modes.night)
        : setTheme(JSON.parse(TS))
    }
  }, [theme])

  return (
    <>
      {!isMobile && (
        <div className={styles.switch}>
          {theme.bright && (
            <p onClick={() => set({ bright: true, night: false })}>
              <IoMdPartlySunny />
            </p>
          )}
          {theme.night && (
            <p onClick={() => set({ bright: false, night: true })}>
              <IoMdCloudyNight />
            </p>
          )}
        </div>
      )}
    </>
  )
}

export default Switch

const modes = {
  bright: [
    ["--app-background", "#fff"],
    ["--app-alt-bg", "#ebebeb"],
    ["--app-text", "#000"],
    ["--star-color", "#4683b4cc"],
  ],
  night: [
    ["--app-background", "#070707"],
    ["--app-alt-bg", "#161616"],
    ["--app-text", "#fff"],
    ["--star-color", "rgba(255, 255, 255, 0.8)"],
  ],
}
