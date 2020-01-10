import React from "react"

import * as S from "./styled"
import links from "../MenuLinks/content"
import techs from "./tech"
import skills from "./skills"
import PageTitle from "../PageTitle"
import Icon from "../../images/svg-icons/star.svg"

const SkillsetItems = () => (
  <S.SkillsetWrapper>
    <PageTitle>
      <Icon />
      <h2>{links[2].label}</h2>
    </PageTitle>
    <S.SkillsetTech>
        <S.SkillsetSubtitle>Tecnologias</S.SkillsetSubtitle>
        <S.SkillsetList>
            {techs.map((tech, index) => (
                <S.SkillsetItem key={`tech${index}`}>
                    {tech}
                </S.SkillsetItem>
            ))}
        </S.SkillsetList>
    </S.SkillsetTech>
    <S.SkillsetGeneral>
        <S.SkillsetSubtitle>Habilidades Gerais</S.SkillsetSubtitle>
        <S.SkillsetList>
            {skills.map((skill, index) => (
                <S.SkillsetItem key={`skill${index}`}>
                    {skill}
                </S.SkillsetItem>
            ))}
        </S.SkillsetList>
    </S.SkillsetGeneral>
  </S.SkillsetWrapper>
)

export default SkillsetItems
