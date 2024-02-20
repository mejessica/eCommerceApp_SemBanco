import { module, test } from 'qunit';
import { setupRenderingTest } from 'e-commerce-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | category-product', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CategoryProduct />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CategoryProduct>
        template block text
      </CategoryProduct>
    `);

    assert.dom().hasText('template block text');
  });
});
