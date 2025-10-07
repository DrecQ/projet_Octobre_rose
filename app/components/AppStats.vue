<template>
  <section id="statistiques" class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête section amélioré -->
      <div class="text-center mb-20">
  
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          L'urgence du <span class="text-pink-600">dépistage précoce</span>
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          Des chiffres qui démontrent l'importance cruciale de la sensibilisation 
          et de l'accès aux soins en Afrique
        </p>
      </div>

      <!-- Grille principale restructurée -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
        
        <!-- Carte impact - Pleine largeur sur desktop -->
        <div class="xl:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden">
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span class="text-red-300 font-semibold text-sm uppercase tracking-wide">Situation critique</span>
            </div>
            <h3 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Le plus haut taux de mortalité<br>au monde
            </h3>
            <p class="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              L'Afrique détient le record mondial de mortalité par cancer du sein, 
              avec des diagnostics souvent tardifs qui réduisent les chances de guérison.
            </p>
            <div class="flex items-center gap-4 text-red-200">
              <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
              <span class="font-medium">Diagnostic tardif dans 77% des cas</span>
            </div>
          </div>
          <!-- Élément décoratif -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 to-red-600/10 rounded-full -translate-y-32 translate-x-32"></div>
        </div>

        <!-- Carte espoir -->
        <div class="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-white relative overflow-hidden">
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-3 h-3 bg-white rounded-full"></div>
              <span class="text-emerald-100 font-semibold text-sm uppercase tracking-wide">Message d'espoir</span>
            </div>
            <h3 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              +90%
            </h3>
            <p class="text-emerald-100 text-xl md:text-2xl font-bold mb-2">
              Taux de guérison
            </p>
            <p class="text-emerald-50 text-lg leading-relaxed">
              Avec un diagnostic précoce, les chances de guérison dépassent 90%
            </p>
          </div>
          <!-- Élément décoratif -->
          <div class="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-8 translate-y-8"></div>
        </div>
      </div>

      <!-- Grille des statistiques améliorée -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
        
        <!-- Stat 1 - Nouveaux cas -->
        <div class="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-200 transition-all duration-500 hover:shadow-2xl">
          <div class="relative">
            <div class="text-5xl md:text-6xl font-black text-pink-600 mb-4 group-hover:scale-105 transition-transform duration-500">
              146K
            </div>
            <div class="text-sm uppercase tracking-widest text-pink-500 font-bold mb-4">
              Nouveaux cas annuels
            </div>
            <p class="text-gray-600 leading-relaxed text-sm">
              Diagnostics de cancer du sein chaque année en Afrique
            </p>
          </div>
          <!-- Ligne décorative -->
          <div class="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 group-hover:w-full transition-all duration-500 delay-200"></div>
        </div>

        <!-- Stat 2 - Décès -->
        <div class="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-200 transition-all duration-500 hover:shadow-2xl">
          <div class="relative">
            <div class="text-5xl md:text-6xl font-black text-red-600 mb-4 group-hover:scale-105 transition-transform duration-500">
              85K
            </div>
            <div class="text-sm uppercase tracking-widest text-red-500 font-bold mb-4">
              Décès annuels
            </div>
            <p class="text-gray-600 leading-relaxed text-sm">
              Femmes qui perdent la vie chaque année du cancer du sein
            </p>
          </div>
          <div class="absolute bottom-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-500 delay-200"></div>
        </div>

        <!-- Stat 3 - Taux de survie -->
        <div class="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl">
          <div class="relative">
            <div class="text-5xl md:text-6xl font-black text-orange-600 mb-4 group-hover:scale-105 transition-transform duration-500">
              50%
            </div>
            <div class="text-sm uppercase tracking-widest text-orange-500 font-bold mb-4">
              Survie à 5 ans
            </div>
            <p class="text-gray-600 leading-relaxed text-sm">
              Taux de survie actuel, principalement dû aux diagnostics tardifs
            </p>
          </div>
          <div class="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500 delay-200"></div>
        </div>

        <!-- Stat 4 - Dépistage organisé -->
        <div class="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl">
          <div class="relative">
            <div class="text-5xl md:text-6xl font-black text-blue-600 mb-4 group-hover:scale-105 transition-transform duration-500">
              5
            </div>
            <div class="text-sm uppercase tracking-widest text-blue-500 font-bold mb-4">
              Pays équipés
            </div>
            <p class="text-gray-600 leading-relaxed text-sm">
              Pays africains avec des programmes officiels de dépistage organisé
            </p>
          </div>
          <div class="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 delay-200"></div>
        </div>

      </div>

      <!-- Section infos complémentaires -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        <!-- Carte prévention -->
        <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-pink-200">
              <svg class="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Prévention essentielle</h4>
              <p class="text-gray-700 leading-relaxed">
                <span class="font-semibold text-pink-600">1 décès sur 3</span> pourrait être évité grâce 
                au dépistage précoce et à un traitement adapté dans les délais.
              </p>
            </div>
          </div>
        </div>

        <!-- Carte fréquence -->
        <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-purple-200">
              <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Cancer le plus fréquent</h4>
              <p class="text-gray-700 leading-relaxed">
                Représente <span class="font-semibold text-purple-600">17% des cancers féminins</span> en Afrique, 
                touchant des milliers de femmes chaque année.
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Section call-to-action élégante -->
      <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
        <div class="relative z-10 max-w-4xl mx-auto">
          <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Agissons ensemble<br>pour changer ces chiffres
          </h3>
          <p class="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            La sensibilisation et le dépistage précoce sont nos armes les plus puissantes 
            contre le cancer du sein en Afrique.
          </p>
          <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button class="bg-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl flex items-center gap-3 min-w-[280px] justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Apprendre l'auto-palpation
            </button>
            <button class="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 min-w-[280px] justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Trouver un centre de dépistage
            </button>
          </div>
        </div>
        <!-- Éléments décoratifs -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 translate-y-32"></div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AppStats',
  data() {
    return {
      stats: [
        {
          value: '146K',
          label: 'Nouveaux cas annuels',
          description: 'Diagnostics de cancer du sein chaque année en Afrique',
          color: 'pink'
        },
        {
          value: '85K',
          label: 'Décès annuels',
          description: 'Femmes qui perdent la vie chaque année du cancer du sein',
          color: 'red'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Animations améliorées */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Délais d'animation pour un effet cascade */
.stat-card:nth-child(1) { animation-delay: 0.1s; }
.stat-card:nth-child(2) { animation-delay: 0.2s; }
.stat-card:nth-child(3) { animation-delay: 0.3s; }
.stat-card:nth-child(4) { animation-delay: 0.4s; }

/* Amélioration des transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Support pour les navigateurs plus anciens */
@supports not (backdrop-filter: blur(10px)) {
  .backdrop-blur {
    background: rgba(255, 255, 255, 0.95);
  }
}

/* Responsive amélioré */
@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
  
  .text-6xl {
    font-size: 3.5rem;
  }
  
  .min-w-\[280px\] {
    min-width: 100%;
  }
}

/* Amélioration de la lisibilité */
.leading-tight {
  line-height: 1.1;
}

.leading-relaxed {
  line-height: 1.6;
}
</style>