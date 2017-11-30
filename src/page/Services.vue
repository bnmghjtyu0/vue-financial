<template>
    <div class="Service">
        <!-- setcion-one-Home ========================================================================================   -->
        <section class="Home Home-services">
            <div class="jumbotron">
                <div class="container">
                    <h3 class="text-warning">{{ $t("Services.Setcion01.Title") }}</h3>
                    <div class="row flex-row">
                        <div class="column-1">
                            <div class="thumbnail">
                                <div class="img-circle">
                                    <font>{{ $t("Services.Setcion01.Item01.Title") }}</font>
                                </div>
                                <div class="caption">
                                    <p>{{ $t("Services.Setcion01.Item01.Content.li-1") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item01.Content.li-2") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="column-2">
                            <div class="thumbnail">
                                <div class="img-circle">
                                    <font>{{ $t("Services.Setcion01.Item02.Title") }}</font>
                                </div>
                                <div class="caption">
                                    <p>{{ $t("Services.Setcion01.Item02.Content.li-1") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item02.Content.li-2") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item02.Content.li-3") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item02.Content.li-4") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="column-3">
                            <div class="thumbnail">
                                <div class="img-circle">
                                    <font>{{ $t("Services.Setcion01.Item03.Title") }}</font>
                                </div>
                                <div class="caption">
                                    <p>{{ $t("Services.Setcion01.Item03.Content.li-1") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item03.Content.li-2") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item03.Content.li-3") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="column-4">
                            <div class="thumbnail">
                                <div class="img-circle">
                                    <font>{{ $t("Services.Setcion01.Item04.Title") }}</font>
                                </div>
                                <div class="caption">
                                    <p>{{ $t("Services.Setcion01.Item04.Content.li-1") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item04.Content.li-2") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item04.Content.li-3") }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="column-5">
                            <div class="thumbnail">
                                <div class="img-circle">
                                    <font>{{ $t("Services.Setcion01.Item05.Title") }}</font>
                                </div>
                                <div class="caption">
                                    <p>{{ $t("Services.Setcion01.Item05.Content.li-1") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item05.Content.li-2") }}</p>
                                    <p>{{ $t("Services.Setcion01.Item05.Content.li-3") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- setcion-two-Info ========================================================================================   -->
        <section class="Info-services">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h6>{{ $t("Services.Section02.Content") }}</h6>
                        <div class="row flex-row">
                            <div class="img-circle"><img src="../assets/img/icon_platform.png" class="img-responsive" alt=""></div>
                            <div class="img-circle"><img src="../assets/img/icon_trading.png" class="img-responsive" alt=""></div>
                            <div class="img-circle"><img src="../assets/img/icon_crm.png" class="img-responsive" alt=""></div>
                            <div class="img-circle"><img src="../assets/img/icon_risk.png" class="img-responsive" alt=""></div>
                            <div class="img-circle"><img src="../assets/img/icon_api.png" class="img-responsive" alt=""></div>
                            <div class="img-circle"><img src="../assets/img/icon_24-hr.png" class="img-responsive" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'Services'
    // ready: function () {
    //   global.jQuery = require('jquery')
    //   var $ = global.jQuery
    //   window.$ = $
    //   $('.navbar').addClass('navbar-fixed')
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
