
function appear(interval_ms){
	if (!interval_ms){interval_ms=500;}
	objects=all('.appear>*');
	appears=all('.appear');

	key=0;
	each(objects,function(object){
		key++;
		object.style="transition-delay:"+(key*interval_ms)+"ms;";
	});
	addClass(objects,'appear-visible');
}
