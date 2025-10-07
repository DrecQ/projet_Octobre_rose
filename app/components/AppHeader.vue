<template>
  <header class="relative h-screen min-h-[700px] overflow-hidden" ref="header">
    <!-- Image d'arrière-plan avec overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10"></div>
      <img 
        src="/rose-vie.jpeg" 
        alt="Sensibilisation cancer du sein"
        class="w-full h-full object-cover object-center md:object-[center_40%] transform md:scale-110"
      />
    </div>

    <!-- Contenu principal -->
    <div class="relative z-20 h-full flex items-center justify-center pt-16 lg:pt-20">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <!-- Titre principal - Structure améliorée -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
          <div class="space-y-3 md:space-y-4">
            <div class="opacity-0 animate-fade-in-up" :style="titleStyle(0)">Chaque instant</div>
            <div class="opacity-0 animate-fade-in-up" :style="titleStyle(1)">compte dans la lutte</div>
            <div class="opacity-0 animate-fade-in-up text-white" :style="titleStyle(2)">
              contre le cancer du sein
            </div>
          </div>
        </h1>

        <!-- Sous-titre - Positionnement amélioré -->
        <div class="max-w-3xl mx-auto mb-10 md:mb-12">
          <p class="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed opacity-0 animate-fade-in-up" 
             :style="subtitleStyle">
            Des astuces pratiques, des ressources essentielles et une communauté solidaire 
            pour mieux comprendre, prévenir et accompagner.
          </p>
        </div>

        <!-- Bouton unique "En savoir plus" - Positionnement optimisé -->
        <div class="opacity-0 animate-fade-in-up" :style="buttonStyle">
          <button 
            @click="scrollToContent"
            class="group bg-white/15 backdrop-blur-md border-2 border-white/40 text-white px-10 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/25 hover:border-white/60 transform hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl flex items-center justify-center gap-3 mx-auto min-w-[180px]"
          >
            <span><nuxt-link :to="{id : 'statistiques', query: {show : 'AppStats'}}"/>En savoir plus</span>
            <svg class="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ProfessionalHeader',
  data() {
    return {
      currentLanguage: 'fr',
      scrollProgress: 0,
      isVisible: false
    }
  },
  mounted() {
    this.animateIn()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    subtitleStyle() {
      return {
        opacity: this.isVisible ? 1 : 0,
        transform: this.isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease 0.4s'
      }
    }
  },
  methods: {
    titleStyle(delay) {
      return {
        opacity: this.isVisible ? 1 : 0,
        transform: this.isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s ease ${0.2 + delay * 0.1}s`
      }
    },
    buttonStyle() {
      return {
        opacity: this.isVisible ? 1 : 0,
        transform: this.isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease 0.6s`
      }
    },
    animateIn() {
      setTimeout(() => {
        this.isVisible = true
      }, 100)
    },
    handleScroll() {
      this.scrollProgress = window.scrollY / (this.$refs.header?.offsetHeight || 1)
    },
    scrollToContent() {
      document.getElementById('statistiques')?.scrollIntoView({ 
        behavior: 'smooth' 
      })
    }
  }
}
</script>

<style scoped>
/* Animations personnalisées */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Amélioration de la lisibilité */
.text-shadow {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

/* Effets de hover améliorés */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  header {
    min-height: 100vh;
  }

  /* Ajustement de l'image sur mobile */
  .professional-header img {
    object-position: center 30%;
  }

  /* Ajustement du padding top sur mobile */
  .header-content {
    padding-top: 5rem;
  }
}

@media (max-width: 480px) {
  .professional-header {
    min-height: 100vh;
  }

  /* Ajustements supplémentaires pour très petits écrans */
  .main-title {
    font-size: 2rem !important;
  }

  .subtitle {
    font-size: 1.1rem !important;
  }
}

/* Support pour les navigateurs plus anciens */
@supports not (backdrop-filter: blur(10px)) {
  .backdrop-blur-md {
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>