var createTable = function(){
  var table = document.getElementById("data-table");

  var headerRow = table.insertRow();
  var header1 = headerRow.insertCell(0);
  var header2 = headerRow.insertCell(1);
  var header3 = headerRow.insertCell(2);
  header1.innerHTML = "Player Name";
  header2.innerHTML = "Score";
  header3.innerHTML = "Date";

  for (var i = 0; i < database.length; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = database[i].name;
    cell2.innerHTML = database[i].score;
    cell3.innerHTML = database[i].date;
  }
}

createTable();
