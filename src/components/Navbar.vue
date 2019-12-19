<template>
  <div class="nav">
    <a class="World-Club-Tennis">World Club Tennis</a>
    <ul class="menu-list">
      <li><a href="#">Angebot</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Über WCT</a></li>
      <li class="button">
        <button v-on:click="openModal('registration')">
          Registrieren / Login
        </button>
      </li>
    </ul>
    <Modal v-bind:dialog="dialog" v-bind:type="type" />
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "Navbar",
  data() {
    return {
      dialog: false,
      type: ""
    };
  },
  components: {
    Modal
  },
  methods: {
    openModal(e) {
      this.dialog = true;
      this.type = e;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 100%;
  height: 74px;
  background-color: #ffffff;
}
.Fill-1 {
  width: 20px;
  height: 14px;
  background-color: #1a1d26;
}
.World-Club-Tennis {
  width: 101.5px;
  height: 23px;
  font-family: ProximaNova;
  font-size: 23.5px;
  padding-left: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.9;
  letter-spacing: normal;
  color: #1a1d26;
}
.menu-list {
  float: right;
  padding-right: 2rem;
  padding-top: 0.5rem;
}
.menu-list li {
  display: inline-block;

  padding-right: 3rem;
  font-family: ProximaNova;
  font-size: 17px;
  /* line-height: 12px; */
}
.menu-list li a {
  text-decoration: none;
  color: black;
}
.menu-list li a:hover {
  text-decoration: none;
  border-bottom: 1.5px solid;
  margin-bottom: 25px;
}

.button {
  padding: 1rem 4rem;
  border-radius: 30px;
  background-color: #ebff00;
  font-weight: 800;
}
</style>
