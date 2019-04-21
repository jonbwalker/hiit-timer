<template>
  <Label class="message" :text="msg" col="0" row="0"/>
</template>

<script lang="ts">
 import { Component, Vue } from "vue-property-decorator";
 @Component
 export default class TimeSelector extends Vue {
  msg:string = 'Select Time';
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

