import React from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import logoFooter from "../../assets/images/logo-footer.png"

const FooterWrapper = styled.div`
  background: #000000;
  color: ${colors.white};
  padding: 69px 20px 30px 20px;
  text-align: center;
`
const TextFooter = styled.p`
  color: colors.white;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <img src={logoFooter} alt="" />
      <TextFooter>© 2020 Kasa. All rights reserved</TextFooter>
    </FooterWrapper>
  )
}

export default Footer
