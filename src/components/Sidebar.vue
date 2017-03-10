<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有日记</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ number }} 篇</h1>
    </div>

  </div>
</template>
<script>
    export default {
      name : 'Sidebar',
      computed: { //计算属性
        number() {
          return this.$store.state.totalNum
        }
      }
    }
</script>
