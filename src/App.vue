<template>
  <v-app>

    <v-navigation-drawer app color="#6d615d" dark>
      <v-list dense>
        <v-list-item-action>
            <v-icon @click="drawer = !drawer">mdi-close</v-icon>
          </v-list-item-action>
          <v-list-item v-for="navItem in navItems" :key="navItem.path" :to="navItem.path">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-list-item-icon v-on="on">
                <v-icon>{{ navItem.icon }}</v-icon>
              </v-list-item-icon>
            </template>
            <span>{{ navItem.description }}</span>
          </v-tooltip>
          <v-list-item-content>
            <v-list-item-title>{{ navItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#6d615d" dark>
    <v-breadcrumbs :items="[{ text: routeName }]" divider=">" class="breadcrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :disabled="true" class="title">{{ item.text }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
      <v-toolbar-title class="top-view-title">Nazwa strony</v-toolbar-title>
    </v-app-bar>

    <v-main class="main-content">
      <router-view></router-view>
    </v-main>
    <v-footer app color="#E0E0CE">
      <span class="bottom-view-text">Stworzone przez Michała Cybulskiego 2023</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      tooltip: {
        visible: false,
        content: '',
      },
      navItems: [
        { path: '/projects', title: 'Projekty', icon: 'mdi-project', description: 'Lista odpowiedzialna za projekty' },
        { path: '/contracts', title: 'Umowy', icon: 'mdi-file-document', description: 'Lista odpowiedzialna za projekty'},
        { path: '/invoices', title: 'Faktury', icon: 'mdi-receipt', description: 'Lista odpowiedzialna za projekty' },
        { path: '/protocols', title: 'Protokoły', icon: 'mdi-file-document-outline', description: 'Lista odpowiedzialna za projekty' },
        { path: '/annexes', title: 'Załączniki', icon: 'mdi-file-document-box-multiple', description: 'Lista odpowiedzialna za projekty' },
      ],
    };
  },
  computed: {
    routerName() {
      return this.$route.name;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700&display=swap");
/* Put global styles here */

body {
  font-family: "Open Sans", sans-serif;
  background-color: #E0E0CE;
}

.text-center {
  display: block;
  text-align: center;
}

.top-view-title {
  font-weight: 900;
  font-size: 26px;
  color: #D6C9C9;
}

.bottom-view-text {
  font-size: 18px;
  color: #000;
  opacity: 0.7;
}

.v-list-item {
  font-size: 18px;
  color: white;
}
.main-content {
  background-image: url('@/assets/main.jpeg');
  background-size: cover;
  background-position: center;
}
/* Colors */
.primary {
  background-color: #6d615d;
}

.secondary {
  background-color: #36373b;
}

.accent {
  background-color: #D6C9C9;
}

.background {
  background-color: #E0E0CE;
}

.v-app-bar {
  border-bottom: 1px solid #D6C9C9;
}
.v-footer {
  border-top: 1px solid #000;
}
</style>