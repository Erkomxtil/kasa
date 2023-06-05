import React from "react"
import styled from "styled-components"
import picture from "../../assets/images/a-propos.png"
import Collapse from "../../components/Collapse"
import Banner from "../../components/Banner"

const Container = styled.div`
  margin-top: 34px;
  flex-grow: 1;

  @media (max-width: 768px) {
    img {
      margin-bottom: 20px;
    }
  }
`

function About() {
  const infos = [
    {
      title: "Fiabilité",
      texte:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      texte:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      texte:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      texte:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <Container className="about">
      <Banner picture={picture} />
      {infos.map((info) => (
        <Collapse key={`dropdown-${info.title}`} title={info.title}>
          {info.texte}
        </Collapse>
      ))}
    </Container>
  )
}

export default About
