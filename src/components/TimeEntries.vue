<template>
  <div>
    <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary">
      创建
    </router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!lists.length"><strong>还没有日记</strong></p>

      <div class="list-group">
        <a class="list-group-item" v-for="(list,index) in lists">
          <div class="row">

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <p>{{ list.tit }}</p>

              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ list.date }}
              </p>
            </div>

            <div class="col-sm-9 comment-section">
              <p>{{ list.diary }}</p>
            </div>

            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deleteDiary(index)">
              X
              </button>
            </div>

          </div>
        </a>

      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name : 'TimeEntries',
        computed : {
          lists () {
            return this.$store.state.list
          }
        },
        data() {
            return {
                totalNum : 1,
            }
        },
        methods : {
          deleteDiary(idx) {
            // 减去总时间
            this.$store.dispatch('decTotalNum',this.lists[idx].totalNum)
            // 删除该计划
            this.$store.dispatch('deleteDiary',idx)
          }
        }
    }
</script>
<style>
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
