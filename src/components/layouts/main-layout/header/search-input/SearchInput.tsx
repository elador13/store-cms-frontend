'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEventHandler, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/form-elements/Input'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './SearchInput.module.scss'

export function SearchInput() {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const router = useRouter()

	const submitSearch: FormEventHandler = e => {
		e.preventDefault()
		router.push(PUBLIC_URL.explorer(`?searchTerm=${searchTerm}`))
	}

	return (
		<form className={styles.form} onSubmit={submitSearch}>
			<Input
				placeholder='Search products'
				value={searchTerm}
				onSubmit={submitSearch}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<Button variant='primary' type={'submit'}>
				<Search />
			</Button>
		</form>
	)
}
