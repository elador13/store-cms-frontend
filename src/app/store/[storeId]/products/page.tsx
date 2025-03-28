import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Products } from './Products'

export const metadata: Metadata = {
	title: 'Products',
	...NO_INDEX_PAGE
}

export default function ProductsPage({params}: { params: { storeId: string } }) {
	return <Products params={params}/>
}
