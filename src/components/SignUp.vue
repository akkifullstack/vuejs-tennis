<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <h2 class="Melde-dich-kostenlos">
          Melde dich kostenlos an und entdecke alle Vorteile von World Club
          Tennis
        </h2>
        <div class="Rectangle-Copy-7">
          <div class="Registriere-dich-mit">
            Registriere dich mit <span class="text-style-1">Facebook</span> oder
            <span class="text-style-1">Google</span>
          </div>
          <div class="oder"><span>&nbsp;oder&nbsp;</span></div>
          <div align="center">
            <v-text-field
              class="input"
              name="email"
              v-model="email"
              placeholder="E-mail Adresse"
              @change="onChange"
            ></v-text-field>
            <v-text-field
              class="input"
              name="firstname"
              v-model="firstname"
              placeholder="Name"
              @change="onChange"
            ></v-text-field>
            <v-text-field
              class="input"
              name="lastname"
              v-model="lastname"
              placeholder="Nachname"
              @change="onChange"
            ></v-text-field>
            <v-text-field
              class="input"
              placeholder="Passwort"
              v-model="password"
              :type="'password'"
              name="password"
              @change="onChange"
            ></v-text-field>
          </div>
          <div>
            <v-col cols="12" sm="12" md="12">
              <v-radio-group v-model="terms" :mandatory="false">
                <v-radio value="radio-2"></v-radio>
                <span class="radio-text">
                  Indem du auf,Registrieren“ klickst, stimmst du unseren
                  Nutzungsbedingungen zu. In unserer Datenrichtlinie erfährst
                  du, wie wir deine Daten erfassen, verwenden und teilen. Unsere
                  Cookie-Richtlinie erklärt, wie wir Cookies und ähnliche
                  Technologien verwenden. Facebook schickt dir eventuell
                  Benachrichtigungen per SMS, die du jederzeit abbestellen
                  kannst.
                </span>
              </v-radio-group>
            </v-col>
          </div>
          <div align="center" class="registration-button">
            <button v-on:click="onSubmit">
              Jetzt registrieren
            </button>
          </div>
          <div class="Du-hast-schon-einen">
            Du hast schon einen Account?
            <span class="text-style-2">Log In</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <div class="Oval-Copy-2"><p class="circel-text">Kürzen Bitte</p></div>
        <h3 class="Nach-deiner-Registri">
          Nach deiner Registrierung kannst du kostenlos:
        </h3>
        <ul class="points-list">
          <li class="Ein-individuelles-Sp">
            Ein individuelles Spielerprofil anlegen
          </li>
          <li class="Ein-individuelles-Sp">
            Tennispartner aus über 4000 Mitspielern finden
          </li>
          <li class="Ein-individuelles-Sp">Eigene Tennis Dates erstellen</li>
          <li class="Ein-individuelles-Sp">
            Dich zu unseren Tennisevents anmelden*
          </li>
          <li class="Ein-individuelles-Sp">
            Alle Informationen zur Liga erhalten
          </li>
          <li class="Ein-individuelles-Sp">
            Neue Tennisplätze in deiner Nähe entdecken
          </li>
          <li class="Ein-individuelles-Sp">
            News zu unseren Urban Tennis Stories verfolgen
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      terms: ""
    };
  },
  methods: {
    onChange() {},
    onSubmit() {
      let params = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        country: "DE",
        agb: true
      };
      this.$store.dispatch("SignUpAction", params);
    }
  }
};
</script>
<style scoped>
.Oval-Copy-3 {
  width: 100%;
  height: 256.7px;
  border: solid 5px #ebff00;
}
.points-list {
  margin: 4rem 1rem;
  list-style: none;
}
.Ein-individuelles-Sp {
  width: 100%;
  height: 14px;
  font-family: ProximaNova;
  font-size: 18px;
  padding-bottom: 3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #aaa8ab;
}
.points-list li:before {
  content: "✓ ";
  color: black;
  font-size: 30px;
}
.Nach-deiner-Registri {
  width: 100%;
  height: 30px;
  font-family: ProximaNova;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #141414;
  padding: 0 2rem;
}
.Oval-Copy-2 {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: solid 0.5px #979797;
  background-color: #ff0000;
  position: relative;
  margin-bottom: 1rem;
}
.circel-text {
  position: absolute;
  top: 42%;
  left: 20%;
}
.Melde-dich-kostenlos {
  width: auto;
  font-family: ProximaNova;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #121212;
}
.Rectangle-Copy-7 {
  width: 100%;
  margin: 1rem;
  height: auto;
  border-radius: 2px;
  background-color: #f5f5f5;
}
.Registriere-dich-mit {
  width: 100%;
  height: 14px;
  font-family: ProximaNova;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #8b898c;
  padding: 20px 32.5px 33px;
}
.Registriere-dich-mit .text-style-1 {
  color: #1a1d26;
}
.oder {
  width: 100%;
  height: 14px;
  font-family: ProximaNova;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #8b898c;
  margin-bottom: 40px;
}
.oder span:before,
.oder span:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 40%;
}

.input {
  width: 90%;
  height: 46px;
  border-radius: 2px;
  border: solid 0.5px #c6c9cd;
  background-color: #ffffff;
  margin-bottom: 1.5rem;
}
.input ::placeholder {
  padding-left: 1rem;
}
label.v-label.theme--light {
  font-size: 0.1rem;
}
.radio-text {
  font-size: 0.6rem;
}
.registration-button button {
  background-color: #1a1d26;
  padding: 0.8rem 5rem;
  border-radius: 30px;
  color: #fff;
  margin-bottom: 2rem;
}
.Du-hast-schon-einen {
  width: 100%;
  font-family: ProximaNova;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #8b898c;
  padding-bottom: 1rem;
}
.Du-hast-schon-einen .text-style-2 {
  color: #1a1d26;
}
</style>
