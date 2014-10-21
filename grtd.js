var anchoVta = $(window).width();
var intervalo, timerEstados = "", timerGRTD = "";

$(window).load(function () {
    /*if (anchoVta <= 520) {
    generaGRTDMobile();
    /*alert("Mobile");
    alert(anchoVta);
    }
    else {*/
    generaGRTD1();
    //}
    getToday();
    //startTimerDate();
})

//Funciones que está disponibles después de que todos los elementos de la página se han generado.

$(document).ready(function() {

    $("#sLogin").bind("click", function () {
        generaLogin();
    })

    $("#sClose").bind("click", function () {
        $("#sLogin").bind("click", generaLogin);
        $("#sUsuario").html("");
        $("#sClose").fadeOut(0);
        $("#sLogin").fadeIn(0);
        identificaMenu(8);
    })

    /*$("#sClose").click(function () {
        $("#sLogin").bind("click", generaLogin);
        $("#sUsuario").html("");
        $("#sClose").fadeOut(0);
        $("#sLogin").fadeIn(0);
        identificaMenu(8);
    })*/

    $("#labelGRTD").click(function () {
        var varlog
        varlog = '<div id="genGRTD" style="float:left; left:0%; top:0%; position:fixed; width:100%; background: rgba(0, 0, 0, 0.5); color:#3EC8DF;">';
        varlog += '<div style="height:5%;"><img onclick="cerrarGRTD();" src="./Images/cerrarsesion.png"/ style="cursor:pointer; float:right; right:0;"></div>';
        varlog += '<div id="genGRTDCont" style="height:95%; width:100%;"></div>';
        varlog += '</div>';
        $("body").append(varlog);
        $("#genGRTD").css("height", "100%");
        generaGRTD3();
    });

    /*$("#reportes").click(function () {
    window.open('http://172.18.53.182/Reports/Pages/Folder.aspx?ItemPath=%2fNacional+Monte+de+Piedad&ViewMode=List', 'ReportesNMP', '');
    })

    $("#iHomeConv, #iHomeAltas, #iHomeCambios").click(function () {
    $("#fAltas span").html("");
    $('input[type=text]').attr('value', '');
    $("option[value='']").attr('selected', 'selected');
    $("#msgAlta").fadeOut(0);
    $("#msgBaja").fadeOut(0);
    $("#divFormaConv, #divFormaAltas, #divFormaCambios").fadeOut(0);
    $("#dContenedorMain").fadeIn(0);
    })*/
});

/*funcion para obtener la fecha y hora actuales*/

function getToday() {
    marcacion = new Date();
    hora = marcacion.getHours();
    minutos = marcacion.getMinutes();
    segundos = marcacion.getSeconds();

    if (hora <= 9)
        hora = "0" + hora;

    if (minutos <= 9)
        minutos = "0" + minutos;

    if (segundos <= 9)
        segundos = "0" + segundos;

    var dia = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
    var mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var hoy = new Date();
    var anio = hoy.getFullYear();
    var fecha = "" + dia[hoy.getDay()] + " " + hoy.getDate() + " de " + mes[hoy.getMonth()] + " de " + anio + " " + hora + ":" + minutos + " hrs.";
    //var fecha = "" + hoy.getDate() + " de " + mes[hoy.getMonth()] + " " + anio + " " + hora + ":" + minutos + "";
    var fecha2 = "" + dia[hoy.getDay()] + " " + hoy.getDate() + " de " + mes[hoy.getMonth()] + " de " + anio + " " + hora + ":" + minutos + " hrs.";
    $("#dHeaderDer").html(fecha);
}

/*funcion que realiza un timer cada 10 segundos para actualizar la fecha y hora actuales*/
function startTimerDate() {
    intervalo = setInterval(function () {
        hogetToday();
    }, 1000);
}

