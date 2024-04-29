/**
 * @typedef {import("@prismicio/client").Content.HeroBackgroundImageSlice} HeroBackgroundImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBackgroundImageSlice>} HeroBackgroundImageProps
 * @param {HeroBackgroundImageProps}
 */

import Image from 'next/image'

import s from './s.module.scss'

export default function HeroBackgroundImage({ slice: { slice_type, variation, primary } }) {
  const {
    heading, subheading, copy: [{ text }],
    backgroundImage: {
      dimensions: { width, height }, alt = '', url
    }
  } = primary

  return (
    <section data-slice-type={slice_type} data-slice-variation={variation} className={s.main}>
      <Image
        src={url}
        alt={alt}
        width={width}
        height={height}
        className={s.background}
        priority
      />

      <article className={s.text}>
        {heading && <h1 className={'heading'}>{heading}</h1>}

        {subheading && <h2 className={'subheading'}>{subheading}</h2>}

        {text && <p className={'copy'}>{text}</p>}
      </article>
    </section>
  )
}
