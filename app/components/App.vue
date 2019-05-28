<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Welcome to NativeScript-Vue!" col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer"/>

                <Label class="drawer-item" text="Item 1"/>
                <Label class="drawer-item" text="Item 2"/>
                <Label class="drawer-item" text="Item 3"/>
            </StackLayout>

            <FlexboxLayout ~mainContent flexDirection="column">
                <TimeSelector selector-label="Prep"/>
                <StackLayout class="hr-light m-10"></StackLayout>
                <TimeSelector selector-label="Work"/>
                <StackLayout class="hr-light m-10"></StackLayout>
                <Label :text="totalTime" />
            </FlexboxLayout>
        </RadSideDrawer>
    </Page>
</template>

<script lang="ts">
  import TimeSelector from './TimeSelector/TimeSelector.vue'
  import { Component, Vue } from "vue-property-decorator";

  @Component({components: {TimeSelector}})
  export default class App extends Vue {
    msg: string = 'Hello JON!';

    get totalTime() {
      return this.$store.state.totalTime;
    }

  }
</script>

<style scoped>
    .title {
        text-align: left;
        padding-left: 16px;
    }

    .drawer-header {
        padding: 50px 16px 16px 16px;
        margin-bottom: 16px;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24px;
    }

    .drawer-item {
        padding: 8px 16px;
        color: #333333;
        font-size: 16px;
    }
</style>
