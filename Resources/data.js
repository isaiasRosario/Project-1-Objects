var ap1 = {
	"title": "Basket 1",
	"redApples": 3,
	"greenApples": 4,
	"yellowApples": 5,
	"totalApples": function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	},
	"text": function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	}
};

var ap2 = {
	"title": "Basket 2",
	"redApples": 3,
	"greenApples": 8,
	"yellowApples": 2,
	"totalApples": function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	},
	"text": function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	}
};

var ap3 = {
	"title": "Basket 3",
	"redApples": 6,
	"greenApples": 4,
	"yellowApples": 2,
	"totalApples": function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	},
	"text": function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	}
};

var ap4 = {
	"title": "Basket 4",
	"redApples": 3,
	"greenApples": 1,
	"yellowApples": 5,
	"totalApples": function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	},
	"text": function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	}
};

var ap5 = {
	"title": "Basket 5",
	"redApples": 3,
	"greenApples": 2,
	"yellowApples": 2,
	"totalApples": function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	},
	"text": function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	}
};

var ap6 = new Object();
	ap6.title = "Basket 6";
	ap6.redApples = 3;
	ap6.greenApples = 5;
	ap6.yellowApples = 6;
	ap6.totalApples = function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	};
	ap6.text = function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	};
	
var ap7 = new Object();
	ap7.title = "Basket 7";
	ap7.redApples = 7;
	ap7.greenApples = 3;
	ap7.yellowApples = 5;
	ap7.totalApples = function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	};
	ap7.text = function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	};

var ap8 = new Object();
	ap8.title = "Basket 8";
	ap8.redApples = 2;
	ap8.greenApples = 3;
	ap8.yellowApples = 2;
	ap8.totalApples = function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	};
	ap8.text = function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	};
	
var ap9 = new Object();
	ap9.title = "Basket 9";
	ap9.redApples = 1;
	ap9.greenApples = 5;
	ap9.yellowApples = 4;
	ap9.totalApples = function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	};
	ap9.text = function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	};
	
var ap10 = new Object();
	ap10.title = "Basket 10";
	ap10.redApples = 1;
	ap10.greenApples = 2;
	ap10.yellowApples = 3;
	ap10.totalApples = function(){
		total = this.redApples + this.yellowApples + this.greenApples;
		return total;
	};
	ap10.text = function(){
		text = this.title + " has \n" + this.redApples + " Red Apples \n" + this.greenApples + " Green Apples  \n" + this.yellowApples + " Yellow Apples \nfor a total of " + this.totalApples() + " Apples!";
		return text;
	};
	
var apArr = [ap1, ap2, ap3, ap4, ap5, ap6, ap7, ap8, ap9, ap10];

exports.data = apArr;