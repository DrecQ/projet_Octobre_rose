<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white shadow-sm border-b border-gray-100',
      !isHomePage && 'bg-white shadow-sm border-b border-gray-100'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 lg:h-24">

        <!-- Logo avec espacement réduit mais taille agrandie -->
        <div class="flex items-center gap-3">
          <NuxtImg 
            src="/OIP.png" 
            alt="Ruban Octobre Rose" 
            class="w-10 h-10 lg:w-12 lg:h-12 object-contain"
          />
          <span 
            class="text-xl lg:text-2xl font-medium transition-colors duration-300"
            :class="(isHomePage && !isScrolled) ? 'text-white' : 'text-gray-900'"
          >
            Octobre Rose
          </span>
        </div>

        <!-- Desktop Navigation avec éléments agrandis -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.id"
            :to="item.href"
            class="text-base font-medium transition-all duration-200 py-3 relative group"
            :class="[
              (isHomePage && !isScrolled) 
                ? 'text-white hover:text-gray-200' 
                : 'text-gray-700 hover:text-gray-900',
              isActive(item.href) && 'text-pink-600 font-semibold'
            ]"
          >
            {{ item.label }}
            <!-- Barre de soulignement pour tous les états -->
            <span 
              class="absolute bottom-1 left-0 transition-all duration-300"
              :class="[
                isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full',
                (isHomePage && !isScrolled) 
                  ? 'h-1 bg-white/70' 
                  : 'h-0.5 bg-pink-600'
              ]"
            ></span>
          </NuxtLink>
        </div>

        <!-- Desktop Actions agrandies -->
        <div class="hidden lg:flex items-center gap-4">
          <button 
            @click="toggleLanguage"
            class="px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 flex items-center gap-2"
            :class="(isHomePage && !isScrolled) 
              ? 'text-white hover:text-gray-200 hover:bg-white/10' 
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'"
          >
            <span class="text-lg">{{ currentLanguage === 'fr' ? '🇫🇷' : '🇬🇧' }}</span>
            {{ currentLanguage === 'fr' ? 'FR' : 'EN' }}
          </button>
          <button 
            class="px-6 py-3 bg-pink-600 text-white rounded-lg text-base font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            Soutenir
          </button>
        </div>

        <!-- Mobile Menu Button agrandi -->
        <button 
          v-if="!isMobileOpen"
          @click="toggleMobileMenu"
          class="lg:hidden p-3 rounded-lg transition-colors duration-200"
          :class="(isHomePage && !isScrolled) 
            ? 'hover:bg-white/10 text-white' 
            : 'hover:bg-gray-100 text-gray-600'"
        >
          <div class="w-6 h-6 relative">
            <span 
              class="absolute top-1.5 left-0 w-6 h-0.5 transition-all duration-300 rounded-full"
              :class="(isHomePage && !isScrolled) ? 'bg-white' : 'bg-gray-600'"
            ></span>
            <span 
              class="absolute top-3 left-0 w-6 h-0.5 transition-all duration-300 rounded-full"
              :class="(isHomePage && !isScrolled) ? 'bg-white' : 'bg-gray-600'"
            ></span>
            <span 
              class="absolute top-4.5 left-0 w-6 h-0.5 transition-all duration-300 rounded-full"
              :class="(isHomePage && !isScrolled) ? 'bg-white' : 'bg-gray-600'"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Overlay pour masquer le contenu en arrière-plan -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMobileOpen"
        class="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <!-- Mobile Menu Panel avec éléments agrandis -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-y-0"
      leave-to-class="translate-y-full"
    >
      <div 
        v-if="isMobileOpen"
        class="lg:hidden fixed bottom-0 left-0 right-0 bg-white z-50 shadow-2xl rounded-t-3xl border-t border-gray-200 max-h-[85vh] flex flex-col"
      >
        <!-- Header avec croix rose agrandie -->
        <div class="flex-shrink-0 flex items-center justify-between p-6 border-b border-gray-100 bg-white rounded-t-3xl">
          <div class="flex items-center gap-3">
            <NuxtImg 
              src="/OIP.png" 
              alt="Ruban Octobre Rose" 
              class="w-10 h-10 object-contain"
            />
            <span class="text-xl font-medium text-gray-900">Octobre Rose</span>
          </div>
          <!-- Croix rose pour fermer le menu agrandie -->
          <button 
            @click="closeMobileMenu"
            class="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-200 shadow-lg flex items-center justify-center w-12 h-12"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Content avec scroll amélioré et éléments agrandis -->
        <div class="flex-1 overflow-y-auto hide-scrollbar px-6 py-4">
          <!-- Navigation agrandie -->
          <div class="space-y-3 mb-6">
            <NuxtLink 
              v-for="item in menuItems" 
              :key="item.id"
              :to="item.href"
              class="block py-4 px-4 text-lg font-medium rounded-xl transition-colors duration-200 border relative group"
              :class="isActive(item.href) 
                ? 'bg-pink-50 text-pink-600 border-pink-200' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-gray-100'"
              @click.native="closeMobileMenu"
            >
              {{ item.label }}
              <!-- Indicateur visuel pour l'item actif sur mobile -->
              <span 
                v-if="isActive(item.href)"
                class="absolute left-0 top-1/2 w-1 h-8 bg-pink-600 rounded-r-lg transform -translate-y-1/2"
              ></span>
            </NuxtLink>
          </div>

          <!-- Language Selector agrandi -->
          <div class="mb-6 pt-4 border-t border-gray-100">
            <p class="text-base font-semibold text-gray-600 mb-4">Langue</p>
            <div class="flex gap-3">
              <button 
                @click="setLanguage('fr')"
                class="flex-1 py-3 px-4 text-base rounded-xl border-2 transition-colors duration-200 font-medium"
                :class="currentLanguage === 'fr' 
                  ? 'bg-pink-600 text-white border-pink-600 shadow-md' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300 hover:shadow-sm'"
              >
                🇫🇷 Français
              </button>
              <button 
                @click="setLanguage('en')"
                class="flex-1 py-3 px-4 text-base rounded-xl border-2 transition-colors duration-200 font-medium"
                :class="currentLanguage === 'en' 
                  ? 'bg-pink-600 text-white border-pink-600 shadow-md' 
                  : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300 hover:shadow-sm'"
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          <!-- Donation agrandie -->
          <div class="mb-6">
            <button class="w-full py-4 bg-pink-600 text-white rounded-xl text-lg font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              Soutenir
            </button>
          </div>

          <!-- Message agrandi -->
          <div class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 text-center border border-pink-100 mb-4">
            <p class="text-base text-pink-600 font-semibold">
              Ensemble contre le cancer du sein
            </p>
          </div>

          <!-- Espace supplémentaire pour assurer le scroll -->
          <div class="h-4"></div>
        </div>

        <!-- Indicateur de scroll pour petits écrans -->
        <div v-if="showScrollIndicator" class="flex-shrink-0 py-2 border-t border-gray-100 bg-white">
          <div class="flex justify-center">
            <div class="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <p class="text-xs text-gray-500 text-center mt-1">Glissez pour voir plus</p>
        </div>
      </div>
    </transition>
  </nav>

  <!-- Espace réservé pour le contenu de la page (marge sous la navigation agrandie) -->
  <div :class="['transition-all duration-300', isHomePage && !isScrolled ? 'pt-0' : 'pt-20 lg:pt-24']"></div>
