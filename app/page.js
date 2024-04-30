import { createClient } from '@/prismicio'
import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'

export default async function Home() {
  const client = createClient()

  const page = await client
    .getSingle('homepage')
    .catch(() => notFound())

  return <SliceZone slices={page.data?.slices} components={components} />
}
