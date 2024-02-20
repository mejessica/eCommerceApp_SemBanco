import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class AdminRoute extends Route {
  model() {
    return products;
  }
}
