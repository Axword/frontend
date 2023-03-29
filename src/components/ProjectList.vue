<!-- ProjectList.vue -->
<!-- src/huge/ProjectList.vue -->
<template>
    <ListView
      :breadcrumbItems="breadcrumbItems"
      :headers="headers"
      :items="projects"
      :createNewItem="createProject"
      button-label="Dodaj projekt"
      title="Lista projektów"
      description="Lista wyświetlająca wszystkie aktualne projekty. Aby dodać nowy projekt kliknij w przycisk po prawej stronie"
    ></ListView>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import ListView from '@/components/huge/ListView.vue';
  
  export default {
    components: {
      ListView,
    },
    data() {
      return {
        breadcrumbItems: [
          { title: 'Projekty', href: '/projects', disabled: false, },
        ],
        headers: [
          { title: 'Numer', value: 'number', sortable: false },
          { title: 'Nazwa', value: 'name', sortable: false },
        ],
      };
    },
    computed: {
      projects() {
        return this.$store.state.projects.projects;
      },
    },
    methods: {
      ...mapActions('projects', ['fetchProjects']),
      createProject() {
        this.$router.push('/projects/create');
      },
    },
    async created() {
      await this.fetchProjects();
    },
  };
  </script>