<template>
  <header class="header">
        <div class="container">
            <ul class="catalog-nav">
            </ul>
            <ul class="header__nav">
                <li><router-link to="/" exact>Главная</router-link></li>
                <li><router-link to="/about">О нас</router-link></li>
                <li><router-link to="/news">Новости</router-link></li>
                <li><router-link to="/delivery">Оплата и доставка</router-link></li>
                <li><a href="">Акции и скидки</a></li>
                <li><router-link to="/contacts">Контакты</router-link></li>
            </ul>
            <div class="header__soc">
                <a href="" class="fa fa-instagram"></a>
                <a href="" class="fa fa-vk"></a>
                <a href="" class="fa fa-facebook"></a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

