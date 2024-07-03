// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// JavaScript for Supplier.
$(document).ready(function () {
    $('#supplierDataTable').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 6 }
        ]
    });
});

// JavaScript for Purchase.
$(document).ready(function () {
    $('#purchaseDataTable').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 5 }
        ]
    });
});

// JavaScript for ProductType.
$(document).ready(function () {
    $('#productTypeDataTable').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 4 }
        ]
    });
});

// JavaScript for Product.
$(document).ready(function () {
    $('#productDataTable').DataTable({
        "columnDefs": [
            { "orderable": false, "targets": 5 }
        ]
    });
});