
var gl;
var r = 0.2;
var w = 0.5;
var a = 10;
var points = [];
var colors =[];
var scalingFactor =0.5;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    
    //var vertices = new Float32Array([-1, -1, 0, 1, 1, -1]);
	var vertices = [vec2(r, 0),
					vec2(r+w, 0)];

    createPoints(vertices);
    

    //  Configure WebGL

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    //  Load shaders and initialize attribute buffers
    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // Load the data into the GPU
    
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER,flatten(points), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer
    
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );


    // Load the data into the GPU
    
    var cbufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cbufferId );
    gl.bufferData( gl.ARRAY_BUFFER,flatten(colors), gl.STATIC_DRAW );

// Associate out shader variables with our data buffer
    
var vColor = gl.getAttribLocation( program, "vColor" );
gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
gl.enableVertexAttribArray( vColor );


var scaleLoc = gl.getUniformLocation(program, "scale");
gl.uniform1f(scaleLoc, scalingFactor);

    render();
};


function createPoints(b,c){
    var i;
    for(i=0 ; i<=360 ; i+=a ){
        
        var newPoint1 = vec2(r*Math.cos((Math.PI / 180 )*i), r*Math.sin((Math.PI / 180)*i));
        var newPoint2 = vec2((r+w)*Math.cos((Math.PI / 180 )*i), (r+w)*Math.sin((Math.PI / 180 )*i));
        points.push(newPoint1);  
        colors.push(vec4(Math.random(),Math.random(),Math.random(),1.0)); 
        points.push(newPoint2);
        colors.push(vec4(Math.random(),Math.random(),Math.random(),1.0)); 
    }
    
}


function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, points.length);
}
