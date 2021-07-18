# Evaluation EM - Juillet 2021

## _Paris events_

# Lien de visualisation : [https://em-paris-events.vercel.app/][https://em-paris-events.vercel.app/]

##### Versionning & production

Ce repo gitub est lié à Vercel ( https://vercel.com/ ), qui me permet de mettre en ligne le projet facilement et de pouvoir actualisé le lien de prod ( visualisation ) au push sur la branche master de ce repo .

## Fonctionnement

##### Router

J'ai utilisé react-router et react-router-dom de façon simple .
J'ai rassemblé toutes les routes disponibles dans l'application dans le fichier "src/routes.js", avec le paramètre "nav" si il apparaît dans la navbar

##### Styles

Comme je n'avais jamais fait une application entière avec, j'ai utilisé les modules css, que j'ai rangé à coté des fichiers reliés ( car petite application, donc on arrive à se repérer au niveau des fichiers ).
Il y a aussi le css /src/App.css , qui me sert pour tout les styles globales et paratagés
Tout le css est donc fait à la main hormis :

-   Le loading (trouvé ici : https://loading.io/css/)
-   Tooltip pour les dates d'evenements (trouvé ici : https://www.w3schools.com/howto/howto_css_tooltip.asp)
-   Icone et animation pour le boutton favoris (trouvé ici : https://codepen.io/imreyesjorge/pen/jJwvxz)

J'ai pris la liberté de changer quelques styles par rapport aux "maquettes"

##### Librairies

J'ai voulu insérer le minum de librairies pour faire le plus petit bundle .
Je n'ai implémenter les librairies "leaflet" et "react-leaflet" pour la map et aussi les libs pour Webpack & co
Tout le js est donc fait à la main hormis :

-   le /src/utils/useLocalStorage.js, que j'ai trouvé la (https://typeofnan.dev/using-local-storage-in-react-with-your-own-custom-uselocalstorage-hook/) mais en vrai j'aurais pu le faire

J'ai aussi implémenter la librairie "framer-motion" pour les animations que j'avais jamais utilisé et qui me paraissait pas mal pour ajouter une corde à mon arc ( dans ma boite on utilise material-ui, j'avais envie d'essayer autre chose )

Taille bundle.js final :

## Features implémentées

-   Les 4 pages demandés
-   Animations à l'apparition + boutton favoris
-   Carte leaflet
-   Gestion des erreurs et des resultats vides

## Le fonctionnement des pages

### Accueil :

Utilisation de la font "Parisienne", j'ai trouvé ça drôle
Simple appel sur l'api et affichage des 3 derniers evenements ( appel API avec le parametre "&rows=3" ) et "&sort=-date_start" pour le tri ( j'ai pris le param que vous avez utiliser pour la démo car le brief ne précise pas le paramètre à utiliser )
et affichage .
Pour le tooltip "Dates à venir", j'ai récupéré "record.fields.occurences" qui me sert à avoir les timestamps que je peux comparer avec la date d'aujourd'hui et comme ça je peux filtrer "record.fields.date_description" et n'obtenir que les dates futurs ( feature dispo sur toutes les cartes d'événements ), tout ça dans une fonction /src/utils/getfilteredDates.js

### Rechercher un événement :

Dans le code j'ai fait en sorte de pouvoir ajouter plusieurs filtres mais j'ai pas eu le temps de voir ce que je pouvais filtrer avec les appels de l'API ¯\\\_(ツ)\_/¯  
Sinon comportement normal je filtre avec le parametre search voulu de l'API .
( Pas eu le temps pour la pagination, j'ai préféré m'amuser avec les animations hehe)

### Liste des favoris :

En bref, pour stocké les favroris, j'utilise le component /src/utils/useLocalStorage.js que j'ai combiné avec un context pour avoir accès à mon localstorage comme un context partout dans mon appli.
Comme on a besoin des favoris partout dans l'appli j'ai wrappé tout l'appli dans le context ( dans /src/App.js )
Pour ce qui est de la sauvegarde des evenements, je ne stocke que l'id, et donc, quand j'arrive sur la page de la lsite des favoris je fait un appel sur tout les ids pour récupérer les événements ( je n'ai pas stocké toutes les informations des evenements dans le localsotrage car si l'événement est mis à jour, il y aura un problème de syncronisation avec la base de données, donc je stocke les ids et je get les events, c'est mieux je pense . )

### Informations événements :

Appel en fonction de l'id dans l'url, récupération et affichage des informations simple .

> NB : Je n'ai pas eu le choix de travailler pour mon entreprise la semaine durant la réalisation de ce projet ( d'ou les suivis absents ), j'ai donc du le faire enitèrement ce week-end .
