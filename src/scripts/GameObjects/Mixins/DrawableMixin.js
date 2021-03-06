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

var loader = new THREE.JSONLoader();
var objPath = window.location.pathname + 'gamedata/mesh/';

/**
 * The DrawableMixin class
 * Defines a mixin to add a visible model to a GameObject
 * @param {Object} base The base options to be passed to all mixins
 * @param {number[]} base.position The coordinates of the GameObject
 * @param {Object} module The module specific options
 * @param {string} module.object The name of the obj file for this mesh
 * @param {string} module.material The name of the mat file for this mesh
 */
class DrawableMixin extends THREE.Mesh{
  constructor(base, module) {
    super();
  }
}

export { DrawableMixin as default };
