import styled from 'styled-components'

export const ExperienceWrapper = styled.section`

`

export const ExperienceList = styled.div`
    margin-top: 50px;
    color: #fff;
`

export const ExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

export const ExperienceDate = styled.div`
    text-transform: uppercase;
    margin-bottom: 25px;

    &::after {
        content: '';
        background: #A5A5A5;
        width: 42px;
        height: 2px;
        display: block;
        margin-top: 10px;
    }
`

export const ExperienceCompany = styled.h3`
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
`

export const ExperienceRole = styled.h4`
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-top: 2px;
`

export const ExperienceDescription = styled.p`
    line-height: 20px;
`