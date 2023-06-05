import React from "react"
import landscape from "../../assets/images/home-landscape.png"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import locations from "../../assets/api/logements.json"
import Card from "../../components/Card"
import Banner from "../../components/Banner"

const ImgWrapper = styled.div`
  position: relative;
  margin-top: 63px;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${colors.white};
    font-size: 48px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 19px;
    p {
      font-size: 24px;
      text-align: left;
      padding-left: 16px;
    }
  }
`
const LocationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 340px;
  grid-column-gap: 60px;
  grid-row-gap: 50px;
  padding: 56px 50px;
  background: ${colors.background};
  border-radius: 25px;
  margin-top: 43px;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 255px;
    background: none;
    padding-left: 0;
    padding-right: 0;
    margin-top: 22px;
    padding-top: 0;
  }
`

function Home() {
  return (
    <main>
      <ImgWrapper>
        <Banner picture={landscape} texte="Chez vous, partout et ailleurs" />
      </ImgWrapper>
      <LocationWrapper>
        {locations.map((location) => (
          <Card
            key={`location-${location.id}`}
            id={location.id}
            title={location.title}
            picture={location.cover}
          />
        ))}
      </LocationWrapper>
    </main>
  )
}

export default Home
