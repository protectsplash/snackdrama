<template>
    <v-layout :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'lay-1-1':'lay-1'" row wrap>
        <v-flex v-for="C1 in dramas" :key="C1.title" xl3 lg4 sm6 xs12>
            <router-link :to="`/snack/${C1.id}`" class="router-link1">
            <v-card flat width="70%" class="ma-3">
                    <v-img
                    :src="C1.cut" width="100%" height="250"></v-img>
                    <div class="C-title1">
                        {{C1.title}}
                    </div>
                    <div class="C-day1">
                        {{C1.day}}
                    </div>
                    <v-divider class="mx-2"></v-divider>
                    <v-layout class="C-lay1" align-center>
                        <div>
                        <v-img class="C-icon1"
                        :src="C1.studio" width="28" height="28"></v-img>
                        </div>
                        <span class="subheading C-studio1 pl-3">{{C1.name}}</span>
                        <v-spacer></v-spacer>
                        <div class="pr-2" v-show="C1.gooddrama===true">
                        <v-chip color="red" text-color="white">선정작</v-chip>
                        </div>
                    </v-layout>
            </v-card>
            </router-link>
        </v-flex>
        <!-- <v-flex xs12>
            <v-layout justify-center my-5>
            <v-pagination
              v-model="page"
              :length="4"
              circle
            ></v-pagination>
            </v-layout>
        </v-flex> -->
        <v-flex xs12>
        <footer1/>
        </v-flex>
    </v-layout>
</template>
<script>
/* eslint-disable */
import { Drama_COMEDY_QUERY } from '../../graphql/queries'
import footer1 from '../footer/footer1.vue'
export default {
    components:{
        footer1
    },
    data() {
        return {
        //  cards1:[
        //     {title:'홍익슈퍼', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/홍익슈퍼 로고.jpg'), studio:'TV홍익슈퍼', img:require('../../assets/img/04.jpg'), imgpos:'center'},
        //     {title:'마음의소리', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/kbs 로고.jpg'), studio:'KBS 한국방송', img:require('../../assets/img/05.jpg'), imgpos:'top'},
        //     {title:'바나나 액츄얼리', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/72초 로고.jpg'), studio:'72초TV', img:require('../../assets/img/06.png'), imgpos:'top'}
        // ],
        dramas:[],
        page:1
        }
    },
    apollo: {
      dramas: {
        query: Drama_COMEDY_QUERY
      }
    }
}
</script>
<style>
@font-face {
    font-family: 'COREGTD8';
    src: url('../../assets/fonts/COREGTD8.OTF');
}
@font-face {
    font-family: 'COREGTD4';
    src: url('../../assets/fonts/COREGTD4.OTF');
}
.M2-text-1{
    font-family: 'COREGTD8';
}
.M2-text-2{
    font-family: 'COREGTD4';
}
.lay-1{
    padding-left: 93px;
    padding-top: 160px;
}
.lay-1-1{
    padding-top: 160px;
}
.C-title1{
    font-family: 'COREGTD8';
    letter-spacing: 5px;
    padding-left: 21px;
    padding-top: 21px;
    padding-bottom:11px;
}
.C-studio1{
    font-family: 'COREGTD8';
    font-size: 16px;
}
.C-day1{
    font-family: 'COREGTD4';
    padding-left: 21px;
    padding-bottom:11px;
}
.C-icon1{
    border-radius: 50%;
}
.C-lay1{
    padding-left: 21px;
    padding-bottom: 16px;
}
</style>
