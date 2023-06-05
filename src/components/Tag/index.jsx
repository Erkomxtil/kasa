import React from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const TagWrapper = styled.span`
  background: ${colors.red};
  color: ${colors.white};
  border-radius: 10px;
  padding: 6px 40px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
`

function Tag({ tag }) {
  return <TagWrapper>{tag}</TagWrapper>
}

export default Tag
