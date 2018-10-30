import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cocktail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cocktail');
    assert.ok(route);
  });
});
