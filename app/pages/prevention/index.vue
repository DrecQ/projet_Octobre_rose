<template>
  <section id="prevention" class="min-h-screen bg-gradient-to-br from-white to-pink-50/30 py-8 md:py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Prévention du <span class="text-pink-600">cancer du sein</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Adoptez les bonnes pratiques pour réduire vos risques et préserver votre santé. 
          La prévention commence par une attention bienveillante à votre corps.
        </p>
      </div>

      <!-- Mesures de prévention principales -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 md:mb-16">
        <div 
          v-for="(measure, index) in preventionMeasures" 
          :key="index"
          class="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
        >
          <!-- Icône -->
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 mx-auto" 
               :class="measure.bgColor">
            <svg class="w-8 h-8" :class="measure.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="measure.icon"/>
            </svg>
          </div>

          <!-- Contenu -->
          <div class="text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
              {{ measure.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ measure.description }}
            </p>

            <!-- Conseil -->
            <div class="bg-gray-50 rounded-lg p-3">
              <p class="text-gray-700 text-xs font-medium">
                {{ measure.tip }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Dépistage organisé -->
      <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 mb-12 md:mb-16">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Dépistage <span class="text-pink-600">organisé</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Un accompagnement adapté à chaque étape de la vie
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="(ageGroup, index) in ageGroups" 
            :key="index"
            class="bg-gray-50 rounded-xl p-6 text-center group hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <div class="text-2xl font-bold text-blue-600 mb-3">{{ ageGroup.age }}</div>
            <h4 class="font-semibold text-gray-900 mb-3">{{ ageGroup.title }}</h4>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ ageGroup.description }}
            </p>
            <ul class="text-xs text-gray-500 space-y-1">
              <li v-for="(recommendation, recIndex) in ageGroup.recommendations" :key="recIndex">
                • {{ recommendation }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Facteurs de risque et protection -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
        
        <!-- Facteurs de risque -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            Facteurs de risque
          </h3>
          <div class="space-y-4">
            <div 
              v-for="(risk, index) in riskFactors" 
              :key="index"
              class="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              <div class="w-6 h-6 bg-red-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-red-600 text-xs font-bold">!</span>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 mb-1">{{ risk.title }}</h4>
                <p class="text-gray-600 text-sm">{{ risk.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Facteurs protecteurs -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            Facteurs protecteurs
          </h3>
          <div class="space-y-4">
            <div 
              v-for="(protection, index) in protectiveFactors" 
              :key="index"
              class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
            >
              <div class="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-green-600 text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 class="font-medium text-gray-900 mb-1">{{ protection.title }}</h4>
                <p class="text-gray-600 text-sm">{{ protection.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Guide pratique au quotidien -->
      <div class="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-6 md:p-8 text-white mb-12 md:mb-16">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Votre routine prévention
          </h2>
          <p class="text-pink-100 text-lg">
            Des habitudes simples pour une santé préservée
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="(habit, index) in dailyHabits" 
            :key="index"
            class="text-center group"
          >
            <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <span class="text-xl">{{ habit.emoji }}</span>
            </div>
            <h4 class="font-semibold mb-2 text-sm">{{ habit.title }}</h4>
            <p class="text-pink-100 text-xs">{{ habit.frequency }}</p>
          </div>
        </div>
      </div>

      <!-- Call-to-action -->
      <div class="text-center">
        <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Prenez soin de votre santé dès aujourd'hui
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            La prévention est un acte d'amour envers soi-même. 
            Des gestes simples peuvent faire la différence pour votre bien-être à long terme.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Programmer un dépistage
            </button>
            <button class="border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Guide complet
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'PreventionPage',
  data() {
    return {
      preventionMeasures: [
        {
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
          title: 'Auto-examen régulier',
          description: 'Apprenez à connaître vos seins et détectez tout changement inhabituel.',
          tip: 'Pratiquez l\'auto-examen une fois par mois, après vos règles',
          bgColor: 'bg-pink-50',
          iconColor: 'text-pink-600'
        },
        {
          icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
          title: 'Dépistage organisé',
          description: 'Suivez le programme de dépistage recommandé selon votre âge.',
          tip: 'Mammographie recommandée tous les 2 ans après 50 ans',
          bgColor: 'bg-blue-50',
          iconColor: 'text-blue-600'
        },
        {
          icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
          title: 'Mode de vie sain',
          description: 'Adoptez une alimentation équilibrée et une activité physique régulière.',
          tip: '30 minutes d\'activité physique modérée par jour',
          bgColor: 'bg-green-50',
          iconColor: 'text-green-600'
        },
        {
          icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
          title: 'Limitation alcool',
          description: 'Réduisez votre consommation d\'alcool pour diminuer les risques.',
          tip: 'Maximum 1 verre d\'alcool par jour',
          bgColor: 'bg-amber-50',
          iconColor: 'text-amber-600'
        },
        {
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
          title: 'Poids équilibré',
          description: 'Maintenez un poids santé, surtout après la ménopause.',
          tip: 'Surveillez votre indice de masse corporelle (IMC)',
          bgColor: 'bg-purple-50',
          iconColor: 'text-purple-600'
        },
        {
          icon: 'M13 10V3L4 14h7v7l9-11h-7z',
          title: 'Allaitement maternel',
          description: 'L\'allaitement contribue à réduire le risque de cancer du sein.',
          tip: 'Si possible, allaitez pendant au moins 6 mois',
          bgColor: 'bg-rose-50',
          iconColor: 'text-rose-600'
        }
      ],
      ageGroups: [
        {
          age: '25-49 ans',
          title: 'Surveillance active',
          description: 'Auto-examen et consultation régulière',
          recommendations: [
            'Auto-examen mensuel',
            'Examen clinique annuel',
            'Échographie si nécessaire'
          ]
        },
        {
          age: '50-74 ans',
          title: 'Dépistage organisé',
          description: 'Mammographie régulière recommandée',
          recommendations: [
            'Mammographie tous les 2 ans',
            'Examen clinique annuel',
            'Auto-examen mensuel'
          ]
        },
        {
          age: '75 ans et +',
          title: 'Suivi personnalisé',
          description: 'Dépistage adapté à la situation',
          recommendations: [
            'Consultation médicale régulière',
            'Dépistage selon état de santé',
            'Auto-examen continu'
          ]
        }
      ],
      riskFactors: [
        {
          title: 'Âge',
          description: 'Risque accru après 50 ans'
        },
        {
          title: 'Antécédents familiaux',
          description: 'Cas de cancer dans la famille'
        },
        {
          title: 'Prédisposition génétique',
          description: 'Mutations BRCA1/BRCA2'
        },
        {
          title: 'Ménopause tardive',
          description: 'Après 55 ans'
        }
      ],
      protectiveFactors: [
        {
          title: 'Activité physique',
          description: 'Réduction du risque de 20-40%'
        },
        {
          title: 'Alimentation saine',
          description: 'Fruits, légumes, fibres'
        },
        {
          title: 'Poids contrôlé',
          description: 'IMC entre 18,5 et 25'
        },
        {
          title: 'Allaitement',
          description: 'Effet protecteur démontré'
        }
      ],
      dailyHabits: [
        { emoji: '🏃‍♀️', title: 'Activité physique', frequency: '30 min/jour' },
        { emoji: '🥗', title: 'Alimentation équilibrée', frequency: 'Au quotidien' },
        { emoji: '⚖️', title: 'Contrôle du poids', frequency: 'Mensuel' },
        { emoji: '🚫', title: 'Limitation alcool', frequency: '1 verre max/jour' },
        { emoji: '🚭', title: 'Pas de tabac', frequency: 'Zéro cigarette' },
        { emoji: '👐', title: 'Auto-examen', frequency: '1 fois/mois' },
        { emoji: '😴', title: 'Sommeil qualité', frequency: '7-8h/nuit' },
        { emoji: '🧘‍♀️', title: 'Gestion stress', frequency: 'Quotidienne' }
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

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }

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