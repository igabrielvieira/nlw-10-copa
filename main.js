function createGame(player1, hour, player2) {
    return `
    
    <li>
        <img src="/imagens/icon-${player1}.svg" alt="">
        <strong>${hour}</strong>
        <img src="/imagens/icon-${player2}.svg" alt="">
    </li>

    `
}

let delay = 0
function createCard(date, day, games) {
    delay = delay + 0.2
    return `
    
<div class="card" style="animation-delay: ${delay}s;">
    <h2>${date} <span>${day}</span></h2>
    
    <ul>
        ${games}
    </ul>

</div>

    `
}

document.querySelector('#cards').innerHTML =      

    createCard('24/11', 'quinta', 
        createGame('brasil', '16:00', 'servia')) +
    
    createCard('28/11', 'segunda',
        createGame('brasil', '13:00', 'suecia')) +
    
    createCard('02/12', 'sexta',
        createGame('brasil', '16:00', 'camaroes') + 
        
        createGame('suecia', '12:00', 'camaroes')) +
    
    createCard('24/01', 'sábado', 
        createGame('brasil', '11:00', 'suecia'))
    

