import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class CategoryRoute extends Route {
  model(params) {
    return products.filter(({ category_id }) => category_id == params.id);
  }
}
