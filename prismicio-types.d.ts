// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Event documents
 */
interface EventDocumentData {
  /**
   * Type field in *Event*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Concert
   * - **API ID Path**: event.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<"Concert" | "Audition", "filled">;

  /**
   * Name field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Short Description field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.shortDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  shortDescription: prismic.KeyTextField;

  /**
   * Long Description field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Date and Time field in *Event*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: event.dateAndTime
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  dateAndTime: prismic.TimestampField;

  /**
   * Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;

type HomepageDocumentDataSlicesSlice =
  | TextBlockSlice
  | ImageSlice
  | TextImageBlockSlice
  | HeroBackgroundImageSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type NavigationDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | TextBlockSlice
  | ImageSlice
  | TextImageBlockSlice
  | HeroBackgroundImageSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | EventDocument
  | HomepageDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *HeroBackgroundImage → Primary*
 */
export interface HeroBackgroundImageSliceDefaultPrimary {
  /**
   * Heading field in *HeroBackgroundImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_background_image.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subheading field in *HeroBackgroundImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_background_image.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * Copy field in *HeroBackgroundImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_background_image.primary.copy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copy: prismic.RichTextField;

  /**
   * Background Image field in *HeroBackgroundImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_background_image.primary.backgroundImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundImage: prismic.ImageField<never>;
}

/**
 * Default variation for HeroBackgroundImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBackgroundImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroBackgroundImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroBackgroundImage*
 */
type HeroBackgroundImageSliceVariation = HeroBackgroundImageSliceDefault;

/**
 * HeroBackgroundImage Shared Slice
 *
 * - **API ID**: `hero_background_image`
 * - **Description**: HeroBackgroundImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBackgroundImageSlice = prismic.SharedSlice<
  "hero_background_image",
  HeroBackgroundImageSliceVariation
>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *NavigationItem → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Name field in *NavigationItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *NavigationItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Copy field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.copy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copy: prismic.RichTextField;

  /**
   * HTML field in *TextBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.html
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  html: prismic.KeyTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

/**
 * Primary content in *TextImageBlock → Primary*
 */
export interface TextImageBlockSliceDefaultPrimary {
  /**
   * Copy field in *TextImageBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_block.primary.copy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copy: prismic.RichTextField;

  /**
   * Image field in *TextImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Text-Image variation for TextImageBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextImageBlockSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *TextImageBlock → Primary*
 */
export interface TextImageBlockSliceImageTextPrimary {
  /**
   * Image field in *TextImageBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_block.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Copy field in *TextImageBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_block.primary.copy
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  copy: prismic.RichTextField;
}

/**
 * Image-Text variation for TextImageBlock Slice
 *
 * - **API ID**: `imageText`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageBlockSliceImageText = prismic.SharedSliceVariation<
  "imageText",
  Simplify<TextImageBlockSliceImageTextPrimary>,
  never
>;

/**
 * Slice variation for *TextImageBlock*
 */
type TextImageBlockSliceVariation =
  | TextImageBlockSliceDefault
  | TextImageBlockSliceImageText;

/**
 * TextImageBlock Shared Slice
 *
 * - **API ID**: `text_image_block`
 * - **Description**: TextImageBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageBlockSlice = prismic.SharedSlice<
  "text_image_block",
  TextImageBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      EventDocument,
      EventDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroBackgroundImageSlice,
      HeroBackgroundImageSliceDefaultPrimary,
      HeroBackgroundImageSliceVariation,
      HeroBackgroundImageSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
      TextImageBlockSlice,
      TextImageBlockSliceDefaultPrimary,
      TextImageBlockSliceImageTextPrimary,
      TextImageBlockSliceVariation,
      TextImageBlockSliceDefault,
      TextImageBlockSliceImageText,
    };
  }
}
