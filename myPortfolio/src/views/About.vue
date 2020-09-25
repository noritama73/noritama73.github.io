<template>
  <div class="about page">
    <dl v-for="item in profile" :key="item.id">
      <dt>{{item.year+'年'}}</dt><dd>{{item.caption}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: [
        { id: 1, year: 2000, caption: "誕生" },
        { id: 2, year: 2013, caption: "栄光学園中学校 入学" },
        { id: 3, year: 2019, caption: "東京理科大学 工学部 情報工学科 入学" }
      ]
    };
  }
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-top: 20px;
}
dl {
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