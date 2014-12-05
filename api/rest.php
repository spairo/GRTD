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
			$obj = simplexml_load_string($res->getInfoTwitterResult->any);
			echo json_encode($obj);
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
			$res = $ws->getHistorialCaso($a);
			echo $res->getHistorialCasoResult;
		break;

		case 'buscaUsuarioFb':
			$a = array(
				'cDn' => $_POST['cDn'],
				'filtro' => $_POST['filtro'],
				'numUserId' => $_POST['numUserId'],
				'tMail' => $_POST['tMail'],
				'userId' => $_POST['userId']
			);
			$res = $ws->buscaUsuarioFb($a);
			echo $res->buscaUsuarioFbResult;
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

		case 'datosClienteFb':
			$a = array('nIdUsuario' => $_POST['nIdUsuario']);
			$res = $ws->datosClienteFb($a);
			echo $res->datosClienteFbResult;
		break;

		case 'getHistorialCasoFb':
			$a = array('caseID' => $_POST['caseID']);
			$res = $ws->getHistorialCasoFb($a);
			echo $res->getHistorialCasoFbResult;
		break;

		case 'getMailEsc':
			$a = array(
				'mf1' => $_POST['mf1'],
				'mf2' => $_POST['mf2'],
				'mf3' => $_POST['mf3']
			);
			$res = $ws->getMailEsc($a);
			echo $res->getMailEscResult;
		break;

		case 'updateConfiguracion':
			$a = array(
				'cEspera' => $_POST['cEspera'],
				'cNS' => $_POST['cNS'],
				'cTME' => $_POST['cTME'],
				'cTMO' => $_POST['cTMO'],
				'cUmbral' => $_POST['cUmbral'],
			);
			$res = $ws->updateConfiguracion($a);
			echo $res->updateConfiguracionResult;
		break;

		default:
			echo 'Oopps!';
		break;
	}

?>
