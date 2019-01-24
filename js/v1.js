var v1 = {
	padding: {l:40,b:20,t:20,r:40},
	h:0,
	w:0,
	y:0,
	x:0,
	svg:null
}

var f1_sensor_coords=[[30, "1", 30.402, 32.224, 0.85], [31, "1", 33.338, 33.558, 1.0], [32, "1", 30.132, 33.839, 0.855], [33, "1", 32.027, 26.336, -0.045], [34, "1", 33.262, 25.235, 0.865], [35, "1", 34.272, 32.215, 0.86], [38, "1", 41.276, 26.274, 0.85], [45, "1", -27.579, 38.2236, 0.729], [46, "1", -27.579, 38.2236, 0.729], [47, "1", -13.188, 32.167, 0.73], [48, "1", -13.188, 32.167, 0.73], [57, "1", 33.247, 23.577, 0.855], [58, "1", 39.666, 25.083, 0.845], [59, "1", 39.643, 23.57, 0.835], [60, "1", 29.959, 12.62, 0.34], [159, "1", -26.2272, -26.1048, 0.379], [160, "1", -26.2272, -26.1048, 0.379], [161, "1", -26.2272, -26.1048, 0.379], [162, "1", -0.151, -19.849, 0.375], [163, "1", -0.151, -19.849, 0.375], [164, "1", -0.151, -19.849, 0.375], [165, "1", 49.57, 32.093, -0.1], [166, "1", 49.57, 32.093, -0.1], [167, "1", 43.161, 3.594, 0.465], [168, "1", 49.57, 32.093, -0.1], [169, "1", 11.1386, 36.1319, -0.34003], [170, "1", 11.1386, 36.1319, -0.34003], [171, "1", 11.1386, 36.1319, -0.34003], [172, "1", 43.161, 3.594, 0.465], [173, "1", 43.161, 3.594, 0.465], [187, "1", -9.8476, 12.8672, 0.379], [188, "1", -9.8476, 12.8672, 0.379], [189, "1", -9.8476, 12.8672, 0.379], [190, "1", -10.9272, -3.349, 0.379], [191, "1", -10.9272, -3.349, 0.379], [192, "1", -10.9272, -3.349, 0.379], [193, "1", -27.579, 38.2236, 0.729], [194, "1", 17.33, 3.793, -0.015], [195, "1", 17.33, 3.793, -0.015], [196, "1", 17.33, 3.793, -0.015], [197, "1", 13.967, 13.844, 0.76]];
var f2_sensor_coords=[[1, "2", -28.366, -28.537, 5.362], [2, "2", -28.366, -28.537, 5.362], [3, "2", -28.366, -28.537, 5.362], [4, "2", -0.581, -19.413, 5.497], [5, "2", -21.537, 3.14, 5.412], [6, "2", -21.537, 3.14, 5.412], [7, "2", -21.537, 3.14, 5.412], [8, "2", -27.818, 38.645, 4.722], [9, "2", -27.818, 38.645, 4.722], [10, "2", -14.277, 32.185, 5.297], [11, "2", -27.818, 38.645, 4.722], [12, "2", -21.133, -9.647, 5.427], [13, "2", -6.883, -16.185, 5.417], [14, "2", -9.616, -3.38, 5.382], [28, "2", -14.277, 32.185, 5.297], [36, "2", 11.226, 36.107, 4.412], [37, "2", 11.226, 36.107, 4.412], [39, "2", 49.462, 32.208, 4.851], [40, "2", 49.462, 32.208, 4.851], [41, "2", 49.462, 32.208, 4.851], [42, "2", 11.226, 36.107, 4.412], [43, "2", 42.685, 3.754, 4.857], [44, "2", 42.685, 3.754, 4.857], [49, "2", -0.005, -0.448, 4.867], [50, "2", -0.005, -0.448, 4.867], [51, "2", -0.005, -0.448, 4.867], [52, "2", -0.581, -19.413, 5.497], [53, "2", -0.581, -19.413, 5.497], [54, "2", 13.942, 10.367, 5.392], [55, "2", 26.787, 13.09, 5.417], [61, "2", 42.685, 3.754, 4.857], [62, "2", 17.096, 4.236, 5.452], [63, "2", 17.096, 4.236, 5.452], [64, "2", 17.096, 4.236, 5.452], [65, "2", 20.444, 21.364, 5.407], [66, "2", 20.444, 21.364, 5.407], [67, "2", 20.444, 21.364, 5.407]];
var f3_sensor_coords=[[15, "3", 42.766, 4.084, 10.161], [16, "3", 42.766, 4.084, 10.161], [17, "3", 42.766, 4.084, 10.161], [18, "3", 17.168, 4.969, 10.001], [19, "3", 17.168, 4.969, 10.001], [20, "3", 17.168, 4.969, 10.001], [21, "3", 20.495, 26.227, 9.996], [56, "3", 0.099, 3.952, 9.921], [68, "3", -0.38, 16.037, 9.839], [69, "3", -0.302, 21.905, 9.816], [70, "3", -0.304, 18.963, 9.826], [71, "3", -0.327, 29.349, 9.851], [72, "3", -0.316, 26.601, 9.831], [73, "3", -2.483, 21.921, 9.811], [74, "3", -2.456, 29.36, 9.836], [75, "3", -2.487, 26.613, 9.826], [79, "3", 20.516, 31.403, 9.981], [80, "3", 20.509, 32.086, 9.981], [81, "3", 23.683, 30.602, 10.001], [82, "3", 23.702, 31.387, 9.996], [83, "3", 17.305, 30.649, 9.966], [84, "3", 17.326, 32.063, 9.941], [85, "3", 20.504, 30.611, 9.981], [88, "3", -7.639, -16.236, 9.896], [89, "3", -9.532, -3.708, 10.096], [90, "3", -27.76, 38.492, 9.236], [91, "3", -19.338, 0.451, 10.116], [92, "3", -19.338, 0.451, 10.116], [93, "3", -17.143, -9.671, 9.956], [94, "3", -19.338, 0.451, 10.116], [95, "3", 1.4, 3.952, 9.911], [96, "3", 8.212, 28.375, 9.811], [97, "3", 8.253, 29.481, 9.886], [98, "3", 5.586, 31.554, 9.876], [99, "3", 14.106, 31.447, 9.981], [100, "3", 8.283, 31.496, 9.876], [101, "3", 10.866, 31.362, 9.918], [102, "3", 2.912, 30.534, 9.886], [103, "3", 2.903, 31.584, 9.891], [104, "3", 30.098, 30.682, 9.811], [105, "3", 20.495, 26.227, 9.996], [106, "3", 20.495, 26.227, 9.996], [107, "3", 30.084, 32.075, 9.811], [108, "3", 30.094, 31.326, 9.811], [116, "3", 6.371, 3.92, 9.906], [117, "3", 0.28, -0.235, 9.221], [118, "3", 0.28, -0.235, 9.221], [119, "3", 0.28, -0.235, 9.221], [120, "3", -0.579, -19.376, 9.236], [121, "3", 1.697, -28.643, 9.236], [122, "3", -0.579, -19.376, 9.236], [123, "3", -0.579, -19.376, 9.236], [124, "3", 41.627, 26.548, 9.966], [125, "3", 41.627, 26.548, 9.966], [126, "3", 1.697, -28.643, 9.236], [127, "3", 1.697, -28.643, 9.236], [128, "3", 36.349, 4.185, 10.051], [129, "3", 23.554, 4.282, 10.136], [130, "3", 29.936, 4.211, 10.216], [131, "3", 2.911, 29.53, 9.896], [132, "3", 0.295, 31.652, 9.866], [133, "3", 6.037, 15.753, 10.116], [134, "3", 6.037, 15.753, 10.116], [135, "3", 6.037, 15.753, 10.116], [137, "3", 41.627, 26.548, 9.966], [155, "3", -14.33, 32.172, 9.236], [156, "3", -27.76, 38.492, 9.236], [157, "3", -14.33, 32.172, 9.236], [158, "3", -27.76, 38.492, 9.236], [176, "3", 10.771, 4.942, 10.051], [180, "3", -0.32, 16.015, 9.836], [181, "3", 10.715, 36.127, 8.996], [182, "3", 10.715, 36.127, 8.996], [183, "3", 10.715, 36.127, 8.996], [184, "3", 48.9637, 34.222, 9.236], [185, "3", 48.9637, 34.222, 9.236], [186, "3", 48.9637, 34.222, 9.236]];
var f4_sensor_coords=[[77, "4", -27.488, 39.031, 13.855], [78, "4", 10.852, 35.941, 13.82], [86, "4", 10.852, 35.941, 13.82], [109, "4", 33.18, 19.699, 14.535], [110, "4", 20.4, 20.061, 14.52], [111, "4", 20.4, 20.061, 14.52], [112, "4", 20.4, 20.061, 14.52], [114, "4", 26.72, 14.093, 14.525], [115, "4", 13.927, 14.778, 14.495], [145, "4", 48.9637, 34.222, 13.796], [146, "4", 48.9637, 34.222, 13.796], [147, "4", 48.9637, 34.222, 13.796], [148, "4", 42.571, 3.486, 13.915], [149, "4", 42.571, 3.486, 13.915], [150, "4", 42.571, 3.486, 13.915], [151, "4", 16.997, 4.297, 14.61], [152, "4", 16.997, 4.297, 14.61], [153, "4", 16.997, 4.297, 14.61], [174, "4", -27.488, 39.031, 13.855], [175, "4", -27.488, 39.031, 13.855], [177, "4", -13.561, 32.568, 13.635], [178, "4", -13.561, 32.568, 13.635], [179, "4", 10.852, 35.941, 13.82]];
var f5_sensor_coords=[[22, "5", 17.158, 11.973, 19.112], [23, "5", 36.364, 11.867, 20.083], [24, "5", 36.364, 11.867, 20.083], [25, "5", 21.458, 16.172, 22.057], [26, "5", 21.458, 16.172, 22.057], [27, "5", 17.158, 11.973, 19.112], [29, "5", 34.229, 15.926, 21.932], [76, "5", 34.229, 15.926, 21.932], [87, "5", 17.158, 11.973, 19.112], [113, "5", 36.364, 11.867, 20.083], [136, "5", -22.379, 31.979, 19.517], [138, "5", -3.791, 25.379, 19.497], [139, "5", -3.791, 25.379, 19.497], [140, "5", -22.379, 31.979, 19.517], [141, "5", -14.126, 25.44, 19.507], [142, "5", -14.126, 25.44, 19.507], [143, "5", -14.126, 25.44, 19.507], [144, "5", -3.791, 25.379, 19.497], [154, "5", -22.379, 31.979, 19.517]];
var sid_to_floor={"133": "3", "91": "3", "131": "3", "130": "3", "137": "3", "136": "5", "135": "3", "90": "3", "139": "5", "138": "5", "93": "3", "24": "5", "25": "5", "86": "4", "92": "3", "20": "3", "21": "3", "22": "5", "23": "5", "95": "3", "28": "2", "29": "5", "94": "3", "4": "2", "8": "2", "96": "3", "87": "5", "120": "3", "121": "3", "122": "3", "123": "3", "124": "3", "125": "3", "126": "3", "127": "3", "128": "3", "129": "3", "59": "1", "58": "1", "132": "3", "55": "2", "54": "2", "57": "1", "56": "3", "51": "2", "50": "2", "53": "2", "52": "2", "179": "4", "134": "3", "195": "1", "194": "1", "197": "1", "196": "1", "191": "1", "190": "1", "193": "1", "192": "1", "115": "4", "114": "4", "88": "3", "89": "3", "111": "4", "110": "4", "113": "5", "176": "3", "82": "3", "83": "3", "80": "3", "81": "3", "119": "3", "118": "3", "84": "3", "85": "3", "141": "5", "27": "5", "3": "2", "7": "2", "26": "5", "178": "4", "108": "3", "109": "4", "102": "3", "103": "3", "100": "3", "101": "3", "106": "3", "107": "3", "104": "3", "105": "3", "39": "2", "38": "1", "33": "1", "32": "1", "31": "1", "30": "1", "37": "2", "36": "2", "35": "1", "34": "1", "60": "1", "61": "2", "62": "2", "63": "2", "64": "2", "65": "2", "66": "2", "67": "2", "68": "3", "69": "3", "175": "4", "174": "4", "173": "1", "172": "1", "171": "1", "170": "1", "181": "3", "182": "3", "183": "3", "180": "3", "2": "2", "186": "3", "187": "1", "184": "3", "6": "2", "188": "1", "189": "1", "97": "3", "185": "3", "99": "3", "98": "3", "168": "1", "169": "1", "164": "1", "165": "1", "166": "1", "167": "1", "160": "1", "161": "1", "162": "1", "163": "1", "11": "2", "10": "2", "13": "2", "12": "2", "15": "3", "14": "2", "17": "3", "16": "3", "19": "3", "18": "3", "117": "3", "116": "3", "151": "4", "150": "4", "153": "4", "152": "4", "155": "3", "154": "5", "157": "3", "156": "3", "159": "1", "158": "3", "112": "4", "48": "1", "49": "2", "46": "1", "47": "1", "44": "2", "45": "1", "42": "2", "43": "2", "40": "2", "41": "2", "1": "2", "5": "2", "9": "2", "146": "4", "147": "4", "144": "5", "145": "4", "142": "5", "143": "5", "140": "5", "177": "4", "148": "4", "149": "4", "77": "4", "76": "5", "75": "3", "74": "3", "73": "3", "72": "3", "71": "3", "70": "3", "79": "3", "78": "4"};
var sensor_coords=[f1_sensor_coords,f2_sensor_coords,f3_sensor_coords,f4_sensor_coords,f5_sensor_coords];
var floormap_outer=[[['0', '0'], ['11.14', '0']],
     [['11.14', '0'], ['11.14', '3.79']],
     [['11.14', '3.79'], ['17.33', '3.79']],
     [['17.33', '3.79'], ['43.16', '3.59']],
     [['43.16', '3.59'], ['49.57', '3.59']],
     [['49.57', '3.59'], ['49.57', '32.09']],
     [['49.57', '32.09'], ['34.27', '32.21']],
     [['34.27', '32.21'], ['34.27', '36.13']],
     [['34.27', '36.13'], ['11.14', '36.13']],
     [['11.14', '36.13'], ['11.14', '38.22']],
     [['11.14', '38.22'], ['-27.58', '38.22']],
     [['-27.58', '38.22'], ['-26.23', '-26.1']],
     [['-26.23', '-26.1'], ['-13.19', '-26.1']],
     [['-13.19', '-26.1'], ['-13.19', '-19.85']],
     [['-13.19', '-19.85'], ['-0.15', '-19.85']],
     [['-0.15', '-19.85'], ['0', '0']],
     [['0', '0'], ['11.14', '0']],
     [['11.14', '0'], ['11.14', '3.79']],
     [['11.14', '3.79'], ['17.33', '3.79']],
     [['17.33', '3.79'], ['43.16', '3.59']],
     [['43.16', '3.59'], ['49.57', '3.59']],
     [['49.57', '3.59'], ['49.57', '32.21']],
     [['49.57', '32.21'], ['34.27', '32.21']],
     [['34.27', '32.21'], ['34.27', '36.13']],
     [['34.27', '36.13'], ['11.14', '36.13']],
     [['11.14', '36.13'], ['11.14', '38.22']],
     [['11.14', '38.22'], ['-27.58', '38.22']],
     [['-27.58', '38.22'], ['-26.23', '-26.1']],
     [['-26.23', '-26.1'], ['-13.19', '-26.1']],
     [['-13.19', '-26.1'], ['-13.19', '-19.85']],
     [['-13.19', '-19.85'], ['-0.15', '-19.85']],
     [['-0.15', '-19.85'], ['0', '0']],
     [['0', '0'], ['11.14', '0']]];
