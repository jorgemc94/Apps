import { HeaderWrapper, ThemeButton } from "./HeaderStyled"
import { useTheme } from "../../context/ThemeContext"

export function HeaderComponent() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <HeaderWrapper>
      <h2>App Showcase</h2>
      <ThemeButton onClick={toggleTheme}>
        {darkMode ? "🌙" : "☀️"}
      </ThemeButton>
    </HeaderWrapper>
  )
}