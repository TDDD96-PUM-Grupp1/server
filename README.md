# IoT Party Server 
This project was carried out by eight students at Linköping University as a part of our Bachelor project and is licensed under MIT.

The purpose of the server is to run a deepstream server that is handling all the data being sent from and to the UI, Controller and Service.

Technically this is a general purpose deepstream server, but it was mainly used as a part of the IoT party game.

# Dependencies 
In order to run the game for this project the user need four different repositories which are listed below:
* [Server](https://github.com/TDDD96-PUM-Grupp1/server) - This runs the deepstream server that handles the network connections.
* [UI](https://github.com/TDDD96-PUM-Grupp1/ui) - This hosts the Javascript files for the UI.
* [Controller](https://github.com/TDDD96-PUM-Grupp1/services) - This hosts the Javascript files for the Controller.
* [Services](https://github.com/TDDD96-PUM-Grupp1/services) - This hosts services that handles all instances that are currently running, this makes it possible to run multiple instances of the UI.

The corresponing setup is described in their respective GitHub repositories.

# Installation
The instructions will be using yarn as package manager. See [npm vs yarn cheat sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc) for npm equivalents.

To download and install all the Javascript packages run these commands in your prefered terminal:

```
git clone git@github.com:TDDD96-PUM-Grupp1/server.git
yarn
```

If you cannot use ssh to clone the repository you can use the https command instead:
```
git clone https://github.com/TDDD96-PUM-Grupp1/server.git
yarn
```

Now that you have the Server and all the needed packages you can host the deepstream server by running the following command:
```
yarn start
```
