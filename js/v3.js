var v3 = {
	padding: {l:40,b:40,t:5,r:40},
	h:0,
	w:0,
	y:0,
	svg:null
}

function initV3() {
	v3.svg = d3.select('#v3').append('svg')
				.attr('width', "100%")
				.attr('height', '100%');
	let dimensions = getDimensions("v3");
	v3.w = Math.floor(dimensions[0]);
	v3.h = Math.floor(dimensions[1]);
}

function drawV3() {
	var stack = d3.stack()
					.keys(d3.range(197))
					.order(d3.stackOrderDescending);
	var s_data = stack(v3_data);

	var y_min = d3.min(s_data.flat(), d=>d[1]);
	var y_max = d3.max(s_data.flat(), d=>d[1]);

	var x_scale = d3.scaleTime()
					.domain([new Date(v3_data[0].ts), new Date(v3_data[v3_data.length-1].ts)])
					.range([v3.padding.l, v3.w-v3.padding.r]);

	var y_scale = d3.scaleLinear()
					.domain([y_min, y_max])
					.range([v3.h-v3.padding.b,v3.padding.t]);
    
    var color_scale = d3.scaleLinear()
    					.domain([0,196])
    					.range([0,1]);

    var color = d3.scaleSequential(d3.interpolateSpectral);

	var x_axis = d3.axisBottom(x_scale)
					.ticks(d3.timeMinute.every(1))
					.tickFormat(d3.timeFormat("%I:%M:%S"));

	var p = Math.max(0, d3.precisionRound(0.0, 1.0) - 1)
	var y_axis = d3.axisLeft(y_scale)
					.tickFormat(d3.format("." + p + "e"));

	var area = d3.area()
				.x(d=>x_scale(new Date(d.data.ts)))
				.y0(d=>y_scale(d[0]))
				.y1(d=>y_scale(d[1]));

	v3.svg.append('g')
			.selectAll('path')
			.data(s_data)
			.enter()
			.append('path')
				.attr('fill',(d,i)=>color(color_scale(i)))
				.attr('d', area);

	v3.svg.append('g')
			.attr('class', 'axis x')
			.attr('transform', 'translate(0,'+(v3.h-v3.padding.b)+')')
		.call(x_axis)
		.call(g => g.select(".domain").remove());

	v3.svg.append('g')
			.attr('class', 'axis y')
			.attr('transform', 'translate('+(v3.padding.l)+',0)')
		.call(y_axis)
		.call(g=>g.select('.domain').remove());

	v3.svg.append('text')
			.attr('class', 'axis-label')
			.attr('transform','translate('+(v3.w/2)+","+(v3.h-10)+")")
			.attr('text-anchor', 'middle')
			.attr('stroke', 'black')
			.text('Time');

}