var floormap_inner=[
     [['17.158', '11.973'], ['36.364', '11.867']],
     [['36.364', '11.867'], ['36.364', '25.379']],
     [['36.364', '25.379'], ['-3.791', '25.379']],
     [['-3.791', '25.379'], ['-14.126', '25.44']],
     [['-14.126', '25.44'], ['-14.126', '31.979']],
     [['-14.126', '31.979'], ['-22.379', '31.979']],
     [['-22.379', '31.979'], ['-22.379', '16']],
     [['-22.379', '16'], ['-2.6105', '13.9865']],  
     [['-2.6105', '13.9865'], ['17.158', '11.973']],
     [['17.158', '11.973'], ['36.364', '11.867']]];
var height_scale, x_scale, y_scale, color_scale, color;

function initV1() {
	v1.svg=[];
	let dimensions = getDimensions("v1");
	v1.w = Math.floor(dimensions[0])/5;
	v1.h = Math.floor(dimensions[1]);
	['.first','.second','.third','.fourth','.fifth'].forEach((f,i)=>v1.svg.push(addFloorSVG(f,i)));
}

function addFloorSVG(selector, id) {
	return d3.select(selector).append('svg')
			.attr('width', "100%")
			.attr('height', "100%")
            .attr('id', id)
		.call(
			d3.drag()
				.on('drag', dragged)
				.on('start', dragStart)
				.on('end', dragEnd))
		.append('g')
			.attr("stroke","black");
}

