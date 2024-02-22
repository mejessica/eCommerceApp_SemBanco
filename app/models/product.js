import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') product_title;
  @attr('string') desc;
  @attr('number') price;
  @attr('string') category_id;
  @attr('string') imglink;
}
