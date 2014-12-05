$(document).ready(function(){

    $.ajax({
        type: 'POST',
        url: 'api/rest.php',
        data : { op: 'getInfoTwitter', twitterUserID: '2234655799' },
        dataType: 'json',
        success: function(data) {

          alert("get info twitter");
          console.info(data);

        },
        error: function(data) {

          console.info("Error");

        }
    });

});
