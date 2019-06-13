<template>
    <v-layout :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'lay-1-1 pt-3':'lay-1 pt-5'" row wrap>
        <v-flex xs12>
        <div class="black--text title pb-4 mb-3">
            <span class="M2-text-1">로맨스</span>&nbsp;<span class="M2-text-2">시리즈</span>
        </div>
        </v-flex>
        <v-flex v-for="C in dramas" :key="C.index" xl3 lg4 sm6 xs12 v-show="C.type==='로맨스'">
            <router-link :to="`/snack/${C.id}`" class="router-link1">
            <v-card flat :width="$vuetify.breakpoint.xs?'90%':'80%'" class="ma-3">
                    <v-img
                    :src="C.cut" width="100%" height="250"></v-img>
                    <div class="C-title1">
                        {{C.title}}
                    </div>
                    <div class="C-day1">
                        {{C.day}}
                    </div>
                    <v-divider class="mx-2"></v-divider>
                    <v-layout class="C-lay1" align-center>
                        <div>
                        <v-img class="C-icon1"
                        :src="C.studio" width="28" height="28"></v-img>
                        </div>
                        <span class="subheading C-studio1 pl-3">{{C.name}}</span>
                        <v-spacer></v-spacer>
                        <div class="pr-2" v-show="C.gooddrama===true">
                        <v-chip color="red" text-color="white">선정작</v-chip>
                        </div>
                    </v-layout>
            </v-card>
            </router-link>
        </v-flex>
        <v-flex xs12>
        <div class="black--text title pb-4 mb-3 pt-5">
            <span class="M2-text-1">코미디</span>&nbsp;<span class="M2-text-2">시리즈</span>
        </div>
        </v-flex>
        <v-flex v-for="C1 in dramas" :key="C1.index" xl3 lg4 sm6 xs12 v-show="C1.type==='코미디'">
            <router-link :to="`/snack/${C1.id}`" class="router-link1">
            <v-card flat :width="$vuetify.breakpoint.xs?'90%':'80%'" class="ma-3">
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
        <v-flex xs12>
        <div class="black--text title pb-4 mb-3 pt-5">
            <span class="M2-text-1">스릴러</span>&nbsp;<span class="M2-text-2">시리즈</span>
        </div>
        </v-flex>
        <v-flex v-for="C2 in dramas" :key="C2.index" xl3 lg4 sm6 xs12 v-show="C2.type==='스릴러'">
            <router-link :to="`/snack/${C2.id}`" class="router-link1">
            <v-card flat :width="$vuetify.breakpoint.xs?'90%':'80%'" class="ma-3">
                    <v-img
                    :src="C2.cut" width="100%" height="250"></v-img>
                    <div class="C-title1">
                        {{C2.title}}
                    </div>
                    <div class="C-day1">
                        {{C2.day}}
                    </div>
                    <v-divider class="mx-2"></v-divider>
                    <v-layout class="C-lay1" align-center>
                        <div>
                        <v-img class="C-icon1"
                        :src="C2.studio" width="28" height="28"></v-img>
                        </div>
                        <span class="subheading C-studio1 pl-3">{{C2.name}}</span>
                        <v-spacer></v-spacer>
                        <div class="pr-2" v-show="C2.gooddrama===true">
                        <v-chip color="red" text-color="white">선정작</v-chip>
                        </div>
                    </v-layout>
            </v-card>
            </router-link>
        </v-flex>
    </v-layout>
</template>
<script>
/* eslint-disable */
import { Drama_gooddrama_QUERY } from '../../graphql/queries'
import card1 from '../card/card1.vue';
export default {
    components:{
        card1
    },
    data() {
        return {
        cards:[
            {title:'로맨스특별법', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/playlist.jpg'), studio:'플레이 리스트', img:require('../../assets/img/01.jpg'), imgpos:'center'},
            {title:'어쩌다 18', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/Jtbc.png'), studio:'JTBC', img:require('../../assets/img/02.jpg'), imgpos:'top'},
            {title:'막판로맨스', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/Jtbc.png'), studio:'JTBC', img:require('../../assets/img/03.jpg'), imgpos:'top'}
        ],
         cards1:[
            {title:'홍익슈퍼', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/홍익슈퍼 로고.jpg'), studio:'TV홍익슈퍼', img:require('../../assets/img/04.jpg'), imgpos:'center'},
            {title:'마음의소리', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/kbs 로고.jpg'), studio:'KBS 한국방송', img:require('../../assets/img/05.jpg'), imgpos:'top'},
            {title:'바나나 액츄얼리', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/72초 로고.jpg'), studio:'72초TV', img:require('../../assets/img/06.png'), imgpos:'top'}
        ],
        cards2:[
            {title:'고래먼지', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/홍익슈퍼 로고.jpg'), studio:'삼성전자', img:require('../../assets/img/07.jpg'), imgpos:'top'},
            {title:'인형의집', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/kbs 로고.jpg'), studio:'웹드라마 인형의 집', img:require('../../assets/img/08.jpg'), imgpos:'bottom'},
            {title:'도플갱어', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/72초 로고.jpg'), studio:'충청일보Tv', img:require('../../assets/img/09.jpg'), imgpos:'bottom'}
        ],
        dramas:[]
        }
    },
    apollo: {
      dramas: {
        query: Drama_gooddrama_QUERY
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
    padding-top: 30px;
}
.lay-1-1{
    padding-top: 0px;
    padding-left: 15px;
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
