$(document).ready(function() {
  var test = new $.JquerySql();
  test.query("create table test(id int,name string)");
});