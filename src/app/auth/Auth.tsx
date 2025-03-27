'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/Card'
import { Form } from '@/components/ui/form-elements/Form'

import styles from './Auth.module.scss'
import { AuthFields } from './AuthFields'
import { Social } from './Social'
import { useAuthForm } from './useAuthForm'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReg)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image
					src='/images/logo.svg'
					alt='CMS store auth'
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle>
							{isReg ? 'Create Account' : 'Sign In'}
						</CardTitle>
						<CardDescription>
							Sign in or create an account to start shopping!
						</CardDescription>
					</CardHeader>
					<CardContent className={styles.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields
									form={form}
									isPending={isPending}
									isReg={isReg}
								/>

								<Button disabled={isPending}>Continue</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className={styles.footer}>
						{isReg
							? 'Already have an account?'
							: "Don't have an account?"}
						<button onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Sign In' : 'Create'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
