import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import React from 'react'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'
import { Providers } from './providers'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	icons: [{ rel: 'icon', href: '/favicon.ico', url: '/favicon.ico' }],
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${GeistSans.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
