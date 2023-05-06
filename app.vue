<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Aliens Among Us by Rameez - Intergalactic Fashion Campaign",
  meta: [
    {
      name: "description",
      content:
        "Aliens Among Us is an AI generated concept fashion campaign featuring Louis Vuitton's luxury handbag collection by Rameez Iqbal. Featured in designboom.",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
});
</script>