var origin = [100, 170], beta = 0,
	cubesData = [[],[],[],[],[]], yLineInner=[[],[],[],[],[]],
	yLineOuter=[[],[],[],[],[]], alpha = 0,
	yStartAngle = -0.4166025040629945, xStartAngle=0.37562520858138826;
var mx, my, mouseX, mouseY;
var cubes3D = d3._3d()
    .shape('CUBE')
    .x(function(d){ return d.x; })
    .y(function(d){ return d.y; })
    .z(function(d){ return d.z; })
    .rotateY(yStartAngle)
    .rotateX(xStartAngle);

var yScale3dInner = d3._3d()
    .shape('LINE_STRIP')
    .rotateX(xStartAngle)
    .rotateY(yStartAngle);

var yScale3dOuter = d3._3d()
    .shape('LINE_STRIP')
    .rotateX(xStartAngle)
    .rotateY(yStartAngle);

function dragged() {
	let id=this.id;
    mouseX = mouseX || 0;
    mouseY = mouseY || 0;
    beta   = (d3.event.x - mx + mouseX) * Math.PI / 230 ;
    alpha  = (d3.event.y - my + mouseY) * Math.PI / 230  * (-1);

    let data = [
        yScale3dInner.rotateY(beta + yStartAngle)([yLineInner[id]]),
        yScale3dOuter.rotateY(beta + yStartAngle)([yLineOuter[id]]),
        cubes3D.rotateY(beta + yStartAngle)(cubesData[id])
    ];
    processData(id,data, 0);
}

