<script>
import MyButton from '@/components/elements/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue'

export default {
  data () {
    return {
      recipes: []
    }
  },

  async mounted () {
    await this.getArticles()
  },

  methods: {
    async getArticles () {
      const response = await fetch('http://localhost:3000')
      return response.json()
    }
  }
}
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
