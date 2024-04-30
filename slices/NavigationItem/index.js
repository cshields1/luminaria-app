/**
 * @typedef {import("@prismicio/client").Content.NavigationItemSlice} NavigationItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationItemSlice>} NavigationItemProps
 * @param {NavigationItemProps}
 */
export default function NavigationItem({ slice: { primary: { name, link } } }) {
  return { name, link }
}