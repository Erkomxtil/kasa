import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const CardWrapper = styled.div`
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    filter: brightness(70%);
    transition: transform 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
  p {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: ${colors.white};
    font-size: 18px;
    padding-right: 20px;
  }
`

function Card({ id, title, picture }) {
  return (
    <CardWrapper>
      <Link to={`/card/${id}`}>
        <img src={picture} alt="" />
        <p>{title}</p>
      </Link>
    </CardWrapper>
  )
}

export default Card
