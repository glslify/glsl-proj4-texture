# proj4-texture

pre-calculate proj4 coordinate transformations as a texture

# example

``` js
var ptex = require('proj4-texture')
var tex = ptex({
  src: '+proj=longlat +datum=WGS84',
  dst: '+proj=geocent',
  bounds: [-180,-90,180,90],
  size: [256,256]
})
process.stdout.write(Buffer.from(tex.buffer))
```

# format

