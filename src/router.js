// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProjectList from '@/components/ProjectList.vue';
import ContractList from '@/components/ContractList.vue';
import InvoiceList from '@/components/InvoiceList.vue';
import ProtocolList from '@/components/ProtocolList.vue';
import AnnexList from '@/components/AnnexList.vue';

const routes = [
  { path: '/projects', component: ProjectList, name: 'Lista projektów' },
  { path: '/contracts', component: ContractList, name: 'Lista umów'},
  { path: '/invoices', component: InvoiceList, name: 'Lista faktur' },
  { path: '/protocols', component: ProtocolList, name: 'Lista protokołów' },
  { path: '/annexes', component: AnnexList, name: 'Lista aneksów' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
