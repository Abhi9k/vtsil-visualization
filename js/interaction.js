var interaction_svg;
var is_zoomed=false;
function initInteraction() {
	interaction_svg = d3.select('.interaction')
						.append('svg')
							.attr('width', W)
							.attr('height', H);
}

function commonMouseover(item, d, type) {
	d3.select('#tooltip')
		.classed('hidden', false);
	d3.selectAll(".sensor"+d.id).dispatch("hovered", {"detail": {"id": d.id}});
}

function commonMouseout(item, d, type) {
	d3.select('#tooltip')
		.classed('hidden', true);
	d3.selectAll(".sensor"+d.id).dispatch("unhovered", {"detail": {"id": d.id}});
}

function calculateTooltipPosition(mx, my, screen_w, screen_h) {
	var pos=[0,0];
	pos[0]=(screen_w-mx<300?(mx-300):mx)
	pos[1]=(screen_h-my<200?(my-200):my);
	return pos;
}

function updateTooltip(data, position) {
	position=calculateTooltipPosition(position[0],position[1],W,H);
	d3.select('#tooltip')
		.style('left', (position[0]+10)+"px")
		.style('top', (position[1]+10)+"px");
	d3.select('#key').text(data[0]);
	d3.select('#value1').text(data[1].key+": "+data[1].value);
	if(data.length>=3) {
		d3.select('#value2').text(data[2].key+": "+data[2].value);
	}else{
		d3.select('#value2').text(" ");
	}
}

d3.select('#zoomv2')
	.on('click', function() {
		zoomInView('v2', 'v3');
	});
d3.select('#zoomv3')
	.on('click', function() {
		zoomInView('v3', 'v2');
	});
d3.select('#reset')
	.on('click', function() {
		resetZoom();
	});

function zoomInView(view_id_1, view_id_2) {
		if(is_zoomed===true)
			return;
		is_zoomed=true;
		// view_id_1 is zoomed-in and view_id_2 is removed
		d3.select('#'+view_id_2+"-parent")
			.classed('hidden', true);
		d3.select('#'+view_id_1+"-parent")
			.classed('hidden', false);
		d3.select('#'+view_id_1).select('svg').remove();
		d3.select('#'+view_id_1+"-parent")
			.style('height',"75%");
		if(view_id_1==='v2') {
			initV2();
			drawV2();			
		}else if(view_id_1==='v3') {
			initV3();
			drawV3();
		}
}

function resetZoom() {
		if(is_zoomed===false)
			return;
		is_zoomed=false;
		d3.select('#v2-parent')
			.classed('hidden', false);
		d3.select('#v3-parent')
			.classed('hidden', false);
		d3.select('#v2-parent')
			.style('height',"45%");
		d3.select('#v3-parent')
			.style('height',"30%");
		d3.select('#v2').select('svg').remove();
		d3.select('#v3').select('svg').remove();
		initV2();
		initV3();
		drawV2();
		drawV3();
}