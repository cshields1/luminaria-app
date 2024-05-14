/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param {TextBlockProps}
 */

import { PrismicRichText } from '@prismicio/react'
import parse from 'html-react-parser'

import s from './index.module.scss'

export default function TextBlock({ slice: { slice_type, variation, primary: { copy = [], html = '' } } }) {
  return (
    <section data-slice-type={slice_type} data-slice-variation={variation} className={s.main}>
      <article>
        {copy.length > 0 && <PrismicRichText field={copy} />}

        {html && parse(html)}
      </article>
    </section>
  )
}