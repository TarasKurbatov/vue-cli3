<template>
  <div class="row">
      <div class="col-12">
          <h3>Поиск новостей</h3>
          <form action=""><input type="text" class="input" placeholder="Введите название"></form>
          <hr>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" v-for="item in list" @:key="item.id">
          <div class="news__items">
              <a :href="item.url" class="top">
                  <p class="img"  v-bind:style="{ backgroundImage: 'url('+item.img+')'}"></p>
                  <p class="title"><span>{{ item.title }}</span></p>
              </a>
              <p class="descr">
                  {{ item.descr }} 
              </p>
              <p><a @click="viewDetails(item.id)" class="more"><span>Подробнее</span><i class="fa fa-angle-right" aria-hidden="true"></i></a></p>
          </div>
      </div>
	</div>
</template>
<script>
  import _ from 'lodash';

  export default {
    name: 'NewsList',
    data: function () {
      return {
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
    methods:{
        viewDetails(id){
          let item = _.find(this.list, {id:id});
          this.$emit("viewDetails", item);
        }
    }
  }
</script>
