<template>
  <v-container class="generation__container">
    <h2 class="Tennis-fr-eine-neue">Tennis für eine neue Generation</h2>
    <v-row>
      <v-col :cols="4">
        <div>
          <p class="Dates-vereinbaren">Dates vereinbaren</p>
          <p class="Poste-kostenfrei-dei">
            Poste kostenfrei deinen Spielwunsch und wir informieren alle
            passenden Spielpartner.
          </p>
        </div>
        <div>
          <p class="Dates-vereinbaren">Events besuchen</p>
          <p class="Poste-kostenfrei-dei">
            Spiele mit bei unseren wöchentlichen Tennis-Events oder an
            ungewöhnlichen Orten.
          </p>
        </div>
        <div>
          <p class="Dates-vereinbaren">Freizeitliga spielen</p>
          <p class="Poste-kostenfrei-dei">
            Spiele mit in unserer Freizeit-Liga oder lege einfach Deine eigene
            Liga an!
          </p>
        </div>
        <div>
          <p class="Dates-vereinbaren">Tennisplätze entdecken</p>
          <p class="Poste-kostenfrei-dei">
            Finde alle relevanten Infos zu Tennisanlagen und Vereinen
          </p>
        </div>
      </v-col>
      <v-col :cols="8" class="generation__schedule"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Generation',
};
</script>

<style scoped>
.generation__schedule {
  background: url('https://help.syncfusion.com/xamarin/scheduler/gettingstarted_images/xamarin.forms.-schedule-over-view.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.Poste-kostenfrei-dei {
  width: 270px;
  height: 36px;
  font-family: ProximaNova;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.37px;
  color: #545454;
}
.Dates-vereinbaren {
  width: 100%;
  height: 36px;
  font-family: ProximaNova;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  color: #1a1d26;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.Tennis-fr-eine-neue {
  width: 100%;
  height: 40px;
  font-family: ProximaNova;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #1a1d26;
  margin: 3rem;
}
</style>
