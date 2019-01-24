var v2 = {
	padding: {l:40,b:25,t:5,r:40},
	h:0,
	w:0,
	y:0,
	svg:null
}

function initV2() {
	v2.svg = d3.select('#v2').append('svg')
				.attr('width', "100%")
				.attr('height', '100%');
	let dimensions = getDimensions("v2");
	v2.w = Math.floor(dimensions[0]);
	v2.h = Math.floor(dimensions[1]);
}

function drawV2() {
	var sensor_ids=f1_sensors.concat(f2_sensors,f3_sensors,f4_sensors,f5_sensors);
	v2_data_flat=v2_data.map(d=>d.data).flat();
	var x_scale = d3.scaleBand()
						.domain(sensor_ids)
						.range([v2.padding.l, v2.w-v2.padding.r])
						.paddingInner(0.05)
						.align(0);

	var y_scale = d3.scaleLinear()
						.domain(d3.extent(d3.range(v2_data[0].data.length)))
						.range([v2.h-v2.padding.b,v2.padding.t]);

	var color_scale = d3.scaleLinear()
						.domain([d3.min(v2_data_flat,d=>d.p), d3.max(v2_data_flat,d=>d.p)])
						.range([0,1]);

	var color = d3.scaleSequential(d3.interpolateYlOrRd);

	v2.svg.append('g')
			.attr('class', 'bars')
			.selectAll('g')
			.data(v2_data)
			.enter()
			.append('g')
				.attr('class', (d,i)=>"sensor"+i)
				.selectAll('rect')
				.data(d=>d.data)
				.enter()
				.append('rect')
					.attr('x', function(d,i) {id=this.parentNode.__data__.id;return x_scale(id);})
					.attr('y', (d,i)=>y_scale(i))
					.attr('width', x_scale.bandwidth())
					.attr('height', y_scale(0)-y_scale(1)-0.05)
					.attr('fill', function(d,i) {return color(color_scale(d.p));})
					.attr('stroke', 'none');

	// var x_axis = d3.axisBottom(x_scale).tickValues(x_scale.domain().filter(function(d,i) {return !(i%5)}));
	var x_axis = d3.axisBottom(x_scale).tickValues([f1_sensors.reverse()[0],f2_sensors.reverse()[0],f3_sensors.reverse()[0],f4_sensors.reverse()[0],f5_sensors.reverse()[0]]);
	var y_axis = d3.axisLeft(y_scale).ticks(10);

	v2.svg.append('g')
			.attr('class', 'axis x')
			.attr('transform', 'translate(0,'+(v2.h-v2.padding.b)+')')
			.call(x_axis);
	v2.svg.append('g')
			.attr('class', 'axis y')
			.attr('transform', 'translate('+(v2.padding.l)+',0)')
			.call(y_axis)
			.call(g => g.select(".domain").remove());

	v2.svg.append('text')
			.attr("transform", "rotate(-90)")
			.attr('class', 'axis-label')
		    .attr("y", 2)
		    .attr("x",0-(v2.h/2))
		    .attr("dy", "1em")
			.attr('text-anchor', 'middle')
			.attr('stroke', 'black')
			.text('Frequency');

	v2.svg.append('text')
			.attr('class', 'axis-label')
			.attr('transform','translate('+(v2.w/2)+","+(v2.h-10)+")")
			.attr('text-anchor', 'middle')
			.attr('stroke', 'black')
			.text('Sensor ID');
}