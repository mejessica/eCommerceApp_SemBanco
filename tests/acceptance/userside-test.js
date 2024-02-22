import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'e-commerce-app/tests/helpers';

module('Acceptance | userside', function (hooks) {
  setupApplicationTest(hooks);

  test('User side workflow test', async function (assert) {
    
    await visit('/');
    assert.equal(currentURL(), '/',"Home Visit Test");

    await visit('category/men');
    assert.equal(currentURL(), 'category/men',"Category Route Visit Test");

    await visit('/admin');
    assert.equal(currentURL(), '/admin',"Admin Route Visit Test");
  });
});
