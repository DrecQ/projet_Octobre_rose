<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
    <NuxtPage />
    </NuxtLayout>
    
  </div>
</template>

<script setup>

const appConfig = useAppConfig();

// Utilisation de appConfig pour accéder aux configurations globales
useSeoMeta({
  title: appConfig.titlte,
  description: appConfig.description,
  ogImage: appConfig.image
});

</script>
