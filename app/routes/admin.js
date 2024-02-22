import Route from '@ember/routing/route';
// import { products } from '../data/products';

export default class AdminRoute extends Route {
  // async model() {
  //   const response = await fetch('/api/products.json');
  //   const { data } = await response.json();
  //   return data;
  // }
  model() {
    let products = this.store.findAll('product'); //store ajuda a recuperar os produtos. o finAll é um method que primeiro verifica localmente os record. caso nao ache faz uma chamada para o products no banco de dados
    return products;
  }
}
