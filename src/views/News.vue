<template>
	<div class="main container">
  	<div class="breadcrumbs">
       	<router-link to="/">Главная</router-link><span class="circle"></span><span>Новости</span>
  	</div>
  	<div class="row">
       	<div class="col-12">
           <h1>Новости</h1>
       	</div>
    </div>
    <div>
         <NewsList/>
    </div>
    <div class="row">        
            <div class="col-12">
                <ul class="pagination">
                    <li class="active"><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                </ul>
            </div>
        </div>
    <img src="img/ok_logo3.png" class="logo-blur" alt="">
	</div>
</template>
<script>
// @ is an alias to /src
import NewsList from '@/components/NewsList.vue'

export default {
  name: 'news',
  components: {
    NewsList,
  }
}
</script>