/*Comienzan funciones para validar el logueo al aplicativo*/
function generaLogin() {
    var altura;
    altura = $("body").height();
    var varlog
    varlog = '<div id="divLoginPadre" style="float:left; left:0%; top:0%; position:fixed; width:100%; background: rgba(0, 0, 0, 0.5); color:#3EC8DF;">';
    varlog += '<div id="LoginHijo" style="min-width:210px; max-width:250px; width:80%; margin:0 auto; border:2px solid #3EC8DF; height:auto; background-color:#004262; border-radius:10px; margin-top:20px; padding:2px 2px 10px 10px;">';
    varlog += '<table style="width:100%; height:100%;"><tr><td style="width:80%;"><span style="color:#FFFFFF; font-weight:bold;">Iniciar Sesión</span></td><td style="width:20% text-align:right;"><img onclick="closeDivLogin();" id="iClose" src="Images/cerrarsesion.png" width="30px" height="30px" style="cursor:pointer; float:right;"/></td></tr><tr><td colspan="2" style="padding:0 0 5px 0; text-align:center;"><span id="eLogin" style="width:70%; border-radius:5px; background-color:#3EC8DF; color:#fff; display:block; margin:0 auto;"></span></td></tr><tr><td style="width:40%; height:100%;">Usuario:</td><td style="width:60%; height:100%;"><input style="width:120px; border-radius:5px; color:#00344C;" type="text" id="tuser" value="" autofocus="true" maxlength="10" placeholder="Usuario"/></td></tr><tr><td>Contraseña:</td><td><input style="width:120px; border-radius:5px; color:#00344C;" type="password" id="tcont" value="" maxlength="12" placeholder="Contraseña" onkeypress="valLogKey();"/></td></tr><tr><td colspan="2" style="text-align:right;"><input id="btnLogin" type="button" value="Ingresar" class="btnLogin" onclick="validaAjaxLogin();" /></td></tr></table>';
    varlog += '</div>';
    varlog += '</div>';
    $("body").append(varlog);
    $("#divLoginPadre").css("height", altura);
}

function validaAjaxLogin() {
    var cLogin, cPass
    cLogin = $("#tuser").val();
    cPass = $("#tcont").val();
    if (cLogin == "") {
        $("#eLogin").html("Ingresa tu usuario");
        stopPropagation();
    }
    else {
        $("#eLogin").html("");
    }
    if (cPass == "") {
        $("#eLogin").html("Ingresa tu contraseña");
        stopPropagation();
    }
    else {
        $("#eLogin").html("");
    }
    validateLogin(1);
}

function getLogin(object) {
    if (object[0].Descripcion == "usuarioincorrecto") {
        $("#eLogin").html("Usuario no existe");
        return false;
    }

    if (object[0].Descripcion == "passwordincorrecto") {
        $("#eLogin").html("Tu password no es correcto");
        return false;
    }

    if (object[0].Descripcion == "logueado") {
        $("#eLogin").html("Ya tienes una sesión activa");
        return false;
    }

    if (object[0].Descripcion == "valido") {
        $("#sLogin").unbind("click");
        $("#sLogin").fadeOut(0);
        $("#sClose").fadeIn(0);
        $("#sUsuario").html(object[0].Nombre + " " + object[0].Apellidos)
        $("#divLoginPadre").remove();
        $("#dMenuMain").fadeIn(0);
    }
}

function closeDivLogin() {
    $("#divLoginPadre").remove();
}

function valLogKey() {
    var keyCode = document.layers ? ev.which : document.all ? event.keyCode : document.getElementById ? event.charCode : event.keyCode;

    if (keyCode == 13) {
        validaAjaxLogin();
    }
}
/*Terminan funciones para validar el logueo al aplicativo*/


/*Función para generar los cuadritos GRTD cuando el ancho es mayor a 520px*/
function generaGRTD() {
    $("#dForma").html("");
    var gen = "";
    gen = '<table id="tGRTD" class="tGRTD">'
    gen += '<tr>';
    gen += '<td><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    gen += '<td colspan="3"><div id="flipPad"><a href="#" class="left" id="rl" rev="#39AB3E" onclick="fnRotacion(id);">Información del día</a><a href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion(id);">Información de ayer y fuera del horario.</a></td>';
    gen += '<td id="logo"><img src="Images/logo movistar.png" height="30px"/></td>';
    gen += '</tr>';
    /*gen += '<tr>';
    gen += '<td></td>';
    gen += '<td class="case" colspan="2">Asesores</td>';
    gen += '<td class="cope" colspan="3">Operación</td>';
    gen += '<td><input type="button" value="Configuración" id="confi" class="botonConf" onclick="divConfigura();" /></td>';
    gen += '</tr>';*/
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
    //generaProductividad();
    //detectaSizeMobil();
}

function generaGRTD1() {
    $("#dForma").html("");
    var gen = "";
    gen = '<table id="tGRTD" class="tGRTD">'
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
    //generaProductividad();
    //detectaSizeMobil();
}

