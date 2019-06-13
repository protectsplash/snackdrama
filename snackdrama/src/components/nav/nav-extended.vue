<template>
    <div>
          <v-layout row justify-center>
      <!-- --------------------------회원가입 다이어로그-- -->
    <v-dialog v-model="register" persistent max-width="600px"
    :fullscreen="$vuetify.breakpoint.xs">
      <v-card>
        <v-card-title class="pa-3">
            <v-layout justify-center>
          <v-flex sm8 xs12>
          <span class="body-1 font-weight-bold">회원이 되어주세요.</span>
          <span class="body-1 pl-4">멤버 라면?<v-btn flat small class="font-weight-black teal--text body-1" @click="loginchange()">로그인 하기</v-btn></span>
          </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md pa-0>
            <v-layout wrap justify-center>
              <v-flex xs8>
                <v-text-field box label="Username*" required></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-text-field box label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-text-field box label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-text-field box label="Repeat Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-btn class="white--text" large color="teal lighten-1" @click="dialog = false" block>CREATE YOUR ACCOUNT</v-btn>
              </v-flex>
              <v-flex sm8 xs10>
                <div class="body-2 font-weight-bold">다른 회원가입 방법</div>
                <v-layout justify-center wrap>
                <div>
                <v-btn class="white--text" color="teal" @click="dialog = false">구글</v-btn>
                <v-btn class="white--text" color="teal" @click="dialog = false">네이버</v-btn>
                <v-btn class="white--text" color="teal" @click="dialog = false">카카오톡</v-btn>
                </div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="register = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      <!-- -----------------------로그인 다이어로그 -->
    <v-dialog v-model="dialog" persistent max-width="600px"
    :fullscreen="$vuetify.breakpoint.xs">
      <v-card>
        <v-card-title class="pa-3">
            <v-layout justify-center>
          <v-flex sm8 xs12>
          <span class="body-1 font-weight-bold">로그인 해주세요.</span>
          <span class="body-1 pl-4">멤버가 아니라면<v-btn flat small class="font-weight-black teal--text body-1" @click.stop="register = !register">회원가입 하기</v-btn></span>
          </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md pa-0>
            <v-layout wrap justify-center>
              <v-flex xs8>
                <v-text-field box label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-text-field box label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-btn class="white--text" large color="teal lighten-1" @click="dialog = false" block>LOGIN NOW</v-btn>
              </v-flex>
              <v-flex sm8 xs10>
                <div class="body-2 font-weight-bold">다른 로그인 방법</div>
                <v-layout justify-center wrap>
                <div>
                <v-btn class="white--text" color="teal" @click="dialog = false">구글</v-btn>
                <v-btn class="white--text" color="teal" @click="dialog = false">네이버</v-btn>
                <v-btn class="white--text" color="teal" @click="dialog = false">카카오톡</v-btn>
                </div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
    <v-toolbar height="70" color="M1"
    extended flat app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
         <template v-slot:extension>
        <div>
            <v-icon color="black">filter_list</v-icon>
        </div>
            <v-divider
            class="mx-3"
            inset
            vertical
          ></v-divider>
          <div>
              <strong>Filter</strong>
          </div>
          <v-divider
            class="ml-3"
            inset
            vertical
          ></v-divider>
          <v-btn flat large to="/snackdrama/lomance" class="font-weight-light">Lomance</v-btn>
          <v-divider
            inset
            vertical
          ></v-divider>
          <v-btn flat large to="/snackdrama/comedy" class="font-weight-light">comedy</v-btn>
          <v-divider
            inset
            vertical
          ></v-divider>
          <v-btn flat large to="/snackdrama/thriller" class="font-weight-light">thriller</v-btn>
          <v-divider
            inset
            vertical
          ></v-divider>
          </template>
    <v-toolbar-title class="ma-0" v-show="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">menu</v-toolbar-title>
     <v-divider
      class="mx-3"
      inset
      vertical
    ></v-divider>
    <!-- <v-btn icon v-show="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
        <v-icon>search</v-icon>
    </v-btn> -->
    <v-spacer></v-spacer>
    <router-link to="/">
    <v-img
    :src="require('../../assets/logo.png')"
    max-width="210" max-height="70"
    min-width="210" min-height="70"
    ></v-img>
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items v-show="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
      <v-layout align-center>
          <!-- <div class="px-2">Mr.KIM</div> -->
          <div class="px-2">
          <v-img
          :src="require('../../assets/icon/강추.png')"
          width="40"
          height="40"
          max-width="40"
          max-height="40"></v-img>
          </div>
      </v-layout>
      <v-btn color="M3" depressed to="/Recommend">
          <div class="text-1 px-5">웹드라마 추천!</div>
      </v-btn>
    </v-toolbar-items>
    <!-- <v-btn icon v-show="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-icon>search</v-icon>
    </v-btn> -->
  </v-toolbar>
        <v-navigation-drawer
          v-model="drawer"
          app
          temporary
        >
          <v-list class="pa-2">
            <v-list-tile @click.stop="drawer = !drawer">
                <v-spacer></v-spacer>
                <div class="text-xs-right N-text-2">
                CLOSE <v-icon color="black">clear</v-icon>
                </div>
            </v-list-tile>
          </v-list>
          <!-- <v-list class="pa-2">
            <v-list-tile @click.stop="dialog = !dialog">
                <div class="text-xs-right N-text-3 pl-2">
                <v-icon color="black">account_circle</v-icon><span class="L-text1">회원가입 / 로그인</span>
                </div>
            </v-list-tile>
            <v-divider class="mx-0 pa-0"></v-divider>
          </v-list> -->

          <v-list class="pl-3" dense
            v-for="(item, index) in items"
              :key="item.title"
              :index="index">

            <v-list-tile
            :to="item.to"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title class="N-text-1">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider class="mx-0 pa-0"></v-divider>
          </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
/* eslint-disable */ 
export default {
    data() {
        return {
            register:false,
            drawer:null,
            dialog: false,
            items: [
          { title: 'Home', icon: 'dashboard', to:'/' },
          { title: '스낵 드라마', icon: 'ondemand_video', to:'/snackdrama' },
          { title: '드라마 추천하기', icon: 'movie_filter', to:'/recommend' }
        ]
        }
    },
     methods: {
      loginchange(){
        this.dialog = true
        this.register= false
      }
    },
}
</script>
<style>
@font-face {
    font-family: 'COREGTD7';
    src: url('../../assets/fonts/COREGTD7.OTF');
}
@font-face {
    font-family: 'COREGTD8';
    src: url('../../assets/fonts/COREGTD8.OTF');
}
.toolbar__content{
    padding: 0;
}
.text-1{
    font-family: 'COREGTD7';
    font-size: 15px;
    color: #F97461;
    letter-spacing: 5px;
}
.N-text-1{
    font-family: 'COREGTD8';
    font-size: 16px;
}
.N-text-2{
    font-family: 'COREGTD8';
    font-size: 16px;
    letter-spacing: 3px;
}
</style>
