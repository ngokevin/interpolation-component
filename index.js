if (typeof AFRAME === 'undefined') {
  throw 'Component attempted to register before AFRAME was available.';
}

/**
 * Interpolate component for A-Frame.
 */
AFRAME.registerComponent('network-position', {
  schema: { type: 'vec3' },

  active: false,
  timeout: null,
  duration: 200,

  previousPosition: null,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () { },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    var self = this;

    console.log(oldData);

    this.active = true;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(function () {
      self.active = false;
    }, this.duration);
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  tick: function (t) {
    this.el.setAttribute('position', this.getAttribute('network-position'));
    // console.log(this.el.object3D.position);
  },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { },
});
