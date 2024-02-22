import Route from '@ember/routing/route';
// import { products } from '../../data/products';

export default class CategoryItemRoute extends Route {
  async model(params) {

    const response  = await fetch('/api/products.json');
    const {data} = await response.json();
    let item = data.find(({ id }) => id == params.itemkey);
    return item;
  }
}