<template>
  <div>
    <v-row>
      <v-col class="service__col">
        <div class="Rectangle-Copy">
          <p class="Lerne-neue-Leute-ken">
            Lerne neue Leute kennen
          </p>
        </div>
        <div class="Rectangle-Copy-2">hello</div>
      </v-col>
      <v-col class="service__col">
        <div class="mario-gogh-1140489-unsplash">
          <button class="button" v-on:click="openModal('registration')">
            <span class="Starte-jetzt-kostenl">Starte jetzt kostenlos</span>
          </button>
        </div>
      </v-col>
      <v-col class="service__col">
        <div>
          <v-row class="hill__row">
            <v-col class="hill"></v-col>
            <v-col class="hill__row_two"
              ><span class="Spiele-berall">Spiele überall</span></v-col
            >
          </v-row>
        </div>
        <div class="Rectangle-Copy-4">
          <span class="Spiele-dein-Spiel">Spiele dein Spiel</span>
        </div>
      </v-col>
    </v-row>
    <div>
      <v-row class="service">
        <v-col>
          <v-row class="service__text">
            <v-col :cols="3"><v-icon x-large>calendar_today</v-icon></v-col>
            <v-col :cols="9"
              ><p class="Jederzeit-und-beral">Jederzeit und überall</p>
              <p class="Erreiche-tausende-Mi">
                Erreiche tausende Mitspieler und entscheide selbst wann und wo
                Du dich verabredest.
              </p></v-col
            >
          </v-row>
        </v-col>
        <v-col
          ><v-row class="service__text">
            <v-col :cols="3"><v-icon x-large>calendar_today</v-icon></v-col>
            <v-col :cols="9"
              ><p class="Jederzeit-und-beral">Einfach und unkompliziert</p>
              <p class="Erreiche-tausende-Mi">
                Offline, online, longline. Verabreden, spielen und Spaß haben
                mit nur wenigen Klicks.
              </p></v-col
            >
          </v-row></v-col
        >
        <v-col
          ><v-row class="service__text">
            <v-col :cols="3"><v-icon x-large>calendar_today</v-icon></v-col>
            <v-col :cols="9"
              ><p class="Jederzeit-und-beral">Spiele auf deine Weise</p>
              <p class="Erreiche-tausende-Mi">
                Der beste Spieler ist der, der am meisten Spaß hat. Lieber nett
                als Profi!
              </p></v-col
            >
          </v-row></v-col
        >
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>
.service {
  width: 100%;
  height: 235px;
  background-color: #f1f0f3;
  margin: 0;
}
.hill {
  background: url('https://video-images.vice.com/articles/5ba124469194870006bcbf4c/lede/1537288790485-Coolest-Tennis-Courts-8.jpeg?crop=1xw%3A0.7613158899923606xh%3Bcenter%2Ccenter&resize=2000%3A*');
  background-repeat: no-repeat;
  background-size: cover;
  width: 200px;
  height: 200px;
}
.hill__row_two {
  width: 200px;
  height: 200px;
  background: black;
}
.hill__row {
  margin: 0;
}
.mb-6 {
  padding: 0;
}
.service__col {
  padding: 0px;
}
.Rectangle-Copy {
  width: 100%;
  height: 201px;
  background-color: #00726d;
  text-align: center;
}
.Rectangle-Copy-2 {
  width: 100%;
  height: 201px;
  background-color: #00726d;
  text-align: center;
  background: url('https://si.wsj.net/public/resources/images/BN-UD078_38j2e_OR_20170704145241.jpg?width=620&height=412');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5rem;
}
.mario-gogh-1140489-unsplash {
  width: 500px;
  height: 402px;
  background: url('https://images.squarespace-cdn.com/content/v1/5c7d465116b64037430a217b/1551729745393-D485J6OHF1VCL5CXKI26/ke17ZwdGBToddI8pDm48kKO-Cre8kIZFq7aJpmi9oOF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jRb3i7UjwNNySrgFE_nWatzPuEnoHlFMCeMzh-4QMIHbMlpjVHceXy-A_3_g4kIwg/AdobeStock_78017245.jpeg?format=2500w');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding-top: 10rem;
}
.Lerne-neue-Leute-ken {
  padding: 3rem;
  text-align: left;
  width: 333px;
  height: 94px;
  font-family: ProximaNova;
  font-size: 34px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #ffffff;
}
.button {
  padding: 1rem 4rem;
  border-radius: 30px;
  background-color: #ebff00;
  font-weight: 800;
}
.Starte-jetzt-kostenl {
  width: 115px;
  height: 12px;
  font-family: ProximaNova;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #1e2332;
}
.Spiele-berall {
  width: 150px;
  height: 32px;
  font-family: ProximaNova;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #ffffff;
}
.Rectangle-Copy-4 {
  width: 100%;
  height: 202px;
  background-color: #de0933;
  padding: 2rem;
}
.Spiele-dein-Spiel {
  width: 208px;
  height: 124.5px;
  font-family: ProximaNova;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;

  letter-spacing: normal;
  color: #ffffff;
}
.Jederzeit-und-beral {
  width: 100%;
  height: 22px;
  font-family: ProximaNova;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #1a1d26;
}
.Erreiche-tausende-Mi {
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
.service__text {
  padding-top: 3rem;
  padding-left: 2rem;
}
</style>
