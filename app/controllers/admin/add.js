import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminAddController extends Controller {
  @action
  addProduct() {
    let title = this.title;
    let desc = this.desc;
    let price = this.price;

    let e = document.getElementById('category');
    let category = e.options[e.selectedIndex].value;

    let imglink = this.imglink;

    let obj = {
      title: title,
      desc: desc,
      price: price,
      category: category,
      imglink: imglink,
    };

    console.log(obj);
  }
}