import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import SocialLinks from '../SocialLinks'
import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, position },
    },
  } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            author
            position
          }
        }
      }
    `
  )

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover bg="#242424" direction="left" duration={0.6}>
        <Avatar />
      </S.ProfileLink>
      <S.ProfileDescription>
        <S.ProfileAuthor>
          {author}
        </S.ProfileAuthor>
        <S.ProfilePosition>
          {position}
        </S.ProfilePosition>
        <SocialLinks />
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
