var proj = require('proj4')

module.exports = function (opts) {
  var width = opts.size ? opts.size[0] : 128
  var height = opts.size ? opts.size[1] : 128
  var src = opts.src
  var dst = opts.dst
  var bounds = opts.bounds || [-180,-90,180,90]
  var input = [0,0], output
  var data = new Float32Array(width*height*3)
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      input[0] = x/(width-1) * (bounds[2]-bounds[0]) + bounds[0]
      input[1] = y/(height-1) * (bounds[3]-bounds[1]) + bounds[1]
      output = proj(src,dst,input)
      data[y*width*3+x*3+0] = output[0]
      data[y*width*3+x*3+1] = output[1]
      data[y*width*3+x*3+2] = output[2] || 0
    }
  }
  return data
}
