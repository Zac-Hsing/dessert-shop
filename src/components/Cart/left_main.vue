<template>
    <div class="left-main">
      <h1>取貨方式</h1>
      <input type="text" placeholder="連絡電話">
      <input type="text" placeholder="地址">
      <button>結帳</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.left-main {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
  padding: 20px;
  background-color: rgb(2, 141, 94);
  margin: 10px;
  margin-right: 60px;
  align-items: center;
}

.left-main input {
  border-radius: 5px;
  padding: 5px;
  border: 1px solid antiquewhite;
  margin-bottom: 25px;
  width: 250px;
}

.left-main button {
  border-radius: 5px;
  width: 120px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid antiquewhite;
  cursor: pointer;
  background-color: rgb(239, 239, 90);
}

.left-main h1 {
  text-align: center;
  margin-bottom: 60px;
}

.right-main h2 {
  text-align: center;
  margin-bottom: 15px;
}

</style>
