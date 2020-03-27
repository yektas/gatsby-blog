import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const MyBadge = styled.span`
  ${tw`inline-block text-white
   text-xs px-2 py-1 mr-2 mb-2 rounded-lg capitalize transform
   hover:scale-110`}
  background-color: #714a97;
`

const Badge = ({ children }) => {
  return <MyBadge>{children}</MyBadge>
}

export default Badge
