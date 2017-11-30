<template>
  <div class="Index">
     <!-- setcion-one-Home ========================================================================================   -->
    <section class="Home">
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-sm-push-6 left">
                        <img src="../assets/img/MacPro.png" height="330" width="534" class="img-responsive">
                    </div>
                    <div class="col-xs-12 col-sm-6 col-sm-pull-6 right">
                        <h2>{{ $t("Index.Section01.Title") }}</h2>
                        <router-link class="btn btn-warning btn-lg" to="/Products">{{ $t("btn.Learn-More") }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <!-- setcion-two-Products ========================================================================================   -->
    <section class="Products">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-3 left">
                    <img src="../assets/img/MacPro2.png" class="img-responsive" alt="">
                </div>
                <div class="col-xs-12 col-sm-9">
                    <h3 class="text-warning text-indent">{{ $t("Index.Section02.Title") }}</h3>
                    <div class="text-box">
                        <div class="text">
                            <h4>{{ $t("Index.Section02.Content") }}<br>
                        </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- setcion-three-Services ========================================================================================     -->
    <section class="Services">
        <div class="container">
            <div class="row">
                <h3>{{ $t("Index.Section03.Title") }}<span>{{ $t("Index.Section03.Sub-Title") }}</span></h3>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <div class="img-circle">
                            <img src="../assets/img/icon_platform.png" alt="">
                        </div>
                        <div class="caption">
                            <h4>{{ $t("Index.Section03.Item01.Title") }}</h4>
                            <p>{{ $t("Index.Section03.Item01.Content") }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <div class="img-circle">
                            <img src="../assets/img/icon_trading.png" alt="">
                        </div>
                        <div class="caption">
                            <h4>{{ $t("Index.Section03.Item02.Title") }}</h4>
                            <p>{{ $t("Index.Section03.Item02.Content") }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <div class="img-circle">
                            <img src="../assets/img/icon_analysis.png" alt="">
                        </div>
                        <div class="caption">
                        <h4>{{ $t("Index.Section03.Item03.Title") }}</h4>
                            <p>{{ $t("Index.Section03.Item03.Content") }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <div class="img-circle">
                            <img src="../assets/img/icon_risk.png" alt="">
                        </div>
                        <div class="caption">
                            <h4>{{ $t("Index.Section03.Item04.Title") }}</h4>
                            <p>{{ $t("Index.Section03.Item04.Content") }}</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <div class="img-circle">
                            <img src="../assets/img/icon_api.png" alt="">
                        </div>
                        <div class="caption">
                            <h4>{{ $t("Index.Section03.Item05.Title") }}</h4>
                            <p>{{ $t("Index.Section03.Item05.Content") }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="thumbnail">
                        <div class="img-circle">
                            <img src="../assets/img/icon_crm.png" alt="">
                        </div>
                        <div class="caption">
                           <h4>{{ $t("Index.Section03.Item06.Title") }}</h4>
                            <p>{{ $t("Index.Section03.Item06.Content") }}</p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                <router-link class="btn btn-warning btn-lg" to="/Services">{{ $t("btn.Learn-More") }}</router-link>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
