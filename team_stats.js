const team = {
  _players: [
    {  
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }, 
    {
        firstName: 'Tony',
        lastName: 'Micelli',
        age: 32
    }, 
    {
        firstName: 'Reggie',
        lastName: 'Jackson',
        age: 31
    }
  ],
  _games: [
    {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    },
    {
        opponent: 'Cardinals',
        teamPoints: 14,
        opponentPoints: 7
    },
    {
        opponent: 'Eagles',
        teamPoints: 24,
        opponentPoints: 9
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
        firstname: firstName,
        lastName: lastName,
        age: age 
    };
    return this._players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
        opponentName: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    }
    return this._games.push(game);
  }
}
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);
team.addGame('Buccaneers', 29, 17);
console.log(team._games);