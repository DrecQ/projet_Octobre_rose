<template>
  <section id="symptomes" class="min-h-screen bg-gradient-to-br from-white to-pink-50/30 py-8 md:py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Symptômes du <span class="text-pink-600">cancer du sein</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Apprenez à identifier les signes précoces pour un dépistage rapide. 
          Plus la détection est précoce, plus les chances de guérison sont élevées.
        </p>
      </div>

      <!-- Bannière d'alerte -->
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 md:mb-12">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-amber-800 mb-2">Important à savoir</h3>
            <p class="text-amber-700 text-sm md:text-base">
              La présence d'un symptôme ne signifie pas nécessairement un cancer. 
              Cependant, tout changement persistant doit être examiné par un professionnel de santé.
            </p>
          </div>
        </div>
      </div>

      <!-- Section avec image et symptômes principaux -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
        
        <!-- Image avec annotations -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">
              Symptômes visibles
            </h2>
            <p class="text-gray-600 text-sm">
              Repérez les signes sur votre peau et vos seins
            </p>
          </div>
          
          <!-- Conteneur de l'image -->
          <div class="relative bg-gray-50 rounded-xl p-4 aspect-[3/4] flex items-center justify-center">
            <!-- Image placeholder - à remplacer par votre image -->
            <div class="relative w-full h-full max-w-sm mx-auto flex items-center justify-center">
              <div class="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
                <NuxtImg src="/symptomes.jpg" alt="Symptômes du cancer du sein" class="w-full h-full object-contain rounded-lg"/>
              </div>
              
              <!-- Annotations sur l'image -->
              <div class="absolute top-1/4 left-1/4">
                <div class="relative">
                  <div class="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                  <div class="w-3 h-3 bg-red-600 rounded-full relative"></div>
                  <div class="absolute -top-8 -left-4 bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                    Rougeur
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-red-600 rotate-45"></div>
                  </div>
                </div>
              </div>
              
              <div class="absolute top-1/3 right-1/4">
                <div class="relative">
                  <div class="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute"></div>
                  <div class="w-3 h-3 bg-blue-600 rounded-full relative"></div>
                  <div class="absolute -top-8 -left-4 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                    Œdème
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-blue-600 rotate-45"></div>
                  </div>
                </div>
              </div>
              
              <div class="absolute bottom-1/3 left-1/3">
                <div class="relative">
                  <div class="w-3 h-3 bg-purple-500 rounded-full animate-ping absolute"></div>
                  <div class="w-3 h-3 bg-purple-600 rounded-full relative"></div>
                  <div class="absolute -top-8 -left-6 bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                    Peau d'orange
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-purple-600 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p class="text-center text-gray-500 text-sm mt-4">
            Survolez les points pour voir les symptômes détaillés
          </p>
        </div>

        <!-- Liste des symptômes principaux -->
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Principaux symptômes à reconnaître
          </h2>
          
          <div class="space-y-4">
            <div 
              v-for="(symptom, index) in mainSymptoms" 
              :key="index"
              class="bg-white rounded-xl p-4 border border-gray-100 hover:border-pink-200 transition-all duration-300 group cursor-pointer"
              @mouseenter="activeSymptom = index"
              @mouseleave="activeSymptom = null"
            >
              <div class="flex items-start gap-4">
                <div 
                  class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  :class="activeSymptom === index ? symptom.bgColor + ' scale-110' : 'bg-gray-50'"
                >
                  <span 
                    class="text-lg font-bold transition-colors duration-300"
                    :class="activeSymptom === index ? symptom.textColor : 'text-gray-400'"
                  >
                    {{ symptom.emoji }}
                  </span>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors duration-300">
                    {{ symptom.title }}
                  </h3>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    {{ symptom.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section des autres symptômes -->
      <div class="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Autres signes à surveiller <span class="text-pink-600">régulièrement</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(sign, index) in otherSymptoms" 
            :key="index"
            class="flex items-start gap-4 p-4 rounded-xl hover:bg-pink-50 transition-colors duration-200 group"
          >
            <div class="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors duration-300">
                {{ sign.title }}
              </h4>
              <p class="text-gray-600 text-sm">
                {{ sign.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Guide d'auto-examen -->
      <div class="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 md:p-8 text-white mb-12 md:mb-16">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Comment pratiquer l'auto-examen ?
          </h2>
          <p class="text-pink-100 text-lg">
            Une méthode simple à réaliser chaque mois
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div class="bg-white/10 rounded-xl p-4 md:p-6 text-center backdrop-blur-sm">
            <div class="text-3xl font-bold text-white mb-3">1</div>
            <h4 class="font-semibold mb-2">Devant le miroir</h4>
            <p class="text-pink-100 text-sm">
              Inspectez visuellement vos seins, bras levés et baissés
            </p>
          </div>

          <div class="bg-white/10 rounded-xl p-4 md:p-6 text-center backdrop-blur-sm">
            <div class="text-3xl font-bold text-white mb-3">2</div>
            <h4 class="font-semibold mb-2">Sous la douche</h4>
            <p class="text-pink-100 text-sm">
              Palpez avec la main plate, doigts joints, en mouvements circulaires
            </p>
          </div>

          <div class="bg-white/10 rounded-xl p-4 md:p-6 text-center backdrop-blur-sm">
            <div class="text-3xl font-bold text-white mb-3">3</div>
            <h4 class="font-semibold mb-2">Allongée</h4>
            <p class="text-pink-100 text-sm">
              Répétez la palpation en position couchée, un sein après l'autre
            </p>
          </div>
        </div>
      </div>

      <!-- Call-to-action -->
      <div class="text-center">
        <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Un doute ? Consultez sans attendre
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ne laissez pas l'inquiétude vous gagner. Une consultation précoce 
            permet de vous rassurer ou de prendre les mesures nécessaires à temps.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <NuxtLink to="/contact">Trouver un centre de dépistage</NuxtLink>
            </button>
            <button class="border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
                            <NuxtLink to="/symptomes/auto_palpation">Lire le guide d'auto-examen</NuxtLink>

            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'SymptomesPage',
  data() {
    return {
      activeSymptom: null,
      mainSymptoms: [
        {
          emoji: '🔴',
          title: 'Rougeur',
          description: 'Rougeur persistante sur la peau du sein, souvent localisée',
          bgColor: 'bg-red-50',
          textColor: 'text-red-600'
        },
        {
          emoji: '💧',
          title: 'Œdème',
          description: 'Gonflement ou augmentation de volume anormale du sein',
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-600'
        },
        {
          emoji: '🔍',
          title: 'Modification texture',
          description: 'Changement de la texture de la peau, épaississement',
          bgColor: 'bg-purple-50',
          textColor: 'text-purple-600'
        },
        {
          emoji: '💦',
          title: 'Écoulements',
          description: 'Écoulement spontané du mamelon, surtout sanglant',
          bgColor: 'bg-amber-50',
          textColor: 'text-amber-600'
        },
        {
          emoji: '🍊',
          title: 'Peau d\'orange',
          description: 'Aspect capitonné de la peau ressemblant à une orange',
          bgColor: 'bg-orange-50',
          textColor: 'text-orange-600'
        },
        {
          emoji: '↪️',
          title: 'Rétractation',
          description: 'Rétraction du mamelon ou de la peau vers l\'intérieur',
          bgColor: 'bg-pink-50',
          textColor: 'text-pink-600'
        }
      ],
      otherSymptoms: [
        {
          title: 'Masse ou grosseur',
          description: 'Boule durcie dans le sein ou sous l\'aisselle'
        },
        {
          title: 'Douleur persistante',
          description: 'Douleur localisée qui ne disparaît pas'
        },
        {
          title: 'Chaleur localisée',
          description: 'Sensation de chaleur anormale au toucher'
        },
        {
          title: 'Asymétrie soudaine',
          description: 'Modification récente de la forme des seins'
        },
        {
          title: 'Ganglions durcis',
          description: 'Ganglions sous l\'aisselle ou autour de la clavicule'
        },
        {
          title: 'Desquamation',
          description: 'Peau qui pèle autour du mamelon'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Animations douces */
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

/* Application des animations */
.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Support pour les navigateurs plus anciens */
@supports not (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    background: rgba(255, 255, 255, 0.2);
  }
}

/* Responsive amélioré */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  
  .text-5xl {
    font-size: 2.5rem;
  }
}

/* Effets de hover subtils */
.hover-lift:hover {
  transform: translateY(-2px);
}
</style>