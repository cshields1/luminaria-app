/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param {ImageProps}
 */

import { PrismicNextImage } from '@prismicio/next'

import s from './index.module.scss'

export default function Image({ slice: { slice_type, variation, primary: { image }} }) {
  return (
    <section data-slice-type={slice_type} data-slice-variation={variation} className={s.main}>
      <PrismicNextImage field={image} className={s.image} />
    </section>
  )
}
