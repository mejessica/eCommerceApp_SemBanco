import { module, test } from 'qunit';
import { setupTest } from 'e-commerce-app/tests/helpers';

module('Unit | Route | category/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:category/index');
    assert.ok(route);
  });
});
