<template>
<div id="app">
    <Header/>
    <div class="container header__middle">
          <div class="row align-items-center">
              <div class="col-lg-4">
                  <a href="" class="header__logo">
                      <img src="img/logo.svg" alt="Оборонкомплект продажа станков">
                  </a>
              </div>
              <div class="col-lg-8 header__contacts">
                  <div class="header__phone">
                      <img src="img/i-phone.svg" alt="">
                      <p>
                          <a href="tel:8 (8652) 35-26-85" class="tel">8 (8652) 35-26-85</a>
                          <a href="">Вам перезвонить?</a>
                      </p>
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div class="header__address">
                      <img src="img/i-place.svg" alt="">
                      <p><span>Ваш город</span> <a href="">Ставрополь</a></p>
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <a class="header__dell">
                      <img src="img/i-dell.svg" alt="">
                      <p><span>Условия оплаты
                      и доставки</span></p>
                  </a>
              </div>
          </div>
    </div>
    <div class="catalog-nav">
          <div class="container">
              <ul>
                  <li class="catalog">
                      <a><i class="nav-c fa fa-bars" aria-hidden="true"></i><strong>Каталог</strong><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                      <ul class="cat-list">
                          <li><a href="">Лазерные станки для резки металла с ЧПУ</a></li>
                          <li><a href="">Фрезерные обрабатывающие центры с ЧПУ</a></li>
                          <li><a href="">Лазерно-гравировальные станки по металлу с ЧПУ</a></li>
                          <li><a href="">Токарные станки с ЧПУ по металлу</a></li>
                          <li><a href="">Универсальные фрезерные (фрезеровальные) станки</a></li>
                          <li><a href="">Гильотины для резки металла</a></li>
                          <li><a href="">Листогибочные прессы</a></li>
                          <li><a href="">Фрезерные станки с ЧПУ</a></li>
                      </ul>
                  </li>
                  <li><router-link to="/delivery">Оплата и доставка</router-link></li>
                  <li><a href="">Лизинг</a></li>
                  <li><a href="">Сервисное обслуживание и ремонт</a></li>
                  <li><router-link to="/contacts">Контакты</router-link></li>
                  <li class="header__cart"><router-link tag="a" to="/cart" class="cart">
                    <i class="fa fa-shopping-cart" aria-hidden="true">
                        <div class="count"><span>4</span></div>
                    </i>
                    <span>Корзина</span>
                  </router-link></li>
              </ul>
          </div>
    </div>
    <div class="container"><h1>{{$route.meta.h1}}</h1></div>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
	   <section class="get-catalog">
        <div class="container">
            <h3 class="s-title">Получите полный каталог продукции</h3>
            <p>с индивидуальныйми ценами</p>
            <form action="">
                <input type="text" value="" placeholder="Введите имя" required="">
                <input type="text" value="" placeholder="Введите номер телефона" required="">
                <button class="btn-red2" type="button"><span>Получить каталог</span></button>
            </form>
        </div>
    </section>
    <div class="container buttom__section">
        <div class="row">
            <div class="col-12">
                <h4>Каталог</h4>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-7">
                <ul class="mini-nav">
                    <li><a href="">Гравировально-фрезерные станки с ЧПУ</a></li>
                    <li><a href="">Деревообрабатывающее оборудование</a></li>
                    <li><a href="">Металлообрабатывающее оборудование</a></li>
                    <li><a href="">Комплектующие и запчасти</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-5">
                <ul class="mini-nav">
                    <li><a href="">Лазерные станки с ЧПУ</a></li>
                    <li><a href="">Режущие плоттеры</a></li>
                    <li><a href="">Инструмент и оснастка</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-4">
                <ul class="mini-nav last">
                    <li><router-link to="/contacts">Контакты</router-link></li>
                    <li><a href="">Сервисное обслуживание</a></li>
                    <li><a href="">Политика конфиденциальности</a></li>
                </ul>
            </div>
            <div class="col-lg-3">
                <h4 class="t-ad">Адрес в Ставрополье</h4>
                <p>Компания «Оборонкомплект»</p>
                <p>тел. 8 (800) 200-25-88</p>
                <p>mail: <a href="mailto: info@oboronkomplekt.ru">info@oboronkomplekt.ru</a></p>
            </div>
        </div>
    </div>
	<div class="footer">
        <div class="container">
            <div class="footer__logo">
                <img src="img/logo-footer.svg" alt="Оборонкомплект продажа станков">
            </div>
            <div class="flex-wrap">
                <div class="footer__soc">
                    <a href="" class="fa fa-instagram"></a>
                    <a href="" class="fa fa-vk"></a>
                    <a href="" class="fa fa-facebook"></a>
                </div>
                <div class="line"></div>
                <a href="tel:8 (800) 200-25-88" class="phone">
                    8 (800) 200-25-88
                </a>
                <div class="line"></div>
                <div class="address">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Ставрополь,
                    пер. Буйнакского, д.4</span>
                </div>
            </div>
            <button class="btn-red2 back-call"><span>Заказать звонок</span></button>
            <p>Отправляя персональную информацию через любые формы на сайте, Вы автоматически подтверждаете свое согласие на ее обработку.</p>
        </div>
    </div>
    <div class="agreement__section"><a href="">Пользовательское соглашение</a></div>
</div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>
<style leng="scss">
    .header__nav a.router-link-exact-active {
        color: red;
        border-bottom: 1px solid rgba(255,0,0,.3);
      }
      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
      }
</style>