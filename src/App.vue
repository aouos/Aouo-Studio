<template>
  <div id="app" v-cloak>
    <div class="main">
      <div>
        <img src="./assets/logo.png" alt="" />
      </div>
      <a-button type="primary" @click="success">哇咔咔</a-button>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";

message.config({
  top: `60px`,
});

export default {
  name: "App",
  mounted() {
    this.$message.info("欢迎使用", 1);
  },
  methods: {
    success() {
      this.$success({
        title: "aexcel",
        content: (
          <div>
            <p>这是一个简单的 Excel 操作工具哦~</p>
          </div>
        ),
      });
    },
  },
};
</script>

<style>
[v-clock] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}

:root {
  font-size: 1em;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.main {
  text-align: center;
}

.main img {
  width: 100px;
  margin-bottom: 20px;
}
</style>
