import Controller from '@ember/controller';
import { inject as service } from '@ember/service'; //injetamos o service no cart controller para aacessar o productList no cart template

export default class CartController extends Controller {
  @service cartService; //usamos o cartSerice usando o @service decorator
}
