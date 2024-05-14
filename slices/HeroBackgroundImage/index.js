/**
 * @typedef {import("@prismicio/client").Content.HeroBackgroundImageSlice} HeroBackgroundImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroBackgroundImageSlice>} HeroBackgroundImageProps
 * @param {HeroBackgroundImageProps}
 */

import Image from 'next/image'

import s from './index.module.scss'

export default function HeroBackgroundImage({ slice: { slice_type, variation, primary } }) {
  const {
    heading = '', subheading = '', copy: [{ text = '' } = {}] = [],
    backgroundImage: {
      dimensions: { width = 0, height = 0 } = {}, alt = '', url = ''
    } = {}
  } = primary

  return (
    <section data-slice-type={slice_type} data-slice-variation={variation} className={s.main}>
      {url && (
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          sizes="100vw"
          className={s.background}
          priority
        />
      )}

      <article className={s.content}>
        <div className={s.text}>
          {heading && <h1 className={'heading'}>{heading}</h1>}

          {subheading && <h2 className={'subheading'}>{subheading}</h2>}

          {text && <p className={'copy'}>{text}</p>}
        </div>
      </article>
    </section>
  )
}
