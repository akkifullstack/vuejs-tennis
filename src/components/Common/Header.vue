<template>
  <div class="header__section">
    <div class="text-section">
      <h2 class="Play-with-us">
        <span class="text-style-1">Play</span>&nbsp;with us!
        <h3 class="Deine-Tennis-Communi">
          Deine Tennis-Community mit aktuell
          <span class="text-style-1">XYZ Spielern</span> Spielern in allen
          Spielstärken.
        </h3>
      </h2>
      <div class="Oval" align="right">
        <p class="Begriffe-rotierend">Begriffe rotierend</p>
        <p class="DIFFERENT-CREATIVE-C">
          DIFFERENT CREATIVE COLORFUL STRONG ANY TIME FOR FUN EVERYWHERE
          TOGETHER THE WORLD WITH US
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header__section {
  background-image: url('http://cdn.tennis.com/uploads/wysiwyg/2019/06/28/568738ea474844c098bae5b6ee1965d2.jpg');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5rem;
}
.Oval {
  position: absolute;
  width: 226px;
  height: 226px;
  border-radius: 50%;
  border: solid 2px #ff0000;
  background-color: #ffffff;
  text-align: center;
  left: 78%;
  top: 19%;
}
.Begriffe-rotierend {
  width: 96.5px;
  height: 15px;
  font-family: ProximaNova;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ec0042;
  padding-top: 2rem;
  margin: 0 auto;
}
.DIFFERENT-CREATIVE-C {
  width: 77px;
  height: 150px;
  font-family: ProximaNova;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ec0042;
  padding-top: 1.5rem;
  margin: 0 auto;
}
.Play-with-us {
  width: 600px;
  position: relative;
  font-family: ProximaNova;
  font-size: 55px;
  padding-top: 7rem;
  left: 80%;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #edff00;
  margin: 0 auto;
}
.Play-with-us .text-style-1 {
  color: #ffffff;
}

.Deine-Tennis-Communi {
  width: 600px;
  font-family: ProximaNova;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  padding-top: 1rem;
}
.Deine-Tennis-Communi .text-style-1 {
  color: #edff00;
}
.Rectangle {
  width: 12.5px;
  height: 21.5px;
  border-radius: 9px;
  border: solid 1.5px #ffffff;
}

.text-section {
  display: inline-block;
}
</style>
