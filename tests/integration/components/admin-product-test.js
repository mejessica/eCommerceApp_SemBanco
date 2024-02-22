import { module, test } from 'qunit';
import { setupRenderingTest } from 'e-commerce-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | admin-product', function (hooks) {
  setupRenderingTest(hooks);

  test('Output Testing', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AdminProduct />`);

    assert.dom(this.element).hasText('$');

    this.set('price', 12);

    // Template block usage:
    await render(hbs`
    <AdminProduct @price = {{currencysign this.price currency = ""}}>
        template block text
      </AdminProduct>
    `);

    assert.dom(this.elemente).hasText('$ 12');
  });
});
