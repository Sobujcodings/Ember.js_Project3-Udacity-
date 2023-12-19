import { module, test } from 'qunit';
import { setupRenderingTest } from 'udacity/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CardComponent />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CardComponent>
        template block text
      </CardComponent>
    `);

    assert.dom().hasText('template block text');
  });
});
