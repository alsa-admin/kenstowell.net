<?php

class ContactController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

	public function submitAction()
	{
		//This can sometimes trip up the json response(if you don't disable that is)
		$this->_helper->layout->disableLayout();

		//Send to Sunny Rose emil
		$mail = new Zend_Mail();

		//Set up smtp params
		$config = array(
			'auth'       =>  'login',
			'username'   =>  'ktstowell@kenstowell.net',
			'password'   =>  'rhincodon5',
			'port'       =>  '587'
		);

		//Set up transport
		$transport = new Zend_Mail_Transport_Smtp('smtp.kenstowell.net', $config);

		$mail->setBodyHtml('<h4 style="text-decoration:underline">From: </h4>'.$_POST['name'] .
			"\n".'<h4 style="text-decoration:underline">At: </h4>'.$_POST['email'].
			'<br /><h4 style="text-decoration:underline">Message: </h4>' ."\n". $_POST['message']);
		$mail->setFrom($_POST['email'], $_POST['name']);
		$mail->setSubject('kenstowell.net website inquiry"')
			->addTo('kenstowell.net', 'Ken Stowell');
		$mail->send($transport);

	}


}

