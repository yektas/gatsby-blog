import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import tw from "twin.macro"

const Title = styled.h3`
  ${tw`text-living-coral font-bold`}
  ${props => props.uppercase && tw`uppercase`}
  ${props => props.inline && tw`inline`}
  ${props => props.size === "sm" && tw`text-sm`}
  ${props => props.size === "lg" && tw`text-lg`}
  ${props => props.size === "xl" && tw`text-xl`}
  ${props => props.size === "2xl" && tw`text-2xl`}
  `

const SectionTitle = ({ inline, size, children }) => {
  return (
    <Title inline={inline} size={size}>
      {children}
    </Title>
  )
}

SectionTitle.propTypes = {
  size: PropTypes.oneOf(["sm", "lg", "xl", "2xl"]),
  uppercase: PropTypes.bool,
  inline: PropTypes.bool,
}

SectionTitle.defaultTypes = {
  uppercase: true,
  inline: false,
}

export default SectionTitle
