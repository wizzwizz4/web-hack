wh = {
	site: {
		params: function() {
			var a, b;
			var c = {};
			for (a in window.document.location.search.split("?")[1].split("&")) {
				b = a.split("=");
				c[b[0]]=b[1];
			}
			return c;
		},
		
	},
};