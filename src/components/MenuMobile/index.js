import React from "react"

import * as S from "./styled"
import IconPortfolio from "../../images/svg-icons/surface1.svg"
import IconExperience from "../../images/svg-icons/briefcase.svg"
import IconSkillset from "../../images/svg-icons/star.svg"
import IconCertificate from "../../images/svg-icons/certificate.svg"
import { Globe } from '@styled-icons/fa-solid/Globe'


const MenuMobile = () => (
  <S.MenuMobWrapper>
    <S.MenuMobList>
      <S.MenuMobItem>
        <S.MenuMobLink cover direction="top" bg="#242424" duration={0.6} activeClassName="actived" to="/">
          <IconPortfolio />
        </S.MenuMobLink>
      </S.MenuMobItem>
      <S.MenuMobItem>
        <S.MenuMobLink cover direction="top" bg="#242424" duration={0.6} activeClassName="actived" to="/experiencia">
          <IconExperience />
        </S.MenuMobLink>
      </S.MenuMobItem>
      <S.MenuMobItem>
        <S.MenuMobLink cover direction="top" bg="#242424" duration={0.6} activeClassName="actived" to="/skillset">
          <IconSkillset />
        </S.MenuMobLink>
      </S.MenuMobItem>
      <S.MenuMobItem>
        <S.MenuMobLink cover direction="top" bg="#242424" duration={0.6} activeClassName="actived" to="/certificacoes">
          <IconCertificate />
        </S.MenuMobLink>
      </S.MenuMobItem>
      <S.MenuMobItem>
        <S.MenuMobLink cover direction="top" bg="#242424" duration={0.6} activeClassName="actived" to="/casos-covid19">
          <Globe />
        </S.MenuMobLink>
      </S.MenuMobItem>
    </S.MenuMobList>
  </S.MenuMobWrapper>
)

export default MenuMobile
