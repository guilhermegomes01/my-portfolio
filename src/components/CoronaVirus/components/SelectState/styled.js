import styled from 'styled-components'
import media from "styled-media-query"

export const Label = styled.label`
    font-size: 18px;
`

export const Select = styled.select`
    margin-left: 10px;
    background-color: transparent;
    font-size: 16px;
    font-family: 'Quicksand';
    font-weight: bold;
    color: #FFF;
    border-color: #585858;
    padding: 5px;

    ${media.lessThan("991.98px")`
        margin-left: 0px;
        margin-top: 10px;
    `}
`

export const Option = styled.option`
    background-color: #585858;
`
