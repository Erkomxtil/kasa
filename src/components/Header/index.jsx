import { Link, useLocation } from "react-router-dom"
import React from "react"
import Logo from "../../assets/images/logo.png"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImgLogo = styled.img`
  height: 70px;
  width: 211px;
  @media (max-width: 768px) {
    width: 145px;
    height: auto;
  }
`

const StyledLink = styled(Link)`
  color: #ff6060;
  margin-left: 60px;
  font-size: 24px;

  &.active {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 12px;
  }
`

function Header() {
  const location = useLocation()

  return (
    <HeaderWrapper>
      <Link to="/">
        <ImgLogo src={Logo} alt="Logo Shiny" />
      </Link>
      <div>
        <StyledLink
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Accueil
        </StyledLink>
        <StyledLink
          className={location.pathname === "/about" ? "active" : ""}
          to="/about"
        >
          A Propos
        </StyledLink>
      </div>
    </HeaderWrapper>
  )
}

export default Header
