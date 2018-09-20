<template>
  <div class="row">
      <div class="col-12">
          <h3>Поиск новостей</h3>
          <input type="text" class="input" v-model="searchString" placeholder="Введите название">
          <div class="sort-btn">
              <button @click="sort = 'id'">По Id</button>
              <button @click="sort = 'title'">По Заголовку</button>
          </div>
          <hr>
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" v-for="item in filteredList" @:key="item.id">
          <div class="news__items">
             <router-link :to="`news/${item.id}`" class="top">
                  <p class="img"  v-bind:style="{ backgroundImage: 'url('+item.img+')'}"></p>
                  <p class="title"><span>{{ item.title }}</span></p>
             </router-link>
              <p class="descr">
                  {{ item.descr }} 
              </p>
              <p><a @click="viewDetails(item.id)" class="more"><span>Подробнее</span><i class="fa fa-angle-right" aria-hidden="true"></i></a></p>
          </div>
      </div>

      <div class="col-12" v-if="filteredList.length>0">
          <ul class="pagination">
              <li class="active" v-for="p in pagination.pages" @click.prevent="setPage(p)">
                <a>{{p}}</a>
              </li>
          </ul>
      </div>
      <div class="col-12" v-if="filteredList.length<=0">
          <h5>По данному запросу ничего не найдено</h5>
      </div>     
            

	</div>
</template>
<script>
  import _ from 'lodash';

  export default {
    name: 'NewsList',
    data: function () {
      return {
          sort: 'name',
          searchString: "",
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
                  'title': 'Бравировально-фрезерный ',
                  'url': 'stanok-chpu',
                  'descr': 'На самом деле тут бедет обычый текст описания',
                  'img': 'img/img-serv1.png',
                  'description': '<p>Тут просто тестовый текст для примера отображения контента на сайте.<p>'
              },
              {
                  'id':3,
                  'title': 'АБравировально-фрезерный',
                  'url': 'stanok-chpu',
                  'descr': 'На самом деле тут бедет обычый текст описания',
                  'img': 'img/img-serv1.png',
                  'description': '<p>Тут просто тестовый текст для примера отображения контента на сайте.<p>'
              },
          ],
          perPage: 2,
          pagination: {}
      }
    },
    methods:{
        viewDetails(id){
          let item = _.find(this.list, {id:id});
          this.$emit("viewDetails", item);
        },
        setPage(p) {
          this.pagination = this.paginator(this.list.length, p);
        },
        paginate(list) {
          return _.slice(list, this.pagination.startIndex, this.pagination.endIndex + 1)
        },
        paginator(totalItems, currentPage) {
          var startIndex = (currentPage - 1) * this.perPage,
          endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);
          return {
            currentPage: currentPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
          };
        }
    },
    computed: {
      /*orderedList: function () {
        return _.orderBy(this.list, this.sort)
      }, ---Сортировка по id и name*/
      filteredList() {
        return _.orderBy(this.paginate(this.list.filter(list => {
          return list.title.toLowerCase().includes(this.searchString.toLowerCase())
        })), this.sort)
      },
    },
    created() {
      this.setPage(1);
    }
    
  }
</script>
<style lang="scss">
  .sort-btn button{
      margin:10px 20px 10px 0;
      border-bottom:2px solid transparent;
      &.active{
        color:#ec5058;
        border-color:#ec5058;
      }
  }
</style>
