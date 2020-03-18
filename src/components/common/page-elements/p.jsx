import React from "react"
import styled from "styled-components"
import { AutoLink } from "./linked-headers"

export const StyledP = styled.p`
  ${AutoLink}
`
const P = props => {
  return <StyledP {...props}>{props.children}</StyledP>
}

export { P }
