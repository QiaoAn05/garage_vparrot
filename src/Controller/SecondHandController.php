<?php

namespace App\Controller;

use App\Entity\Car;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface as SerializerSerializerInterface;

class SecondHandController extends AbstractController
{
    #[Route('/SecondHand', name: 'app_second_hand')]
    public function index(): Response
    {
        return $this->render('second_hand/secondHand.html.twig', [
            'controller_name' => 'SecondHandController',
        ]);
    }
    #[Route('/cars/read', name: 'cars_read', methods: ['GET'])]
    public function show(EntityManagerInterface $em, SerializerSerializerInterface $serializer): JsonResponse
    {
        $cars = $em -> getRepository(Car::class)->findAll();
        $jsonContent = $serializer->serialize($cars, 'json');
        // dd($jsonContent);

        return new JsonResponse($jsonContent, Response::HTTP_OK, [], true);
    }
}