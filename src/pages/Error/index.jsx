import React from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import { Link } from "react-router-dom"

const ErrorWrapper = styled.div`
  text-align: center;
  color: ${colors.red};
`
const Error404 = styled.h1`
  font-size: 288px;
  margin-top: 92px;

  @media (max-width: 768px) {
    font-size: 96px;
    margin-top: 174px;
  }
`
const ErrorText = styled.p`
  font-size: 36px;
  margin-bottom: 176px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const LinkHome = styled(Link)`
  color: ${colors.red};
  text-decoration: underline;
  padding-bottom: 159px;
  font-size: 18px;
  display: block;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <Error404>404</Error404>
      <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      <LinkHome to="/">Retourner sur la page d'accueil</LinkHome>
    </ErrorWrapper>
  )
}

export default Error
