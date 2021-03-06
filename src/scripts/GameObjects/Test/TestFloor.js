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

import GameObject from '../GameObject';

/**
 * A super simple floor cube, used for testing
 */
class TestFloor extends GameObject{
  /**
   * Constructor for TestFloor
   */
  constructor() {
    super();

    // Rendering
    var geometry = new THREE.CubeGeometry(1000, 100, 1000);
    var material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
    this.mesh = new THREE.Mesh(geometry, material);
    this.name = 'TestFloor';
    this.position.set(0, -100, 0);
    this.add(this.mesh);

    // Physics
    this.physicsBody = new CANNON.Body({mass: 0});
    this.physicsBody.addShape(new CANNON.Box(new CANNON.Vec3(500, 50, 500)));
    this.physicsBody.position.set(0, -100, 0);
  }
}

export { TestFloor as default };
