import Route from '@ember/routing/route';
import { categories } from '../data/categories';

export default class IndexRoute extends Route {
  model() {
    return categories;
  }
}
