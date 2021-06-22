/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import '@material/mwc-button';
import { Layouts } from '@collaborne/lit-flexbox-literals';

class MyMaterial extends connect(store)(PageViewElement) {
  static get styles() {
    return [
      SharedStyles,
      Layouts,
      css`
        div > * {
          margin-bottom: 10px;
        }
      `
    ];
  }

  render() {
    return html`
      <section>
        <div class="layout vertical">
          <mwc-textfield id="name" placeholder="Name" required></mwc-textfield>
          <mwc-textfield id="org" placeholder="Organization / Company"></mwc-textfield>
          <mwc-textfield id="email" type="email" placeholder="Email" required></mwc-textfield>
          <mwc-textarea id="question" placeholder="Question" rows=5 required></mwc-textarea>
          <mwc-button raised class="primary">Submit</mwc-button>
        </div>
      </section>
      <section>
        I am fine, I am non-material content
      </section>
    `;
  }
}

window.customElements.define('my-material', MyMaterial);
