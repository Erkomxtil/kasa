import React from "react"
import { useLocation } from "react-router-dom"
import Logements from "../../assets/api/logements.json"
import styled from "styled-components"
import Carrousel from "../../components/Carrousel"
import Tag from "../../components/Tag"
import redStar from "../../assets/images/red-star.png"
import greyStar from "../../assets/images/grey-star.png"
import Collapse from "../../components/Collapse"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const MainWrapper = styled.div`
  align-self: center;
  flex-grow: 1;
  width: 100%;
`

const InfosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TitleLocationTagWrapper = styled.div`
  color: #ff6060;
  h2 {
    margin-bottom: 10px;
    font-weight: 500;
  }
  p {
    margin-bottom: 34px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
      margin-bottom: 10px;
      span {
        font-size: 10px;
      }
    }
  }
`

const NamePictureStarWrapper = styled.div`
  div {
    display: flex;
    align-items: center;
    color: #ff6060;
    font-size: 18px;
    line-height: 25px;

    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 17px;
    }
  }
  .ratingStarWrapper {
    margin-top: 27px;
    .star {
      height: 24px;
      width: 24px;
      margin-right: 15px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .ratingStarWrapper {
      .star {
        height: 13px;
        width: 13px;
        margin-right: 6px;
      }
    }
  }
`

const ImgHost = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin-left: 10px;

  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`
const DescriptionFurnitureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 76px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
`

function Card() {
  const navigate = useNavigate()

  const location = useLocation()
  const splitLocation = location.pathname.split("/")
  const idLocation = splitLocation[2]
  const logement = Logements.find((el) => el.id === idLocation)
  let firstName = ""
  let lastName = ""

  const ratingStar = () => {
    if (logement.rating === "1") {
      return (
        <>
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={greyStar} alt="Etoile grise" />
          <img className="star" src={greyStar} alt="Etoile grise" />
          <img className="star" src={greyStar} alt="Etoile grise" />
          <img className="star" src={greyStar} alt="Etoile grise" />
        </>
      )
    }
    if (logement.rating === "2") {
      return (
        <>
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={greyStar} alt="Etoile grise" />
          <img className="star" src={greyStar} alt="Etoile grise" />
          <img className="star" src={greyStar} alt="Etoile grise" />
        </>
      )
    }
    if (logement.rating === "3") {
      return (
        <>
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={greyStar} alt="Etoile grise" />
          <img className="star" src={greyStar} alt="Etoile grise" />
        </>
      )
    }
    if (logement.rating === "4") {
      return (
        <>
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={greyStar} alt="Etoile grise" />
        </>
      )
    }

    if (logement.rating === "5") {
      return (
        <>
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
          <img className="star" src={redStar} alt="Etoile rouge" />
        </>
      )
    }
  }

  useEffect(() => {
    if (logement === undefined) {
      navigate("*")
    }
  }, [logement, navigate])

  if (logement !== undefined) {
    const splitName = logement.host.name.split(" ")
    firstName = splitName[0]
    lastName = splitName[1]
  }

  return (
    logement !== undefined && (
      <MainWrapper>
        <div>
          <Carrousel pictures={logement.pictures} />
        </div>
        <InfosWrapper>
          <TitleLocationTagWrapper>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <p>
              {logement.tags.map((tag, index) => (
                <Tag key={`tag-${index}`} tag={tag} />
              ))}
            </p>
          </TitleLocationTagWrapper>
          <NamePictureStarWrapper>
            <div>
              {firstName}
              <br />
              {lastName}{" "}
              <ImgHost src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="ratingStarWrapper">{ratingStar()}</div>
          </NamePictureStarWrapper>
        </InfosWrapper>
        <DescriptionFurnitureWrapper>
          <Collapse title={"Description"} texte={logement.description} />
          <Collapse
            title={"Équipements"}
            texte={logement.equipments}
            page={"logement"}
          />
        </DescriptionFurnitureWrapper>
      </MainWrapper>
    )
  )
}

export default Card
