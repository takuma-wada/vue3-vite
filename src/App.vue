<script>
export default {
  data() {
    return {
      title: 'My New Vue Title',
      message: 'Welcome to Vue',
      colorTestText: 'text color is green',
      isGreen: true,
      textStatus: {
        green: true
      },
      computedUser: {
        firstName: 'John',
        lastName: 'doe0',
        isMember: true,
      },
      users:[
        {
          firstName: 'John',
          lastName: 'doe1',
          isMember: true,
        },
        {
          firstName: 'John',
          lastName: 'doe2',
          isMember: false,
        },
        {
          firstName: 'John',
          lastName: 'doe3',
          isMember: true,
        },
      ]
    }
  },
  computed: {
    fullName() {
      return this.computedUser.firstName + ' ' + this.computedUser.lastName
    }
  },
  methods: {
    addUser() {
      this.users.push({
        firstName: 'add John',
        lastName: 'doe!',
        isMember: true,
      })
    }
  }
}
</script>

<template>
  <div class="vbind">
    <h1 v-bind:title="message" v-bind:class="{ green: isGreen }">{{ title }}</h1>
    <h2 :class="textStatus"> {{ colorTestText }}</h2>
  </div>
  <div class="computed">
    <h2>-- computed --</h2>
    <h3>{{ fullName }}さんのデータ</h3>
    <p>Name: {{ fullName }}</p>
  </div>
  <div class="vfor">
    <h2>-- v-for --</h2>
    <div v-for="user in users" :key="user">
      <p>Name: {{ user.firstName + ' ' + user.lastName }}</p>
      <p v-if="user.isMember">メンバーです</p>
      <p v-else>status: メンバーではありません</p>
    </div>
  </div>
  <button class="vonButton" v-on:click="addUser">addUser!!</button>
</template>

<style>
.green {
  color: green;
}
.vbind {
  border: 2mm ridge green;
  margin-bottom: 10px;
}
.vbind > h1 {
  font-size: 2.5rem;
  margin: 0 5px;
}
.computed {
  border: 2mm ridge greenyellow;
  margin-bottom: 10px;
}
.vfor {
  border: 2mm ridge green
}
.vonButton {
  margin-top: 10px;
  color: #fff;
  background-color: #eb6100;
  border-radius: 100vh;
}
.vonButton:hover {
  color: #fff;
  background: #f56500;
}
</style>
