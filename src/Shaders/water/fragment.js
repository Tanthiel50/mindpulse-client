export const waterFragmentShader = `uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform vec3 uBlackColor;


// Vertex Varyings calling
varying float vElevation;

void main()
{
    float mixStrenght = (vElevation + uColorOffset) * uColorMultiplier;
    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrenght );
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
}`;
