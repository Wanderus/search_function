$('#searchForm').submit(function(event) {
  event.preventDefault();
  var input = $('#place').val();
  console.log(input);

  var correctRequest = "https://ridb.recreation.gov/api/v1/recareas.json?apikey=1D852276B76740FE8BCB99059BFD7AE0";

  $.getJSON(correctRequest, function(data) {

    console.log(data);
    console.log(JSON.stringify(data));

    //$('#result').append("hello");
    $('#result').append(JSON.stringify(data));

  });

});
