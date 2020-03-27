import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import tw from "twin.macro"

const Title = styled.h3`
  ${tw`text-radical-red font-bold`}
  ${props => props.uppercase && tw`uppercase`}
  ${props => props.size == "sm" && tw`text-sm`}
  ${props => props.size == "lg" && tw`text-lg`}
  ${props => props.size == "xl" && tw`text-xl`}
  ${props => props.size == "2xl" && tw`text-2xl`}
`

const SectionTitle = ({ size, children }) => {
  return <Title size={size}>{children}</Title>
}

SectionTitle.propTypes = {
  size: PropTypes.oneOfType(["sm", "lg", "xl", "2xl"]),
  uppercase: PropTypes.bool,
}

SectionTitle.defaultTypes = {
  uppercase: true,
}

export default SectionTitle
