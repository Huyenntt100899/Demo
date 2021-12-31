'use strict';

var numberOfItems = $('#page .item-news').length;
var limitPerPage = 6;
$('#page .item-news:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits
var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker

// insert page number
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
}

$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

$(".pagination li.current-page").on("click", function () {
  if ($(this).hasClass('active')) {
    return false;
  } else {
    var currentPage = $(this).index();
    $(".pagination li").removeClass('active');
    $(this).addClass('active');
    $("#page .item-news").hide();
    var grandTotal = limitPerPage * currentPage;

    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .item-news:eq(" + i + ")").show();
    }
  }
});

$("#next-page").on("click", function () {
  var currentPage = $(".pagination li.active").index();
  if (currentPage === totalPages) {
    return false;
  } else {
    currentPage++;
    $(".pagination li").removeClass('active');
    $("#page .item-news").hide();
    var grandTotal = limitPerPage * currentPage;

    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .item-news:eq(" + i + ")").show();
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});

$("#previous-page").on("click", function () {
  var currentPage = $(".pagination li.active").index();
  if (currentPage === 1) {
    return false;
  } else {
    currentPage--;
    $(".pagination li").removeClass('active');
    $("#page .item-news").hide();
    var grandTotal = limitPerPage * currentPage;

    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .item-news:eq(" + i + ")").show();
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});