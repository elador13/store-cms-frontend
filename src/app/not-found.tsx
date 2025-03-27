import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center'>
			<div className='mx-auto max-w-md text-center'>
				<h1 className='text-9xl font-extrabold tracking-tighter text-primary'>
					404
				</h1>
				<h2 className='mt-4 text-2xl font-bold tracking-tight'>
					Page not found
				</h2>
				<p className='mt-2 text-muted-foreground'>
					Sorry, we couldn't find the page you're looking for.
				</p>
				<Button asChild className='mt-8'>
					<Link href='/' className='flex items-center gap-2'>
						<ArrowLeft className='h-4 w-4' />
						Back to home
					</Link>
				</Button>
			</div>
		</div>
	)
}
