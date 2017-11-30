<template>
  <div class="Product">
    <!-- setcion-one-Home ========================================================================================   -->
    <section class="Home Home-product">
        <div class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <img src="../assets/img/product_home.png" class="img-responsive">
                    </div>
                </div>
                <div class="text-center m-t-44">
                    <h3>{{ $t("Product.Section01.Title") }} <span>{{ $t("Product.Section01.Sub-Title") }}</span></h3>
                </div>
            </div>
        </div>
    </section>
    <!-- setcion-two-Products ========================================================================================   -->
    <section class="Products Product-product">
        <div class="container">
            <div class="row">
                <h3 class="text-primary">{{ $t("Product.Section02.Title") }}</h3>
                <p class="col-sm-8 col-sm-offset-2">{{ $t("Product.Section02.Content") }}</p>
            </div>
        </div>
    </section>
    <!-- setcion-three-Services ========================================================================================     -->
    <section class="Services-product">
        <div class="container-fluid">
            <div class="row item flex-ac col-flex-none">
                <div class="col-xs-12 col-sm-4 pic">
                    <div class="row">
                        <img src="../assets/img/ipad.png" class="img-responsive" alt="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7 col-sm-offset-1 content flex-jc">
                    <div>
                        <h3>{{ $t("Product.Section03.Item01.Title") }} <span class="btn btn-primary2"><img src="../assets/img/icon-stopwatch.png" class="img-responsive" alt=""></span></h3>
                        <P>{{ $t("Product.Section03.Item01.Content") }}</P>
                    </div>
                </div>
            </div>
            <div class="row item flex-ac col-flex-none">
                <div class="col-xs-12 col-sm-4 pic">
                    <div class="row">
                        <img src="../assets/img/ipad.png" class="img-responsive" alt="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7 col-sm-offset-1 content flex-jc">
                    <div>
                        <h3>{{ $t("Product.Section03.Item02.Title") }} <span class="btn btn-primary2"><img src="../assets/img/icon-data-in-both-directions.png" class="img-responsive" alt=""></span></h3>
                        <P>{{ $t("Product.Section03.Item02.Content") }}</P>
                    </div>
                </div>
            </div>
            <div class="row item flex-ac col-flex-none">
                <div class="col-xs-12 col-sm-4 pic">
                    <div class="row">
                        <img src="../assets/img/ipad.png" class="img-responsive" alt="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7 col-sm-offset-1 content flex-jc">
                    <div>
                        <h3>{{ $t("Product.Section03.Item03.Title") }} <span class="btn btn-primary2"><img src="../assets/img/icon-natural-user-interface-2.png" class="img-responsive" alt=""></span></h3>
                        <P>{{ $t("Product.Section03.Item03.Content") }}</P>
                    </div>
                </div>
            </div>
            <div class="row item flex-ac col-flex-none">
                <div class="col-xs-12 col-sm-4 pic">
                    <div class="row">
                        <img src="../assets/img/ipad.png" class="img-responsive" alt="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7 col-sm-offset-1 content flex-jc">
                    <div>
                        <h3>{{ $t("Product.Section03.Item04.Title") }} <span class="btn btn-primary2"><img src="../assets/img/icon-width.png" class="img-responsive" alt=""></span></h3>
                        <P>{{ $t("Product.Section03.Item04.Content") }}</P>
                    </div>
                </div>
            </div>

        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Product'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
