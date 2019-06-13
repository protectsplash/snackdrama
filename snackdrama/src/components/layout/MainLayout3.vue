<template>
    <v-layout wrap>
        <v-flex xs12>
                <div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'R-textLay-1-1':'R-textLay-1'">
                <hr class="my-hr1">
                <div class="R-text-1">스낵 드라마 추천 페이지</div>
                <div class="R-text-2">스낵 드라마는 웹드라마를 좋아하고 즐기기 위한 사이트 입니다.<br>
                     숨겨진 명작 웹드라마를 과감없이 추천해 주세요.<br>
                     사이트에 등록해 드립니다.</div>
                </div>
        </v-flex>
        <v-flex xs12>
            <div class="R-img-1"></div>
        </v-flex>
        <v-flex xs12>
                <div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'R-textLay-2-1':'R-textLay-2'">
                <div class="R-text-3">웹드라마 추천 기준</div>
                <hr class="my-hr2">
                <div class="R-text-4">
                     <strong>기준 1.</strong> 에피소드 1편당 30분이 넘으면 안됩니다.<br>
                     <strong>기준 2.</strong> 무료로 시청이 가능해야 합니다.<br>
                     <strong>기준 3.</strong> 웹드라마 시청 할 수 있는 URL이 있어야 합니다.</div>
                </div>
        </v-flex>
        <v-flex xs12>
                <div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'R-textLay-3-1':'R-textLay-3'">
                    <div class="R-text-3">추천하기</div>
                    <hr class="my-hr2">
                </div>
                <form>
                <v-layout row wrap justify-start pl-4>
                    <v-flex lg3 sm3 xs12 offset-md1>
                  <v-text-field
                    v-model="name"
                    v-validate="'required'"
                    :error-messages="errors.collect('name')"
                    label="웹드라마 이름"
                    data-vv-name="name"
                    required
                    color="black"
                  ></v-text-field>
                  </v-flex>
                  <v-flex lg3 sm3 xs12 offset-sm1>
                  <v-text-field
                    v-model="url"
                    v-validate="'required'"
                    :error-messages="errors.collect('url')"
                    label="웹드라마 URL"
                    data-vv-name="url"
                    required
                    color="black"
                  ></v-text-field>
                  </v-flex>
                  <v-flex lg3 sm3 xs12 offset-sm1>
                  <v-text-field
                    v-model="email"
                    v-validate="'required|email'"
                    :error-messages="errors.collect('email')"
                    label="추천자 E-mail"
                    data-vv-name="email"
                    required
                    color="black"
                  ></v-text-field>
                  </v-flex>
                  <v-flex xs11 offset-md1>
                      <div class="pb-5 mb-2">
                  <v-btn @click="submit" color="black"><span class="R-text-5 M3--text">추천하기</span></v-btn>
                  <v-btn @click="clear" color="white"> <span class="R-text-5 M2--text">다시쓰기</span></v-btn>
                    </div>
                  </v-flex>
                </v-layout>
                </form>
        </v-flex>
         <v-flex xs12>
            <div class="R-img-2"></div>
        </v-flex>
        <v-flex xs12>
                <div :class="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'R-textLay-2-1':'R-textLay-2'">
                <div class="R-text-3">웹제작자</div>
                <hr class="my-hr2">
                <div class="R-text-7">
                     일상에 즐거움을 주고 싶은 28세 웹 풀스택 개발자<br>
                </div>
                <div class="R-text-6">
                     2019 Make by <strong>Splash</strong>
                </div>
                </div>
        </v-flex>
        <v-flex xs12>
            <footer1/>
        </v-flex>
         <!-- ------------------스넥바--------------------- -->
                <div>
                  <v-snackbar
                  color="success"
                  v-model="snackbar"
                >
                  {{ sbMsg }}
                  <v-btn
                    color="pink"
                    flat
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </v-snackbar>
                </div>
    </v-layout>
</template>
<script>
/* eslint-disable */
import { CREATE_thanks_MUTATION } from '../../graphql/mutations'
import footer1 from '../footer/footer1.vue'
export default {
    components:{
        footer1
    },
     $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      url: '',
      email: '',
      snackbar: false,
      sbMsg:'',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => '웹드라마 이름을 입력해 주세요.',
            // custom messages
          },
           email: {
            required: () => '이메일을 입력해 주세요.',
            email: '이메일의 형식이 아닙니다.'
          },
          url: {
            required: () => '웹드라마를 볼 수 있는 URL을 입력해 주세요.',
          },
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
        this.$apollo
        .mutate({
            mutation: CREATE_thanks_MUTATION,
              variables: {
              weburl: this.url,
              webname: this.name,
              webemail: this.email
          }
          })
           .then(response => {
            this.pop('추천해 주셔서 감사합니다!')
            this.$router.replace('/recommend')
            this.clear()
          })
          .catch(error => console.error(error))

      },
      clear () {
        this.url = ''
        this.email = ''
        this.name = ''
        this.$validator.reset()
      },
        pop (msg) {
      this.snackbar = true
      this.sbMsg = msg
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
    src: url('../../assets/fonts/COREGTD2.OTF');
}
.R-textLay-1{
    padding-left: 200px;
    padding-top: 180px;
}
.R-textLay-1-1{
    padding-left: 20px;
    padding-top: 180px;
}
.R-textLay-2{
    padding-left: 200px;
    padding-top: 60px;
}
.R-textLay-2-1{
    padding-left: 20px;
    padding-top: 60px;
}
.R-textLay-3{
    padding-left: 200px;
    padding-top: 0px;
}
.R-textLay-3-1{
    padding-left: 20px;
    padding-top: 0px;
}
.R-text-1{
    font-family: 'COREGTD8';
    padding: 18px 0;
    font-size: 36px;
}
.R-text-2{
    font-family: 'COREGTD4';
    font-size: 24px;
    padding-bottom: 60px;
}
.R-text-3{
    font-family: 'COREGTD8';
    font-size: 36px;
    padding-bottom: 8px;
}
.R-text-4{
    font-family: 'COREGTD4';
    font-size: 24px;
    padding-bottom: 60px;
    padding-top: 18px;
}
.R-text-5{
    font-family: 'COREGTD4';
    font-size: 20px;
}
.R-text-6{
    font-family: 'COREGTD2';
    font-size: 20px;
    padding-bottom: 24px;
}
.R-text-7{
    font-family: 'COREGTD4';
    font-size: 20px;
    padding: 24px 0;
}

.my-hr1{
    width: 186px;
    height: 7px;
    background: black;
}
.my-hr2{
    width: 135px;
    height: 7px;
    background: black;
}
.R-img-1{
    height: 300px;
    background-attachment: fixed;
    background-size: cover;
    background-image: url('../../assets/img/팝콘사진.jpg')
}
.R-img-2{
      height: 300px;
    background-attachment: fixed;
    background-size: cover;
    background-image: url('../../assets/img/제작자 사진.jpg')
}
</style>
