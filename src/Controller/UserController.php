<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface as SerializerSerializerInterface;

class UserController extends AbstractController
{
    #[Route('/users/read', name: 'users_read', methods:['GET'])]
    public function show(EntityManagerInterface $em, SerializerSerializerInterface $serializer): JsonResponse
    {
        $users = $em -> getRepository(User::class)->findAll();
        $jsonContent = $serializer->serialize($users, 'json', ['ignored_attributes' => ['password']]);
        

        return new JsonResponse($jsonContent, Response::HTTP_OK, [], true);
    }

    #[Route('/user/create', name: 'user_create', methods:['POST'])]
    public function createUser(EntityManagerInterface $em, Request $request, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $user = new User();
        $user->setUsername($data['username']);
        $user->setRoles($data['role']);

        $plaintextPassword = $data['password'];

        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );

        $user->setPassword($hashedPassword);   
    
        // Persist et flush
        $em->persist($user);
        $em->flush();

        return new JsonResponse(['message' => 'User saved successfully', 'user' => $data], Response::HTTP_CREATED);
    }

    #[Route('/user/delete/{id}', name:'user_delete', methods:['DELETE'])]
    public function deleteUser(EntityManagerInterface $em, int $id): JsonResponse
    {
        $user= $em->getRepository(User::class)->find($id);

        $em->remove($user);
        $em->flush();

        return new JsonResponse(['message' => 'User has been deleted'], Response::HTTP_CREATED);
    }
}
