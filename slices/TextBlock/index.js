/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param {TextBlockProps}
 */

import { PrismicRichText } from '@prismicio/react'

import s from './index.module.scss'

export default function TextBlock({ slice: { slice_type, variation, primary: { copy } } }) {
  return (
    <section data-slice-type={slice_type} data-slice-variation={variation} className={s.main}>
      <article>
        <PrismicRichText field={copy} />
      </article>
    </section>
  )
}