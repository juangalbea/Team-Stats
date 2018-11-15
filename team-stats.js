const team = {
  _players: [
    {firstName: "Pablo",
			lastName: "Sanchez",
			age: 11},
    {firstName: "Pete",
   	  lastName: "Drogue",
 	    age: 54},
    {firstName: "Peter",
 	    lastName: "Wheeler",
  	   age: 67}
  ],
  _games: [
    {opponent: "Broncos", teamPoints: 42, 							opponentPoints: 27},
    {opponent: "Poyatos", teamPoints: 53, 							opponentPoints: 43},
    {opponent: "Ronkos", teamPoints: 71, 								opponentPoints: 82}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      points: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

team.addPlayer('Stephen', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 28);
team.addPlayer('Bugs', 'Bunny', 28);

console.log(team.players);
team.addGame("Titans", 100, 98);
team.addGame("Panolis", 89, 93);
team.addGame("Paracuellos", 66, 45);
console.log(team.games);
