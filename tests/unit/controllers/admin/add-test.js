import { module, test } from 'qunit';
import { setupTest } from 'e-commerce-app/tests/helpers';

module('Unit | Controller | admin/add', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:admin/add');
    assert.ok(controller);
  });
});
