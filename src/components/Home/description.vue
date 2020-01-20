<template>
  <div class="description_rectangle">
    <p class="Einfach-Tennis-We-m">
      Einfach Tennis.<br />
      We make you play.
    </p>
    <p class="Finde-neue-Spielpart">
      Finde neue Spielpartner in deiner Nähe, entdecke unsere Tennis-Events und
      sammle Matchpraxis in unserer Freizeitliga. Egal ob Anfänger oder
      Fast-Profi, wir haben für alle Spielstärken das richtige Angebot und
      bringen dich wieder auf den Court. Wann Du willst, wo du willst.
    </p>
  </div>
</template>
<script>
export default {
  name: 'Description',
};
</script>
<style scoped>
.description_rectangle {
  width: 100%;
  height: 400px;
  background-color: #f1f0f3;
  padding: 6rem;
  margin: 0 auto;
}
.Einfach-Tennis-We-m {
  width: 550px;
  height: 90px;
  font-family: ProximaNova;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  margin: 0 auto;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #1c202b;
  margin-bottom: 2rem;
}
.Finde-neue-Spielpart {
  width: 600px;
  height: 140px;
  font-family: ProximaNova;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  margin: 0 auto;
  line-height: 1.56;
  letter-spacing: 0.35px;
  text-align: center;
  color: #545454;
}
</style>
