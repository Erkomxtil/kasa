import { useState } from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import arrow from "../../assets/images/arrow.png"
import "./index.scss"

const CollapseWrapper = styled.div`
  max-width: 1023px;
  width: 100%;
  margin: 30px auto;
  cursor: pointer;
`
const Title = styled.h1`
  font-size: 24px;
  background: ${colors.red};
  color: ${colors.white};
  padding: 10px 10px 10px 18px;
  font-weight: 500;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TexteInfo = styled.div`
  display: ${({ isOpen }) => (isOpen === "close" ? "none" : "block")};
  background: ${colors.background};
  border-radius: 6px;
  padding: 30px 18px 19px 18px;
  color: ${colors.red};
`
const ArrowImg = styled.img`
  width: 25px;
  height: 14px;
`

function Collapse({ title, texte }) {
  const [state, setState] = useState("close")
  const toggleCollapse = () => {
    setState(state === "close" ? "open" : "close")
  }

  console.log(state)

  return (
    <CollapseWrapper onClick={() => toggleCollapse()}>
      <Title>
        {title} <ArrowImg className={state} src={arrow} alt="arrow" />
      </Title>
      <TexteInfo isOpen={state}>{texte}</TexteInfo>
    </CollapseWrapper>
  )
}

export default Collapse
