import Route from '@ember/routing/route';
import { products } from '../../data/products';

export default class CategoryItemRoute extends Route {
  model(params) {
    let item = products.find(({ id }) => id == params.itemkey);
    return item;
  }
}