function generaGRTD2() {
    $("#dForma").html("");
    var gen = "";
    gen += '<div id="tGRTD" class="tGRTD" style="width:80%; margin:0 auto; height:100%;">';
    gen += '<table class="tGRTD2" style="margin-bottom:30px;">';
    gen += '<tr>';
    gen += '<td style="text-align:left; width:15%;"><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    //gen += '<td style="width:60%;"><div id="flipPad" style="text-align:center;"><a href="#" class="left" style="padding:0 0 10px 0; height:15px; display:inline-block;" id="rl" rev="#39AB3E" onclick="fnRotacion(id);">Información del día</a><a style="padding:0 0 10px 0; height:15px; display:inline-block;" href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion(id);">Información de ayer y fuera del horario.</a></td>';
    gen += '<td style="width:60%;"><div id="flipPad" style="text-align:center;"><a href="#" class="left" id="rl" rev="#39AB3E" onclick="fnRotacion(id);">Información del día</a></td>';
    gen += '<td id="logo" width:25%;><img src="Images/logo movistar.png" height="30px" style="float:right;"/></td>';

    /*gen += '<td style="text-align:left;">rere</td>';
    gen += '<td style="text-align:center;">hola fdfds fdsfsdf</td>';
    gen += '<td style="text-align:right;">fgffgfdg</td>';*/


    gen += '</tr>'
    gen += '</table>';
    gen += '<div style="width:98%; overflow:auto; height:500px; color:#005068; background-color:#ffffff; border:3px solid #005068; border-radius:5px; padding:20px 0 0 20px;">';
    gen += '<div id="estadoAge" style="width:80%; float:left;"></div>';
    gen += '<div id="" style="width:5%; float:left;"></div>';
    gen += '<div id="sds" style="width:15%; float:right;">';
    gen += '<table cellspacing="10" style="">';
    gen += '<tr>';
    gen += '<td colspan="2" style="text-align:center; font-size:16px; font-weight:bold; background-color:#cccccc;">Actividad</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#005068;"></td>';
    gen += '<td>En Atención</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:red;"></td>';
    gen += '<td>No Disponible</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#8bc53f;"></td>';
    gen += '<td>Disponible</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#fff100;"></td>';
    gen += '<td>Reunión</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#90278e;"></td>';
    gen += '<td>Comida</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#999999;"></td>';
    gen += '<td>Baño</td>';
    gen += '</tr>';
    gen += '</table>';
    gen += '</div>';
    gen += '</div>';
    gen += '</div>';
    /*gen = '<table id="tGRTD" class="tGRTD">'
    gen += '<tr>';
    gen += '<td><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    gen += '<td colspan="3"><div id="flipPad"><a href="#" class="left" id="rl" rev="#39AB3E" onclick="fnRotacion(id);">Información del día</a><a href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion(id);">Información de ayer y fuera del horario.</a></td>';
    gen += '<td id="logo"><img src="Images/logo movistar.png" height="30px"/></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taRecibidos" class="normalNum"></span><br /><br />Pendientes Día Ant</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taAtendidos" class="normalNum"></span><br /><br />Atendidos Día Ant</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfRecibidas" class="normalNum"></span><br /><br />Recibidas FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfAtendidas" class="normalNum"></span><br /><br />Atendidas FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfEnatencion" class="normalNum"></span><br /><br />En Atención FH.</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taEnatencion" class="normalNum"></span><br /><br />En Atención Día Ant</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taEspera" class="normalNum"></span><br /><br />En Espera Día Ant</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfDescartadas" class="normalNum"></span><br /><br />Descartadas FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfEspera" class="normalNum"></span><br /><br />En Espera FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfTME" class="normalNum"></span><br /><br />TME FH.</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taDescartadas" class="normalNum"></span><br /><br />Descartadas Día Ant</div></td>';
    gen += '<td class="Ase1 col1"></td>';
    gen += '<td class="Ase1 col2"></td>';
    gen += '<td class="Ase1 col2"></td>';
    gen += '<td class="Ase1 col2"></td>';
    gen += '</tr>';
    gen += '</table>';*/
    $("#dForma").append(gen);
    getAgentesEstado();
    upEstados();
    clearInterval(timerGRTD);
    //generaProductividad();
    //detectaSizeMobil();
}

function generaGRTD3() {
    $("#dForma").html("");
    $("#genGRTDCont").html("");
    var gen = "";
    gen = '<table id="tGRTD2" class="tGRTD">'
    gen += '<tr>';
    gen += '<td><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    gen += '<td colspan="3"><div id="flipPad"><a href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion2(id);">Asesores Conectados</a></td>';
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
    gen += setTimeUser();
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

    $("#genGRTDCont").append(gen);
    getInfoGRTD();
    upGRTD();
    clearInterval(timerEstados);
    //generaProductividad();
    //detectaSizeMobil();
}

