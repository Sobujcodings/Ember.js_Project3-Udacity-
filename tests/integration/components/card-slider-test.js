import { module, test } from 'qunit';
import { setupRenderingTest } from 'udacity/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card-slider', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CardSlider />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CardSlider>
        template block text
      </CardSlider>
    `);

    assert.dom().hasText('template block text');
  });
});
