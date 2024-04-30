import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

import s from './Navigation.module.scss'

export default async function Navigation() {
    const client = createClient()
    const navigation = await client.getByUID('navigation', 'navigation').catch(e => console.error(e))
    const { data: { slices } } = navigation

    const links = slices.map(({ id, primary: { name, link } }) => {
        return (
            <li key={id}>
                <PrismicNextLink field={link}>
                    {name}
                </PrismicNextLink>
            </li>
        )
    })

    return (
        <nav className={s.main}>
            <ul className={s.links}>
                {links}
            </ul>
        </nav>
    )
}