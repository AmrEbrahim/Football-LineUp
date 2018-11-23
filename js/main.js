{const button = document.querySelector('.button');
const closeFormation = document.querySelector('.formation-popup .close');
const formationPopup = document.querySelector('.formation-popup');
const formationOne = document.querySelector('.one');
const formationTwo = document.querySelector('.two');
const formationThree = document.querySelector('.three');
const formationDataOne = document.querySelector('.formation-data-one');
const formationDataTwo = document.querySelector('.formation-data-two');
const formationDataThree = document.querySelector('.formation-data-three');
const playersPopup = document.querySelector('.players-popup');
const players = document.querySelectorAll('.player');

/////////////////////////////////////////////////
////////////////// Change Formation /////////////
/////////////////////////////////////////////////

button.addEventListener('click', () => {
    formationPopup.style.display = 'block';
});
closeFormation.addEventListener('click', () => {
    formationPopup.style.display = 'none';
});
formationDataOne.addEventListener('click', () => {
    formationOne.style.display = 'block';
    formationTwo.style.display = 'none';
    formationThree.style.display = 'none';
    formationPopup.style.display = 'none';
    selectedRest();
});
formationDataTwo.addEventListener('click', () => {
    formationOne.style.display = 'none';
    formationTwo.style.display = 'block';
    formationThree.style.display = 'none';
    formationPopup.style.display = 'none';
    selectedRest();
});
formationDataThree.addEventListener('click', () => {
    formationOne.style.display = 'none';
    formationTwo.style.display = 'none';
    formationThree.style.display = 'block';
    formationPopup.style.display = 'none';
    selectedRest();
});

/////////////////////////////////////////////////
////////////////// Choose Player Function ///////
/////////////////////////////////////////////////

function chooseYourPlayer(postion) {
    playersPopup.style.display = "block";
    playersPopup.innerHTML =
        `<div class="head">
    <p>اختر ${postion[0].title}</p>
    <div class="close">
    <img src="images/close.png">
    </div>
    </div>
    <div class="players-list">
    <div class="players-row"></div>
    </div>`
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

const content = `<div class="player-image">
<img class="plus" src="images/plus.png">
<img src="images/player.png">
</div>
<div class="player-name">
<p>Name</p>
</div>`


function updatePlayerData(player, postion) {
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

function selectedRest() {
    players.forEach(player => player.innerHTML = content)
    for (let i = 0; i < goalKeeper.length; i++) {
        goalKeeper[i].selected = false;
    }
    for (let i = 0; i < defence.length; i++) {
        defence[i].selected = false;
    }
    for (let i = 0; i < midfielder.length; i++) {
        midfielder[i].selected = false;
    }
    for (let i = 0; i < attack.length; i++) {
        attack[i].selected = false;
    }
}

/////////////////////////////////////////////////
////////////////// GoalKeeper Data //////////////
/////////////////////////////////////////////////

const goalKeeper = [{
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
];

const goalKeeperPlayers = document.querySelectorAll('div[data-value="goalKeeper"]');
goalKeeperPlayers.forEach(goalKeeperPlayer => goalKeeperPlayer.addEventListener('click', () => {
    const wrong = goalKeeperPlayer.querySelector('.wrong');
    if (goalKeeperPlayer.contains(wrong)) {
        for (let i = 0; i < goalKeeper.length; i++) {
            const playerName = goalKeeperPlayer.querySelector('.player-name').textContent.trim(); 
            if (playerName == goalKeeper[i].name.trim()) {
                goalKeeper[i].selected = false;
                goalKeeperPlayer.innerHTML = content;
            }
        }
    } else {
        chooseYourPlayer(goalKeeper);
        updatePlayerData(goalKeeperPlayer, goalKeeper);
    }
}));


/////////////////////////////////////////////////
////////////////// Defence Data //////////////
/////////////////////////////////////////////////


const defence = [{
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
];

const defencePlayers = document.querySelectorAll('div[data-value="defence"]');
defencePlayers.forEach(defencePlayer => defencePlayer.addEventListener('click', () => {
    const wrong = defencePlayer.querySelector('.wrong');
    if (defencePlayer.contains(wrong)) {
        for (let i = 0; i < defence.length; i++) {
            const playerName = defencePlayer.querySelector('.player-name').textContent.trim(); 
            if (playerName == defence[i].name.trim()) {
                defence[i].selected = false;
                defencePlayer.innerHTML = content;
            }
        }
    } else {
        chooseYourPlayer(defence);
        updatePlayerData(defencePlayer, defence);
    }
}));


/////////////////////////////////////////////////
////////////////// midfielder Data //////////////
/////////////////////////////////////////////////


const midfielder = [{
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
];

const midfielderPlayers = document.querySelectorAll('div[data-value="midfielder"]');
midfielderPlayers.forEach(midfielderPlayer => midfielderPlayer.addEventListener('click', () => {
    const wrong = midfielderPlayer.querySelector('.wrong');
    if (midfielderPlayer.contains(wrong)) {
        for (let i = 0; i < midfielder.length; i++) {
            const playerName = midfielderPlayer.querySelector('.player-name').textContent.trim(); 
            if (playerName == midfielder[i].name.trim()) {
                midfielder[i].selected = false;
                midfielderPlayer.innerHTML = content;
            }
        }
    } else {
        chooseYourPlayer(midfielder);
        updatePlayerData(midfielderPlayer, midfielder);
    }
}));


/////////////////////////////////////////////////
////////////////// Attack Data //////////////
/////////////////////////////////////////////////

const attack = [{
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
];

const attackPlayers = document.querySelectorAll('div[data-value="attack"]');
attackPlayers.forEach(attackPlayer => attackPlayer.addEventListener('click', () => {
    const wrong = attackPlayer.querySelector('.wrong');
    if (attackPlayer.contains(wrong)) {
        for (let i = 0; i < attack.length; i++) {
            const playerName = attackPlayer.querySelector('.player-name').textContent.trim(); 
            if (playerName == attack[i].name.trim()) {
                attack[i].selected = false;
                attackPlayer.innerHTML = content;
            }
        }
    } else {
        chooseYourPlayer(attack);
        updatePlayerData(attackPlayer, attack);
    }
}));}