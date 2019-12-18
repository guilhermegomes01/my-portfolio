import styled from 'styled-components'

export const AboutWrapper = styled.ul`
  list-style: none;
  padding-top: 20px;
  width: 250px;
`

export const AboutList = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: baseline;
  margin-top: 5px;

  &.list-about:last-child .icon-about {
    visibility: hidden;
  }
`

export const IconWrapper = styled.div`
  width: 22px;
  height: 22px;
  color: #1EDFD5;
  padding-right: 6px;
`

export const AboutName = styled.span`
  color: #fff;
  grid-column: 2 / 12;
`