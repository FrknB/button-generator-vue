<template>
  <div class="notFound">
    <img src="../assets/notfound.png" alt="">
    <router-link :to="{path: '/'}"> Back to home</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body{
  background-color: white;
}
.notFound{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
}
.notFound img{
}
.notFound a{
  color: red;
  font-size: 42px;
}
div{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    color: red;
}
</style>