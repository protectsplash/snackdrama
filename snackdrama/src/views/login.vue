<template>
  <div>
    <button @click="handleClickGetAuth">get auth code</button>
    <a href="#" @click="signOut()">Sign out</a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'test',
  methods: {
    handleClickGetAuth(){
      this.$gAuth.signIn()
    .then(GoogleUser => {
      //on success do something
      alert('susesse')
      console.log(GoogleUser) 
    })
    .catch(error  => {
      //on fail do something
    })
    },
    signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  }
}
</script>