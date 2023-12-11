import { module, test } from 'qunit';
import { setupRenderingTest } from 'udacity/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | progressbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Progressbar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Progressbar>
        template block text
      </Progressbar>
    `);

    assert.dom().hasText('template block text');
  });
});
