import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

import s from './Header.module.scss'

export default function Header() {
    return (
        <header className={s.main}>
            <div className={s.content}>
                <Logo />

                <Navigation />
            </div>
        </header>
    )
}