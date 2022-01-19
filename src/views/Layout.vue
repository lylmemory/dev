<template>
    <div class="about">
        <h1>This is an about page</h1>

        <!--菜单栏-->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">发现</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
        <!--Popup弹出层-->
        <van-popup v-model="show" position="bottom" :style="{height:'30%'}">
            <van-datetime-picker v-model="currentDate" type="year-month" title="选择年月" :min-date="minDate"
                :max-date="maxDate" />
        </van-popup>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default class Layout extends Vue {
    datas: [] = []

    minDate = new Date(2020, 0, 1)

    maxDate = new Date(2025, 10, 1)

    currentDate = new Date()
}
</script>

<style>
</style>
