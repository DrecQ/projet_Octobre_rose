<template>
  <section id="faq" class="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Questions <span class="text-pink-600">fréquentes</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Réponses aux questions les plus courantes sur le cancer du sein, 
          le dépistage et la prévention en Afrique
        </p>
      </div>

      <!-- Conteneur FAQ -->
      <div class="space-y-4">
        
        <!-- Question 1 -->
        <div class="bg-white rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300">
          <button 
            @click="toggleFAQ(0)"
            class="w-full px-6 py-6 md:px-8 md:py-7 text-left flex items-center justify-between gap-4 hover:bg-pink-50/50 transition-colors duration-200 rounded-2xl"
          >
            <div class="flex items-start gap-4 flex-1">
              <div class="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mt-1">
                <span class="text-pink-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  À quel âge doit-on commencer le dépistage du cancer du sein ?
                </h3>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                  Les recommandations pour le dépistage précoce en Afrique
                </p>
              </div>
            </div>
            <div class="flex-shrink-0 transform transition-transform duration-300" 
                 :class="{'rotate-180': openFAQ === 0}">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[500px]"
            leave-from-class="opacity-100 max-h-[500px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openFAQ === 0" class="px-6 md:px-8 pb-6 md:pb-7">
              <div class="pl-12 border-t border-gray-100 pt-6">
                <div class="prose prose-pink max-w-none">
                  <p class="text-gray-700 leading-relaxed mb-4">
                    <strong class="text-pink-600">Dès 20 ans</strong> : Il est recommandé de pratiquer l'auto-palpation mensuelle pour se familiariser avec sa poitrine.
                  </p>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    <strong class="text-pink-600">À partir de 40 ans</strong> : Une mammographie de dépistage est conseillée tous les 2 ans, ou plus tôt en cas de facteurs de risque familiaux.
                  </p>
                  <p class="text-gray-700 leading-relaxed">
                    <strong class="text-pink-600">En Afrique</strong>, en raison des diagnostics souvent tardifs, il est crucial de commencer la sensibilisation dès le plus jeune âge.
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Question 2 -->
        <div class="bg-white rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300">
          <button 
            @click="toggleFAQ(1)"
            class="w-full px-6 py-6 md:px-8 md:py-7 text-left flex items-center justify-between gap-4 hover:bg-pink-50/50 transition-colors duration-200 rounded-2xl"
          >
            <div class="flex items-start gap-4 flex-1">
              <div class="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mt-1">
                <span class="text-pink-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Quels sont les principaux symptômes du cancer du sein ?
                </h3>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                  Les signes qui doivent alerter et conduire à consulter
                </p>
              </div>
            </div>
            <div class="flex-shrink-0 transform transition-transform duration-300" 
                 :class="{'rotate-180': openFAQ === 1}">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[500px]"
            leave-from-class="opacity-100 max-h-[500px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openFAQ === 1" class="px-6 md:px-8 pb-6 md:pb-7">
              <div class="pl-12 border-t border-gray-100 pt-6">
                <div class="prose prose-pink max-w-none">
                  <ul class="text-gray-700 space-y-3">
                    <li class="flex items-start gap-3">
                      <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Une boule ou masse</strong> dans le sein ou sous l'aisselle</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Modification de la peau</strong> (peau d'orange, rougeur, plissement)</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Écoulement</strong> du mamelon, surtout s'il est sanglant</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Changement de forme</strong> ou de taille du sein</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Douleur persistante</strong> dans le sein ou le mamelon</span>
                    </li>
                  </ul>
                  <p class="text-pink-600 font-semibold mt-4 text-sm">
                    💡 Important : Ces symptômes ne signifient pas nécessairement un cancer, mais doivent toujours faire l'objet d'une consultation médicale.
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Question 3 -->
        <div class="bg-white rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300">
          <button 
            @click="toggleFAQ(2)"
            class="w-full px-6 py-6 md:px-8 md:py-7 text-left flex items-center justify-between gap-4 hover:bg-pink-50/50 transition-colors duration-200 rounded-2xl"
          >
            <div class="flex items-start gap-4 flex-1">
              <div class="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mt-1">
                <span class="text-pink-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Le cancer du sein est-il héréditaire en Afrique ?
                </h3>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                  Comprendre les facteurs de risque génétiques
                </p>
              </div>
            </div>
            <div class="flex-shrink-0 transform transition-transform duration-300" 
                 :class="{'rotate-180': openFAQ === 2}">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[500px]"
            leave-from-class="opacity-100 max-h-[500px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openFAQ === 2" class="px-6 md:px-8 pb-6 md:pb-7">
              <div class="pl-12 border-t border-gray-100 pt-6">
                <div class="prose prose-pink max-w-none">
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Seulement <strong class="text-pink-600">5 à 10%</strong> des cancers du sein sont considérés comme héréditaires, liés à des mutations génétiques comme BRCA1 et BRCA2.
                  </p>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    En Afrique, les études montrent que ces mutations existent mais sont moins documentées. Les principaux facteurs de risque restent :
                  </p>
                  <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-pink-50 rounded-lg p-4">
                      <h4 class="font-semibold text-pink-700 mb-2">Facteurs modifiables</h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Alimentation déséquilibrée</li>
                        <li>• Sédentarité</li>
                        <li>• Consommation d'alcool</li>
                        <li>• Surpoids</li>
                      </ul>
                    </div>
                    <div class="bg-purple-50 rounded-lg p-4">
                      <h4 class="font-semibold text-purple-700 mb-2">Facteurs non modifiables</h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Âge avancé</li>
                        <li>• Antécédents familiaux</li>
                        <li>• Premières règles précoces</li>
                        <li>• Ménopause tardive</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Question 4 -->
        <div class="bg-white rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300">
          <button 
            @click="toggleFAQ(3)"
            class="w-full px-6 py-6 md:px-8 md:py-7 text-left flex items-center justify-between gap-4 hover:bg-pink-50/50 transition-colors duration-200 rounded-2xl"
          >
            <div class="flex items-start gap-4 flex-1">
              <div class="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mt-1">
                <span class="text-pink-600 font-semibold text-sm">4</span>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Comment pratiquer correctement l'auto-palpation ?
                </h3>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                  La méthode simple pour un auto-examen efficace
                </p>
              </div>
            </div>
            <div class="flex-shrink-0 transform transition-transform duration-300" 
                 :class="{'rotate-180': openFAQ === 3}">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[500px]"
            leave-from-class="opacity-100 max-h-[500px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openFAQ === 3" class="px-6 md:px-8 pb-6 md:pb-7">
              <div class="pl-12 border-t border-gray-100 pt-6">
                <div class="prose prose-pink max-w-none">
                  <div class="grid md:grid-cols-2 gap-6 mb-4">
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span class="text-pink-600 text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900">Debout devant un miroir</h4>
                          <p class="text-gray-700 text-sm">Inspectez vos seins, bras le long du corps puis levés</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span class="text-pink-600 text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900">Palpation allongée</h4>
                          <p class="text-gray-700 text-sm">Main droite pour sein gauche et inversement</p>
                        </div>
                      </div>
                    </div>
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span class="text-pink-600 text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900">Mouvements circulaires</h4>
                          <p class="text-gray-700 text-sm">Du mamelon vers l'extérieur en spirale</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span class="text-pink-600 text-sm font-bold">4</span>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900">Régularité</h4>
                          <p class="text-gray-700 text-sm">À faire 7 à 10 jours après les règles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p class="text-blue-700 text-sm font-semibold">
                      📅 Idéalement, pratiquez l'auto-palpation une fois par mois, à la même période de votre cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Question 5 -->
        <div class="bg-white rounded-2xl border border-gray-200 hover:border-pink-200 transition-all duration-300">
          <button 
            @click="toggleFAQ(4)"
            class="w-full px-6 py-6 md:px-8 md:py-7 text-left flex items-center justify-between gap-4 hover:bg-pink-50/50 transition-colors duration-200 rounded-2xl"
          >
            <div class="flex items-start gap-4 flex-1">
              <div class="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mt-1">
                <span class="text-pink-600 font-semibold text-sm">5</span>
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Où se faire dépister en Afrique et à quel coût ?
                </h3>
                <p class="text-gray-600 text-sm md:text-base leading-relaxed">
                  Accès aux soins et programmes de dépistage disponibles
                </p>
              </div>
            </div>
            <div class="flex-shrink-0 transform transition-transform duration-300" 
                 :class="{'rotate-180': openFAQ === 4}">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[500px]"
            leave-from-class="opacity-100 max-h-[500px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="openFAQ === 4" class="px-6 md:px-8 pb-6 md:pb-7">
              <div class="pl-12 border-t border-gray-100 pt-6">
                <div class="prose prose-pink max-w-none">
                  <div class="space-y-4">
                    <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 class="font-semibold text-green-700 mb-2">Centres de dépistage</h4>
                      <ul class="text-gray-700 text-sm space-y-2">
                        <li>• <strong>Hôpitaux publics</strong> : Consultations de gynécologie</li>
                        <li>• <strong>Centres de santé communautaires</strong></li>
                        <li>• <strong>Campagnes de sensibilisation</strong> mobiles</li>
                        <li>• <strong>ONG médicales</strong> spécialisées</li>
                      </ul>
                    </div>
                    
                    <div class="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <h4 class="font-semibold text-amber-700 mb-2">Coûts et prise en charge</h4>
                      <ul class="text-gray-700 text-sm space-y-2">
                        <li>• <strong>Consultation</strong> : Souvent gratuite lors des campagnes</li>
                        <li>• <strong>Mammographie</strong> : Variable selon les pays (10 000 à 50 000 FCFA)</li>
                        <li>• <strong>Programmes gouvernementaux</strong> : Subventions dans certains pays</li>
                        <li>• <strong>Assurances maladie</strong> : Couverture partielle selon les pays</li>
                      </ul>
                    </div>
                    
                    <div class="bg-pink-50 rounded-lg p-4 border border-pink-200">
                      <p class="text-pink-700 text-sm font-semibold">
                        🌍 Seuls 5 pays africains disposent de programmes nationaux de dépistage organisé. 
                        La sensibilisation communautaire reste essentielle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

      </div>

      <!-- Section d'aide supplémentaire -->
      <div class="text-center mt-16">
        <div class="bg-white rounded-2xl p-8 border border-pink-200 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Une question spécifique ?</h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe de professionnels de santé est à votre disposition pour répondre 
            à vos interrogations personnelles.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
              </svg>
              Poser une question
            </button>
            <button class="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Appeler un expert
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQSection',
  data() {
    return {
      openFAQ: null
    }
  },
  methods: {
    toggleFAQ(index) {
      this.openFAQ = this.openFAQ === index ? null : index
    }
  }
}
</script>

<style scoped>
/* Animations personnalisées */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Amélioration du scroll dans les réponses */
.max-h-\[500px\] {
  max-height: 500px;
  overflow-y: auto;
}

.max-h-\[500px\]::-webkit-scrollbar {
  width: 4px;
}

.max-h-\[500px\]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.max-h-\[500px\]::-webkit-scrollbar-thumb {
  background: #ec4899;
  border-radius: 10px;
}

.max-h-\[500px\]::-webkit-scrollbar-thumb:hover {
  background: #db2777;
}

/* Responsive */
@media (max-width: 768px) {
  .pl-12 {
    padding-left: 3rem;
  }
}

@media (max-width: 640px) {
  .pl-12 {
    padding-left: 1rem;
  }
  
  .flex.items-start.gap-4 {
    gap: 1rem;
  }
}

/* Support pour les navigateurs plus anciens */
@supports not (backdrop-filter: blur(10px)) {
  .hover\\:bg-pink-50\\50:hover {
    background: rgba(253, 242, 248, 0.8);
  }
}

</style>