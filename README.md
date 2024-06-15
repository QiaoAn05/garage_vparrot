# Projet garage vparrot

# Installation

1. Clonez le dépôt du projet :
git clone git@github.com:QiaoAn05/garage_vparrot.git

2. Installez les dépendances avec composer :
composer install

3. Installez yarn ou npm
yarn install ou npm install

4. Configurez la variable d'environnement .env en local :
DATABASE_URL="mysql://root:ChangeMe@127.0.0.1:3306/db_garage?serverVersion=8.0.32&charset=utf8mb4"

5. Créez la base de données et faire la migration :
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate

# Démarrage

1. lancer le serveur Symfony :
symfony serve -d ou symfony server:start

2. Dans un autre terminal, lancer le yarn ou npm pour faire le build :
yarn watch ou npm run dev

# Technologies
1. Symfony 7
2. PHP 8.2
3. React.js 18

# Contribution
Perez Johan

