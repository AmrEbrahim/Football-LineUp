import {
    arrayPlayers
} from './player-model.js'
let playerModel = arrayPlayers;
const entireScript = {
    /////////////////////////////////////////////////
    /////////////////// Variables ///////////////////
    /////////////////////////////////////////////////
    button: document.querySelector('.button'),
    closeFormation: document.querySelector('.formation-popup .close'),
    formationPopup: document.querySelector('.formation-popup'),
    formationOne: document.querySelector('.one'),
    formationTwo: document.querySelector('.two'),
    formationThree: document.querySelector('.three'),
    formationDataOne: document.querySelector('.formation-data-one'),
    formationDataTwo: document.querySelector('.formation-data-two'),
    formationDataThree: document.querySelector('.formation-data-three'),
    playersPopup: document.querySelector('.players-popup'),
    players: document.querySelectorAll('.player'),
    goalKeeperPlayers: document.querySelectorAll('div[data-value="goalKeeper"]'),
    defencePlayers: document.querySelectorAll('div[data-value="defence"]'),
    midfielderPlayers: document.querySelectorAll('div[data-value="midfielder"]'),
    attackPlayers: document.querySelectorAll('div[data-value="attack"]'),
   
    /////////////////////////////////////////////////
    ////////////////// Change Formation /////////////
    /////////////////////////////////////////////////
    formationData: function (data) {
        entireScript.button.addEventListener('click', () => {
            entireScript.formationPopup.style.display = 'block';
        });
        entireScript.closeFormation.addEventListener('click', () => {
            entireScript.formationPopup.style.display = 'none';
        });
        data.addEventListener('click', () => {
            entireScript.formationOne.style.display = 'none';
            entireScript.formationTwo.style.display = 'none';
            entireScript.formationThree.style.display = 'none';
            entireScript.formationPopup.style.display = 'none';
            entireScript.selectedRest();
            if (data == entireScript.formationDataOne) {
                entireScript.formationOne.style.display = 'block';
            } else if (data == entireScript.formationDataTwo) {
                entireScript.formationTwo.style.display = 'block';
            } else if (data == entireScript.formationDataThree) {
                entireScript.formationThree.style.display = 'block';
            }
        });
    },
    /////////////////////////////////////////////////
    ////////////////// Choose Player Function ///////
    /////////////////////////////////////////////////
    chooseYourPlayer: function (postion) {
        entireScript.playersPopup.style.display = "block";
        const playersList = document.querySelector('.players-list')
        const postionName = entireScript.playersPopup.querySelector('.head p');
        playersList.innerHTML = `<div class="players-row"></div>`
        postionName.innerHTML = `اختر ${postion[0].title}`
        for (let i = 0; i < postion.length; i++) {
            const playersRow = document.querySelector('.players-row');
            if (postion[i].selected === true) {
                playersRow.innerHTML += `<li class="players-data disabled">
                <div class="player-image">
                <img src="${postion[i].image}">
                </div>
                <div class="player-name">
                ${postion[i].name}
                </div>
                <div class="selected-image">
                <img src="images/selected.png">
                </div>
                </li>`
            } else if (postion[i].selected === false) {
                playersRow.innerHTML += `<li class="players-data">
                <div class="player-image">
                <img src="${postion[i].image}">
                </div>
                <div class="player-name">
                ${postion[i].name}
                </div>
                <div class="selected-image">
                <img src="images/selected.png">
                </div>
                </li>`
            }
        }
    },
    updatePlayerData: function (player, postion) {
        const closePlayer = document.querySelector('.players-popup .close');
        closePlayer.addEventListener('click', () => {
            entireScript.playersPopup.style.display = 'none';
        });
        const playersData = document.querySelectorAll('.players-data');
        for (let i = 0; i < playersData.length; i++) {
            playersData[i].addEventListener('click', () => {
                entireScript.playersPopup.style.display = "none";
                postion[i].selected = true;
                player.innerHTML = playersData[i].innerHTML;
                player.querySelector('.selected-image').remove();
                player.querySelector('.player-image').innerHTML += `<img class="wrong" src="images/wrong.png">`;
            })
        }
    },
    content: `<div class="player-image">
        <img class="plus" src="images/plus.png">
        <img src="images/player.png">
        </div>
        <div class="player-name">
        <p>Name</p>
        </div>`,

    selectedRest: function () {
        entireScript.players.forEach(player => player.innerHTML = entireScript.content)
        for (let i = 0; i < playerModel.length; i++) {
            playerModel[i].selected = false;
        }
    },
    /////////////////////////////////////////////////
    ///////// Players Data & Function ///////////////
    /////////////////////////////////////////////////
    playerPostion: function (playersPostion, postionArray) {
        playersPostion.forEach(playerPostion => playerPostion.addEventListener('click', () => {
            const filterArray = [];
            for (let i = 0; i < postionArray.length; i++) {
                if (postionArray[i].type == playerPostion.dataset.value) {
                    filterArray.push(postionArray[i]);
                }
            }
            const wrong = playerPostion.querySelector('.wrong');
            if (playerPostion.contains(wrong)) {
                for (let i = 0; i < filterArray.length; i++) {
                    const playerName = playerPostion.querySelector('.player-name').textContent.trim();
                    if (playerName == filterArray[i].name.trim()) {
                        filterArray[i].selected = false;
                        playerPostion.innerHTML = entireScript.content;
                    }
                }
            } else {
                entireScript.chooseYourPlayer(filterArray);
                entireScript.updatePlayerData(playerPostion, filterArray);
            }
        }));
    }
}
entireScript.formationData(entireScript.formationDataOne);
entireScript.formationData(entireScript.formationDataTwo);
entireScript.formationData(entireScript.formationDataThree);
entireScript.playerPostion(entireScript.goalKeeperPlayers, playerModel);
entireScript.playerPostion(entireScript.defencePlayers, playerModel);
entireScript.playerPostion(entireScript.midfielderPlayers, playerModel);
entireScript.playerPostion(entireScript.attackPlayers, playerModel);