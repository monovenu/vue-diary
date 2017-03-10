<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="date"
          placeholder="Date"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>日记</label>
        <textarea class="form-control"
          v-model="diary"
          placeholder="write your dairy here">       
        </textarea>
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>
<style>

</style>
<script>
 
    export default {
        name : 'LogTime',
        data() {
            return {
                date : '',
                totalNum : 1,
                diary : ''
            }
        },
        methods:{
          save() {
            const diary = {
              date : this.date,
              totalNum : this.totalNum,
              diary : this.diary
            };
            this.$store.dispatch('saveDiary', diary) //使用store.dispatch来触发action
            this.$store.dispatch('addTotalNum', this.totalNum)
            this.$router.go(-1)
          }
        }
    }
</script>
