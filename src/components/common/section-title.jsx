import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Title = styled.h3`
  ${tw`text-radical-red font-bold uppercase`}
  color: #fe346e;
`

const SectionTitle = ({ children }) => {
  return <Title>{children}</Title>
}

export default SectionTitle
