<template>
	<div class="main container">
    <div v-for="item in list" v-if="newsId == item.id">
    	<div class="breadcrumbs">
         	<router-link to="/">Главная</router-link>
          <span class="circle"></span><router-link to="/news">Новости</router-link><span class="circle"></span><span>{{item.title}}</span>
    	</div>
    	<div class="row news__detail">
           <div class="col-12">
              <div class="img-title" v-bind:style="{ backgroundImage: 'url(/'+item.img+')'}">
                 <div class="name">
                      <span class="date">20.01.2018</span>
                      <h1>{{item.title}}</h1>
                  </div>
              </div>
              <div class="dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
              </div>
          </div>
          <div class="col-lg-10 offset-lg-1 content" v-html="item.description">
          </div>
          <div class="col-12">
              <router-link to="/news"  class="btn-red"><span>Возрат к списку</span></router-link>
          </div>
        </div>
      <img src="img/ok_logo3.png" class="logo-blur" alt="">
  	</div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'newsdetail',
  data: function () {
      return {
          newsId:this.$route.params.id,
          list:[
              {
                  'id':1,
                  'title': 'Гравировально-фрезерный станок с ЧПУ SUDA SD-5040K',
                  'url': 'stanok-chpu',
                  'descr': 'Тут просто тестовый текст для примера отображения контента на сайте. На самом деле тут бедет обычый текст описания',
                  'img': 'img/img-serv1.png',
                  'description': '<p><strong>Тут просто тестовый текст</strong> для примера отображения контента на сайте.<p><p>Тут просто тестовый текст для примера отображения контента на сайте.<p>'
              },
              {
                  'id':2,
                  'title': 'Гравировально-фрезерный ',
                  'url': 'stanok-chpu',
                  'descr': 'На самом деле тут бедет обычый текст описания',
                  'img': 'img/img-serv1.png',
                  'description': '<p>Тут просто тестовый текст для примера отображения контента на сайте.<p>'
              },
          ]
      }
  },
  components: {
     
  },
  methods:{
    
  }
}
</script>
