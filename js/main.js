{
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
        goalKeeper: [{
                name: 'Mohamed El Shenawy',
                image: 'images/shenawy.png',
                title: 'حارس المرمى',
                selected: false
            },
            {
                name: 'Sherif Ekramy',
                image: 'images/shreef.png',
                title: 'حارس المرمى',
                selected: false
            },
            {
                name: 'Ali Lotfy',
                image: 'images/lotfy.png',
                title: 'حارس المرمى',
                selected: false
            }
        ],
        defence: [{
                name: 'Saad Samir',
                image: 'images/Saad.png',
                title: 'المدافع',
                selected: false
            },
            {
                name: 'Ahmed Fathy',
                image: 'images/Fathy.png',
                title: 'المدافع',
                selected: false
            },
            {
                name: 'Ayman Ashraf',
                image: 'images/Ayman.png',
                title: 'المدافع',
                selected: false
            },
            {
                name: 'Salief Kolibaly',
                image: 'images/Salief.png',
                title: 'المدافع',
                selected: false
            },
            {
                name: 'Mohamed Hany',
                image: 'images/mohamed-hany.png',
                title: 'المدافع',
                selected: false
            },
            {
                name: 'Sabry Rahel',
                image: 'images/sabry.png',
                title: 'المدافع',
                selected: false
            }
        ],
        midfielder: [
            {
                name: 'Hossam Ashour',
                image: 'images/ashor.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Amr El Soulia',
                image: 'images/amr-solia.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Hisham Mohamed',
                image: 'images/hesham.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Islam Mohareb',
                image: 'images/mohareb.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Ahmed Hamody',
                image: 'images/hamody.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Ahmed Hamdy',
                image: 'images/ahmed-hamdy.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Mido Gaber',
                image: 'images/mido-gaber.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Walid Soliman',
                image: 'images/soliman.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Akram Tawfik',
                image: 'images/tawfik.png',
                title: 'خط الوسط',
                selected: false
            },
            {
                name: 'Karim Nedved',
                image: 'images/nedved.png',
                title: 'خط الوسط',
                selected: false
            }
        ],
        attack: [{
                name: 'Waleed Azzaro',
                image: 'images/azzaro.png',
                title: 'المهاجم',
                selected: false
            },
            {
                name: 'Marwan Mohsen',
                image: 'images/marwan.png',
                title: 'المهاجم',
                selected: false
            },
            {
                name: 'Salah Mohsen',
                image: 'images/salah-mohsen.png',
                title: 'المهاجم',
                selected: false
            }
        ],

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
            postionName.innerHTML = `اختر ${postion[0].title}`
            playersList.innerHTML = `<div class="players-row"></div>`
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
            for (let i = 0; i < entireScript.goalKeeper.length; i++) {
                entireScript.goalKeeper[i].selected = false;
            }
            for (let i = 0; i < entireScript.defence.length; i++) {
                entireScript.defence[i].selected = false;
            }
            for (let i = 0; i < entireScript.midfielder.length; i++) {
                entireScript.midfielder[i].selected = false;
            }
            for (let i = 0; i < entireScript.attack.length; i++) {
                entireScript.attack[i].selected = false;
            }
        },
        /////////////////////////////////////////////////
        ///////// Players Data & Function ///////////////
        /////////////////////////////////////////////////
        playerPostion: function (playersPostion, postionArray) {
            playersPostion.forEach(playerPostion => playerPostion.addEventListener('click', () => {
                const wrong = playerPostion.querySelector('.wrong');
                if (playerPostion.contains(wrong)) {
                    for (let i = 0; i < postionArray.length; i++) {
                        const playerName = playerPostion.querySelector('.player-name').textContent.trim();
                        if (playerName == postionArray[i].name.trim()) {
                            postionArray[i].selected = false;
                            playerPostion.innerHTML = entireScript.content;
                        }
                    }
                } else {
                    entireScript.chooseYourPlayer(postionArray);
                    entireScript.updatePlayerData(playerPostion, postionArray);
                }
            }));
        }
    }
    entireScript.formationData(entireScript.formationDataOne);
    entireScript.formationData(entireScript.formationDataTwo);
    entireScript.formationData(entireScript.formationDataThree);
    entireScript.playerPostion(entireScript.goalKeeperPlayers, entireScript.goalKeeper);
    entireScript.playerPostion(entireScript.defencePlayers, entireScript.defence);
    entireScript.playerPostion(entireScript.midfielderPlayers, entireScript.midfielder);
    entireScript.playerPostion(entireScript.attackPlayers, entireScript.attack);
}