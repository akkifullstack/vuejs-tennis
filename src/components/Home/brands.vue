<template>
  <ul class="brandsul">
    <h3>Bekannt aus</h3>
    <li class="sportschau">
      sportschau
    </li>
    <li>
      puls
    </li>
    <li>
      bild
    </li>
    <li>
      SüddeutscheZeitung
    </li>
    <li>
      jolie
    </li>
    <li>
      Eurosport
    </li>
    <li>
      tennis
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Brands',
};
</script>
<style scoped>
.brandsul {
  padding: 2rem;
  text-align: center;
}
.brandsul h3 {
  padding-bottom: 1rem;
  width: 100%;
  font-family: ProximaNova;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #1a1d26;
}
.brandsul li {
  display: inline;
  padding: 2rem;
  font-size: 28px;
  color: black;
  font-weight: 900;
  font-family: ProximaNova;
  text-transform: capitalize;
}
</style>
