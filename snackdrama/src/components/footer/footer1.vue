<template>
    <v-layout class="M4" wrap>
        <v-flex xs12>
            <v-layout :class="$vuetify.breakpoint.xs?'F-lay-1-1':'F-lay-1'">
                <div class="F-text-1">
                숨겨진 명작 웹드라마를 찾아라!<br>
                웹드라마를 맛있게 맛보세요.<br>
                스낵 처럼
                </div>
                <v-spacer></v-spacer>
                <div class="pr-5 hidden-sm-and-down">
                    <v-img
                    :src="require('../../assets/logo.png')"
                    width="210" height="70"></v-img>
                </div>
            </v-layout>
        </v-flex>
        <v-flex xs12>
            <div :class="$vuetify.breakpoint.xs?'pl-3':'F-lay-2'">
                <div class="F-text-2">
                    문의 및 건의 - kakao opn chat, instagram DM
                </div>
                <v-layout>
                <a href="https://open.kakao.com/o/sma1Pzsb" class="pr-3" target="_blank">
                <v-img
                :src="require('../../assets/icon/카카오문의.png')" width="50"
                height="50"></v-img>
                </a>
                <a href="https://www.instagram.com/snack_drama/" target="_blank">
                <v-img
                :src="require('../../assets/icon/instagram.png')" width="50"
                height="50"></v-img>
                </a>
                </v-layout>
                <div class="pt-3 pb-4">
                    <span class="F-text-3">Make by</span>
                    <span class="F-text-4">Splash</span>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>
<script>
/* eslint-disable */
export default {
    
}
</script>
<style>
@font-face {
    font-family: 'COREGTD8';
    src: url('../../assets/fonts/COREGTD8.OTF');
}
@font-face {
    font-family: 'COREGTD5';
    src: url('../../assets/fonts/COREGTD5.OTF');
}
@font-face {
    font-family: 'COREGTD2';
    src: url('../../assets/fonts/COREGTD2.OTF');
}
.F-lay-1{
    padding-left: 94px;
    padding-top: 42px;
    padding-bottom: 26px;
}
.F-lay-1-1{
    padding-left: 16px;
    padding-top: 42px;
    padding-bottom: 26px;
}
.F-lay-2{
    padding-left: 94px;
}
.F-text-1{
    font-size: 20px;
    font-family: 'COREGTD2';
}
.F-text-2{
    font-family: 'COREGTD5';
    font-size: 20px;
}
.F-text-3{
    font-family: 'COREGTD2';
    font-size: 20px;
}
.F-text-4{
    font-family: 'COREGTD8';
    font-size: 20px;
    padding-left: 5px;
}
</style>
