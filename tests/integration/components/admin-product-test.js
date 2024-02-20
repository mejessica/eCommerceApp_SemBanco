import { module, test } from 'qunit';
import { setupRenderingTest } from 'e-commerce-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | admin-product', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AdminProduct />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AdminProduct>
        template block text
      </AdminProduct>
    `);

    assert.dom().hasText('template block text');
  });
});
