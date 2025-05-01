import NextLink from "next/link";
import type { UrlObject } from 'url';

export type LinkProps = {
  href: string | UrlObject
}

export default function Link(props: LinkProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return <NextLink
    href={props.href}
    onClick={e => {

      if (typeof props.href == "string") {
        const url = typeof props.href == "string" ? new URL(props.href, window.location.origin) : props.href;
      } else {
        props.href.hash
      }
      if (props.href.toString().startsWith("#")) {
        const id = props.href.toString().slice(1);
        handleScroll(id);
        e.preventDefault();
      }
    }}
  />
}
