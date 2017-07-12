#!/usr/bin/env node
var ptex = require('../')
var fs = require('fs')
var path = require('path')
var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  default: {
    size: 128, w: -180, s: -90, e: 180, n: 90,
    src: '+proj=longlat +datum=WGS84',
    dst: '+proj=longlat +datum=WGS84'
  },
  alias: {
    w: 'west', s: 'south', e: 'east', n: 'north',
    h: 'help'
  },
  boolean: [ 'help' ]
})
if (argv.help) {
  return fs.createReadStream(path.join(__dirname,'usage.txt'))
}
var tex = ptex({
  src: argv.src,
  dst: argv.dst,
  bounds: [argv.w,argv.s,argv.e,argv.n],
  size: [argv.size,argv.size]
})
process.stdout.write(Buffer.from(tex.buffer))
