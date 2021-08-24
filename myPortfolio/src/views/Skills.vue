<template>
  <div class="skills page">
    <perfect-scrollbar>
      <div>
        <dl v-for="item in skills" :key="item.id">
          <div class="name">
            <dt>{{ item.name }}</dt>
          </div>
          <div class="caption">
            <dd>
              <span v-for="i in item.progress" :key="i"
                ><i class="fas fa-star"></i></span
              ><span v-for="j in 5 - item.progress" :key="j * 100"
                ><i class="far fa-star"></i
              ></span>
            </dd>
            <dd>{{ item.caption }}</dd>
          </div>
        </dl>
        <h2>Next comes...</h2>
        <div v-for="(item, index) in interests" :key="index">
          <div>{{ item }}</div>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          name: "C",
          progress: 3,
          caption: "講義で主に扱い、簡単なゲームをいくつか製作しました。"
        },
        {
          id: 2,
          name: "C++",
          progress: 2,
          caption: "Atcoderで使用しています。"
        },
        {
          id: 3,
          name: "Python",
          progress: 3,
          caption:
            "独学で触れはじめ，大学の実験やインターンで使用しています．使えば使うほど学ぶことがでてくる..."
        },
        {
          id: 4,
          name: "Vue.js",
          progress: 3,
          caption: "このサイトもVueで作成しています。router,vuexなど勉強中。"
        },
        {
          id: 5,
          name: "CSS",
          progress: 2,
          caption: "製作を進めれば進めるほど、分からないことが出てきます。"
        },
        {
          id: 6,
          name: "AWS",
          progress: 1,
          caption: "仕事でlambda周りを少しふれました．現在一番の課題です．"
        },
        {
          id: 7,
          name: "Docker",
          progress: 2,
          caption: "lambda用にイメージを用意したり．単純に環境を作るだけならpyenvより使いやすいのでは？"
        }
      ],
      interests: [
        "Node.js",
        "Socket.IO",
        "Nuxt.js",
        "firebase",
        "PHP",
        "GO",
      ]
    };
  }
};
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
}

dl {
  margin: 30px;
}

dd {
  text-align: left;
}
.name {
  float: left;
}

dt::after {
  content: "：";
}

.ps {
  height: 95vh;
  width: 100vw;
  border: 2px solid #000;
}
</style>