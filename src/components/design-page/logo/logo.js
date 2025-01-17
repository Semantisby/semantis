import React, { useContext } from "react"
import { StateContext } from "../../../state/stateCotext"
import { rippleEffect } from "../../main"
import List from "../../list"

import dots1 from "../../../images/design/dots1.svg"
import fon from "../../../images/design/fon.png"
import ellipse from "../../../images/design/ellipse.png"
import ellipse1 from "../../../images/design/ellipse1.png"
import spin from "../../../images/design/spin.svg"

import "./logo.sass"


export default function Logo() {
  const { dispatch } = useContext(StateContext)

  const handleClick = e => {
    rippleEffect(e)
    dispatch({ type: "open", payload: "lead" })
  }

  const listArr = [
    "Простым и понятным для потребителя",
    "Выделяться и закрепляться в памяти с первого взгляда",
    "Соответствовать целям и задачам компании",
    "Формировать образ надежной, стабильной компании со своим неповторимым лицом"
  ]
  const elements = (
    <div className="right" style={{ backgroundImage: `url(${fon})` }}>
      <img src={ellipse} className='ellipse' alt="ellipse"/>
      <img src={ellipse1} className='ellipse1' alt="ellipse1"/>
      <img src={spin} className='spin' alt="spin"/>
    </div>
  )
  return (
    <section className="logo">
      <div className="logo__elements">
        <div className="left">
          <img src={dots1} className='dots1' alt="dots1"/>
        </div>
        {window.innerWidth >= 992 ? elements : null}
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-8 col-lg-6 d-flex flex-column">
            <h2>Логотипы</h2>
            <p>Логотип — уникальный символ компании. Он раскрывает целостный образ бренда,
              его идеи, философию и имидж.
            </p>
            <strong className="description">Мы создадим для вас эффективный логотип, который будет</strong>
            <List listArr={listArr}/>
            <button className="mainBtn mt-3 align-self-md-start" onClick={handleClick}>Получить предложение</button>
          </div>
        </div>
      </div>
    </section>
  )
}