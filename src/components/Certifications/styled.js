import styled from "styled-components"
import media from 'styled-media-query'

export const CertificationsWrapper = styled.section`
    ${media.lessThan("991.98px")`
      padding-bottom: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`

export const CertificationsList = styled.ul`
  &.completed {
    margin-top: 50px;
    padding-bottom: 10px;
    border-bottom: 0.5px solid #777777;
  }

  &.ongoing {
    margin-top: 20px;
  }

  ${media.lessThan("991.98px")`
      width: 17rem;
      margin: 0 auto;
      padding-bottom: 80px;
      margin-top: 20px;
  `}
`

export const CertificationsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #fff;

  &.completed::before {
    content: "";
    width: 6px;
    height: 6px;
    background: #1edfd5;
    border-radius: 50%;
    display: block;
    margin-right: 10px;
  }

  &.ongoing::before {
    content: "";
    width: 5px;
    height: 5px;
    border: 1px solid #a5a5a5;
    border-radius: 50%;
    display: block;
    margin-right: 10px;
  }

  .course-name {
    font-weight: bold;
    padding-right: 5px;
  }

  .plataform-name {
    padding-left: 5px;
  }

  ${media.lessThan("1225px")`
    display: -webkit-box;
    
    .plataform-name {
      padding-left: 0px;
    }

    .course-name {
      padding-right: 0px;
    }
  `}
`

export const CertificationsSubtitle = styled.ul`
  display: inline-flex;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 6px 15px;
  color: #fff;
  margin-top: 150px;

  ${media.lessThan("991.98px")`
    margin-top: 50px;
  `}
`

export const CertificationsSubtitleItem = styled.li`
  display: flex;
  align-items: center;
  text-transform: uppercase;

  &.completed::before {
    content: "";
    width: 6px;
    height: 6px;
    background: #1edfd5;
    border-radius: 50%;
    display: block;
    margin-right: 5px;
  }

  &.ongoing {
      margin-left: 20px;
  }

  &.ongoing::before {
    content: "";
    width: 5px;
    height: 5px;
    border: 1px solid #a5a5a5;
    border-radius: 50%;
    display: block;
    margin-right: 5px;
  }
`
