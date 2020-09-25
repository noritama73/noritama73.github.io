<template>
  <div class="works page">
    <div  v-for="item in work_contents" :key="item.id">
      <a :href="item.link" target="_blank" rel="nooopener noreferrer">
        <div class="content">
          <p class="title">{{item.title}}</p>
          <p class="caption">{{item.caption}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      work_contents: [
        {
          id: 1,
          link:
            "https://noritama73.github.io/personal-development/vue-chat/index.html",
          title: "フリーチャット",
          caption:
            "某掲示板のような、スレッド形式のSPAです。試作品の域を出ませんが..."
        },
        {
          id: 2,
          link: "/",
          title: "ポートフォリオサイト",
          caption: "このサイトです。"
        },
        { id: 3, link: null, title: "NEXT", caption: "Coming Soon..." }
      ]
    };
  }
};
</script>

<style scoped>
.works {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content {
  border-radius: 30px;
  background: #e9ebed;
  box-shadow: 5px 5px 30px #a3a5a6, -5px -5px 30px #ffffff;
  width: 180px;
  height: 180px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;
}
.content:hover{
  opacity: 0.8;
}
p.title {
  color: blue;
}
a:link,
a:visited,
a:active {
  color: black;
  text-decoration: none;
}
</style>