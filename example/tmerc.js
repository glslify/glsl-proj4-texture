var ptex = require('../')
var size = Number(process.argv[2]) || 128
var tex = ptex({
  src: '+proj=longlat +datum=WGS84',
  dst: `+proj=cea +lon_0=0 +lat_ts=37.5 +x_0=0 +y_0=0 +ellps=WGS84
    +to_meter=15916580 +no_defs`,
  bounds: [-180,-90,180,90],
  size: [size,size]
})
process.stdout.write(Buffer.from(tex.buffer))