function generaGRTD4() {
    $("#genGRTDCont").html("");
    var gen = "";
    gen += '<div id="tGRTD2" class="tGRTD" style="width:80%; margin:0 auto;">';
    gen += '<table class="tGRTD2" style="margin-bottom:30px;">';
    gen += '<tr>';
    gen += '<td style="text-align:left; width:15%;"><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    //gen += '<td style="width:60%;"><div id="flipPad" style="text-align:center;"><a href="#" class="left" style="padding:0 0 10px 0; height:15px; display:inline-block;" id="rl" rev="#39AB3E" onclick="fnRotacion(id);">Información del día</a><a style="padding:0 0 10px 0; height:15px; display:inline-block;" href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion(id);">Información de ayer y fuera del horario.</a></td>';
    gen += '<td style="width:60%;"><div id="flipPad" style="text-align:center;"><a href="#" class="left" id="rl" rev="#39AB3E" onclick="fnRotacion2(id);">Información del día</a></td>';
    gen += '<td id="logo" width:25%;><img src="Images/logo movistar.png" height="30px" style="float:right;"/></td>';

    /*gen += '<td style="text-align:left;">rere</td>';
    gen += '<td style="text-align:center;">hola fdfds fdsfsdf</td>';
    gen += '<td style="text-align:right;">fgffgfdg</td>';*/


    gen += '</tr>'
    gen += '</table>';
    gen += '<div style="width:98%; overflow:auto; height:500px; color:#005068; background-color:#ffffff; border:3px solid #005068; border-radius:5px; padding:20px 0 0 20px;">';
    gen += '<div id="estadoAge" style="width:80%; float:left;"></div>';
    gen += '<div id="" style="width:5%; float:left;"></div>';
    gen += '<div id="sds" style="width:15%; float:right;">';
    gen += '<table cellspacing="10" style="">';
    gen += '<tr>';
    gen += '<td colspan="2" style="text-align:center; font-size:16px; font-weight:bold; background-color:#cccccc;">Actividad</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#005068;"></td>';
    gen += '<td>En Atención</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:red;"></td>';
    gen += '<td>No Disponible</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#8bc53f;"></td>';
    gen += '<td>Disponible</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#fff100;"></td>';
    gen += '<td>Reunión</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#90278e;"></td>';
    gen += '<td>Comida</td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td style="width:20px; height:20px; background-color:#999999;"></td>';
    gen += '<td>Baño</td>';
    gen += '</tr>';
    gen += '</table>';
    gen += '</div>';
    gen += '</div>';
    gen += '</div>';
    /*gen = '<table id="tGRTD" class="tGRTD">'
    gen += '<tr>';
    gen += '<td><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    gen += '<td colspan="3"><div id="flipPad"><a href="#" class="left" id="rl" rev="#39AB3E" onclick="fnRotacion(id);">Información del día</a><a href="#" class="right" id="lr" rev="#C8D97E" onclick="fnRotacion(id);">Información de ayer y fuera del horario.</a></td>';
    gen += '<td id="logo"><img src="Images/logo movistar.png" height="30px"/></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taRecibidos" class="normalNum"></span><br /><br />Pendientes Día Ant</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taAtendidos" class="normalNum"></span><br /><br />Atendidos Día Ant</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfRecibidas" class="normalNum"></span><br /><br />Recibidas FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfAtendidas" class="normalNum"></span><br /><br />Atendidas FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfEnatencion" class="normalNum"></span><br /><br />En Atención FH.</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taEnatencion" class="normalNum"></span><br /><br />En Atención Día Ant</div></td>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taEspera" class="normalNum"></span><br /><br />En Espera Día Ant</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfDescartadas" class="normalNum"></span><br /><br />Descartadas FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfEspera" class="normalNum"></span><br /><br />En Espera FH.</div></td>';
    gen += '<td class="Ase1 col2"><div><br /><span id="tfTME" class="normalNum"></span><br /><br />TME FH.</div></td>';
    gen += '</tr>';
    gen += '<tr>';
    gen += '<td class="Ase1 col1"><div><br /><span id="taDescartadas" class="normalNum"></span><br /><br />Descartadas Día Ant</div></td>';
    gen += '<td class="Ase1 col1"></td>';
    gen += '<td class="Ase1 col2"></td>';
    gen += '<td class="Ase1 col2"></td>';
    gen += '<td class="Ase1 col2"></td>';
    gen += '</tr>';
    gen += '</table>';*/
    $("#genGRTDCont").append(gen);
    getAgentesEstado();
    upEstados();
    clearInterval(timerGRTD);
    //generaProductividad();
    //detectaSizeMobil();
}

