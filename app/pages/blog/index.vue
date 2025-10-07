<template>
  <section class="min-h-screen bg-gradient-to-br from-white to-pink-50/30 py-8 md:py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête de la page -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Notre <span class="text-pink-600">Blog</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Découvrez nos articles de sensibilisation, conseils pratiques sur la prévention du cancer du sein en Afrique. 
          Ensemble, brisons les tabus grâce à la connaissance.
        </p>
      </div>

      <!-- Filtres par catégorie -->
      <div class="flex flex-wrap gap-3 justify-center mb-12">
        <button 
          @click="setActiveCategory('all')"
          class="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2"
          :class="activeCategory === 'all' 
            ? 'bg-pink-600 text-white border-pink-600 shadow-lg' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300 hover:shadow-md'"
        >
          Tous les articles
        </button>
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="setActiveCategory(category.id)"
          class="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2"
          :class="activeCategory === category.id 
            ? 'bg-pink-600 text-white border-pink-600 shadow-lg' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300 hover:shadow-md'"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Section des articles -->
      <div v-if="!loading && articles && articles.articles" class="space-y-6">
        
        <!-- Articles de la catégorie active -->
        <div v-for="(article, index) in filteredArticles" :key="index" 
             class="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group article-card">
          
          <div class="p-6 md:p-8">
            <!-- En-tête de l'article -->
            <div class="flex items-center gap-4 mb-4">
              <span class="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
                {{ getCategoryName(article.category) }}
              </span>
              <span class="text-gray-500 text-sm">{{ formatDate(article.published_at) }}</span>
            </div>

            <!-- Titre et description -->
            <div class="mb-6">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                {{ article.title }}
              </h2>
              <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {{ article.meta_description }}
              </p>
            </div>

            <!-- Actions -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex items-center gap-4 text-sm text-gray-500">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ article.reading_time || '5' }} min de lecture
                </span>
              </div>
              <NuxtLink 
                v-if="article.slug"
                :to="`/blog/${article.slug}`"
                class="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 group-hover:gap-3"
              >
                <span>Lire l'article</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </NuxtLink>
              <span v-else class="text-gray-400 text-sm">Article en préparation</span>
            </div>
          </div>
        </div>

        <!-- Message si aucun article dans la catégorie -->
        <div v-if="filteredArticles.length === 0" class="text-center py-12">
          <div class="bg-white rounded-2xl p-8 border border-gray-200">
            <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <h3 class="text-xl font-semibold text-gray-600 mb-2">Aucun article disponible</h3>
            <p class="text-gray-500">Aucun article n'est disponible dans cette catégorie pour le moment.</p>
          </div>
        </div>

      </div>

      <!-- État de chargement optimisé -->
      <div v-else-if="loading" class="space-y-6">
        <div v-for="n in 4" :key="n" class="bg-white rounded-2xl p-6 border border-gray-200">
          <div class="animate-pulse space-y-4">
            <div class="flex gap-4">
              <div class="h-6 bg-gray-200 rounded w-1/4"></div>
              <div class="h-6 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div class="h-6 bg-gray-200 rounded w-3/4"></div>
            <div class="h-4 bg-gray-200 rounded w-full"></div>
            <div class="h-4 bg-gray-200 rounded w-4/5"></div>
            <div class="flex justify-between pt-4">
              <div class="h-4 bg-gray-200 rounded w-1/4"></div>
              <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Erreur de chargement -->
      <div v-else class="text-center py-12">
        <div class="bg-white rounded-2xl p-8 border border-gray-200">
          <svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
          </svg>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">Erreur de chargement</h3>
          <p class="text-gray-500 mb-4">Impossible de charger les articles pour le moment.</p>
          <button 
            @click="loadArticles"
            class="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Réessayer
          </button>
        </div>
      </div>

       <!-- Section d'information finale -->
      <div class="bg-gradient-to-r from-pink-50 to-rose-100 rounded-2xl p-8 md:p-12 text-center mt-16 border border-pink-200">
        <div class="max-w-2xl mx-auto">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            La connaissance brise les préjugés
          </h3>
          <p class="text-gray-700 text-lg mb-6 leading-relaxed">
            Chaque information partagée contribue à déconstruire les mythes et à encourager 
            le dépistage précoce du cancer du sein en Afrique.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink 
              to="/prevention"
              class="bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300"
            >
              Découvrir la prévention
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// États
const loading = ref(true)
const articles = ref(null)
const error = ref(null)

// Catégories disponibles
const categories = [
  { id: 'diagnostic', name: 'Diagnostic' },
  { id: 'risque', name: 'Risque' },
  { id: 'traitement', name: 'Traitement' }
]

// État de la catégorie active
const activeCategory = ref('all')

// Chargement optimisé des articles
const loadArticles = async () => {
  loading.value = true
  error.value = null
  
  try {
    const { data } = await useFetch('/data/blogArticles.json', {
      timeout: 10000, // Timeout de 10 secondes
      retry: 1 // Une seule tentative de rechargement
    })
    
    articles.value = data.value
  } catch (err) {
    error.value = err
    console.error('Erreur lors du chargement des articles:', err)
  } finally {
    loading.value = false
  }
}

// Filtrer les articles par catégorie
const filteredArticles = computed(() => {
  if (!articles.value?.articles) return []
  
  if (activeCategory.value === 'all') {
    return articles.value.articles
  }
  
  return articles.value.articles.filter(article => article.category === activeCategory.value)
})

// Méthodes
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
}

const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category ? category.name : 'Non catégorisé'
}

const formatDate = (dateString) => {
  if (!dateString) return 'Date non spécifiée'
  
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Chargement initial
onMounted(() => {
  loadArticles()
})
</script>

<style scoped>
/* Largeur réduite sur desktop */
@media (min-width: 1024px) {
  .max-w-4xl {
    max-width: 56rem !important;
  }
}

/* Animations personnalisées */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.article-card {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Délais d'animation pour effet cascade */
.article-card:nth-child(1) { animation-delay: 0.1s; }
.article-card:nth-child(2) { animation-delay: 0.2s; }
.article-card:nth-child(3) { animation-delay: 0.3s; }
.article-card:nth-child(4) { animation-delay: 0.4s; }

/* Limiter le texte à 3 lignes */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Amélioration de la lisibilité */
.leading-relaxed {
  line-height: 1.6;
}

/* Support pour les navigateurs plus anciens */
@supports not (backdrop-filter: blur(10px)) {
  .backdrop-blur {
    background: rgba(255, 255, 255, 0.9);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
}
</style>