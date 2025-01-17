import React, { useContext, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { currentPage } from "../main"
import { StateContext } from "../../state/stateCotext"

import Modal from "../modal/modal"
import Sidebar from "../sidebar/sidebar"
import Button from "../chat/chat"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faComments, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import blueLogo from "../../images/nav/logo.png"
import whiteLogo from "../../images/nav/logo-white.svg"
import whatsapp from "../../images/nav/whatsapp.png"
import telegram from "../../images/nav/telegram.png"
import viber from "../../images/nav/viber.png"
import ru from "../../images/nav/ru.svg"
import by from "../../images/nav/by.svg"

import "./nav.css"
import "./nav-state.sass"

export default ({ siteTitle, location }) => {
  const { state, dispatch } = useContext(StateContext)

  const parth = location.pathname

  const line = useRef()

  const spyLine = (e) => {
    let target

    (!e || e.type === "mouseleave" || e.target.tagName !== "A") ?
      target = document.querySelector(".active") :
      target = e.target

    let width = target.getBoundingClientRect().width,
      height = target.getBoundingClientRect().height,
      left = target.getBoundingClientRect().left,
      top = target.getBoundingClientRect().top

    if (line.current === null) return

    line.current.style.width = `${width - 16}px`
    line.current.style.height = `${height}px`
    line.current.style.left = `${left + 8}px`
    line.current.style.top = `${top}px`
    line.current.style.transform = "none"
  }

  const handlerMessengerMenu = () => {
    state.show === "messengers" ? dispatch({ type: "close" }) : dispatch({ type: "open", payload: "messengers" })
  }

  useEffect(() => {
    setTimeout(spyLine, 1000)
    window.addEventListener("resize", spyLine)
    return () => {
      window.removeEventListener("resize", spyLine)
    }
  }, [parth])


  const styleMenu = () => {
    if (!state.selectedSection && state.selectedSection !== 0) {
      return "gray line-none"
    }
    switch (parth) {
      case "/":
        return state.selectedSection === 2 ? "whiteMenu" : "grayMenu"
        break
      case "/web-dev/":
        if (state.selectedSection === 0) {
          return "left-white_right-gray"
        } else if (state.selectedSection === 1) {
          return "whiteMenu"
        } else if (state.selectedSection === 2) {
          return "left-gray_right-white"
        } else return "grayMenu"
        break
      case "/internet-promotion/":
        if (state.selectedSection === 1) {
          return "left-white_right-gray"
        } else return "grayMenu"
        break
      case "/develop/":
        return "greyMenu"
        break
      case "/design/":
        if (state.selectedSection === 0) {
          return "whiteMenu"
        } else if (state.selectedSection === 3) {
          return "left-gray_right-white"
        } else return "grayMenu"
        break
      case "/smm/":
        if (state.selectedSection === 3) {
          return "whiteMenu"
        } else if (state.selectedSection === 0) {
          return "left-white_right-gray"
        } else return "grayMenu"
        break
      default:
        return "grayMenu line-none"
    }
  }
  const styleImg = () => {
    switch (parth) {
      case "/":
        return state.selectedSection === 2 ? whiteLogo : blueLogo
        break
      case "/web-dev/":
        return state.selectedSection === 1 ? whiteLogo : blueLogo
        break
      case "/internet-promotion/":
        return state.selectedSection === 1 ? whiteLogo : blueLogo
        break
      case "/design/":
        return state.selectedSection === 0 ? whiteLogo : blueLogo
        break
      case "/smm/":
        return state.selectedSection === 3 ? whiteLogo : blueLogo
        break
      default:
        return blueLogo
    }
  }

  return (
    <header className={styleMenu()}>
      <div className="container d-flex justify-content-between align-items-center mt-3 mb-2"
      >
        <div>
          <img src={styleImg()} alt={siteTitle} className="img-fluid"
               width="120px"/>
        </div>
        <nav className="menu d-none d-md-flex align-items-center">
          <ul
            role="navigation"
            onMouseOver={spyLine}
            onMouseLeave={spyLine}
            onClick={(e) => currentPage(e, state.selectedSection)}>
            <li><Link className={parth === "/" ? "active" : null} to="/">Главная</Link></li>
            <li><Link className={parth === "/web-dev/" ? "active" : null} to="/web-dev/">Веб-разработка</Link></li>
            <li><Link className={parth === "/internet-promotion/" ? "active" : null}
                      to="/internet-promotion/">Продвижение</Link></li>
            <li><Link className={parth === "/design/" ? "active" : null} to="/design/">Дизайн</Link></li>
            <li><Link className={parth === "/develop/" ? "active" : null} to="/develop/">SMM</Link></li>
          </ul>
        </nav>
        <span ref={line} id="line" className="d-none d-md-block"/>
        <div className="tel d-none d-lg-block">
          <ul>
            <li>
              <img src={ru} alt="ru"/>
              <a href="tel:+79217750328">+79217750328</a>
            </li>
            |&nbsp;
            <li>
              <img src={by} alt="by"/>
              <a href="tel:+375292624063">+375292624063</a>
            </li>
          </ul>
        </div>
        <div className="d-flex d-lg-none">
          <button
            className={state.show === "phone" ? "modalBtn d-flex d-lg-none mr-2 open" : "modalBtn d-flex d-lg-none mr-2"}
            onClick={() => dispatch({ type: "open", payload: "phone" })}>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg"/>
          </button>
          <button role="menu"
                  className={state.show === "messengers" ? "chatTop d-flex d-sm-none mr-2 open" : "chatTop d-flex d-sm-none mr-2"}
                  onClick={handlerMessengerMenu}>
            <FontAwesomeIcon icon={faComments} size="lg"/>
            <div className={state.show === "messengers" ? "chat d-sm-none active" : "chat d-sm-none"}>
              <a href="https://wa.me/79217750328" className="m-2">
                <img src={whatsapp} alt="whatsapp" width="40px"/>
              </a>
              <a href="https://t.me/semantis" className="m-2">
                <img src={telegram} alt="telegram" width="40px"/>
              </a>
              <a href="viber://chat?number=%2B375292624063" className="m-2">
                <img src={viber} alt="viber" width="40px"/>
              </a>
            </div>
          </button>
          <button
            className={state.show === "sidebar" ? "burger d-flex d-md-none open" : "burger d-flex d-md-none"}
            onClick={() => dispatch({ type: "open", payload: "sidebar" })}>
            <FontAwesomeIcon icon={faBars} size="lg"/>
          </button>
        </div>
      </div>
      {state.show === "phone" ?
        <Modal>
          <div className="modal-header">
            <p className="m-0">Звоните</p>
            <FontAwesomeIcon icon={faTimes} size="lg" className="x" onClick={() => dispatch({ type: "close" })}/>
          </div>
          <button className="mainBtn mx-3 mt-3 justify-content-center" onClick={() => dispatch({ type: "close" })}>
            <a href="tel:+79217750328">+7 921 7750328</a>
          </button>
          <button className="mainBtn m-3 justify-content-center" onClick={() => dispatch({ type: "close" })}>
            <a href="tel:+375292624063">+375 29 2624063</a>
          </button>
        </Modal>
        : null
      }
      <Sidebar/>
      <Button location={location}/>
    </header>
  )
}
