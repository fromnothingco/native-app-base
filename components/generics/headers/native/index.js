
import {headingBase} from '../base'
import styled, {css} from 'styled-components'

//fontFamily: ${props => props.theme.main.font};
const HeadingNative = css`
    ${headingBase}
`

export const H1 = styled.Text`
  ${HeadingNative}
  color: ${props => props.theme.headings.color};
  font-size: ${props => props.theme.headings.h1.native.size};
`