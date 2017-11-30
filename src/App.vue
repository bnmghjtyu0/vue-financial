<template>
    <div id="app">
    
        <!-- 導覽列 ========================================================================================    -->
        <nav class="navbar navbar-default navbar-fixed-top" id="navbar" role="navigation">
    
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                    <span class="sr-only">選單切換</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                        <router-link class="navbar-brand" to="/">{{ $t("Navbar.Home") }}</router-link>
                    </div>
                    <!-- 手機隱藏選單區 -->
                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <!-- 右選單 -->
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <router-link to="/">{{ $t("Navbar.Home") }}</router-link>
                            </li>
                            <li>
                                <router-link to="/Products">{{ $t("Navbar.Products") }}</router-link>
                            </li>
                            <li>
                                <router-link to="/Services">{{ $t("Navbar.Services") }}</router-link>
                            </li>
                            <li>
                                <router-link to="/About">{{ $t("Navbar.About") }}</router-link>
                            </li>
                            <li>
                                <router-link to="" v-scroll-to="'#Contact'">{{ $t("Navbar.Contact") }}</router-link>
                            </li>
                            <li class="dropdown lang">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ selected }}<b class="caret"></b></a>
                                    <transition	name="fade" mode="in-out">
                                <ul class="dropdown-menu">
                                    <li><a href="#" @click="setLang('en','English')">English</a></li>
                                    <li><a href="#" @click="setLang('cn','中文(简体)')">中文(简体)</a></li>
                                    <li><a href="#" @click="setLang('tw','中文(繁體)')">中文(繁體)</a></li>
                                </ul>
                                </transition>
                            </li>
                        </ul>
                    </div>
                    <!-- 手機隱藏選單區結束 -->
                </div>
            </div>
        </nav>
        <transition name="slide-left">
        <router-view></router-view>
        </transition>
        <!-- setcion-four-Contact ========================================================================================   -->
        <section class="Contact" id="Contact">
            <div class="container">
                <div class="title">
                    <h3>{{ $t("Contact.Title") }} <span>{{ $t("Contact.Sub-Title")}}</span></h3>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 left">
                        <form id="mailForm" @submit="sendemail">
                          <div class="form-group">
                            <label for="name" class="label-control">{{ $t("Contact.Name") }} <span class="text-warning">*</span></label>
                            <input type="text" id="name" placeholder="name" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label for="email" class="label-control">Email <span class="text-warning">*</span></label>
                            <input type="email" id="email" placeholder="Email" class="form-control" required="required">
                        </div>
                        <div class="form-group">
                            <label for="phone" class="label-control">{{ $t("Contact.Phone-Number") }}</label>
                            <input type="text" id="phoneNumber" placeholder="Phone Number" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="message" class="label-control">{{ $t("Contact.Message") }} <span class="text-warning">*</span></label>
                            <textarea id="message" cols="30" rows="10" class="form-control" required="required"></textarea>
                        </div>
                        <button type="submit" id="send" class="btn btn-link btn-md">{{ $t("Contact.SEND") }}</button>
                        </form>
                    </div>
                    <div class="col-xs-12 col-sm-offset-1 col-sm-5 right">
                        <h5 class="title">{{ $t("Contact.Info") }}</h5>
                        <dl class="dl-primary">
                            <dt>
                                        <div class="img-circle"><img src="./assets/img/icon_phone.png" class="img-responsive" alt=""></div>
                                    </dt>
                            <dd>
                                <h5>
                                <!--   {{ $t("Contact.Pilipinas") }} <br>  -->
                                   +63 917 328 3393
                                </h5>
                            </dd>
                            <dt>
                                        <div class="img-circle"><img src="./assets/img/icon_mail.png" class="img-responsive" alt=""></div>
                                    </dt>
                            <dd>
                                <h5>
                                    sales@xp2y.com
                                </h5>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
        <!-- setcion-one-footer ========================================================================================     -->
        <section class="Footer">
            <div class="container">
                <div class="row text-center">
                    <a href="#" class="btn btn-top" v-scroll-to="'#navbar'"><img src="./assets/img/btn-top.png" alt=""></a>
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">{{ $t("Footer.Home") }}</router-link></li>
                        <li><router-link to="/Products">{{ $t("Footer.Products") }}</router-link></li>
                        <li><router-link to="/Services">{{ $t("Footer.Services") }}</router-link></li>
                        <li><router-link to="/About">{{ $t("Footer.About") }}</router-link></li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- setcion-one-copyright ========================================================================================     -->
        <section class="Copyright">
            <div class="container">
                <div class="row text-center">
                    <p>{{ $t("Footer.Copyright") }}</p>
                </div>
            </div>
        </section>
    
    </div>
</template>

<script>
  global.jQuery = require('jquery')
  var $ = global.jQuery
  window.$ = $
  export default {
    name: 'app',
    data () {
      return {
        lang: this.$store.state.lang,
        selected: localStorage.langName
      }
    },
    methods: {
      setLang (lang, langName) {
        this.$store.dispatch('setLanguage', lang)
        this.$localStorage.set('lang', lang)
        this.$localStorage.set('langName', langName)
        this.selected = langName
      },
      sendemail: function (event) {
        $.ajax({
          type: 'POST',
          url: 'http://www.xp2y.com:8100/api/mail',
          data: {
            Name: $('#name').val(),
            Email: $('#email').val(),
            PhoneNumber: $('#phoneNumber').val(),
            Message: $('#message').val()
          },
          dataType: 'json',
          success: function (data) {
            if (data === 'SUCCESS') {
              alert(data)
            }
          },
          error: function () {
            alert('Sent fail!')
          }
        })
        event.preventDefault()
      }
    }
  }

</script>
