import styles from './Footer.module.scss'

export function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.footer}>
				cmsstore.com &copy; 2024 <p>All rights reserved</p>{' '}
			</div>
		</div>
	)
}
