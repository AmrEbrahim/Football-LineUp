import {
    PlayerModel
} from './player-model.js'
let playerModel = PlayerModel;

class Stadium {
    constructor() {
        this.content = `<div class="player-image">
    <img class="plus" src="images/plus.png">
    <img src="images/player.png">
    </div>
    <div class="player-name">
    <p>Name</p>
    </div>`;
    this.goalKeeperPlayers = document.querySelectorAll('div[data-value="goalKeeper"]');
    this.defencePlayers = document.querySelectorAll('div[data-value="defence"]');
    this.midfielderPlayers = document.querySelectorAll('div[data-value="midfielder"]');
    this.attackPlayers = document.querySelectorAll('div[data-value="attack"]');
        
}
    /////////////////////////////////////////////////
    ////////////////// Change Formation /////////////
    /////////////////////////////////////////////////

    formationData() {
        const button = document.querySelector('.button');
        const formationPopup = document.querySelector('.formation-popup');
        const closeFormation = document.querySelector('.formation-popup .close');
        const formationsData = document.querySelectorAll('.formation-data');
        const formations = document.querySelectorAll('.formation');
        const formationOne = document.querySelector('.one');
        const formationTwo = document.querySelector('.two');
        const formationThree = document.querySelector('.three');
        button.addEventListener('click', () => {
            formationPopup.style.display = 'block';
        });
        closeFormation.addEventListener('click', () => {
            formationPopup.style.display = 'none';
        });
        formationsData.forEach(formationData => formationData.addEventListener('click', () => {
            for (let i = 0; i < formations.length; i++) {
                formations[i].style.display = 'none';
            }
            formationPopup.style.display = 'none';
            this.selectedRest();
            if (formationData.classList.contains('formation-data-one')) {
                formationOne.style.display = 'block';
            } else if (formationData.classList.contains('formation-data-two')) {
                formationTwo.style.display = 'block';
            } else if (formationData.classList.contains('formation-data-three')) {
                formationThree.style.display = 'block';
            }
        }));
    }
    /////////////////////////////////////////////////
    ////////////////// Choose Player Function ///////
    /////////////////////////////////////////////////

    chooseYourPlayer(postion) {
        const playersPopup = document.querySelector('.players-popup');
        const playersList = document.querySelector('.players-list')
        const postionName = playersPopup.querySelector('.head p');
        playersPopup.style.display = "block";
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
    }
    updatePlayerData(player, postion) {
        const playersPopup = document.querySelector('.players-popup');
        const closePlayer = document.querySelector('.players-popup .close');
        closePlayer.addEventListener('click', () => {
            playersPopup.style.display = 'none';
        });
        const playersData = document.querySelectorAll('.players-data');
        for (let i = 0; i < playersData.length; i++) {
            playersData[i].addEventListener('click', () => {
                playersPopup.style.display = "none";
                postion[i].selected = true;
                player.innerHTML = playersData[i].innerHTML;
                player.querySelector('.selected-image').remove();
                player.querySelector('.player-image').innerHTML += `<img class="wrong" src="images/wrong.png">`;
            })
        }
    }
    selectedRest() {
        const players = document.querySelectorAll('.player');
        players.forEach(player => player.innerHTML = this.content)
        for (let i = 0; i < playerModel.length; i++) {
            playerModel[i].selected = false;
        }
    };
    /////////////////////////////////////////////////
    ///////// Players Data & Function ///////////////
    /////////////////////////////////////////////////
    playerPostion(playersPostion, postionArray) {
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
                        playerPostion.innerHTML = this.content;
                    }
                }
            } else {
                this.chooseYourPlayer(filterArray);
                this.updatePlayerData(playerPostion, filterArray);
            }
        }));
    }
}
const stadium = new Stadium;
stadium.formationData();
stadium.playerPostion(stadium.goalKeeperPlayers, playerModel);
stadium.playerPostion(stadium.defencePlayers, playerModel);
stadium.playerPostion(stadium.midfielderPlayers, playerModel);
stadium.playerPostion(stadium.attackPlayers, playerModel);