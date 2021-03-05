import React, { useState } from "react"
import ReactPageScroller from "../react-page-scroller/src"

import SEO from "../components/seo"
import Layout from "../components/layout"

import FirstSection from "../components/web-dev/first-section"
import Case from "../components/web-dev/case"
import WeWillDo from "../components/web-dev/we-will-do"
import StagesOfCreation from "../components/web-dev/stages-of-creation"
import Contacts from "../components/home-page/contacts"


const WebDevPage = ({ location }) => {
  const [sectionNumber, setSectionNumber] = useState(0)
  const handleSectionChange = number => {
    if (sectionNumber !== number) {
      setSectionNumber(number)
    }
  }

  if (typeof window !== `undefined`) {
    if (/Android|webOS|Mac OS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.documentElement.clientWidth <= 991) {
      return (
        <Layout location={location}>
          <SEO title="Разработка сайтов и веб-приложений"/>
          <FirstSection/>
          <Case/>
          <WeWillDo/>
          <StagesOfCreation/>
          <Contacts/>
        </Layout>
      )
    } else return (
      <Layout selectedSection={sectionNumber} location={location}>
        <SEO title="Разработка сайтов и веб-приложений"/>
        <ReactPageScroller
          customPageNumber={sectionNumber}
          onBeforePageScroll={handleSectionChange}
          renderAllPagesOnFirstRender
          animationTimerBuffer={50}
          animationTimer={750}
        >
          <FirstSection/>
          <Case/>
          <WeWillDo/>
          <StagesOfCreation/>
          <Contacts/>
        </ReactPageScroller>
      </Layout>
    )
  } else return (
    <>
      <SEO title="Разработка сайтов и веб-приложений"
           description="Создание работающих сайтов. Разработка веб-приложений. Техническая поддержка уже существующих проектов."
      />
      <main className="opacity">
        <h1>Создание сайтов</h1>
        <p>У нас можно:
          Заказть интернет-магазин. Заказть корпоративный сайт. Заказть лендинг. Заказть сайт компании. Заказть
          сайт-визитку. Заказть сайты-портфолио. Заказть промо-сайт. Заказть имиджевый сайт.
        </p>
        <p>Лендинг (продающая страница) позволяет максимально вовлечь аудиторию в ваш проект и увеличить продажи.
          Отлично
          подходит для организации ивентов и промоакций. Незаменим при создании воронок продаж.
        </p>
        <p>Имиджевый сайт позволяет создать репутацию успешного бренда и произвести хорошее впечатление на свою целевую
          аудиторию. Формирует необходимое восприятие вашего продукта и помогает повысить его узнаваемость.

          Отлично подходит для стартапов и компаний, продукт которых еще не пользуется большой популярностью у публики.
        </p>
        <p>Корпоративный сайт позволяет эффектно презентовать компанию как надёжного партнёра, поднять статус компании и
          повысить лояльность клиентов. Сделает вашу бизнес-идею более понятной и открытой для публики и увеличит
          ценность
          вашего продукта.

          Есть возможность создать гибкий пользовательский интерфейс для доступа сотрудников к корпоративным данным, а
          также подключить CRM-систему и тем самым оптимизировать бизнес-процессы компании.
        </p>
        <p>Интерент-магазин позволяет многократно увеличить продажи товаров и услуг через интернет, продавая товары
          24/7.
          А также снизить затраты на содержание, проводить онлайн рекламные игры и промоакции и привлекать
          неограниченное
          количество новых покупателей.

          Вы сможете легко формировать отчеты о продажах, всего в пару кликов, а также максимально быстро информировать
          своих покупателей о новых акциях и специальных предложениях.

          Отличается от обычного сайта расширенным функционалом, наличием CMS и мощной серверной частью.
        </p>
        <p>Что нужно, чтобы сайт приносил результат?
          1) Крайне важно выбрать правильный тип сайта, который подойдёт именно для вашего бизнеса. Для этого необходимо
          чётко понимать те задачи, которые вы собираетесь решать с помощью сайта.
          2) Продумайте взаимодействие с пользователями. При этом интерфейс сайта должен оставаться простым и понятным.
          3) Никакой воды! Публикуйте на сайте только релевантный контент.
          4) Занимайтесь продвижением. Выстраивайте свою стратегию. Не бойтесь тестировать разные гипотезы.
          5) Выбирайте инструменты продвижения исходя из типа сайта и стратегии.
          6) Делайте фокус на своей целевой аудитории.
          7) Не забывайте постоянно отслеживать трафик и оценивать результат.

          Мы осуществляем индивидуальный подход к каждому клиенту. Поэтому еще до начала работы над проектом мы собираем
          данные и детально прорабатываем все вопросы, связанные с видом деятельности заказчика.
        </p>
      </main>
    </>
  )
}

export default WebDevPage
