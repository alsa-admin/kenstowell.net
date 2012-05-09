<?php

class WorkController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

	public function hostbabyAction()
	{
		//This can sometimes trip up the json response(if you don't disable that is)
		$this->_helper->layout->disableLayout();

		$this->view->headLink()->appendStylesheet('/styles/work/hostbaby.css');
	}

	public function listbabyAction()
	{
		//This can sometimes trip up the json response(if you don't disable that is)
		$this->_helper->layout->disableLayout();
	}

	public function sunnyRoseAction()
	{
		//This can sometimes trip up the json response(if you don't disable that is)
		$this->_helper->layout->disableLayout();
	}

	public function devDocsAction()
	{
		//This can sometimes trip up the json response(if you don't disable that is)
		$this->_helper->layout->disableLayout();
	}

	public function blinkBudgetAction()
	{
		//This can sometimes trip up the json response(if you don't disable that is)
		$this->_helper->layout->disableLayout();
	}
}

