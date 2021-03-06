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

/**
 * The RigidbodyMixin class
 * Defines a mixin to add a physics object to a GameObject
 * @param {Object} base The base options to be passed to all mixins
 * @param {number[]} base.position The coordinates of the GameObject
 * @param {Object} module The module specific options
 */
class RigidbodyMixin extends CANNON.Body {
  constructor(base, module) {
    super({mass: 1}); // TODO: Move mass to collider file
    this.position.set(base.position.x, base.position.y, base.position.z);
  }

  /**
   * Update sets the position and rotation of the parent to
   * match the rigidbody
   */
  update(parent, delta) {
    parent.position.x = this.position.x;
    parent.position.y = this.position.y;
    parent.position.z = this.position.z;
    parent.quaternion.x = this.quaternion.x;
    parent.quaternion.y = this.quaternion.y;
    parent.quaternion.z = this.quaternion.z;
    parent.quaternion.w = this.quaternion.w;
  }
}

export { RigidbodyMixin as default };
