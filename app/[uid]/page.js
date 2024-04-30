import { createClient } from '@/prismicio'
import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

export default async function Page({ params }) {
    const client = createClient()

    const page = await client
        .getByUID('page', params.uid)
        .catch(() => notFound())

    return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateStaticParams() {
    const client = createClient()

    const pages = await client.getAllByType('page')

    return pages.map(page => ({ uid: page.uid }))
}