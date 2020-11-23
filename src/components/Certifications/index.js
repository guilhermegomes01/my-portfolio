import React from "react"

import * as S from "./styled"
import links from "../MenuLinks/content"
import PageTitle from "../PageTitle"
import completedCourses from "./completedCourses"
import ongoingCourses from "./ongoingCourses"
import Icon from "../../images/svg-icons/certificate.svg"

const Certifications = () => (
  <S.CertificationsWrapper>
    <PageTitle>
      <Icon />
      <h2>{links[3].label}</h2>
    </PageTitle>
    <S.CertificationsList className="completed">
      {completedCourses.map((course, index) => (
        <S.CertificationsItem className="completed" key={`completed${index}`}>
          <p className="course">
            <span className="course-name">{course.name}</span> -{" "}
            <span className="plataform-name">{course.plataform}</span>
          </p>
        </S.CertificationsItem>
      ))}
    </S.CertificationsList>
    <S.CertificationsList className="ongoing">
      {ongoingCourses.map((course, index) => (
        <S.CertificationsItem className="ongoing" key={`ongoing${index}`}>
          <p className="course">
            <span className="course-name">{`[${course.percentage}] ${course.name}`} - </span>
            <span className="plataform-name"> {course.plataform}</span>
          </p>
        </S.CertificationsItem>
      ))}
    </S.CertificationsList>
    <S.CertificationsSubtitle>
      <S.CertificationsSubtitleItem className="completed">
        Concluído
      </S.CertificationsSubtitleItem>
      <S.CertificationsSubtitleItem className="ongoing">
        Em Andamento
      </S.CertificationsSubtitleItem>
    </S.CertificationsSubtitle>
  </S.CertificationsWrapper>
)

export default Certifications
