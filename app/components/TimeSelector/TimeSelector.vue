<template>
  <FlexboxLayout alignItems="flex-start" alignContent="center">
    <Label class="message" :text="msg" width="70" height="80"/>
    <Button class="round-btn" text="+" @tap="increment" />
    <TextField class="text-input" v-model="value"/>
    <Button class="round-btn" text="-" @tap="decrement"/>
  </FlexboxLayout>
</template>

<script lang="ts">
 import { Component, Vue } from "vue-property-decorator";
 @Component
 export default class TimeSelector extends Vue {
  msg: string = 'Prep';
  text: string = '';
  value: number = 0;

  increment() {
    this.value += 1;
    this.$store.commit('incrementTotalTime');
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.$store.commit('decrementTotalTime');
    }
  }
 }
</script>

<style scoped>
   .message {
     text-align: center;
     font-size: 20px;
     color: #333333;
   }
   .round-btn {
     width:40;
     height:40;
     color:white;
     border-radius:100;
     border-width:2;
     border-color:gray;
     background-color:gray;
   }
  .text-input {
    width: 40;
    height: 40;
  }
</style>

