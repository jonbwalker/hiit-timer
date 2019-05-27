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
    return this.value += 1;
  }

  decrement() {
    if (this.value > 0) return this.value -= 1;
  }
 }
</script>

<style scoped>
 .message {
   vertical-align: center;
   text-align: center;
   font-size: 20px;
   color: #333333;
 }
</style>

