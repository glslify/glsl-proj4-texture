# glsl-proj4-texture

pre-calculate proj4 coordinate transformations as a texture

# example

generate proj4 texture data:

``` js
var ptex = require('glsl-proj4-texture')
var tex = ptex({
  src: '+proj=longlat +datum=WGS84',
  dst: '+proj=geocent',
  bounds: [-180,-90,180,90],
  size: [256,256]
})
process.stdout.write(Buffer.from(tex.buffer))
```

in your vertex shader using glslify:

``` glsl
precision highp float;
#pragma glslify: ptex = require('glsl-proj4-texture')
attribute vec2 position;
uniform sampler2D coordmap;
uniform float size;
void main () {
  vec3 pt = ptex(coordmap,vec4(-180,-90,180,90),position);
  gl_Position = vec4(pt.xy,0,1);
}
```

# usage

```
usage: glsl-proj4-texture

Write a binary coordinate texture to stdout.

  --size    texture width and height in pixels. default: 128
  --src     proj4 source string
  --dst     proj4 destination string

  -w --west   default: -180
  -s --south  default: -90
  -e --east   default: +180
  -n --north  default: +90

```

# js api

``` js
var ptex = require('glsl-proj4-texture')
```

## var data = ptex(opts)

Return a Float32Array texture from:

* opts.size - texture `[width,height]`. default: `[128,128]`
* opts.src - proj4 source string
* opts.dst - proj4 destination string
* opts.bounds - `[west,south,east,north]` in degrees. default: `[-180,-90,180,90]`

# glsl api

``` glsl
#pragma glslify: ptex = require('glsl-proj4-texture')
```

## vec3 pt = ptex(sampler2D texture, vec4 bbox, vec2 lonlat)

Return a vec3 `pt` from the texture lookup on a texture created with a `bbox`
mapping `lonlat` in degrees to screen coordinates in `pt`.

# install

npm install glsl-proj4-texture

# license

BSD
