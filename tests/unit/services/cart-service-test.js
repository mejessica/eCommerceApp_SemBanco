import { module, test } from 'qunit';
import { setupTest } from 'e-commerce-app/tests/helpers'; //configurar o gancho do ciclo de vida de teste

module('Unit | Service | cart-service', function (hooks) {
  setupTest(hooks);

  test('Products List Tests ', function (assert) {
    let service = this.owner.lookup('service:cart-service'); //instancia do cart-service
    let length = service.productsList.length; //comprimento do arquivo
    assert.equal(length, 0, 'Product List is empty'); // verifica se o comprimento de productsList é igual a 0 e exibe uma mensagem informando que productList está vazio

    service.addProduct({}); //add um produto productList chamado addProduct a service function
    length = service.productsList.length; //recebe o comprimento productList após add
    assert.equal(length, 1, 'Product List contains one item'); //verifica se o comprimento productList aumenta em 1
  });
});
