<template>
  <span>
    <RouterLink :to="`/pages/gls/explain/#${item}`"  v-for="item in $props.proplist">
      <span class="text">{{item}}</span>
    </RouterLink>
  </span>
</template>

<script>
export default {
  name: "gls-explain",
  props: {
    proplist: Array
  }
}
</script>

<style scoped lang="less">
  .text{
    position: relative;
    display: inline-block;
    margin: 0 7px;
    color: #4ba9ce;
    font-size: 14px;
    border-bottom: dashed 1px #1f999e;
    font-weight: normal;
    cursor: pointer;

    &::after{
      content: '';
      position: absolute;
      top: 0;
      right: -7px;
      width: 4px;
      height: 4px;
      border: solid 1px #757575;
      background-color: #e8ff00;
      border-radius: 50%;
      opacity: 0;
      animation: colorChange infinite 1.5s;
      transition: opacity 0.3s;
    }
    &:hover{
      color: #8dd0ea;

      &::after{
        opacity: 1;
        transition: opacity 0.3s;
      }
    }
  }

  @keyframes colorChange {
    0%{
      background-color: #e8ff00;
    }
    50%{
      background-color: #a0ea6c;
    }
    100%{
      background-color: #e8ff00;
    }
  }
</style>
