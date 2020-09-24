<template>
  <div class="about page">
    <dl>
      <dt>2000年</dt>
      <dd>誕生</dd>
      <dt>2013年</dt>
      <dd>栄光学園中学校 入学</dd>
      <dt>2019年</dt>
      <dd>東京理科大学 工学部 情報工学科 入学</dd>
    </dl>
  </div>
</template>

<style scoped>
dl {
  display: inline-block;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
dt {
  float: left;
}
dt::after {
  content: "：";
}
</style>