function dragStart() {
    mx = d3.event.x;
    my = d3.event.y;
}

function dragEnd() {
    mouseX = d3.event.x - mx + mouseX;
    mouseY = d3.event.y - my + mouseY;
}

function processData(id, data, tt){
	let parent=v1.svg[id];
	var cubes = parent.selectAll('g.cube').data(data[2], function(d){ return d.id });
    var yScaleInner = parent.selectAll('path.yScaleInner').data(data[0]);
    var yScaleOuter = parent.selectAll('path.yScaleOuter').data(data[1]);

    var faces = cubes
        .enter()
        .append('g')
        	.attr('class', 'cube')
            .attr('fill', function(d){ return d.color; })
            .attr('stroke', function(d){ return d3.color(d.color).darker(2);})
            .attr('stroke-width', 0.5)
	        .on("selected", function(d) {
	            sid=d3.event.detail.id;
	            if(+sid===d.id) {
	                currCube=d3.select(this);
	                currCube.attr("fill","red");
	                currCube.attr("stroke","red");
	            }
	        })
	        .on("unselected", function(d,i) {
	            sid=d3.event.detail.id;
	            if(+sid===d.id) {
	                currCube=d3.select(this);
	                currCube.attr("fill","steelblue");
	                currCube.attr("stroke","steelblue");
	            }
	        })
	        .on("mouseover", function(d) {
	            // return sensorMouseOver(d.id);
	        })
	        .on("mouseout", function(d) {
	            // return sensorMouseOut(d.id);
	        })
	    .merge(cubes)
        .selectAll('path.face')
        	.data(d=>d.faces, d=>d.face);

     faces
        .enter()
        .append('path')
        	.attr('class', 'face')
        .merge(faces)
        .transition()
        	.attr('d', cubes3D.draw);

    yScaleInner
        .enter()
        .append('path')
        	.attr('class', 'yScaleInner')
        	.attr('stroke', 'black')
	        .attr('stroke-width', 0.75)
	        .attr('fill','none')
        .merge(yScaleInner)
        	.attr('d', yScale3dInner.draw);

    if(id!=4)
        yScaleOuter
            .enter()
            .append('path')
    	        .attr('class', 'yScaleOuter')
    	        .attr('stroke', 'black')
    	        .attr('stroke-width', 0.75)
    	        .attr('fill','none')
            .merge(yScaleOuter)
            	.attr('d', yScale3dOuter.draw);
}

