import Route from '@ember/routing/route';
// import { products } from '../data/products';

export default class AdminRoute extends Route {
  async model() {
    const response  = await fetch('/api/products.json');
    const {data} = await response.json();
    return data;
  }
}