<?php
	session_start();
	header('Content-type: application/json');

	$ws = new SoapClient('http://172.18.53.180/summerhouston/supervisor/webservice1.asmx?WSDL');

	$opcion = $_POST['op'];

	switch ($opcion) {

		case 'grtd':
			$a = array('cUmbral' => $_POST['cUmbral']);
			$res = $ws->grtd ($a);
			echo $res->grtdResult ;
		break;

		case 'grtdArea':
			$a = array('cUmbral' => $_POST['cUmbral'],
			'skill' => $_POST['skill']);
			$res = $ws->grtdArea  ($a);
			echo $res->grtdAreaResult ;
		break;

		default:
			echo 'No hay opciones disponibles';
		break;

	}
?>