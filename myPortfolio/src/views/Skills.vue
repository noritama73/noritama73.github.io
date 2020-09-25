<template>
  <div class="skills page">
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
          progress: 1,
          caption:
            "独学で文法に触れたくらいです。多少のファイル操作プログラムを作成。"
        },
        {
          id: 4,
          name: "Vue.js",
          progress: 3,
          caption: "このサイトもVueで作成しています。"
        }
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
</style>