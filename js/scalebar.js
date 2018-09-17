// Scalebar - Creates a (vertical) colorized scalebar.
//
// The main reason this is dynamically built is so we can change
// the units if necessary (not implemented yet).
//
// History:
// Feb 3, 2006, Original version, Noel Gorelick, (gorelick@asu.edu)

SCALEBAR_IMAGE_SRC = 'images/scalebar.png';
SCALEBAR_HEIGHT = 150;

var Scalebar = Class.create();
Scalebar.prototype = {};

/**
 * @param {document} doc The document in which to create the container div.
 * @param {Array} limits An array of [low , high] indicating the range of the
 *     scalebar.
 * @param {Array} steps The array of tic marks.  It's assumed the img is
 *     linearly scaled from low to high.
 * @param {string} units Each text legend will have UNITS appended to it.
 */
Scalebar.prototype.initialize = function(doc, limits, steps, units) {
  this.container = makeDiv(doc, {
    position: 'absolute',
    bottom: px(50),
    left: px(10),
    height: px(SCALEBAR_HEIGHT),
    fontSize: px(10),
    whiteSpace: 'nowrap',
    fontFamily: 'Arial, sans serif'
  });
  this.container.style.margin = '35px';
  this.legend = makeDiv(doc);

  var bot = limits[0];
  var top = limits[1];
  var delta = top - bot;

  // Create and place the tic marks and labels.
  for (var i = 0; i < steps.length; i++) {
    var offset = SCALEBAR_HEIGHT * ((top - steps[i]) / delta);
    var div = makeDiv(doc, {
      position: 'absolute',
      top: px(offset),
      height: px(1)
    });

    var tic = makeDiv(doc, {
      position: 'absolute',
      height: px(1),
      width: px(20),
      border: '#000 solid 0px',
      borderTopWidth: px(1)
    });

    var label = makeDiv(doc, {
      position: 'absolute',
      top: em(-0.6),
      left: px(25),
      lineHeight: em(1.0)
    });
    label.appendChild(doc.createTextNode(steps[i] + ' ' + units));

    div.appendChild(tic);
    div.appendChild(label);
    div.className = 'map-text';
    this.legend.appendChild(div);
  }

  var caption = makeDiv(doc, {
    position: 'absolute',
    top: em(-2.0),
    left: px(0)
  });
  caption.appendChild(doc.createTextNode('Elevation'));
  caption.className = 'map-text';

  this.container.appendChild(makeImage(doc, SCALEBAR_IMAGE_SRC));
  this.container.appendChild(this.legend);
  this.container.appendChild(caption);
};

/**
 * Makes this sidebar visible.
 */
Scalebar.prototype.show = function() {
  this.getContainer().style.display = '';
};

/**
 * Hides this sidebar.
 */
Scalebar.prototype.hide = function() {
  this.getContainer().style.display = 'none';
};

/**
 * @return {div} The div element containing this sidebar.
 */
Scalebar.prototype.getContainer = function() {
  return this.container;
};

/**
 * If the scalebar is going to become dynamic, this should
 * destroy the legend and recompute it with new values.
 */
Scalebar.prototype.updateLegend = function() {
};

/**
 * @param {Array} limits An array of [low , high] indicating the range of the
 *     scalebar.
 */
Scalebar.prototype.setLimits = function(limits) {
  this.limits = limits;
  this.updateLegend();
};
