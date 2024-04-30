/**
 * @typedef {import("@prismicio/client").Content.TextImageBlockSlice} TextImageBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageBlockSlice>} TextImageBlockProps
 * @param {TextImageBlockProps}
 */

import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import s from './index.module.scss'

export default function TextImageBlock({ slice: { slice_type, variation, primary } }) {
  const { copy = [], image = {} } = primary

  return (
    <section data-slice-type={slice_type} data-slice-variation={variation} className={s.main}>
      {variation === 'default' && (
        <article className={`copy ${s.text}`}>
          <PrismicRichText field={copy} />
        </article>
      )}

      <PrismicNextImage field={image} className={`${s.image} ${variation === 'default' ? s.imageRight : s.imageLeft}`} />

      {variation !== 'default' && (
        <div className={`copy ${s.text}`}>
          <PrismicRichText field={copy} />
        </div>
      )}
    </section>
  )
}
