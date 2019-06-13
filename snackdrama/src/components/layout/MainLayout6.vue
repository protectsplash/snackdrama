<template>
    <v-layout :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'lay-1-1':'lay-1'" row wrap>
        <v-flex v-for="C in dramas" :key="C.title" xl3 lg4 sm6 xs12>
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
                        <span class="subheading C-studio1 pl-3 py-2">{{C.name}}</span>
                        <v-spacer></v-spacer>
                        <div class="pr-2" v-show="C.gooddrama===true">
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
import { Drama_ROMANCE_QUERY } from '../../graphql/queries'
import footer1 from '../footer/footer1.vue'
export default {
    components:{
        footer1
    },
    data() {
        return {
        // cards:[
        //     {title:'로맨스특별법', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/playlist.jpg'), studio:'플레이 리스트', img:require('../../assets/img/01.jpg'), imgpos:'center'},
        //     {title:'어쩌다 18', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/Jtbc.png'), studio:'JTBC', img:require('../../assets/img/02.jpg'), imgpos:'top'},
        //     {title:'막판로맨스', day:'May 30. 2018 ~ May 30. 2018 종영', icon: require('../../assets/icon/Jtbc.png'), studio:'JTBC', img:require('../../assets/img/03.jpg'), imgpos:'top'}
        // ],
        dramas:[],
        page:1
        }
    },
    apollo: {
      dramas: {
        query: Drama_ROMANCE_QUERY
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
.router-link1{
    text-decoration: none;
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
