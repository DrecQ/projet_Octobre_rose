<template>
  <section id="contact" class="min-h-screen bg-gradient-to-br from-white to-pink-50/30 py-8 md:py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- En-tête -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Centres de <span class="text-pink-600">dépistage</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Retrouvez l'ensemble de nos centres de consultation à travers le Bénin. 
          Notre équipe est à votre écoute pour répondre à toutes vos questions.
        </p>
      </div>

      <!-- Bannière Octobre Rose avec image -->
      <div class="rounded-2xl overflow-hidden mb-12 md:mb-16 shadow-xl">
        <NuxtImg 
          src="/banner-abpf.jpg" 
          alt="Octobre Rose - La prévention sauve des vies ! Un dépistage aujourd'hui, une vie préservée demain."
          class="w-full h-auto object-cover"
        />
      </div>

      <!-- Numéro d'appel important -->
      <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm mb-12 md:mb-16">
        <div class="text-center">
          <div class="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Appel gratuit</h2>
          <p class="text-gray-600 text-lg mb-4">
            Pour toutes informations et conseils
          </p>
          <div class="text-3xl md:text-4xl font-bold text-pink-600 bg-pink-50 rounded-xl p-4 inline-block">
            01 91 53 25 25
          </div>
          <p class="text-gray-500 text-sm mt-3">Du lundi au vendredi, 8h-18h</p>
        </div>
      </div>

      <!-- Grille des centres -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 md:mb-16">
        <div 
          v-for="(centre, index) in centres" 
          :key="index"
          class="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
        >
          <!-- En-tête de la carte -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                {{ centre.nom }}
              </h3>
              <div class="flex items-center gap-2 text-pink-600 font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {{ centre.ville }}
              </div>
            </div>
            <div class="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
          </div>

          <!-- Adresse -->
          <div class="space-y-3 mb-4">
            <div class="flex items-start gap-3">
              <svg class="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div class="text-sm text-gray-600">
                <p v-if="centre.adresse_ligne1" class="leading-relaxed">{{ centre.adresse_ligne1 }}</p>
                <p v-if="centre.adresse_ligne2" class="leading-relaxed">{{ centre.adresse_ligne2 }}</p>
                <p v-if="centre.quartier" class="leading-relaxed">Quartier {{ centre.quartier }}</p>
                <p v-if="centre.bp" class="text-gray-500 mt-1">BP : {{ centre.bp }}</p>
              </div>
            </div>
          </div>

          <!-- Contacts -->
          <div class="space-y-2 pt-4 border-t border-gray-200">
            <!-- Téléphone -->
            <div v-if="centre.telephone" class="flex items-center gap-3">
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="text-sm text-gray-600">{{ centre.telephone }}</span>
            </div>

            <!-- Email -->
            <div v-if="centre.email" class="flex items-center gap-3">
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm text-gray-600 break-all">{{ centre.email }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Carte des régions -->
      <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Nos centres à travers le <span class="text-pink-600">Bénin</span>
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div 
            v-for="region in regions" 
            :key="region.nom"
            class="text-center group cursor-pointer"
            @click="filterByRegion(region.nom)"
          >
            <div class="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-50 group-hover:scale-110 transition-all duration-300">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
              {{ region.nom }}
            </span>
            <p class="text-xs text-gray-500 mt-1">{{ region.count }} centre{{ region.count > 1 ? 's' : '' }}</p>
          </div>
        </div>
      </div>

      <!-- Informations pratiques -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
        <!-- Horaires -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
            <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            Horaires d'ouverture
          </h3>
          <div class="space-y-3 text-sm text-gray-600">
            <div class="flex justify-between">
              <span>Lundi - Vendredi</span>
              <span class="font-medium">8h - 18h</span>
            </div>
            <div class="flex justify-between">
              <span>Samedi</span>
              <span class="font-medium">8h - 13h</span>
            </div>
            <div class="flex justify-between">
              <span>Dimanche</span>
              <span class="font-medium">Fermé</span>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            Services proposés
          </h3>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Consultation et dépistage</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Information et sensibilisation</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Accompagnement psychologique</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Orientation vers des spécialistes</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call-to-action -->
      <div class="text-center">
        <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Prenez rendez-vous <span class="text-pink-600">dès aujourd'hui</span>
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ne laissez pas l'inquiétude vous gagner. Une consultation précoce 
            permet de vous rassurer ou de prendre les mesures nécessaires à temps.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Appeler le 01 91 53 25 25
            </button>
            <button class="border-2 border-pink-600 text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-colors duration-300 flex items-center justify-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Voir tous les centres
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      centres: [
        {
          "nom": "SIEGE SOCIAL",
          "adresse_ligne1": "C / N° 1471 Immeuble AHOSSI",
          "adresse_ligne2": "Dans la rue de la pharmacie Vêdoko",
          "bp": "01BP 1486",
          "ville": "Cotonou",
          "pays": "République du Bénin",
          "telephone": "0191532424",
          "email": "abpf@abpf.org",
          "notes": null
        },
        {
          "nom": "Clinique de Référence Nationale",
          "adresse_ligne1": "C/791 Immeuble AFFOGBOLO",
          "quartier": "Sikecodji",
          "bp": "01BP 1486",
          "ville": "Cotonou",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        },
        {
          "nom": "Centre Socio Educatif de Vêdoko",
          "adresse_ligne1": "Dans la rue de la pharmacie Vêdoko",
          "bp": null,
          "ville": "Cotonou",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        },
        {
          "nom": "Coordination MONO-COUFFO",
          "quartier": "AGNIVEDJI",
          "bp": "BP : 110 LOKOSSA",
          "ville": "LOKOSSA",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        },
        {
          "nom": "Coordination ATACORA - DONGA",
          "quartier": "Ourbouga",
          "bp": "BP : 81 Natitingou",
          "ville": "NATITINGOU",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        },
        {
          "nom": "Coordination BORGOU - ALIBORI",
          "quartier": "TRANZA",
          "bp": "BP : 34 Parakou",
          "ville": "PARAKOU",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        },
        {
          "nom": "Coordination OUEME - PLATEAU",
          "quartier": "OUANDO DJRADO",
          "bp": "BP : 1458",
          "ville": "PORTO-NOVO",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        },
        {
          "nom": "Coordination ZOU-COLLINES",
          "quartier": "ZONGO",
          "bp": null,
          "ville": "BOHICON",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        },
        {
          "nom": "Centre Socio-Educatif de Savalou",
          "quartier": "GBAFFO",
          "bp": "BP : 2188 BOHICON",
          "ville": "SAVALOU",
          "pays": "République du Bénin",
          "telephone": "0191532525 (APPEL GRATUIT)",
          "notes": null
        }
      ],
      regions: [
        { nom: 'Cotonou', count: 3 },
        { nom: 'Lokossa', count: 1 },
        { nom: 'Natitingou', count: 1 },
        { nom: 'Parakou', count: 1 },
        { nom: 'Porto-Novo', count: 1 },
        { nom: 'Bohicon', count: 1 },
        { nom: 'Savalou', count: 1 }
      ]
    }
  },
  methods: {
    filterByRegion(region) {
      // Implémentation future pour filtrer les centres par région
      console.log('Filtrer par région:', region)
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
.grid > div:nth-child(7) { animation-delay: 0.7s; }
.grid > div:nth-child(8) { animation-delay: 0.8s; }
.grid > div:nth-child(9) { animation-delay: 0.9s; }

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