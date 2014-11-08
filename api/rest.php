<?php
	session_start();
	header('Content-type: application/json');

	$ws = new SoapClient('http://172.18.53.180/summerhouston/supervisor/webservice1.asmx?WSDL');

	$opcion = (isset($_POST['op'])) ? $_POST['op'] : $_GET['op'];


	// converts XML content to JSON
	// receives the URL address of the XML file. Returns a string with the JSON object


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

		default:
			echo 'No hay opciones disponibles';
		break;
	}

?>
