import { ELEMENTAL_PRODUCT_NAME } from '../config/elemental-types';
import Dashboard from '../pages/index.vue';
import ListElementalResource from '../pages/resource/index.vue';
import CreateElementalResource from '../pages/resource/create.vue';
import ElementalResourceDetails from '../pages/resource/_id.vue';

const routes = [
  {
    name:      `${ ELEMENTAL_PRODUCT_NAME }-c-cluster`,
    path:      `/:product/c/:cluster`,
    component: Dashboard,
  },
  {
    name:      `${ ELEMENTAL_PRODUCT_NAME }-c-cluster-resource`,
    path:      `/:product/c/:cluster/:resource`,
    component: ListElementalResource,
  },
  {
    name:      `${ ELEMENTAL_PRODUCT_NAME }-c-cluster-resource-create`,
    path:      `/:product/c/:cluster/:resource/create`,
    component: CreateElementalResource,
  },
  {
    name:      `${ ELEMENTAL_PRODUCT_NAME }-c-cluster-resource-id`,
    path:      `/:product/c/:cluster/:resource/id`,
    component: ElementalResourceDetails,
  },
];

export default routes;