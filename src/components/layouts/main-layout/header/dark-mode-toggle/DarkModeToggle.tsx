'use client'

import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import { useDarkMode } from '@/hooks/useDarkMode'

export const DarkModeToggle: React.FC = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode()

	return (
		<button className='dark-mode-toggle' onClick={toggleDarkMode}>
			{isDarkMode ? (
				<FaSun className='icon sun-icon' />
			) : (
				<FaMoon className='icon moon-icon' />
			)}
		</button>
	)
}
