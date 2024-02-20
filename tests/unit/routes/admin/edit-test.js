import { module, test } from 'qunit';
import { setupTest } from 'e-commerce-app/tests/helpers';

module('Unit | Route | admin/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:admin/edit');
    assert.ok(route);
  });
});
