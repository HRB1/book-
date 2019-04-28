<template>
    <router-view/>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style: none;
}

html,body{
  width: 100%;
  height: 100%;
}
body{
  font-size: 12px;
}
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