function generaGRTD5() {
    $("#dForma").html("");
    var gen = "";
    gen = '<table id="tGRTD" class="tGRTD">'
    gen += '<tr>';
    gen += '<td><span class="pclabelReport">GRTD</span><br /><span class="pclabelMulti">Summer</span></td>';
    gen += '<td colspan="3"><div id="flipPad"><a href="#" class="left" rel="rl" rev="#39AB3E" onclick="fnRotacion(rel);" title="Change content as <em>you</em> like!">left</a><a href="#" class="top" rel="bt" rev="#B0EB17" title="Ohhh yeah!">top</a><a href="#" class="bottom" rel="tb" rev="#82BD2E" title="Hey oh lets go!">bottom</a><a href="#" class="right" rel="lr" rev="#C8D97E" title="Waiting for css3...">right</a><a href="#" class="revert">revert!</a></div></td>';
    gen += '<td id="logo"><img src="Images/logo movistar.png" height="30px"/></td>';
    gen += '</tr>';
    /*gen += '<tr>';
    gen += '<td></td>';
    gen += '<td class="case" colspan="2">Asesores</td>';
    gen += '<td class="cope" colspan="3">Operación</td>';
    gen += '<td><input type="button" value="Configuración" id="confi" class="botonConf" onclick="divConfigura();" /></td>';
    gen += '</tr>';*/
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
    gen += '</table>';

    $("#dForma").append(gen);
    //generaProductividad();
    //detectaSizeMobil();
}

function fnRotacion(atr) {

    var d = atr;
    //        alert(d);
    if (d == "rl") {
        generaGRTD1();
    }
    if (d == "lr") {
        generaGRTD2();
    }
    $("#tGRTD").flip({
        direction: d,
        //color: "#000000",
        //content: $('div#' + d + ''), //(new Date()).getTime(),
        onBefore: function () { $(".revert").show() }
    })
}

function fnRotacion2(atr) {

    var d = atr;
    //        alert(d);
    if (d == "rl") {
        generaGRTD3();
    }
    if (d == "lr") {
        generaGRTD4();
    }
    $("#tGRTD2").flip({
        direction: d,
        //color: "#000000",
        //content: $('div#' + d + ''), //(new Date()).getTime(),
        onBefore: function () { $(".revert").show() }
    })
}

/*Función para obtener de la base de datos la prodcutividad de cada concepto del grtd*/
function getInfoGRTD() {
    ajaxResponseInfo("grtd", '{}', 1);
}

function upGRTD() {
    timerGRTD = setInterval(function () {
        ajaxResponseInfo("grtd", '{}', 1);
    }, 30000);
}

/*Función para obtener de la base de datos el estado de tiempo de cada agente*/
function getAgentesEstado() {
    ajaxResponseInfo("getAgentesEstado", '{}', 2);
}