function makeCube(h, x, z){
    return [
        {x: x - 3, y: h, z: z + 3}, // FRONT TOP LEFT
        {x: x - 3, y: 0, z: z + 3}, // FRONT BOTTOM LEFT
        {x: x + 3, y: 0, z: z + 3}, // FRONT BOTTOM RIGHT
        {x: x + 3, y: h, z: z + 3}, // FRONT TOP RIGHT
        {x: x - 3, y: h, z: z - 3}, // BACK  TOP LEFT
        {x: x - 3, y: 0, z: z - 3}, // BACK  BOTTOM LEFT
        {x: x + 3, y: 0, z: z - 3}, // BACK  BOTTOM RIGHT
        {x: x + 3, y: h, z: z - 3}, // BACK  TOP RIGHT
    ];
}

function drawV1() {
    height_scale = d3.scaleLinear()
                            .domain(d3.extent(Object.values(v1_data).slice(0,196), d=>parseFloat(d)))
                            .range([-1, -1*v1.h/2])
                            .clamp(true);
    x_scale = d3.scaleLinear()
                            .domain([d3.min(floormap_outer.flat(), d=>parseFloat(d[0])),
                                     d3.max(floormap_outer.flat(), d=>parseFloat(d[0])),])
                            .range([v1.padding.l, v1.w-v1.padding.r])
                            .clamp(true);
    y_scale = d3.scaleLinear()
                            .domain([d3.min(floormap_outer.flat(), d=>parseFloat(d[1])),
                                     d3.max(floormap_outer.flat(), d=>parseFloat(d[1])),])
                            .range([v1.h-v1.padding.b, v1.padding.t])
                            .clamp(true);

    color = d3.scaleSequential(d3.interpolateYlOrRd);
    color_scale = d3.scaleLinear()
                            .domain(d3.extent(Object.values(v1_data).slice(0,196), d=>parseFloat(d)))
                            .range([0,1]);

    origin = [x_scale.range()[0]+15, y_scale.range()[0]]
    yScale3dInner.origin(origin);
    cubes3D.origin(origin);
    yScale3dOuter.origin(origin);

    d3.range(5).forEach(function(id) {
        yLineInner[id] = [];
        yLineOuter[id] =[];
        cubesData[id] =[];
        for(let i=0;i<floormap_inner.length; i++){
            yLineInner[id].push([x_scale(parseFloat(floormap_inner[i][0][0])),1,
                                 y_scale(parseFloat(floormap_inner[i][0][1]))]);

        }
        for(let i=0;i<floormap_outer.length; i++){
            yLineOuter[id].push([x_scale(parseFloat(floormap_outer[i][0][0])),1,
                                 y_scale(parseFloat(floormap_outer[i][0][1]))])
        }
        for(let i=0;i<sensor_coords[id].length; i++) {
            let x=x_scale(parseFloat(sensor_coords[id][i][2]));
            let z=y_scale(parseFloat(sensor_coords[id][i][3]));
            let h=height_scale(parseFloat(v1_data[sensor_coords[id][i][0]-1]))

            let _cube=makeCube(h,x,z);
            _cube.id=sensor_coords[id][i][0];
            _cube.color=color(color_scale(parseFloat(v1_data[sensor_coords[id][i][0]-1])));

            cubesData[id].push(_cube);
        }

        let data = [
            yScale3dInner([yLineInner[id]]),
            yScale3dOuter([yLineOuter[id]]),
            cubes3D(cubesData[id])
        ];
        processData(id, data, 1000);
    });
}

