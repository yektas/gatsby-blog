import React from "react"
import styled from "styled-components"
import { AutoLink } from "./linked-headers"

export const StyledH3 = styled.h3`
  ${AutoLink}
`
const H3 = props => {
  return <StyledH3 {...props}>{props.children}</StyledH3>
}

export { H3 }
