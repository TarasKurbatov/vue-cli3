<template>
  <div class="row news__detail" v-if="item.id">
         <div class="col-12">
            <div class="img-title" v-bind:style="{ backgroundImage: 'url('+item.img+')'}">
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
            <button class="btn-red"><span>Возрат к списку</span></button>
            <hr class="m-40">
        </div>
	</div>
</template>
<script>
  export default {
    name: 'NewsItem',
    props:{
      item:{
        id: Number,
        title: String,
        url: String,
        description: String,
        img: String,
      }
    },
    data: function () {
      return {
      }
    },
    
  }
</script>
