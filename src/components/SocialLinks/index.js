import React from 'react'

import Icons from './icons'
import Links from './content'
import * as S from './styled'

const SocialLinks = () => (
  <S.SocialLinksList>
    {Links.map((link, index) => {
      const Icon = Icons[link.label]

      return (
        <S.SocialLinksItem key={index}>
          <S.SocialLinksLink href={link.url} title={link.label} target="_blank">
            <S.IconItem>
              <Icon />
            </S.IconItem>
          </S.SocialLinksLink>
        </S.SocialLinksItem>
      )
    })
    }
  </S.SocialLinksList>
)

export default SocialLinks