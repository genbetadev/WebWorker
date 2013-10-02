self.addEventListener('message', function(e) {
	var	min = e.data.first,
		max = e.data.last,
		buffer = e.data.buffer;
	
	for(var n=min;n<=max;n++){
		var r = 0,
			s = String(n);
		for(var a=0;a<s.length;a++)
			r += buffer[s.length][s.charAt(a)];
		if(r==n)
			self.postMessage({status:1,n:n});
	}
	self.postMessage({status:0});
}, false);