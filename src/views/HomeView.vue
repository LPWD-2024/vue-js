<script setup>
import MyButton from '@/components/elements/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue'
import {computed, onMounted, ref} from "vue"
import axios from 'axios'


// Modifier les deux fonctions pour executer 2 requêtes dans chacune, l'une après l'autre.
// Récupérer toutes les recettes
// Récupérer toutes les recettes de la cuisine 1 -> /recipes/cuisine/:cuisineId

const getRecipesThen = () => {
  // 1er appel
  fetch(import.meta.env.VITE_API_URL + '/recipes')
    .then(response => response.json())
    .then((recipes) => {
      // Puis le 2ème lorsque le 1er est terminé
      fetch(import.meta.env.VITE_API_URL + '/recipes/cuisine/1')
        .then(response => response.json())
        .then(cuisineRecipies => console.log({ recipes, cuisineRecipies }))
    })
}

// Client axios global
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const recipes = ref([])

const getRecipes = async () => {
  const response = await client.get('/recipes')
  return response.data
}


// Retourner une liste des noms des recettes en utilisant recipes.map
// Retourner un tableau des recettes dont le titre contient « Spaghetti » en utilisant recipes.filter
// Retourner un boolean qui dit si une de vos recettes est du goal_id 1 en utilisant recipes.some

const recipesNames = computed(() => {
  //
})

const spaghettiRecipes = computed(() => {
  //
})

const hasGoalId1 = computed(() => {
//
})


onMounted(async () => {
  recipes.value = await getRecipes()
})
</script>

<template>
  <DefaultLayout>
    <template #header>
      <nav>
        <ul>
          <li><a href="#">Nav link 1</a></li>
          <li><a href="#">Nav link 2</a></li>
          <li><a href="#">Nav link 3</a></li>
        </ul>
      </nav>
    </template>

    <template #aside>
      <img style='max-width: 100px;' src='@/assets/image-1.png' />
      <nav>
        <ul>
          <li><a href="#">Aside link 1</a></li>
          <li><a href="#">Aside link 2</a></li>
          <li><a href="#">Aside link 3</a></li>
        </ul>
      </nav>
    </template>
    {{ recipes }}
    <MyBackgroundScroll />

    <template #footer>
      <MyButton href="/about" variant="rounded">My link Button</MyButton>
    </template>
  </DefaultLayout>

  <!-- <MyButton size="small" href="/about">My Small Button</MyButton>
  <MyButton href="/about">My link Button</MyButton>
  <MyButton variant="rounded" >My rounded Button</MyButton> -->
  <p></p>
</template>
