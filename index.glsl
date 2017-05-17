vec3 ptex (sampler2D tex, vec4 bounds, vec2 input) {
  vec2 uv = vec2(
    (input.x - bounds.x) / (bounds.z-bounds.x),
    (input.y - bounds.y) / (bounds.w-bounds.y)
  );
  return texture2D(tex, uv).rgb;
}
#pragma glslify: export(ptex)
