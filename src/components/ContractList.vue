<template>
    <div class="contracts-list">
      <h2 class="list-title">Aktualne umowy</h2>
      <ul>
        <li v-for="contract in contracts" :key="contract.id" class="contract-item">
          {{ contract.title }} - {{ contract.amount }} zł
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContractsList",
    data() {
      return {
        contracts: [
          // Przykładowe dane - tutaj powinny być dane z API
          { id: 1, title: "Umowa 1", amount: 100000 },
          { id: 2, title: "Umowa 2", amount: 150000 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .contracts-list {
    margin-bottom: 2rem;
  }
  
  .list-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  </style>