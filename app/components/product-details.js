import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductDetailsComponent extends Component {
  @service cartService;

  @action
  addToCart() {
    let product_id = window.document.URL.split('/').pop(); //pega o id da url
    const { title, desc, price, source } = this.args;

    this.cartService.addProduct({
      product_id,
      title,
      desc,
      price,
      source,
    });

    alert('Product is added to cart');
  }
}
