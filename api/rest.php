<?php

	// Converts XML content to JSON

	session_start();
	header('Content-type: application/json');

	// Public 148.244.88.197
	// Private 172.18.53.180

	$ws = new SoapClient('http://172.18.53.180/summerhouston/supervisor/webservice1.asmx?WSDL');

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
			echo $res->grtdAreaResult;
		break;

		case 'buscaCasos':
			$a = array(
				'cDn' => $_POST['cDn'],
				'tMail' => $_POST['tMail'],
				'userId' => $_POST['userId']
			);
			$res = $ws->buscaCasos($a);
			echo $res->buscaCasosResult;
		break;

		case 'getInfoTwitter':
			$a = array('twitterUserID' => $_POST['twitterUserID']);
			$res = $ws->getInfoTwitter($a);

			//echo $data = json_encode($res);

			//$strjson = XMLtoJSON($res);
			//$arrjson = json_decode($strjson, true);
			//echo $arrjson;

			//echo XMLtoJSON($res);
			$xml = simplexml_load_string($res);
			echo json_encode($xml, JSON_PRETTY_PRINT), "\n";
		break;

		case 'datosCliente':
			$a = array(
				'userId' => $_POST['userId'],
				'cDn' => $_POST['cDn'],
				'tMail' => $_POST['tMail']
			);
			$res = $ws->datosCliente($a);
			echo $res->datosClienteResult;
		break;

		case 'getDescartar':
			$a = array(
				'nmsgid' => $_POST['nmsgid'],
				'filter' => $_POST['filter'],
				'cBuscar' => $_POST['cBuscar']
			);
			$res = $ws->getDescartar($a);
			echo $res->getDescartarResult;
		break;

		case 'getHistorialCaso':
			$a = array('caseID' => $_POST['caseID']);
			$res = $ws->getHistorialCaso ($a);
			echo $res->getHistorialCasoResult ;
		break;

		case 'getDescartarFB':
			$a = array(
				'idSt' => $_POST['idSt'],
				'nFil' => $_POST['nFil'],
				'cBuscar' => $_POST['cBuscar']
			);
			$res = $ws->getDescartarFB($a);
			echo $res->getDescartarFBResult;
		break;

		default:
			echo 'No hay opciones disponibles';
		break;
	}

?>
