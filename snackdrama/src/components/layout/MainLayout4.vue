<template>
    <v-layout row wrap class="m1-lay" justify-center :drama="drama">
        <v-flex xs12>
            <div id="back-color">
            <v-layout :id="$vuetify.breakpoint.xs?'Main-background-1':'Main-background'" color="black">
                <v-img :src="drama.poster" class="M1-img1"></v-img>
                <div class="title white--text text-position1"><span class="main-T3">{{drama.type}}</span>&nbsp;<span class="main-T4">{{drama.day}}</span></div>
                <v-layout align-center justify-center>
                    <v-flex xs12>
                        <v-card color="transparent" flat>
                    <div :class="!$vuetify.breakpoint.xs?'text-xs-center white--text main-T1 pb-4':'text-xs-center white--text main-T1-1'">{{ drama.title}}</div>
                    <div class="text-xs-center">
                        <a :href="drama.link" style="text-decoration: none;" target="_blank">
                        <v-btn flat>
                            <v-img
                            class="img-1"
                            :src="drama.studio"
                            width="28"></v-img>
                            <div class="px-2 white--text main-T2">
                                {{drama.name}}
                            </div>
                        </v-btn>
                        </a>
                    </div>
                    </v-card>
                    <!-- ---------------------------추천버튼 -->
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
                    </v-flex>
                </v-layout>
                <div :class="$vuetify.breakpoint.xs ? 'text-position2':'text-position2'">
                    <a :href="drama.fulllink" target="_blank" style="text-decoration: none;">
                    <v-btn color="white" round outline>
                        <div class="btn-text1">전체 보기</div>
                    </v-btn>
                    </a>
                </div>
            </v-layout>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-layout justify-center class="M1" wrap>
                <v-flex xs12>
                    <v-layout justify-center>
                <div class="M4-text-1 text-xs-left">
                    {{drama.about}}
                </div>
                    </v-layout>
                </v-flex>
                <v-flex xs12>
                    <!-- ====================세분화 카테고리 칩=========== -->
                 <!-- <div class="text-xs-center M4-text-2">
                      <v-chip outline color="secondary">20대</v-chip>
                      <v-chip outline color="secondary">로맨스</v-chip>
                      <v-chip outline color="secondary">대학생</v-chip>
                      <v-chip outline color="secondary">멜로</v-chip>
                      <v-chip outline color="secondary">드라마</v-chip>
                 </div> -->
                 <v-divider class="mx-3"></v-divider>
                 </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12>
            <div class="M4-text-3 pb-5 M1">
                <v-tabs fixed-tabs color="M1">

                  <v-tab @click="$vuetify.goTo(target, options)">
                      <span class="tab-text1">첫화 맛보기</span>
                  </v-tab>
                  <v-tab @click="$vuetify.goTo(target1, options)">
                      <span class="tab-text2">댓글 쓰기</span>
                  </v-tab>
                  <v-tab @click="$vuetify.goTo(target2, options)">
                      <span class="tab-text3">다른 웹드라마 추천하기</span>
                  </v-tab>
                </v-tabs>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-layout justify-center class="M1 pb-5" id="first">
            <iframe width="1200" height="480" :src="drama.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </v-layout>
        </v-flex>
        <!-- ================== 컷 사진 / 강력추천자 / 전체보기 버튼 =========== -->
        <!-- <v-flex lg6 sm9 xs12 offset-sm3 offset-lg3>
             <agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade="fade" pause-on-hover="pause-on-hover" pause-on-dots-hover="pause-on-dots-hover" autoplay="autoplay">
                 <div v-for="n in cuts" :key="n.src">
                     <v-img :src="n.src" position="top" class="slide" width="420"/>
                 </div>
             </agile>
        </v-flex>
        <v-flex xs12>
            <div class="text-xs-center M4-btn-1">
            <v-btn flat fab large class="pr-3">
                            <v-img
                            class="img-2"
                            :src="require('../../assets/icon/verygood.png')"
                            width="70">
                            <v-layout justify-center pt-4>
                            <div class="white--text text-xs-center sub-T1">176</div>
                            </v-layout>
                            </v-img>
            </v-btn>
            <v-btn color="M2" round class="ml-3">
                        <div class="btn-text1">전체 보기</div>
            </v-btn>
            </div>
        </v-flex> -->
        <!-- ===================댓글 평점 시스템=========== -->
        <!-- <v-flex xs10>
            <v-card class="mb-5">
                <v-layout class="pl-4" align-center>
                <div class="M4-text-3"> 강력 추천자</div>
                &nbsp;&nbsp;&nbsp;
                <div class="M4-text-4"> <span class="red--text">176</span> 명</div>
                </v-layout>
                <v-divider></v-divider>
                <v-layout class="pl-4" align-center v-for="user in users" :key="user.name" row wrap justify-start>
                    <v-flex lg1 sm1 xs2>
                    <v-img
                    class="img-1 my-3"
                    :src="user.face" max-width="100"></v-img>
                    </v-flex>
                    <v-flex lg3 sm5 xs6>
                        <div class="pl-2 text-xs-left">
                    <div class="M4-text-5">{{user.name}}</div>
                    <div class="M4-text-6">{{user.title}} 추천합니다.</div>
                        </div>
                    </v-flex>
                    <v-flex lg2 sm3 xs1 offset-xs1 offset-sm3 offset-lg6>
                        <div class="text-xs-right pr-3">
                        <v-btn flat small fab>
                            <v-img
                            class="img-2"
                            :src="require('../../assets/icon/강추.png')">
                            <v-layout justify-center pt-4>
                            </v-layout>
                            </v-img>
                        </v-btn>
                        <v-btn fab small class="white--text" color="black">
                            <div class="text-xs-center caption">취소</div>
                        </v-btn>
                        </div>
                    </v-flex>
                    <hr width="100%" class="M1">
                </v-layout>
                <v-flex xs12>
                         <div class="text-xs-center pt-4 pb-4">
                           <v-pagination
                             v-model="page"
                             :length="4"
                             circle
                           ></v-pagination>
                         </div>
                    </v-flex>
            </v-card>
        </v-flex> -->
        <!-- 라이브리 시티 설치 코드 -->
        <v-flex lg8 sm9 xs11>
             <div class="comments" id="two">
                <vue-livere uid="MTAyMC80NDI3Ni8yMDgwOA==">
                    <!-- refer="PAGE_URL_OR_SOME_UNIQUE_VALUE" -->
                </vue-livere>
            </div>
        </v-flex>
        <card1 id="three"/>
        <footer1/>
    </v-layout>
