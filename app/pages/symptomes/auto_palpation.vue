<template>
  <section class="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête très minimaliste -->
      <div class="text-center mb-6">
        <h1 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Guide d'auto-examen
        </h1>
        <p class="text-gray-500 text-sm">
          Surveillez votre santé mammaire
        </p>
      </div>

      <!-- Contrôles simplifiés -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 p-3 bg-white rounded-lg border border-gray-200">
        <div class="flex items-center gap-3 text-xs text-gray-500">
          <div class="flex items-center gap-1">
            <svg class="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span>Sécurisé</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Mode plein écran -->
          <button 
            @click="toggleFullscreen"
            class="flex items-center gap-1 px-3 py-1.5 text-gray-500 hover:text-gray-700 transition-colors duration-200 text-xs border border-gray-300 rounded-md"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isFullscreen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            {{ isFullscreen ? 'Quitter' : 'Plein écran' }}
          </button>

          <!-- Téléchargement -->
          <a 
            href="/data/lauto_palpation.pdf" 
            download
            class="flex items-center gap-1 bg-pink-600 text-white px-3 py-1.5 rounded-md hover:bg-pink-700 transition-all duration-300 text-xs font-medium"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            PDF
          </a>
        </div>
      </div>

      <!-- Zone de lecture principale -->
      <div class="relative bg-white rounded-lg border border-gray-200 overflow-hidden mb-8" :class="{'fixed inset-0 z-50 rounded-none': isFullscreen}">
        
        <!-- En-tête du lecteur (seulement en mode plein écran) -->
        <div v-if="isFullscreen" class="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 p-3 z-10">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-semibold text-gray-900">Guide d'auto-examen</h2>
            <button 
              @click="toggleFullscreen"
              class="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Conteneur du PDF -->
        <div class="flex items-center justify-center bg-gray-50" :class="isFullscreen ? 'h-full pt-12' : 'min-h-[75vh]'">
          <div class="w-full max-w-5xl mx-auto p-2">
            <iframe 
              ref="pdfIframe"
              src="/data/lauto_palpation.pdf" 
              class="w-full rounded bg-white"
              :class="isFullscreen ? 'h-[calc(100vh-5rem)]' : 'h-[75vh]'"
              title="Guide d'auto-examen des seins"
              frameborder="0"
              @load="handleIframeLoad"
              @error="handleIframeError"
            >
            </iframe>
            
            <!-- Message d'erreur en dehors de l'iframe -->
            <div 
              v-if="showFallback" 
              class="flex flex-col items-center justify-center h-64 text-gray-500 bg-white rounded border"
            >
              <svg class="w-10 h-10 mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <p class="text-center text-sm">PDF non affichable</p>
              <a 
                href="/data/lauto_palpation.pdf" 
                download
                class="mt-2 text-pink-600 hover:text-pink-700 font-medium text-sm"
              >
                Télécharger
              </a>
            </div>
          </div>
        </div>

        <!-- Indicateur de chargement -->
        <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600 mx-auto mb-2"></div>
            <p class="text-gray-500 text-sm">Chargement...</p>
          </div>
        </div>
      </div>

      <!-- Espace en bas de page -->
      <div class="h-16 md:h-24"></div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isFullscreen = ref(false)
const loading = ref(true)
const showFallback = ref(false)
const pdfIframe = ref(null)
let loadTimeout = null

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  
  if (isFullscreen.value) {
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = ''
  }
}

const handleIframeLoad = () => {
  loading.value = false
  showFallback.value = false
}

const handleIframeError = () => {
  loading.value = false
  showFallback.value = true
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && isFullscreen.value) {
    toggleFullscreen()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)

  // Timeout de sécurité si l'iframe ne charge pas
  loadTimeout = setTimeout(() => {
    if (loading.value) {
      loading.value = false
      showFallback.value = true
    }
  }, 5000)
})

onBeforeUnmount(() => {
  // Nettoyer les event listeners
  document.removeEventListener('keydown', handleEscape)
  document.documentElement.style.overflow = ''
  
  // Nettoyer le timeout
  if (loadTimeout) {
    clearTimeout(loadTimeout)
  }
})
</script>

<style scoped>
/* Amélioration du scroll */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #f8fafc;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Support pour le mode plein écran */
:fullscreen {
  background: white;
}

:-webkit-full-screen {
  background: white;
}

:-moz-full-screen {
  background: white;
}

/* Animation de fondu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>