import { Plus } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { DataTable } from '@/components/ui/data-table/DataTable'

import { STORE_URL } from '@/config/url.config'

import { IProduct } from '@/shared/types/product.interface'

import { formatPrice } from '@/utils/string/format-price'

import styles from '../Store.module.scss'

import { IProductColumn } from './ProductColumns'

const fetchProducts = async (storeId: string): Promise<IProduct[]> => {
	const cookieStore = cookies()
	const accessToken = cookieStore.get('accessToken')?.value

	const response = await fetch(
		`http://localhost:5000/products/by-storeId/${storeId}`,
		{
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`
			}
		}
	)
	return await response.json()
}

export async function Products({ params }: { params: { storeId: string } }) {
	const products = await fetchProducts(params.storeId)

	const formattedProducts: IProductColumn[] = products
		? products.map(product => ({
				id: product.id,
				title: product.title,
				price: formatPrice(product.price),
				category: product.category.title,
				color: product.color.value,
				storeId: product.storeId
			}))
		: []

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading
					title={`Products (${products?.length})`}
					description='All products in your store'
				/>
				<div className={styles.buttons}>
					<Link href={STORE_URL.productCreate(params.storeId)}>
						<Button variant='primary'>
							<Plus />
							Create
						</Button>
					</Link>
				</div>
			</div>
			<div className={styles.table}>
				<DataTable data={formattedProducts} filterKey='title' />
			</div>
		</div>
	)
}
