import React from "react"
import styled from "styled-components"

const Landscape = styled.img`
  border-radius: 25px;
  filter: brightness(70%);
  width: 100%;
  height: 223px;
  object-fit: cover;
`

function Banner({ picture, texte }) {
  return (
    <>
      <Landscape src={picture} alt="Paysage de montage" />
      {texte && <p>{texte}</p>}
    </>
  )
}

export default Banner
