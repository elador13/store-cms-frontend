'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface DarkModeContextType {
	isDarkMode: boolean
	toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
	const [isDarkMode, setIsDarkMode] = useState(true)

	useEffect(() => {
		const isDark = localStorage.getItem('darkMode') === 'true'
		setIsDarkMode(isDark)
		document.body.classList.toggle('dark', isDark)
	}, [])

	const toggleDarkMode = () => {
		const newValue = !isDarkMode
		setIsDarkMode(newValue)
		localStorage.setItem('darkMode', String(newValue))
		document.body.classList.toggle('dark', newValue)
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	)
}

export const useDarkMode = () => {
	const context = useContext(DarkModeContext)
	if (!context)
		throw new Error('useDarkMode must be used within DarkModeProvider')
	return context
}
