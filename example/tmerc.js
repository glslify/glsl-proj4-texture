var ptex = require('../')
var tex = ptex({
  src: '+proj=longlat +datum=WGS84',
  dst: `+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +ellps=GRS80
    +units=m +k_0=0.0000019268500651226404 +x_0=0.35589838645697514
    +y_0=-0.34185734540971613`,
  bounds: [-180,-90,180,90],
  size: [128,128]
})
process.stdout.write(Buffer.from(tex.buffer))
