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

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 20px;
  }
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

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
const TexteInfo = styled.div`
  display: ${({ isOpen }) => (isOpen === "close" ? "none" : "block")};
  background: ${colors.background};
  border-radius: 6px;
  padding: 30px 18px 19px 18px;
  color: ${colors.red};
  font-size: 18px;

  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
const ArrowImg = styled.img`
  width: 25px;
  height: 14px;
`

function Collapse({ title, texte, page }) {
  const [state, setState] = useState("close")
  const toggleCollapse = () => {
    setState(state === "close" ? "open" : "close")
  }

  return (
    <CollapseWrapper onClick={() => toggleCollapse()}>
      <Title>
        {title} <ArrowImg className={state} src={arrow} alt="arrow" />
      </Title>
      {page === "logement" ? (
        <TexteInfo isOpen={state}>
          {texte &&
            texte.map((furniture, index) => (
              <li key={`furniture-${index}`}>{furniture}</li>
            ))}{" "}
        </TexteInfo>
      ) : (
        <TexteInfo isOpen={state}>{texte}</TexteInfo>
      )}
    </CollapseWrapper>
  )
}

export default Collapse
