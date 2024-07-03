
$("#addRow").click(function () {
    $("#myTable").each(function () {
        var trs = '<tr>';
        jQuery.each($('tr:last td', this), function () {
            trs += '<td>' + $(this).html() + '</td>';
        });
        trs += '</tr>';

        if ($('tbody', this).length > 0) {
            $('tbody', this).append(trs);
        } else {
            $(this).append(trs)
        }
    })
})
function deleteRow() {
    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;
    if (rowCount > '2') {
        var row = table.deleteRow(rowCount - 1);
        rowCount--;
    }
    else {
        alert('There should be atleast one row');
    }
}