<template>
  <ul class="project-list">
    <li class="project-item" @click="jumpTo('/pages/gls/begin/start')">
      <img src="../public/logo-gls.png" alt="gls">
    </li>
    <li class="project-item">
      <img src="../public/logo-oxp.png" alt="oxp">
    </li>
    <li class="project-item">
      <img src="../public/logo-xiaozhuo.png" alt="xiaozhuo">
    </li>
    <li class="project-item">
      <img src="../public/logo-higo.png" alt="higo">
    </li>
    <li class="project-item">
      <img src="../public/logo-jenkins.png" alt="jenkins">
    </li>
  </ul>
</template>

<script>
export default {
  name: "home",
  methods: {
    jumpTo(url) {
      window.location.pathname = `${url}.html`
    }
  }
}
</script>

<style scoped lang="less">
.project-list {
  padding: 0;
  margin: 30px 0 0 0;
  list-style: none;
  text-align: center;

  & > li {
    display: inline-flex;
    margin: 0 20px;
    transition: transform 0.3s;
    cursor: pointer;
    position: relative;

    & img {
      width: 60px;
      height: 60px;
      border: none;
    }

    &:hover {
      transform: scale(1.1);
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: -20px;
      width: 105px;
      height: 100%;
      z-index: 1;
    }
  }
}

</style>
