
$(window).load(function(){
    console.info("first block loaded");
    generaGRTD1();
});

$(document).ready(function(){

    /*
    console.info("loaded Header");

    $('.foo').append("<p>agregando</p>");

    $("#dForma").html();

    var gen = "";

    gen = '<table id="tGRTD" class="tGRTD">'
    gen += '<tr>';
    gen += '<td><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    gen += '<td colspan="3"><div id="flipPad"><a href="#" class="left" id="rl" rev="#39AB3E" onclick="fnRotacion(id);">Información del día</a><a href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion(id);">Información de ayer y fuera del horario.</a></td>';
    gen += '<td id="logo"><img src="Images/logo movistar.png" height="30px"/></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="firmados" class="normalNum"></span><br /><br />Firmados</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="atencion" class="normalNum"></span><br /><br />Atención</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="recibidas" class="normalNum"></span><br /><br />Recibidos</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="atendidas" class="normalNum"></span><br /><br />Atendidas</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="enEspera" class="normalNum"></span><br /><br />En Espera</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="disponibles" class="normalNum"></span><br /><br />Disponibles</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="noDisponibles" class="normalNum"></span><br /><br />No Disponibles</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="atendiendo" class="normalNum"></span><br /><br />En Atención</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="callBack" class="normalNum"></span><br /><br />CallBack</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="abandonadas" class="normalNum"></span><br /><br />Abandonadas</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="reunion" class="normalNum"></span><br /><br />Reunión</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="bano" class="normalNum"></span><br /><br />Baño</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tme" class="normalNum"></span><br /><br />TME</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tmo" class="normalNum"></span><br /><br />TMO</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ns" class="normalNum"></span><br /><br />Nivel de Serv. (%)</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="descanso" class="normalNum"></span><br /><br />Descanso</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="descanso" class="normalNum"></span><br /><br />Descanso</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ns" class="normalNum"></span><br /><br />Nivel de Serv. (%)</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ns" class="normalNum"></span><br /><br />Nivel de Serv. (%)</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ns" class="normalNum"></span><br /><br />Nivel de Serv. (%)</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="reunion" class="normalNum"></span><br /><br />Reunión</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="bano" class="normalNum"></span><br /><br />Baño</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tme" class="normalNum"></span><br /><br />TME</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tmo" class="normalNum"></span><br /><br />TMO</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ns" class="normalNum"></span><br /><br />Nivel de Serv. (%)</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="reunion" class="normalNum"></span><br /><br />Reunión</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="bano" class="normalNum"></span><br /><br />Baño</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tme" class="normalNum"></span><br /><br />TME</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tmo" class="normalNum"></span><br /><br />TMO</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ns" class="normalNum"></span><br /><br />Nivel de Serv. (%)</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="reunion" class="normalNum"></span><br /><br />Reunión</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="bano" class="normalNum"></span><br /><br />Baño</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tme" class="normalNum"></span><br /><br />TME</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tmo" class="normalNum"></span><br /><br />TMO</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="ns" class="normalNum"></span><br /><br />Nivel de Serv. (%)</div></td>';
    gen += '</tr>';
    gen += '</table>';

    $("#dForma").append(gen);
    */
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
    upGRTD();
    clearInterval(timerEstados);

});

// Get Data

function getInfoGRTD() {

  ajaxResponseInfo("grtd", '{}', 1);

}

function ajaxResponseInfo(uri, dat, type) {
    $.ajax({
        type: "POST",
        url: "WebService1.asmx/" + uri,
        contentType: "application/json; charset=utf-8",
        data: dat,
        dataType: "json",
        success: function (msg) {

            var obj = new Object();

            obj = eval(msg.d);

            if (type == 1) {
                setInformation(obj);
            }
            if (type == 2) {
                setAgentesEstado(obj);
            }
        },
        error: function (msg) {
            $("#divLoad").remove();
            alert('Existe un problema con la busqueda.');
        }
    });
}
