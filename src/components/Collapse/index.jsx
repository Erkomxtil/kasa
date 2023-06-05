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
  position: relative;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 5px 5px 9px;
  }
`
const TexteInfo = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
  background: ${colors.background};
  border-radius: 6px;
  padding: 30px 18px 19px 18px;
  color: ${colors.red};
  font-size: 24px;

  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding-top: 17px;
  }
`
const ArrowImg = styled.img`
  width: 25px;
  height: 14px;

  @media (max-width: 768px) {
    position: absolute;
    top: 9px;
    width: 16px;
    height: 9px;
    right: 9px;
  }
`

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(true)
  const toggleCollapse = () => {
    setIsOpen(isOpen ? false : true)
  }

  return (
    <CollapseWrapper onClick={() => toggleCollapse()}>
      <Title>
        {title}{" "}
        <ArrowImg
          className={isOpen ? "close" : "open"}
          src={arrow}
          alt="arrow"
        />
      </Title>
      <TexteInfo isOpen={isOpen}>{children}</TexteInfo>
    </CollapseWrapper>
  )
}

export default Collapse
