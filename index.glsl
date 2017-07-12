vec3 ptex (sampler2D tex, vec4 bounds, vec2 inpt) {
  vec2 uv = vec2(
    (inpt.x - bounds.x) / (bounds.z-bounds.x),
    (inpt.y - bounds.y) / (bounds.w-bounds.y)
  );
  return texture2D(tex, uv).rgb * vec3(1,2,1);
}
#pragma glslify: export(ptex)
