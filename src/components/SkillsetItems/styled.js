import styled from 'styled-components'

export const SkillsetWrapper = styled.section`
    color: #fff;
`

export const SkillsetSubtitle = styled.h3`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;

    &::after {
        content: '';
        background: #A5A5A5;
        width: 42px;
        height: 2px;
        display: block;
        margin-top: 10px;
    }
`

export const SkillsetTech = styled.section`
    margin-top: 50px;
`

export const SkillsetGeneral = styled.section`
    margin-top: 40px;
`

export const SkillsetList = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
`

export const SkillsetItem = styled.li`
    margin-right: 20px;
    border: 1px solid;
    border-radius: 3px;
    padding: 5px 15px;
    text-transform: uppercase;
    margin-top: 15px;
`