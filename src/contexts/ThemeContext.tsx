import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = "starfix-theme"

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) return "dark"
  return "light"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      void 0
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}