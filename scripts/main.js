$(function () {
  $.get("https://reqres.in/api/users?page=1", function (data) {
    let array = data.data
    array.forEach(function (elm) {
      document.getElementById('tour').innerHTML += '<figure class="col-12 col-sm-6 col-md-4 figure text-center"><img src="' + elm.avatar + '" class="figure-img img-fluid rounded-circle" alt="' + elm.first_name + ' ' + elm.last_name + '"><figcaption class="figure-caption">' + elm.first_name + ' ' + elm.last_name + '</figcaption></figure>'
    });
  });
});