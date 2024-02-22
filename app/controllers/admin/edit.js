import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminEditController extends Controller {
  @action
  editProduct() {
    let title = this.get('model.product_title');
    let desc = this.get('model.desc');
    let price = this.get('model.price');

    let e = document.getElementById('category');
    let category = e.options[e.selectedIndex].value;

    let imglink = this.get('model.imglink');

    let changed_values = {
      title: title,
      desc: desc,
      price: price,
      category: category,
      imglink: imglink,
    };
    console.log(changed_values);
  }

  @action
  deleteProduct() {
    console.log('Delete the product');
  }
}
