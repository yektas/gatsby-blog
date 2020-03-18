import React from "react"
import styled from "styled-components"
import { AutoLink } from "./linked-headers"

export const StyledH2 = styled.h2`
  ${AutoLink}
`
const H2 = props => {
  return <StyledH2 {...props}>{props.children}</StyledH2>
}

export { H2 }
