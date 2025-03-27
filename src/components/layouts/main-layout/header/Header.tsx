import styles from './Header.module.scss'
import { DarkModeToggle } from './dark-mode-toggle/DarkModeToggle'
import { HeaderMenu } from './header-menu/HeaderMenu'
import { Logo } from './logo/Logo'
import { SearchInput } from './search-input/SearchInput'

export function Header() {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.search}>
				<SearchInput />
			</div>
			<HeaderMenu />
			<DarkModeToggle />
		</div>
	)
}
