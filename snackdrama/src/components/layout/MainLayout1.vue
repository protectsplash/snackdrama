<template>
    <v-layout row wrap class="m1-lay" :drama="drama">
        <v-flex xs12>
            <div id="back-color">
            <v-layout :class="$vuetify.breakpoint.xs?'Main-background-1':'Main-background'" color="black">
            <img :src="drama.poster" class="M1-img1">
                <div :class="$vuetify.breakpoint.xs ? 'title white--text text-position1-1':'title white--text text-position1'"><span class="main-T3">{{ drama.type }}</span>&nbsp;<span class="main-T4">{{ drama.day }}</span></div>
                <v-layout align-center justify-center>
                    <v-flex xs12>
                    <div class="text-xs-center">
                    <v-card flat color="transparent">
                        <div :class="!$vuetify.breakpoint.xs?'text-xs-center white--text main-T1':'text-xs-center white--text main-T1-1'">{{drama.title}}</div></v-card>
                    <br>
                    <a :href="drama.link" style="text-decoration: none;" target="_blank">
                        <v-btn flat>
                            <img
                            class="img-1"
                            :src="drama.studio"
                            width="28">
                            <div class="px-2 white--text main-T2">
                                {{ drama.name }}
                            </div>
                        </v-btn>
                    </a>
                    </div>
                    <!-- --------------------강추버튼----------------- -->
                    <!-- <div class="text-xs-center">
                        <v-btn flat fab large>
                            <v-img
                            class="img-2"
                            :src="require('../../assets/icon/verygood.png')"
                            width="70">
                            <v-layout justify-center pt-4>
                            <div class="white--text text-xs-center sub-T1">176</div>
                            </v-layout>
                            </v-img>
                        </v-btn>
                    </div> -->
                     <!-- --------------------강추버튼----------------- -->
                    </v-flex>
                </v-layout>
                <div :class="$vuetify.breakpoint.xs ? 'text-position3-1':'text-position2'">
                    <v-btn color="M2" round :to="`/snack/${drama.id}`">
                        <div class="btn-text1">첫화 맛보기</div>
                    </v-btn>
                    <a :href="drama.fulllink" style="text-decoration: none;" target="_blank">
                    <v-btn color="white" round outline>
                        <div class="btn-text1">전체 보기</div>
                    </v-btn>
                    </a>
                </div>
            </v-layout>
            </div>
        </v-flex>
        <Main2/>
        <footer1/>
    </v-layout>
</template>
<script>
/* eslint-disable */
import { Drama_QUERY } from '../../graphql/queries'
import footer1 from '../footer/footer1.vue'
import Main2 from './MainLayout2.vue'
export default {
    components:{
        Main2,
        footer1
    },
    data() {
        return {
            drama:[]
        }
    },
     apollo: {
      drama: {
        query: Drama_QUERY
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
.sub-T1{

    font-size: 24px;
}
.btn-text1{
    font-family: 'COREGTD8';
    color: white;
    letter-spacing: 1px;
    padding: 0 8px;
}
.text-position1{
    top: 150px;
    left: 93px;
    position: absolute;
}
.text-position1-1{
    top: 150px;
    left: 15px;
    position: absolute;
}
.text-position2{
    top: 500px;
    left: 93px;
    position: absolute;
}
.text-position3-1{
    top: 500px;
    left: 93px;
    position: absolute;
}
.main-T1{
    font-family: 'COREGTD8';
    font-size: 34px;
}
.main-T1-1{
    font-family: 'COREGTD8';
    font-size: 24px;
}
.main-T2{
    font-family: 'COREGTD8';
    font-size: 20px;
}
.main-T3{
    font-family: 'COREGTD8';
}
.main-T4{
    font-family: 'COREGTD4';
    letter-spacing: -1px;
}
.img-1{
   border-radius: 50%; 
}
.m1-lay{
    padding-top: 70px;
}
.Main-background{
    height: 530px;
    width: 100%;
}
.M1-img1{
    width: 100%;
    height: 530px;
    position: absolute;
    background-size: cover;
    background-position: center center;
}
.Main-background-1{
    height: 530px;
    width: 100%;
}
.M1-main-img{
    /* padding: 0 93px; */
}
</style>
