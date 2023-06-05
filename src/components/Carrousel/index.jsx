import React from "react"
import { useState } from "react"
import previous from "../../assets/images/previous.png"
import next from "../../assets/images/next.png"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const CarrouselWrapper = styled.div`
  position: relative;

  .carrouselImg {
    max-height: 415px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    margin-top: 25px;
    display: block;

    @media (max-width: 768px) {
      height: 255px;
    }
  }

  .counter {
    position: absolute;
    bottom: 24px;
    color: ${colors.white};
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const PreviousPicture = styled.img`
  position: absolute;
  left: 23px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px) {
    height: 19px;
  }
`

const NextPicture = styled.img`
  position: absolute;
  right: 23px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @media (max-width: 768px) {
    height: 19px;
  }
`

function Carrousel({ pictures }) {
  const [picture, setPicture] = useState(0)
  const arrayLength = pictures.length - 1

  const nextPictureBtn = () => {
    if (picture < arrayLength) {
      setPicture(picture + 1)
    }
    if (picture === arrayLength) {
      setPicture(0)
    }
  }

  const previousPictureBtn = () => {
    if (picture > 0) {
      setPicture(picture - 1)
    }
    if (picture === 0) {
      setPicture(arrayLength)
    }
  }

  return (
    <CarrouselWrapper>
      <img className="carrouselImg" src={pictures[picture]} alt="" />
      {arrayLength > 0 && (
        <span className="counter">
          {picture + 1}/{arrayLength + 1}
        </span>
      )}
      {arrayLength > 0 && (
        <PreviousPicture
          src={previous}
          alt="Arrow previous"
          onClick={() => previousPictureBtn()}
        />
      )}
      {arrayLength > 0 && (
        <NextPicture
          src={next}
          alt="Arrow next"
          onClick={() => nextPictureBtn()}
        />
      )}
    </CarrouselWrapper>
  )
}

export default Carrousel
