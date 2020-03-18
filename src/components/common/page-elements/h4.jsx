import React from "react"
import styled from "styled-components"
import { AutoLink } from "./linked-headers"

export const StyledH4 = styled.h4`
  ${AutoLink}
`
const H4 = props => {
  return <StyledH4 {...props}>{props.children}</StyledH4>
}

export { H4 }