function upEstados() {
    timerEstados = setInterval(function () {
        ajaxResponseInfo("getAgentesEstado", '{}', 2);
    }, 5000);
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

            console.info("Revisando que estoy enviando");

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

/*function setRegresa(ob) {
if (ob == null || ob == "") {
alert("vacio");
}
else {
var obj = new Object();
obj = ob;
generaGRTD1(obj);
}
}*/

function setInformation(obj) {
    $("#asFirmados").html(obj[0].Firmados);
    $("#asDisp").html(obj[0].Disponibles);
    $("#asNodisp").html(obj[0].No_Disponibles);
    $("#asDescanso").html(obj[0].Descanso);
    $("#asReunion").html(obj[0].Reunion);
    $("#asBano").html(obj[0].Bano);
    $("#asAtencion").html(obj[0].En_Atencion);
    $("#thRecibidas").html(obj[0].Recibidas);
    $("#thAtendidas").html(obj[0].Atendidas);
    $("#thAtencion").html(obj[0].En_Atencion2);
    $("#thEspera").html(obj[0].En_Espera);
    $("#thDescartadas").html(obj[0].Descartados);
    $("#thTME").html(obj[0].TME);
    $("#thTMO").html(obj[0].TMO);
    $("#thNS").html(obj[0].NivelServicio);
    //$("#fdf").html(obj[0].Productividad);
    $("#tfRecibidas").html(obj[0].Recibidas_Fuera_Horario);
    $("#tfAtendidas").html(obj[0].Atendidas_Fuera_Horario);
    $("#tfTME").html(obj[0].TME_Fuera_Horario);
    $("#tfEnatencion").html(obj[0].En_Atencion_Fuera);
    $("#tfEspera").html(obj[0].En_Espera_Fuera);
    $("#tfDescartadas").html(obj[0].Descartados_Fuera);
    $("#taRecibidos").html(obj[0].Recibidas_Antes);
    $("#taAtendidos").html(obj[0].Atendidas_Antes);
    $("#gaEnAtencion").html(obj[0].En_Atencion_Antes);
    $("#taEspera").html(obj[0].En_Espera_Antes);
    $("#gaDescartados").html(obj[0].Descartados_Antes);
    $("#thCasos").html(obj[0].Casos);
    $("#thGen").html(obj[0].Genericos);
    $("#thEsc").html(obj[0].Escalados);
    $("#thRev").html(obj[0].Nulos);
    /*$("#t").html(obj[0].EscAbi);
    $("#t").html(obj[0].EscCer);
    $("#t").html(obj[0].GenAbi);
    $("#t").html(obj[0].GenCer);
    $("#f").html(obj[0].EscAbiFB);
    $("#f").html(obj[0].EscCerFB);
    $("#f").html(obj[0].GenAbiFB);
    $("#f").html(obj[0].GenCerFB);*/
    $("#fbhRecibidas").html(obj[0].Recibidas_FB);
    $("#fbhAtendidas").html(obj[0].Atendidas_FB);
    $("#fbhEspera").html(obj[0].En_Espera_FB);
    $("#fbhEnatencion").html(obj[0].En_Atencion_FB);
    $("#fbhDescartadas").html(obj[0].Descartados_FB);
    $("#fbfRecibidas").html(obj[0].Recibidas_Fuera_FB);
    $("#fbfAtendidas").html(obj[0].Atendidas_Fuera_FB);
    $("#fbfEnatencion").html(obj[0].En_Atencion_Fuera_FB);
    $("#fbfEspera").html(obj[0].En_Espera_Fuera_FB);
    $("#fbfDescartadas").html(obj[0].Descartados_Fuera_FB);
    $("#fbaRecibidas").html(obj[0].Recibidas_Antes_FB);
    $("#fbaAtendidas").html(obj[0].Atendidas_antes_FB);
    $("#fbaEspera").html(obj[0].En_Espera_Antes_FB);
    $("#fbhCasos").html(obj[0].CasosFB);
    $("#fbhNS").html(obj[0].NivelServicioFB);
    $("#fbhGen").html(obj[0].GenericosFB);
    $("#fbhEsc").html(obj[0].EscaladosFB);
    $("#fbhRev").html(obj[0].NulosFB);
    /*$("#fdf").html(obj[0].En_Atencion_Antes_FB);
    $("#fdf").html(obj[0].Descartados_Antes_FB);    */
    $("#ghRecibidas").html(Number(obj[0].Recibidas) + Number(obj[0].Recibidas_FB));
    $("#ghAtendidas").html(Number(obj[0].Atendidas) + Number(obj[0].Atendidas_FB));
    $("#ghEspera").html(Number(obj[0].En_Espera) + Number(obj[0].En_Espera_FB));
    $("#ghAtencion").html(Number(obj[0].En_Atencion) + Number(obj[0].En_Atencion_FB));
    $("#ghDescartadas").html(Number(obj[0].Descartados) + Number(obj[0].Descartados_FB));
    $("#gaRecibidos").html(Number(obj[0].Recibidas_Antes) + Number(obj[0].Recibidas_Antes_FB));
    $("#gaAtendidos").html(Number(obj[0].Atendidas_Antes) + Number(obj[0].Atendidas_antes_FB));
    $("#gaEspera").html(Number(obj[0].En_Espera_Antes) + Number(obj[0].En_Espera_Antes_FB));
    $("#gfRecibidas").html(Number(obj[0].Recibidas_Fuera_Horario) + Number(obj[0].Recibidas_Fuera_FB));
    $("#gfAtendidas").html(Number(obj[0].Atendidas_Fuera_Horario) + Number(obj[0].Atendidas_Fuera_FB));
    $("#ghCasos").html(Number(obj[0].Casos) + Number(obj[0].CasosFB));
    $("#ghGen").html(Number(obj[0].Genericos) + Number(obj[0].GenericosFB));
    $("#ghEsc").html(Number(obj[0].Escalados) + Number(obj[0].EscaladosFB));
    $("#ghRev").html(Number(obj[0].Nulos) + Number(obj[0].NulosFB));
    var roundNS = Math.round((Number(obj[0].NivelServicio) + Number(obj[0].NivelServicioFB)) / 2);
    $("#ghNS").html(roundNS);
    //validSecond("tfTME", obj[0].TMEFuera);
    validSecond("thTME", obj[0].TME);
    validSecond("thTMO", obj[0].TMO);
    //colors("thEspera", obj[0].EnEspera);
    colors("thNS", obj[0].NivelServicio);
    colors("thTME", obj[0].TME);
    colors("thTMO", obj[0].TMO);
    //colors("Productividad", obj[0].Productividad);
    //colors("tfTME", obj[0].TMEFuera);
}

function validSecond(obj, sec) {
    var timeTM = (new Date).clearTime().addSeconds(sec).toString('H:mm:ss')
    if (timeTM.toString().split(":").length == 3) {
        if (timeTM.toString().split(":")[0] == "0" || timeTM.toString().split(":")[0] == "00") {
            timeTM1 = timeTM.toString().split(":")[1] + ":" + timeTM.toString().split(":")[2];
            $("#" + obj).html(timeTM1);
            $("#s" + obj).html((obj == "TTME" ? "TME" : obj).toString() + " (mm:ss)");
        }
        else {
            timeTM1 = timeTM.toString().split(":")[0] + ":" + timeTM.toString().split(":")[1];
            $("#" + obj).html(timeTM1);
            $("#s" + obj).html((obj == "TTME" ? "TME" : obj).toString() + " (hh:mm)");
        }
    }
    if (timeTM.toString().split(":").length == 2) {
        if (timeTM.toString().split(":")[0] == "0" || timeTM.toString().split(":")[0] == "00") {
            timeTM1 = timeTM.toString().split(":")[2];
            $("#" + obj).html(timeTM1);
            $("#s" + obj).html(obj == "TTME" ? "TME" : obj + " (ss)");
        } else {
            timeTM1 = timeTM.toString().split(":")[1] + ":" + timeTM.toString().split(":")[2];
            $("#" + obj).html(timeTM1);
            $("#s" + obj).html((obj == "TTME" ? "TME" : obj).toString() + " (mm:ss)");
        }
    }
    if (timeTM.toString().split(":").length == 1) {
        timeTM1 = timeTM.toString().split(":")[1] + ":" + timeTM.toString().split(":")[2];
        $("#" + obj).html(timeTM1);
        $("#s" + obj).html((obj == "TTME" ? "TME" : obj).toString() + " (mm:ss)");
    }
}

function colors(obj, val) {
    if (obj == "Espera") {
        if (parseInt(val) > parseInt(nEspera)) {
            $("#" + obj).removeClass("normalNum").addClass("numRed");
        }
        else {
            $("#" + obj).removeClass("numRed").addClass("normalNum");
        }
    }
    if (obj == "Servicio") {
        if (val < nNivel_Servicio) {
            $("#" + obj).removeClass("normalNum").addClass("numRed");
        }
        else {
            $("#" + obj).removeClass("numRed").addClass("normalNum");
        }
    }
    if (obj == "TME") {
        if (val > nTME) {
            $("#" + obj).removeClass("normalNum").addClass("numRed");
        }
        else {
            $("#" + obj).removeClass("numREd").addClass("normalNum");
        }
    }
    if (obj == "TMO") {
        if (val > nTMO) {
            $("#" + obj).removeClass("normalNum").addClass("numRed");
        }
        else {
            $("#" + obj).removeClass("numREd").addClass("normalNum");
        }
    }
    if (obj == "Productividad") {
        if (val <= nProductividad) {
            $("#" + obj).removeClass("normalNum").addClass("numRed");
        }
        else {
            $("#" + obj).removeClass("numREd").addClass("normalNum");
        }
    }
}

function setAgentesEstado(ob) {
    var vEstado = "";
    if (ob == null || ob == "") {
        $("#estadoAge").html("");
        vEstado += '<div style="margin-top:50px; font-size:14px; height:300px;">Información No Disponible</div>';
        $("#estadoAge").append(vEstado);
    }
    else {
        $("#estadoAge").html("");
        var vVentana = $(window).width() / 200;
        //alert(vVentana);
        vEstado += '<table style="margin:5px 0 5px 0; font-size:14px; font-weight:bold;">';
        vEstado += '<tr>';
        vEstado += '<td style="min-width:250px;">Asesor</td>';
        vEstado += '<td>Tiempo</td>';
        vEstado += '<td></td>';
        vEstado += '</tr>';
        vEstado += '</table>';
        for (i = 0; i < ob.length; i++) {
            var vAncho = "";
            var remTiempo = (ob[i].Tiempo).replace(/\s/g, "&nbsp;");
            vAncho = ob[i].Fecha / vVentana;
            vEstado += '<table style="margin:5px 0 5px 0;">';
            vEstado += '<tr>';
            vEstado += '<td style="min-width:250px;">' + ob[i].cLogin_Nombre + ' ' + ob[i].cLogin_Apellidos + '</td>';
            vEstado += '<td style="left:0; height:17px; width:' + vAncho + 'px; background-color:' + backColor(ob[i].nActividad_ID) + ';"></td>';
            vEstado += '<td style="font-size:9px;">' + remTiempo + '</td>';
            vEstado += '</tr>';
            vEstado += '</table>';
        }
        $("#estadoAge").append(vEstado);
    }
}

function backColor(cBack) {
    switch (cBack) {
        case 3: //Disponible
            return '#8bc53f';
            break;
        case 4: //No disponible
            return 'red';
            break;
        case 5: //Comida
            return '#90278e';
            break;
        case 6: //Baño
            return '#999999';
            break;
        case 7: //ReuniÓn
            return '#fff100';
            break;
        case 8: //En Atención
            return '#005068';
            break;
    }
}

function cerrarGRTD() {
    $("#genGRTD").remove();
}

/*function mandarCorreo(obj) {
ajaxResponse("correoImg", '{"destinatario": "' + obj[0].actMail + '", "asunto": "Nueva Contraseña","mensaje": "' + obj[0].contrasena + '"}', 37)
}*/


/*function confirmacionEnvio(obj) {
if (obj)
alert("Ha sido enviada la nueva contraseña a tu correo, usala para iniciar sesion.");
else {
alert("Se presento un problema para generar tu psw.\n\n Favor de intentarlo nuevamente");
}
}*/

function cambioPsw(obj) {
    var uno = obj;
    var cont = "";
    $("#LoginHijo").remove();
    cont += '<div id="divCambio" style="min-width:250px; max-width:408px; float:left; left:35%; top:30%; position:fixed; margin:0 auto; border:2px solid #3EC8DF; font-weight:bold; height:auto; background-color:#fff; border-radius:10px; margin-top:20px; padding:2px 2px 10px 10px; color:#3EC8DF">';
    cont += '<table><tr><td style="font-size:14px;">Bienvenido.</td><td><img onclick="closeDivLogin();" id="iClose" src="Images/cerrarsesion.png" width="30px"height="30px" style="cursor: pointer; float: right;" /></td></tr><tr><td colspan="2">Para usar esta aplicación por primera vez necesitas cambiar tu contraseña.</td>';
    cont += '</tr><tr><td style="width:35%;">Nueva Contraseña:</td><td style="text-align:left; width:65%;"><input type="password" name="ctNva" id="ctNva" placeholder="Escriba la contraseña" maxlength="12" autofocus="true"/><span id="ct1" style="font-size: 11px; color: red"  maxlength="20"></span></td></tr>';
    cont += '<tr><td style="width:35%;">Confirma Contraseña:</td><td style="text-align:left; width:65%;"><input type="password" id="ctPsw" name="ctPsw" maxlength="12" placeholder="Confirme la contraseña"  /><span id="ct2" style="font-size: 11px;color: red"  maxlength="20"></span></td></tr>';
    cont += '<tr><td colspan="2" style="text-align: right"><input type="button" id="btnCambio" value="Aceptar" class="btnLogin"  onclick="cambioContr(\'' + uno + '\');" /></td></tr></table></div>';
    $('#divLoginPadre').append(cont);
}

//Validaciones y cambio de contraseña
function cambioContr(oiu) {
    var nuevaCont = $("#ctNva").val();
    var confCont = $("#ctPsw").val();
    if (nuevaCont.length == 0) {
        $("#ct1").html("Ingresa una Contraseña");
        stopPropagation();
    }
    else {
        $("#ct1").html("");
    }
    if (nuevaCont.length < 5) {
        $("#ct1").html("Minimo 5 caracteres.");
        stopPropagation();
    }
    else {
        $("#ct1").html("");
    }
    if (confCont.length == 0) {
        $("#ct2").html("Ingresa una Contraseña");
        stopPropagation();
    }
    else {
        $("#ct2").html("");
    }
    if (nuevaCont != confCont) {
        $("#ct2").html("Contraseñas diferentes.");
        stopPropagation();
    }
    else {
        $("#ct2").html("");
    }
    ajaxResponse("validateLogin", '{"accion": 4, "cLogin": "' + oiu + '", "cPass": "' + nuevaCont + '"}', 3);
}

function setTimeUser(){
    return '<td>ola k ase</td>'
}
