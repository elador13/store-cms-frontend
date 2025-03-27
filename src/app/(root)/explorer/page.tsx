import type { Metadata } from 'next'

import { productService } from '@/services/product.service'

import { Explorer } from './Explorer'

export const metadata: Metadata = {
	title: 'Products catalog'
}

export const revalidate = 60

export default async function ExplorerPage({
	searchParams
}: {
	searchParams: { searchTerm?: string }
}) {
	let products = await productService.getAll()

	if (searchParams.searchTerm) {
		products = products.filter(product =>
			product.title
				.toLowerCase()
				.includes(searchParams?.searchTerm?.toLowerCase() || '')
		)
	}

	return <Explorer products={products} searchTerm={searchParams.searchTerm} />
}