</template>
<script>
/* eslint-disable */
import {  Drama_detail_QUERY } from '../../graphql/queries'
import footer1 from '../footer/footer1.vue'
import card1 from '../card/card1.vue'
import * as easings from 'vuetify/es5/util/easing-patterns'
 import VueLivere from 'vue-livere/VueLivere'
export default {
    components:{
        footer1,
        card1,
        VueLivere
    },
    data() {
        return {
            cuts: [
          {
            src: require('../../assets/img/01.jpg')
          },
          {
            src: require('../../assets/img/02.jpg')
          },
          {
            src: require('../../assets/img/03.jpg')
          },
        ],
        type: 'selector',
        selector: '#first',
        type1: 'selector1',
        selector1: '#two',
        type2: 'selector2',
        selector2: '#three',
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
        page: 1,
        drama:[]
        }
    },
    computed: {
      target () {
        const value = this[this.type]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      target1 () {
        const value = this[this.type1]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      target2 () {
        const value = this[this.type2]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing
        }
    },
        livere(d, s) {
                   var j, e = d.getElementsByTagName(s)[0];

                   if (typeof LivereTower === 'function') { return; }

                   j = d.createElement(s);
                   j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
                   j.async = true;

                   e.parentNode.insertBefore(j, e);
               }
    },
    apollo: {
      drama: {
        query: Drama_detail_QUERY,
        variables () {
            return {
              id: this.$route.params.id,
            }
        }
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
@font-face {
    font-family: 'COREGTD2';
    src: url('../../assets/fonts/COREGTD4.OTF');
}
.M4-btn-1{
    padding: 78px 0;
}
.M4-lay-1{
    padding-bottom: 78px;
    width: 80%;
    margin: 0;
}
.tab-text1{
  font-family: 'COREGTD8';
  text-decoration: underline;
  text-underline-position: under;
  font-size: 16px;
}
.tab-text2{
  font-family: 'COREGTD2';
  font-size: 16px;
}
.tab-text3{
  font-family: 'COREGTD2';
  font-size: 16px;
}
.M4-text-1{
    font-family: 'COREGTD4';
    padding-top: 50px;
    margin: 0 10%;
    font-size: 16px;
    padding-bottom: 25px;
    letter-spacing: 3px;
}
.M4-text-2{
    padding-bottom: 50px;
}
.M4-text-3{
    font-size: 16px;
    padding-right: 24px;
    font-family: 'COREGTD8';
    padding: 29px 0;
}
.M4-text-4{
    font-size: 12px;
    font-family: 'COREGTD8';
}
.M4-text-5{
    font-size: 14px;
    font-family: 'COREGTD8';
}
.M4-text-6{
    font-size: 14px;
    padding-top: 5px;
    font-family: 'COREGTD4';
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
    position: absolute;
}
.text-position2{
    top: 500px;
    position: absolute;
}
.text-position2-1{
    top: 10%;
    position: absolute;
}
.main-T1{
    font-family: 'COREGTD8';
    font-size: 34px;
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
}
.img-1{
   border-radius: 50%; 
}
.m1-lay{
    padding-top: 70px;
}
#Main-background{
     height: 530px;
    width: 100%;
}
#Main-background-1{
     height: 530px;
    width: 100%;
}
.agile__dots {
  bottom: 10px;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #fff;
}
.M1-img1{
    width: 100%;
    height: 530px;
    position: absolute;
    background-size: cover;
    background-position: center center;
}
.slide {
  height: 600px;
  background-attachment: fixed;
  width: 100%;
}

</style>


