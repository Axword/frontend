<!-- components/huge/ListView.vue -->
<template>
  <div class="list-view">
    <div class="list-view__titlebar">
      <div class="list-view__description">
        <h1 class="list-view__page-title">{{ title }}</h1>
      </div>
      <v-btn color="primary" class="list-view__add-button" @click="$emit('onButtonClick')">{{ buttonLabel }}</v-btn>
    </div>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="list-view__table  elevation-1 primary"
      ></v-data-table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    description: {
      type: String,
      required: true,
    },
      title: {
        type: String,
        required: true,
      },
      buttonLabel: {
        type: String,
        required: true,
      },
      headers: {
        type: Array,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
<style scoped>
.fix-stroke {
   paint-order: stroke fill;
}
.list-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.list-view__titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.list-view__page-title {
  font-size: 2rem;
  font-weight: 600;
  color: #36373b;
  margin-top: 1rem;
}

.list-view__add-button {
  height: 3rem;
}

.list-view__table {
  opacity: 0.8;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
}

</style>