import Route from '@ember/routing/route';
// import { products } from '../../data/products';

export default class AdminEditRoute extends Route {
  async model(params) {
    // console.log(params)
    // let filtered = products.filter(({ id }) => {console.log(id)
    //   id == params.id});

    const response = await fetch('/api/products.json');
    const { data } = await response.json();
    let filterd = data.filter(({ id }) => id == params.id)[0];

    let product = {
      product_title: filterd.product_title,
      desc: filterd.desc,
      price: filterd.price,
      category: filterd.category_id,
      imglink: filterd.imglink,
    };

    return product;
  }
}
