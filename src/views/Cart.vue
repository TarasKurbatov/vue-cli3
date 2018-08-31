<template>
	<div class="main container" id="cart">
  	<div class="breadcrumbs">
       	<router-link to="/">Главная</router-link><span class="circle"></span><span>Корзина</span>
  	</div>
  	<div class="row">
       	<div class="col-12">
           <h1>Корзина</h1>
       	</div>
    </div>
    <div class="row">
      <div class="col-12">
        <template v-if="formvisible">
        <div class="form-new-order">
            <p v-if="error" style="color:red;font-size:22px;">Заполните все поля!</p>
            <input type="text" class="input" v-model="newItemTitle" placeholder="Название">
            <input type="text" class="input" v-model="newItemUrl" placeholder="Url">
            <input type="text" class="input" v-model="newItemQuantity" placeholder="Кол-во">
            <input type="text" class="input" v-model="newItemMaxqty" placeholder="Мак кол-во">
            <input type="text" class="input" v-model="newItemPrice" placeholder="Цена">
            <button class="btn-blue" @click="addItem"><span>Добавить</span></button>
            <hr>
        </div>
        </template>
        <button @click="openForm"></button>
        <button class="btn-blue" v-on:click="formvisible=!formvisible"><span>{{formvisible?'Скрыть форму':'Добавить заказ'}}</span></button>
      </div>
      <div class="col-12" v-if="totalPrice()">
          <table class="cart-table">
              <thead>
                  <tr>
                      <td><span>Изображение</span></td>
                      <td><span>Наименование</span></td>
                      <td><span>Количество</span></td>
                      <td><span>Цена за 1шт.</span></td>
                      <td><span>Всего</span></td>
                  </tr>
              </thead>
              <tbody v-for="item in cartlist" @:key="item.id">
                  <tr>
                      <td>
                          <a :href="item.url" class="img-product"><img src="img/img-product.png" alt=""></a>
                          <a href="" class="delet-product">
                              <span>Убрать из корзины</span> 
                              <span class="fa fa-times dell-pr" aria-hidden="true"></span>
                          </a>
                      </td>
                      <td>
                          <a :href="item.url" class="title-product"><strong>{{ item.title }}</strong></a>
                          <p>{{ item.id }}</p>
                      </td>
                      <td>
                          <div>
                              <span>Количество</span>
                              <div class="counter">
                                  <button @click="minusQty(item)" class="minus fa fa-minus"></button>
                                  <input type="text" v-model="item.quantity">
                                  <button @click="plusQty(item)" class="plus fa fa-plus"></button>
                              </div>
                              <p v-if="item.quantity === item.maxqty">
                                 Больше нет!
                              </p>
                          </div>
                      </td>
                      <td><p><span>Цена за 1шт.</span><span class="price-one">{{ item.price }} руб.</span></p></td>
                      <td><p><span>Всего</span><strong class="price-all">{{ item.price * item.quantity }} руб.</strong></p>
                          <a @click="removeItem(index)" class="delet-product">
                              <span>Убрать из корзины</span> 
                              <span class="fa fa-times dell-pr" aria-hidden="true"></span>
                          </a>
                      </td>
                  </tr>
                  <tr></tr>
              </tbody>
          </table>
          <div class="all-price-cart">
              <a href="" class="btn-blue"><span>Продолжить покупки</span></a>
              <p>Итого: <span>{{totalPrice()}} руб.</span></p>
          </div>
      </div> 
      <div class="col-12" v-else="totalPrice()">  
          <div  class="center">
                <h3>В вашей корзине нет товаров!</h3>
          </div>
        </div>            
      <img src="img/ok_logo3.png" class="logo-blur" alt="">
    </div>
	</div>
</template>
<script>
  export default {
    name: 'CartList',
    data: function () {
      return {
          formvisible: false,
          error: false,
          newItem:'',
          cartlist:[
              {
                  'id':1,
                  'title': 'Filtek Z250 A2 - Филтек Зет250 A2',
                  'url': '/',
                  'quantity': 1,
                  'maxqty': 10,
                  'price': 535,
              },
               {
                  'id':2,
                  'title': 'Филтек Зет250 A2',
                  'url': '/',
                  'quantity': 1,
                  'maxqty': 3,
                  'price': 700,
              },
              {
                  'id':3,
                  'title': 'Филтек Зет250 A2',
                  'url': '/',
                  'quantity': 1,
                  'maxqty': 5,
                  'price': 300,
              },
          ],
      }
    },
    methods: {
        totalPrice: function(){
          var sum = 0;
          for (var i = 0; i < this.cartlist.length; i++) {
            sum += this.cartlist[i].quantity * this.cartlist[i].price;
          }
          return sum;
        },
        plusQty: function(item ){
          if ( item.quantity < item.maxqty ) {
              item.quantity++;
          }
        },
        minusQty: function(item) {
          item.quantity--;
          var index = item.id
          if ( item.quantity <= 0 ) {
              item.quantity = 0;
          }
        },
        removeItem (index) {
           this.cartlist.splice(index, 1);
        },
        openForm: function(){
            formvisible = true;
        },
        addItem: function(){
          var id = 0;
          for (var i = 0; i < this.cartlist.length; i++) {
            id++;
          }
          this.cartlist.push({
                id: id + 1,
                title: this.newItemTitle,
                url: this.newItemUrl,
                quantity: this.newItemQuantity,
                maxqty: this.newItemMaxqty,
                price: this.newItemPrice,
            })
          this.newItem = ''
          this.newItemTitle = ''
          this.newItemUrl = ''
          this.newItemQuantity = ''
          this.newItemMaxqty = ''
          this.newItemPrice = ''
          this.formvisible = false;
        }
    }

  }
</script>
<style lang="scss">
    .form-new-order{
        max-width:550px;
    }
</style>