# WebGL_Ring_Project
This project represents a simple WebGL application that draws a graph in the shape of a donut.

This project represents a WebGL program written in JavaScript that contains an HTML document. The program draws a series of compound points in the shape of a ring on the HTML5 canvas.

- HTML Section:

The HTML section defines a basic HTML5 document structure with a canvas element.

Two shaders, a vertex shader and a fragment shader, are defined within <script> tags. These shaders are responsible for drawing graphics on the GPU.

Several JavaScript files (webgl-utils.js, initShaders.js, MV.js and ring.js) are imported. These files likely contain helper functions and additional code required for WebGL installation.

The canvas element is given the ID "gl-canvas" and its dimensions are 512x512 pixels.

- JavaScript Section:
- 
Global Variables:

gl: WebGL rendering context.

r: Initial radius of the ring.

w: Width of the ring.

window.onload Function:

An initialization function that runs when the page loads.

The WebGL context is created and error checked.

The vertices array is created and converted to points with the createPoints function.

WebGL is configured and shaders are loaded.

Points and colors are loaded into the GPU.

The drawing is made by calling the render function.

createPoints Function:

It creates the sequences of dots and colors that make up the ring.

Dots and colors are added with the loop using angle a.

rendering Function:

The WebGL background is cleared and drawing is done with the gl.drawArrays function.

## Pdf File
You can see in the pdf file how the output will look depending on the change of some values.

