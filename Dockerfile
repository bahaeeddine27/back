# Utiliser une image node comme base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /back

# Copier le package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Installer nodemon
RUN npm install -g nodemon

# Copier le reste des fichiers de l'application
COPY . .

# Copier le fichier .env
COPY .env .env

# Exposer le port de l'application
EXPOSE 5000


# Commande pour démarrer l'application en mode développement
CMD ["nodemon", "server.js"]
