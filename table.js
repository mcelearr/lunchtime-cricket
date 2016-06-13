var createTable = function(){
  var table = document.getElementById("data-table");

  var header = table.createTHead();
  var headerRow = header.insertRow();
  var header1 = headerRow.insertCell(0);
  var header2 = headerRow.insertCell(1);
  var header3 = headerRow.insertCell(2);
  header1.innerHTML = "Player Name";
  header2.innerHTML = "Score";
  header3.innerHTML = "Date";

  var body = table.appendChild(document.createElement('tbody'));

  for (var i = 0; i < honoursBoard.length; i++) {
    var row = body.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = honoursBoard[i].name;
    cell2.innerHTML = honoursBoard[i].score;
    cell3.innerHTML = honoursBoard[i].date;
  }
}

createTable();
