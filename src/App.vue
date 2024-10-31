<template>
  <section class="Section">
    <div ref="three"></div>
    <h1 class="firsttitle">Acker'Prod</h1>
    <h1 class="secondtitle">Acker'Prod</h1>
    <h1 class="thirdtitle">Acker'Prod</h1>
    <h1 class="fourthtitle">Acker'Prod</h1>
    <div class="Presentation">
      <h3>
        Qui <br />
        suis-je ?
      </h3>
      <p>
        Développeur front-end JavaScript/TypeScript, je crée surtout des
        applications avec Vue.js et Nuxt. Depuis quelque temps, la 3D m'intrigue
        fortement, je me lance donc dans l'apprentissage et la création de
        petites expériences et jeux sympas avec Three.js. J’ai aussi envie
        d’explorer des technos immersives comme la réalité virtuelle et
        augmentée pour enrichir l'expérience utilisateur.
      </p>
    </div>
    <div class="PresentationProject">
      <h3>
        Mes <br />
        projets
      </h3>
      <p>
        Une petite liste de mes projets developpés. Au fur et à mesure du temps
        seront listés ici les projets de jeux, petites démos et tests technique
        témoins de mon apprentissage.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Logic } from "./three/logic";

const three = ref();

onMounted(() => {
  const logic = new Logic(three.value);
});
</script>

<style scoped>
.Section {
  height: 500vh;
  width: 100vw;
}

div {
  height: 100vh;
  position: sticky;
  top: 0;
}

h1 {
  font-size: 5em;
  font-family: "Mewatonia";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 0.8em;
  margin: 0;
  z-index: -1;
}

h3 {
  font-family: "Mewatonia";
  font-size: 5em;
  line-height: 0.7em;
  margin: 0 0 0.5em 0;
  color: rgb(255, 145, 0);
}

p {
  font-size: 1.5em;
  font-family: "Archivo";
  font-weight: 700;
  color: rgb(83, 13, 13);
}

.firsttitle {
  color: rgb(41, 10, 10);
  top: 100px;
}
.secondtitle {
  top: 175px;
  color: rgb(102, 17, 17);
}
.thirdtitle {
  color: rgb(255, 145, 0);
  top: 250px;
}
.fourthtitle {
  color: rgb(170, 26, 26);
  top: 325px;
}


.Presentation {
  z-index: -1;
  position: absolute;
  top: 1250px;
  padding: 0 30px;
}

.PresentationProject {
  z-index: -1;
  position: absolute;
  top: 2250px;
  padding: 0 30px;
  text-align: right;
}

@media (min-width: 900px) {
  h1 {
    font-size: 12em;
    line-height: 0.8em;
  }

  h3 {
    font-size: 10em;
    line-height: 0.7em;
  }

  p {
    font-size: 2em;
  }

  .firsttitle {
    top: 50px;
  }
  .secondtitle {
    top: 200px;
  }
  .thirdtitle {
    top: 350px;
  }
  .fourthtitle {
    top: 500px;
  }

  .Presentation {
    z-index: -1;
    position: absolute;
    top: 1250px;
    max-width: 40%;
    left: 50px;
  }

  .PresentationProject {
    z-index: -1;
    position: absolute;
    top: 2250px;
    max-width: 40%;
    right: 50px;
  }
}
</style>
