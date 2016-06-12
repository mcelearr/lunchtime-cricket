var createTable = function(){
  var table = document.getElementById("data-table");

  var headerRow = table.insertRow();
  var header1 = headerRow.insertCell(0);
  var header2 = headerRow.insertCell(1);
  header1.innerHTML = "Player Name";
  header2.innerHTML = "Top Score";

  for (var i = 0; i < database.length; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = database[i].name;
    cell2.innerHTML = database[i].top_score;
  }
}

createTable();
