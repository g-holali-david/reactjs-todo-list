
## RJS Todo List App

RJS Todo List App est une application de liste de tâches construite avec React et déployée dans un conteneur Docker. 
Cette application est simple à exécuter via Docker pour un déploiement rapide.

#Prérequis

- Docker installé sur votre machine

## Exécution du Conteneur Docker

1. **Tirer l'image Docker depuis Docker Hub**

   Pour récupérer l'image Docker, utilisez la commande suivante :

   ```bash
   docker pull davsitcom/rjs-todolist-app:latest
   ```


2. Exécuter le conteneur**

   Lancez l'application en exécutant la commande suivante :

   ```bash
   docker run -p 80:80 davsitcom/rjs-todolist-app:latest

   - L'application sera alors accessible dans un navigateur à `http://localhost`.

## Exécuter le Conteneur en Arrière-plan (Optionnel)

Si vous souhaitez exécuter le conteneur en arrière-plan, ajoutez l'option `-d` :

docker run -d -p 80:80 davsitcom/rjs-todolist-app:latest
