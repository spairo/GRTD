
$(document).ready(function(){

    if ($('#dForma').length > 0) { 
       var ao =  $("#dForma").text();

       alert(ao);

    }
    //$("#dForma").empty();

    /*var gen = "";

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
    */
    //$("#dForma").append(gen);
    //generaProductividad();
    //detectaSizeMobil();
});