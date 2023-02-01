const game = {

    images: [
        "paper",
        "rock",
        "scissors"
    ],

    init: function() {
        const elementChoice = document.getElementsByClassName('element-choice');
        for ( const element of elementChoice) {
            element.addEventListener('click', game.userChoice);
        };

        const reset = document.querySelector('#reset');
        reset.addEventListener('click', this.showFirstStage);
    },

    getRandomInt: function() {
        return Math.floor(Math.random() * 3);
    },

    // Au choix de l'utilisateur, enclenche les fonctions nécessaires pour obtenir un résultat
    userChoice: function(event) {
        game.selectUserChoice(event.currentTarget.id); 
        game.showSecondStage();
    },

    // Sélectionne la bonne image selon le choix de l'utilisateur, et ajoute les classes nécessaires
    selectUserChoice: function(element) {
        const showChoice = document.querySelector('#user-result')
        const image = document.createElement("img");
        let choice = "";

        if (element === "element-paper") {
            showChoice.classList.add("element-paper");
            image.src = "./images/Paper.png";
            image.classList.add("paper");
            choice = "paper";
        }
        else if (element === "element-rock") {
            showChoice.classList.add("element-rock");
            image.src = "./images/Rock.png";
            image.classList.add("rock");
            choice = "rock";
        }
        else if (element === "element-scissors") {
            showChoice.classList.add("element-scissors");
            image.src = "./images/Scissors.png";
            image.classList.add("scissors");
            choice = "scissors";
        }
        showChoice.append(image);
        
        game.selectRandomChoice(choice);
    },

    // Sélectionne une image au hasard, et ajoute les classes nécessaires 
    selectRandomChoice: function(userChoice) {
        const showRandom = document.querySelector('#random-result');
        const image = document.createElement("img");
        let random = "";
        const randomNumber = game.getRandomInt();
        const element = game.images[randomNumber];

        if (element === "paper") {
            showRandom.classList.add("element-paper");
            image.src = "./images/Paper.png";
            image.classList.add("paper");
            random = "paper";
        }
        else if (element === "rock") {
            showRandom.classList.add("element-rock");
            image.src = "./images/Rock.png";
            image.classList.add("rock");
            random = "rock";
        }
        else if (element === "scissors") {
            showRandom.classList.add("element-scissors");
            image.src = "./images/Scissors.png";
            image.classList.add("scissors");
            random = "scissors";
        }
        showRandom.append(image);

        game.getResult(userChoice, random);
    },

    // Obtient le résultat du jeu en cour
    getResult(userChoice, random) {
        let result = "";

        if (userChoice === random) {
            result = "This is a draw.";
        }
        else if (userChoice === "paper" & random === "rock" | userChoice === "rock" & random === "scissors" | userChoice === "scissors" & random === "paper") {
            result = "You win !";
        }
        else {
            result = "You lose !";
        }
        
        game.showResult(result);
    },

    // Affiche le résultat
    showResult: function(result) {
        const showResult = document.querySelector('#result-announcement');
        showResult.textContent = result;
    },

    // Sélectionne la bonne section à afficher (Affiche le résultat)
    showSecondStage: function() {
        const firstStage = document.querySelector('#first-stage');
        const secondStage = document.querySelector('#second-stage');

        firstStage.style.display = "none";
        secondStage.style.display = "block";
    },

    // Sélectionne la bonne section à afficher (Affiche la page d'accueil)
    showFirstStage: function() {
        const firstStage = document.querySelector('#first-stage');
        const secondStage = document.querySelector('#second-stage');

        firstStage.style.display = "block";
        secondStage.style.display = "none";

        // Retirer la class de la div
        // Retirer l'image
        const random = document.querySelector('#random-result');
        random.classList.remove("element-rock", "element-paper", "element-scissors")
        const randomImage = document.querySelector('#random-result > img');
        random.removeChild(randomImage);
        
        const choice = document.querySelector('#user-result')
        choice.classList.remove("element-rock", "element-paper", "element-scissors")
        const choiceImage = document.querySelector('#user-result > img')
        choice.removeChild(choiceImage);
    },
}
