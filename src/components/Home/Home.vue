<template>
  <div>
    <Nav />
    <Header />
    <Brands />
    <Description />
    <Services />
    <Generation />
    <Blogs />
  </div>
</template>

<script>
import Nav from '../Navbar';
import Header from '../Common/Header';
import Brands from './brands';
import Description from './description';
import Services from './services';
import Generation from './generation';
import Blogs from './blogCards';
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  components: {
    Nav,
    Header,
    Brands,
    Description,
    Services,
    Generation,
    Blogs,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
