# horoscope

Bonjour, 
Voici la petite application horoscope.
Pour expliquer ma demarche et les differentes etapes du prcessus, voici comment j'ai procédé.
J'ai commencé par demarrer un nouveau projet express with pug for templating.
Puis j'ai créer et ajouté la partie index.js pour gerer la petite partie horoscope, ainsi que le test.js en parallele pour tester les differents cas.
Une fois le projet finalisé et nettoyé, j'ai attaquer la partie docker-compose pour build l'image en local.
Lorsque tout etait fonctionnel, j'ai utilisé l'outil fournis par git pour créer la CI afin de build le docker.
Puis j'ai pris un peu de temps pour comprendre les differentes etapes de la CI et retirer ce qui me semblait inutile.


Pour lancer le projet en local : 
- clone repo
- run docker compose up -d
OU
- docker pull ghcr.io/simoncimetiere/horoscope:main
- docker run -it -p 3000:3000 horoscope

Dans les deux cas, l'application est accessible sur le localhost:3000
la synthaxe est la suivante : localhost:3000/?day=X&month=Y


pour lancer les tests:
- npm run test