</template>

<script>
export default {
  name: 'OctobreRoseNavbar',
  data() {
    return {
      isScrolled: false,
      isMobileOpen: false,
      currentLanguage: 'fr',
      showScrollIndicator: false,
      menuItems: [
        { id: 'home', label: 'Accueil', href: '/' },
        { id: 'symptomes', label: 'Symptômes', href: '/symptomes' },
        { id: 'blog', label: 'Blog', href: '/blog' },
        { id: 'prevention', label: 'Prévention', href: '/prevention' },
        { id: 'contact', label: 'Qui contacter ?', href: '/contact' }
      ]
    }
  },
  computed: {
    isHomePage() {
      return this.$route?.path === '/'
    }
  },
  mounted() {
    // Initialiser l'état du scroll
    this.handleScroll()
    
    // Écouter les événements
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    }
    
    // Restaurer la langue depuis le localStorage
    this.restoreLanguage()
  },
  beforeUnmount() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleScroll() {
      if (process.client) {
        this.isScrolled = window.scrollY > 20
      }
    },
    handleResize() {
      if (process.client && window.innerWidth > 1024) {
        this.isMobileOpen = false
      }
      this.checkScrollIndicator()
    },
    toggleMobileMenu() {
      this.isMobileOpen = !this.isMobileOpen
      if (this.isMobileOpen) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.checkScrollIndicator()
          }, 100)
        })
      } else {
        this.showScrollIndicator = false
      }
    },
    closeMobileMenu() {
      this.isMobileOpen = false
      this.showScrollIndicator = false
    },
    isActive(href) {
      const currentPath = this.$route?.path || '/'
      
      // Pour la page d'accueil, vérifier l'exactitude
      if (href === '/') {
        return currentPath === '/'
      }
      
      // Pour les autres pages, vérifier si on est sur la page ou une sous-page
      return currentPath.startsWith(href)
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'fr' ? 'en' : 'fr'
      this.saveLanguage()
    },
    setLanguage(lang) {
      this.currentLanguage = lang
      this.isMobileOpen = false
      this.saveLanguage()
    },
    saveLanguage() {
      // Sauvegarder la préférence de langue
      if (process.client) {
        localStorage.setItem('octobre-rose-language', this.currentLanguage)
      }
    },
    restoreLanguage() {
      // Restaurer la langue depuis le localStorage
      if (process.client) {
        const savedLanguage = localStorage.getItem('octobre-rose-language')
        if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
          this.currentLanguage = savedLanguage
        }
      }
    },
    checkScrollIndicator() {
      if (!this.isMobileOpen || !process.client) return
      
      const menuContent = this.$el?.querySelector('.hide-scrollbar')
      if (menuContent) {
        this.showScrollIndicator = menuContent.scrollHeight > menuContent.clientHeight
      }
    }
  }
}
</script>

<style scoped>
/* Custom scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar for mobile menu */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Amélioration de la visibilité de l'overlay */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Transition douce pour l'espace réservé */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Styles pour les liens actifs - Utilisation de classes spécifiques */
.active-link {
  color: #db2777 !important;
  font-weight: 600 !important;
}

/* S'assurer que les styles s'appliquent même après actualisation */
.nuxt-link-active,
.nuxt-link-exact-active {
  color: #db2777 !important;
  font-weight: 600 !important;
}

/* Style pour la barre de soulignement active */
.active-underline {
  width: 100% !important;
}

/* Style pour l'indicateur mobile actif */
.active-mobile-indicator {
  background-color: #db2777 !important;
}
</style>