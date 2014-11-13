
//$(window).load(function(){

$(document).ready(function(){
    //console.info("Dom is ready");
});


// Get Data
/*
function getInfoGRTD() {

  ajaxResponseInfo("grtd", '{}', 1);

}

function ajaxResponseInfo() {

    $.ajax({
        type: 'POST',
        url: 'api/rest.php',
        data : { op : 'grtd', cUmbral : '1800' },
        dataType: 'json',
        success: function (msg) {

            console.info(msg);
            var obj = new Object();

        },
        error: function (msg) {
            $("#divLoad").remove();
            alert('Existe un problema con la busqueda.');
            console.error("Existe un problema con la busqueda.");
        }
    });
}
*/

//function ajaxResponseInfo() {

$(document).ready(function(){

    $.ajax({
        type: 'POST',
        url: 'api/rest.php',
        data : { op: 'getHistorialCaso', caseID: '3180' },
        dataType: 'json',
        success: function (data) {
          alert("Hay vaaaaa!!!!")
          console.info(data);
        },
        error: function (data) {
          console.info("Errorsote");
        }
    });

});
