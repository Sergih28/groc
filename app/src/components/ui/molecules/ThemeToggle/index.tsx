import useTheme from '@hooks/useTheme'

import Switch from '@atoms/Switch'

const ThemeToggle = () => {
  const { darkMode, hasMounted, switchLabel, toggleTheme } = useTheme()

  if (!hasMounted) return null

  return <Switch isOn={darkMode} handleChange={toggleTheme} switchLabel={switchLabel} />
}

export default ThemeToggle
