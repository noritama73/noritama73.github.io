<template>
  <div class="social page">
   <div v-for="item in social_contents" :key="item.id">
       <a :href="item.link" target="_blank" rel="nooopener noreferrer">
        <div class="content">
          <p class="title">{{item.name}}</p>
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
      social_contents: [
        {
          id: 1,
          link:"https://twitter.com/takuma5884rbb", 
          name: "Twitter",
          caption: "大学のこと、開発のこと、オタクのこと。"
        },
        { id: 2, link:"https://stdinfouniv.hatenablog.com/", name: "はてなブログ", caption: "qiitaとの使い分けは曖昧。" },
        { id: 3, link:"https://github.com/noritama73",  name: "Github", caption: "日々勉強中です。" }
      ]
    };
  }
};
</script>

<style scoped>
.social {
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
.content:hover {
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

@media screen and (max-width: 426px) {
  .soscial {
    margin: 10px 0;
    justify-content: space-between;
  }

  .content {
    width: 90px;
    height: 90px;
  }
}
</style>