import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
class Product {
  @tracked count; //contem a contagem dos produtos
  product_id;
  title;
  desc;
  source;
  price;

  constructor(product) {
    //inicializamos todos os atributos
    this.product_id = product.product_id;
    this.count = product.count;
    this.title = product.title;
    this.desc = product.desc;
    this.source = product.source;
    this.price = product.price;
    this.total = product.total;
  }
}

export default class CartServiceService extends Service {
  @tracked productsList = []; //criamos a productList como um array e o marcamos como tracked. os carrinhos serao add aqui

  addProduct(product) {
    //definimos a addProduct function
    // this.productsList = [...this.productsList, product]; //atualizamos adicionando o produto anterior e o novo produto.

    const existingProduct = this.productsList.find(({ product_id }) => {
      return product_id == product.product_id;
    });

    if (existingProduct) {
      existingProduct.count += 1;
      existingProduct.total = existingProduct.price * existingProduct.count;
    } else {
      this.productsList = [
        ...this.productsList,
        new Product({
          ...product,
          count: 1,
          total: product.price,
        }),
      ];
    }
  }
}
