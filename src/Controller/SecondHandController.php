<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SecondHandController extends AbstractController
{
    #[Route('/SecondHand', name: 'app_second_hand')]
    public function index(): Response
    {
        return $this->render('second_hand/secondHand.html.twig', [
            'controller_name' => 'SecondHandController',
        ]);
    }
}
