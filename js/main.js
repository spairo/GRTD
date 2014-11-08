
//$(window).load(function(){

$(document).ready(function(){
    console.info("Dom is ready");
});

$(document).ready(function(){

    //console.info("loaded Header");

});

//function generaGRTD1() {

$(document).ready(function(){

    $("#dForma").html("");
    var gen = "";
    gen = '<table id="tGRTD" class="tGRTD table table-striped">'
    gen += '<tr>';
    gen += '<td><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    gen += '<td colspan="3"><div id="flipPad"><a href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion(id);">Asesores Conectados</a></td>';
    gen += '<td id="logo"><img src="Images/logo movistar.png" height="30px"/></td>';
    gen += '</tr>';
    /*gen += '<tr>';
    gen += '<td></td>';
    gen += '<td class="case" colspan="2">Asesores</td>';
    gen += '<td class="cope" colspan="3">Operación</td>';
    gen += '<td><input type="button" value="Configuración" id="confi" class="botonConf" onclick="divConfigura();" /></td>';
    gen += '</tr>';*/
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="asFirmados" class="normalNum grtdDown"></span><br /><span class="abajo1">Firmados</span></div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="asNodisp" class="normalNum grtdDown"></span><br /><span class="abajo1">No Disponibles</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghRecibidas" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thRecibidas"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhRecibidas"></span></td></tr></table><span class="abajo2">Recibidas</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghAtendidas" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thAtendidas"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhAtendidas"></span></td></tr></table><span class="abajo2">Atendidas<span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghEspera" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thEspera"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhEspera"></span></td></tr></table><span class="abajo2">En Espera</span></div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="asDisp" class="normalNum"></span><br /><span class="abajo1">Disponibles</span></div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="asAtencion" class="normalNum"></span><br /><span class="abajo1">En Atención</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghAtencion" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thAtencion"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhEnatencion"></span></td></tr></table><span class="abajo2">En Atención</div></span></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghDescartadas" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thDescartadas"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhDescartadas"></span></td></tr></table><span class="abajo2">Descartadas</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="thTME" class="normalNum"></span><br /><span class="abajo1">TME</span></div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="asReunion" class="normalNum"></span><br /><span class="abajo1">Reunión</span></div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="asBano" class="normalNum"></span><br /><span class="abajo1">Baño</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="thTMO" class="normalNum"></span><br /><span class="abajo1">TMO</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghNS" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thNS"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhNS"></span></td></tr></table><span class="abajo2">Nivel de Serv. (%)</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghCasos" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thCasos"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhCasos"></span></td></tr></table><span class="abajo2">Casos</span></div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="asDescanso" class="normalNum"></span><br /><br />Descanso</div></td>';
    gen += '<td class="Ase1 col1"></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghGen" class="normalNum"></span><br /><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thGen"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhGen"></span></td></tr></table><span class="abajo2">Genéricos</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghEsc" class="normalNum"></span><br /><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thEsc"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhEsc"></span></td></tr></table><span class="abajo2">Escalados</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ghRev" class="normalNum"></span><br /><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="thRev"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbhRev"></span></td></tr></table><span class="abajo2">Revisados</span></div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="gaAtendidos" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="taAtendidos"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbaAtendidas"></span></td></tr></table><span class="abajo2">Atendidos</span></div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="gaEnAtencion" class="normalNum"></span><br /><span class="abajo1">En Atención</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="gaRecibidos" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="taRecibidos"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbaRecibidas"></span></td></tr></table><span class="abajo2">Pendientes en Horario Día Anterior</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="gaEspera" class="normalNum"></span><br /><table style="margin:0 auto;"><tr><td><img src="./Images/tw16.png" /></td><td><span id="taEspera"></span></td><td><img src="./Images/fb16.png" /></td><td><span id="fbaEspera"></span></td></tr></table><span class="abajo2">En Espera</span></div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="gaDescartados" class="normalNum"></span><br /><span class="abajo1">Descartados</span></div></td>';
    gen += '</tr>';
    gen += '</table>';

    $("#dForma").append(gen);
    getInfoGRTD();
    //upGRTD();
    //clearInterval(timerEstados);

});

// Get Data

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
            obj = eval(msg.d);

        },
        error: function (msg) {
            $("#divLoad").remove();
            alert('Existe un problema con la busqueda.');
            console.error("Existe un problema con la busqueda.");
        }
    });
}

//function ajaxResponseInfo() {

$(document).ready(function(){

    //var foo = { op: 'getInfoTwitter', twitterUserID: '288221948' };

    //var foo = { op: 'datosCliente', userId: '', cDn: '5536897600', tMail: '' }

    $.ajax({
        type: 'POST',
        url: 'api/rest.php',
        data : { op: 'datosCliente', userId: '', cDn: '5536897600', tMail: '' },
        dataType: 'json',
        success: function (data) {

            console.info("Respuesta de Get twitter info");
            console.info(data);
            alert(data);
        },
        error: function (data) {
            console.info("Errorsote");
        }
    });

});
