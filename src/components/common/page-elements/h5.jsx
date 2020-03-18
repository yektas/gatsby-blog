import React from "react"
import styled from "styled-components"
import { AutoLink } from "./linked-headers"

export const StyledH5 = styled.h5`
  ${AutoLink}
`
const H5 = props => {
  return <StyledH5 {...props}>{props.children}</StyledH5>
}

export { H5 }
