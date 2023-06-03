import React from "react"
import { useLocation } from "react-router-dom"
import Logements from "../../assets/api/logements.json"
import styled from "styled-components"
import Carrousel from "../../components/Carrousel"

function Card() {
  const location = useLocation()
  const splitLocation = location.pathname.split("/")
  const idLocation = splitLocation[2]

  const logement = Logements.find((el) => el.id === idLocation)
  console.log(logement)

  const CardContainer = styled.div``

  return (
    <CardContainer>
      <Carrousel pictures={logement.pictures} />
    </CardContainer>
  )
}

export default Card
