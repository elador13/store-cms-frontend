import { Catalog } from '@/components/ui/catalog/Catalog'

import { IProduct } from '@/shared/types/product.interface'

interface ExplorerProps {
	products: IProduct[]
	searchTerm?: string
}

export function Explorer({ products, searchTerm }: ExplorerProps) {
	return (
		<div className='my-6'>
			<Catalog
				title={
					searchTerm
						? `Search results for "${searchTerm}"`
						: 'Product Catalog'
				}
				products={products}
			/>
		</div>
	)
}
