const rules = {

    init: function() {
        const boutonRules = document.querySelector('#bouton-rules');
        boutonRules.addEventListener('click', rules.showTheRules);

        const closeBoutonRules = document.querySelector('#close-bouton-rules');
        closeBoutonRules.addEventListener('click', rules.hideTheRules);
    },

    showTheRules: function() {
        const rulesDiv = document.querySelector('#rules');
        rulesDiv.style.opacity = "1";
        rulesDiv.style.zIndex = "1";
    },

    hideTheRules: function() {
        const rulesDiv = document.querySelector('#rules');
        rulesDiv.style.opacity = "0";
        rulesDiv.style.zIndex = "-1";
    }
};
