<!-- ProjectList.vue -->
<template>
    <div>
        <h1>Lista projektów</h1>
        <v-data-table :headers="headers" :items="projects" class="elevation-1">
        </v-data-table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            headers: [
                { text: 'Numer', value: 'number', sortable: false },
                { text: 'Nazwa', value: 'name', sortable: false },
            ],
            projects: [],
        };
    },
    async created() {
        const response = await axios.get('/api/projects/');
        this.projects = response.data;
    },
};
</script>
