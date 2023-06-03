import React from "react"
import { useState } from "react"
import previous from "../../assets/images/previous.png"
import next from "../../assets/images/next.png"
import styled from "styled-components"

const CarrouselWrapper = styled.div`
  position: relative;
`

const CarrouselImg = styled.img`
  max-height: 415px;
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
  margin-top: 25px;
  display: block;
`

const PreviousPicture = styled.img`
  position: absolute;
  left: 23px;
  top: 50%;
  transform: translateY(-50%);
`

const NextPicture = styled.img`
  position: absolute;
  right: 23px;
  top: 50%;
  transform: translateY(-50%);
`

function Carrousel({ pictures }) {
  const [picture, setPicture] = useState(0)
  const arrayLength = pictures.length - 1
  console.log(arrayLength, picture)

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
      <CarrouselImg src={pictures[picture]} alt="" />
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
