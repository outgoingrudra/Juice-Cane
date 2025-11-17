import React from 'react'
import { PrismicNextLink } from '@prismicio/next'
import { LinkField } from '@prismicio/client'
import clsx from 'clsx';

type Props = {
    buttonLink : LinkField ;
    butttonText : string  | null ;
    className? : string ;
}

export default function Button({buttonLink ,butttonText ,className}: Props) {
  return (
    <PrismicNextLink
     className={clsx("",className)}
    field={buttonLink}>
            {butttonText}
         </PrismicNextLink>
  )
}