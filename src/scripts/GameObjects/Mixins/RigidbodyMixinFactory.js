/**
 * @license
 * Copyright (c) 2016 Nicholas Nelson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import RigidbodyMixin from './RigidbodyMixin';
import ColliderLoader from '../../Util/Loaders/ColliderLoader';

/**
 * The RigidbodyMixinFactory class
 */
class RigidbodyMixinFactory {
  constructor() {}

  /**
   * The build function for RigidbodyMixinFactory
   * @param {Object} base The base options for the GameObject
   * @param {string} module.colliderFile The object file to apply to the DM
   */
  build(base, module) {
    var rigidbodyMixin = new RigidbodyMixin(base, module);
    // Return promise which resolves when load of collider data completes
    return ColliderLoader.load(module.colliderFile, rigidbodyMixin);
  }

}

export { RigidbodyMixinFactory as default };