function updateV1() {
    height_scale = d3.scaleLinear()
    						.domain(d3.extent(Object.values(v1_data).slice(0,196), d=>parseFloat(d)))
    						.range([-1, -1*v1.h/2])
    						.clamp(true);

    color_scale = d3.scaleLinear()
    						.domain(d3.extent(Object.values(v1_data).slice(0,196), d=>parseFloat(d)))
    						.range([0,1]);

    origin = [x_scale.range()[0]+15, y_scale.range()[0]]
    yScale3dInner.origin(origin);
    cubes3D.origin(origin);
    yScale3dOuter.origin(origin);

    d3.range(5).forEach(function(id) {
        cubesData[id] =[];
        for(let i=0;i<sensor_coords[id].length; i++) {
        	let x=x_scale(parseFloat(sensor_coords[id][i][2]));
        	let z=y_scale(parseFloat(sensor_coords[id][i][3]));
            let h=height_scale(parseFloat(v1_data[sensor_coords[id][i][0]-1]))

        	let _cube=makeCube(h,x,z);
        	_cube.id=sensor_coords[id][i][0];
        	_cube.color=color(color_scale(parseFloat(v1_data[sensor_coords[id][i][0]-1])));

        	cubesData[id].push(_cube);
        }

        let data = [
            yScale3dInner([yLineInner[id]]),
            yScale3dOuter([yLineOuter[id]]),
            cubes3D(cubesData[id])
        ];
        processData(id, data, 1000);
    });
}



