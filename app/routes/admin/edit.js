// app/routes/admin/edit.js
import Route from '@ember/routing/route';
import { products } from '../../data/products';

export default class AdminEditRoute extends Route {
  model(params) {
    let filterd = products.find(({ id }) => id == params.id);

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
