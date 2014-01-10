var arr = require('data');
var rows = [];

for(i=0; i< arr.data.length; i++){
	var row = Ti.UI.createTableViewRow({
			//height: 50
		});
	var textLabel = Ti.UI.createLabel({
		text: arr.data[i].text(),
		left: 10,
		top: 15
	});
	row.add(textLabel);
	rows.push(row);

};

var table = Ti.UI.createTableView({
  data: rows,
  top: 20
});

exports.data = table;