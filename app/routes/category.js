import Route from '@ember/routing/route';
// import { products } from '../data/products';

export default class CategoryRoute extends Route {
  // async model(params) {
  //   const response = await fetch('/api/products.json');
  //   const { data } = await response.json();
  //   return data.filter(({ category_id }) => category_id == params.id);
  // }
  model(params) {
    let products = this.store.query('product', {
      //usamos um query() para filtrar os produtos
      filter: {
        //filter atua como parametro de consulta,
        category_id: params.id, //retorna os produtos filtrados com base no arquivo product_id
      },
    });

    return products;
  }
}
