<?php

namespace App\Controller;

use App\Entity\Car;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
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

    #[Route('/car/create', name: 'car_create', methods: ['POST'])]
    public function createOrUpdate(EntityManagerInterface $em, Request $request): JsonResponse
    {
        // Récupérer les données de la requête JSON
        $data = json_decode($request->getContent(), true);
    
        // Validation des données
        if (!isset($data['name'], $data['km'], $data['year'], $data['price'])) {
            return new JsonResponse(['error' => 'Invalid data'], Response::HTTP_BAD_REQUEST);
        }
    
        // Vérifier si c'est une nouvelle voiture ou une mise à jour
        if (isset($data['id'])) {
            // C'est une mise à jour
            $car = $em->getRepository(Car::class)->find($data['id']);
            if (!$car) {
                return new JsonResponse(['error' => 'Car not found'], Response::HTTP_NOT_FOUND);
            }
        } else {
            // C'est une nouvelle voiture
            $car = new Car();
            $car->setCreatedAt(new \DateTimeImmutable());
        }
    
        // Mettre à jour les propriétés de la voiture
        $car->setName($data['name']);
        $car->setKm($data['km']);
        $car->setYear($data['year']);
        $car->setPrice($data['price']);
        $car->setUpdatedAt(new \DateTimeImmutable());
    
        // Persist et flush
        $em->persist($car);
        $em->flush();
    
        return new JsonResponse(['message' => 'Car saved successfully', 'car' => $data], Response::HTTP_CREATED);
    }

    #[Route('/car/delete/{id}', name: 'car_delete', methods: ['DELETE'])]
    public function delete(EntityManagerInterface $em, int $id): JsonResponse
    {
        // Récupérer le car avec l'id
        $car = $em -> getRepository(Car::class)->find($id);

        // Persist et flush
        $em->remove($car);
        $em->flush();
    
        return new JsonResponse(['message' => 'Car has been deleted'], Response::HTTP_CREATED);
    }
    
}