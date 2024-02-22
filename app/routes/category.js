import Route from '@ember/routing/route';
// import { products } from '../data/products';

export default class CategoryRoute extends Route {
  async model(params) {
    const response = await fetch('/api/products.json');
    const { data } = await response.json();
    return data.filter(({ category_id }) => category_id == params.id);
  }
}
