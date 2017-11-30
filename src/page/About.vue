<template>
  <div class="hello">
     <!-- setcion-one-Home ========================================================================================   -->
    <section class="Home Home-about">
        <div class="jumbotron">
            <div class="container">
                    <h2 class="text-warning">{{ $t("About.Section01.Title01") }} <br> {{ $t("About.Section01.Title02") }}</h2>
                    <p>{{ $t("About.Section01.Content01") }}</p>
                    <p>{{ $t("About.Section01.Content02") }}</p>
                
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
