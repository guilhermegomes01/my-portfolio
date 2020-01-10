import React from "react"

import * as S from "./styled"
import links from "../MenuLinks/content"
import jobs from "./content"
import PageTitle from "../PageTitle"
import Icon from "../../images/svg-icons/briefcase.svg"

const Experience = () => (
  <S.ExperienceWrapper>
    <PageTitle>
      <Icon />
      <h2>{links[1].label}</h2>
    </PageTitle>
    <S.ExperienceList>
      {jobs.map((job, index) => (
        <S.ExperienceItem key={index}>
          <S.ExperienceDate>{job.date}</S.ExperienceDate>
          <S.ExperienceCompany>{job.company}</S.ExperienceCompany>
          <S.ExperienceRole>{job.role}</S.ExperienceRole>
          <S.ExperienceDescription>{job.description}</S.ExperienceDescription>
        </S.ExperienceItem>
      ))}
    </S.ExperienceList>
  </S.ExperienceWrapper>
)

export default Experience
