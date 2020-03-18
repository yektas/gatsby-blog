import React from "react"
import styled from "styled-components"
import { AutoLink } from "./linked-headers"

export const StyledH1 = styled.h1`
  ${AutoLink}
`
const H1 = props => {
  return <StyledH1 {...props}>{props.children}</StyledH1>
}

export { H1 }
