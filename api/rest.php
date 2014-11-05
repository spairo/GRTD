<?php
	session_start();
	header('Content-type: application/json');
	
	$ws = new SoapClient('http://148.244.88.197/summerhouston/supervisor/webservice1.asmx?WSDL');

	$opcion = (isset($_POST['op'])) ? $_POST['op'] : $_GET['op'];

	switch ($opcion) {

		case 'grtd':
			$a = array('cUmbral' => $_POST['cUmbral']);
			$res = $ws->grtd ($a);
			echo $res->grtdResult ;
		break;

		case 'getAgentesEstado':
			$res = $ws->getAgentesEstado();
			echo $res->getAgentesEstadoResult;
		break;

		case 'validateLogin':
			$a = array(
				'accion' => $_POST['accion'],
				'cLogin' => $_POST['cLogin'],
				'cPass' => $_POST['cPass']
			);
			$res = $ws->validateLogin($a);
			echo $res->validateLoginResult;
		break;

		case 'grtdArea':
			$a = array('cUmbral' => $_POST['cUmbral'],
			'skill' => $_POST['skill']);
			$res = $ws->grtdArea($a);
			echo $res->grtdAreaResult ;
		break;

		default:
			echo 'No hay opciones disponibles';
		break;
	}
?>
