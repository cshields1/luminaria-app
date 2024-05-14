import Link from 'next/link'
import Image from 'next/image'

import logo from '@/public/logo.jpg'

import s from './Logo.module.scss'

export default function Logo() {
    return (
        <div className={s.container}>
            <Link href='/' tabIndex={0}>
                <Image
                    src={logo}
                    alt='Luminaria Choir logo'
                    className={s.logo}
                    priority
                />
            </Link>

            <p className={s.text}>
                LUMINARIA
            </p>
        </div>
    )
}