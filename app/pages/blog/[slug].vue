<template>
  <section class="min-h-screen bg-gradient-to-br from-white to-pink-50/30 py-8 md:py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Fil d'Ariane -->
      <nav class="mb-8">
        <ol class="flex items-center gap-2 text-sm text-gray-600">
          <li class="flex items-center gap-2">
            <NuxtLink to="/blog" class="hover:text-pink-600 transition-colors duration-200">Blog</NuxtLink>
          </li>
          <li class="flex items-center gap-2">
            <span class="text-gray-400">/</span>
            <span class="text-pink-600 font-medium">{{ article.title }}</span>
          </li>
        </ol>
      </nav>

      <!-- En-tête de l'article -->
      <header class="text-center mb-12">
        
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {{ article.title }}
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {{ article.meta_description }}
        </p>
        
        <!-- Métadonnées -->
        <div class="flex flex-wrap gap-4 justify-center items-center mt-8 text-sm text-gray-500">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {{ article.reading_time || '5' }} min de lecture
          </span>
        </div>
      </header>

      <!-- Contenu de l'article -->
      <article class="prose prose-lg max-w-none">
        
        <!-- Introduction -->
        <div class="bg-blue-50 rounded-2xl p-6 md:p-8 mb-8 border border-blue-200">
          <h3 class="text-blue-800 text-sm font-semibold uppercase tracking-wide mb-3">À retenir</h3>
          <p class="text-blue-900 text-lg leading-relaxed font-medium">
            {{ article.structure.introduction }}
          </p>
        </div>

        <!-- Section H1 -->
        <section class="mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-pink-600">
            {{ article.structure.H1 }}
          </h2>
          <div class="text-gray-700 leading-relaxed text-lg space-y-4">
            <p>{{ article.structure.content_H1 }}</p>
          </div>
        </section>

        <!-- Section H2 -->
        <section class="mb-8">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {{ article.structure.H2 }}
          </h2>
          <div class="text-gray-700 leading-relaxed text-lg space-y-4">
            <p>{{ article.structure.content_H2 }}</p>
          </div>
        </section>

        <!-- Conclusion -->
        <section class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 mt-12 border border-pink-200">
          <h3 class="text-pink-800 text-sm font-semibold uppercase tracking-wide mb-3">Impotants !</h3>
          <p class="text-pink-900 text-lg leading-relaxed font-medium">
            {{ article.structure.conclusion }}
          </p>
        </section>

      </article>

      <!-- Mots-clés -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex flex-wrap gap-2">
          <span class="text-sm text-gray-600 font-medium">Mots-clés :</span>
          <span 
            v-for="keyword in article.keywords" 
            :key="keyword"
            class="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
          >
            #{{ keyword }}
          </span>
        </div>
      </div>

      <!-- Navigation entre articles -->
      <div class="mt-16 pt-8 border-t border-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink 
            to="/blog" 
            class="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-colors duration-200 group"
          >
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span>Retour au blog</span>
          </NuxtLink>
          <NuxtLink 
            v-if="nextArticle"
            :to="`/blog/${nextArticle.slug}`"
            class="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-colors duration-200 group md:justify-end"
          >
            <span>Article suivant</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
          <div v-else class="md:text-right text-gray-500">
            <span>Dernier article</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Récupérer le slug depuis l'URL
const route = useRoute()
const slug = route.params.slug

// Charger l'article depuis l'API ou le JSON
const { data: articles } = await useFetch('/data/blogArticles.json')

// Trouver l'article correspondant au slug
const article = computed(() => {
  if (!articles.value?.articles) return null
  return articles.value.articles.find(a => a.slug === slug)
})

// Trouver le prochain article
const nextArticle = computed(() => {
  if (!articles.value?.articles) return null
  
  const currentIndex = articles.value.articles.findIndex(a => a.slug === slug)
  if (currentIndex === -1 || currentIndex === articles.value.articles.length - 1) {
    return null
  }
  
  return articles.value.articles[currentIndex + 1]
})

// Si l'article n'existe pas, rediriger vers la 404
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article non trouvé' })
}

// Métadonnées SEO
useSeoMeta({
  title: article.value.title,
  description: article.value.meta_description,
  ogTitle: article.value.title,
  ogDescription: article.value.meta_description,
  ogImage: '/images/blog-cover.jpg',
  twitterCard: 'summary_large_image'
})

// Méthodes utilitaires
const formatDate = (dateString) => {
  if (!dateString) return 'Date non spécifiée'
  
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Styles personnalisés pour la typographie */
.prose {
  color: #374151;
}

.prose h2 {
  color: #111827;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.prose p {
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

/* Animation d'apparition */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

article > * {
  animation: fadeInUp 0.6s ease-out forwards;
}

article > *:nth-child(1) { animation-delay: 0.1s; }
article > *:nth-child(2) { animation-delay: 0.2s; }
article > *:nth-child(3) { animation-delay: 0.3s; }
article > *:nth-child(4) { animation-delay: 0.4s; }
article > *:nth-child(5) { animation-delay: 0.5s; }

/* Responsive */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.25rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
}
</style>