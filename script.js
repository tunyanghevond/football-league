const league = {
    teams: [

        {
            name: "Манчестер Сити",
            gameCount: 38,
            winCount: 27,
            looseCount: 6,
            noOneCount: 9,
            players: [
                {
                    name: "Зак Стеффен",
                    nomber: 13,
                    position: "Вратар",
                    matchCount: 1,
                    goalCount: 0,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    name: "Кайл Уокер",
                    nomber: 2,
                    position: "Защитники",
                    matchCount: 24,
                    goalCount: 1,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    name: "Илкай Гюндоган",
                    nomber: 13,
                    position: "Полузащитники",
                    matchCount: 28,
                    goalCount: 13,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    name: "Рахим Стерлинг",
                    nomber: 7,
                    position: "Нападающие",
                    matchCount: 31,
                    goalCount: 10,
                    yellowCards: 4,
                    redCards: 0
                },
                {
                    name: "Габриэл Жезус",
                    nomber: 9,
                    position: "Нападающие",
                    matchCount: 29,
                    goalCount: 9,
                    yellowCards: 2,
                    redCards: 0
                }
            ]

        },
        {
            name: "Челси",
            gameCount: 38,
            winCount: 19,
            noOneCount: 10,
            looseCount: 9,
            players: [
                {
                    name: "Кепа",
                    nomber: 1,
                    position: "Вратар",
                    matchCount: 7,
                    goalCount: 0,
                    yellowCards: 1,
                    redCards: 0
                },
                {
                    name: "Антонио Рюдигер",
                    nomber: 2,
                    position: "Защитники",
                    matchCount: 19,
                    goalCount: 1,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    name: "Жоржиньо",
                    nomber: 5,
                    position: "Полузащитники",
                    matchCount: 28,
                    goalCount: 7,
                    yellowCards: 2,
                    redCards: 0
                },
                {
                    name: "Тэмми Абрахам",
                    nomber: 9,
                    position: "Нападающие",
                    matchCount: 22,
                    goalCount: 6,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    name: "Тимо Вернер",
                    nomber: 11,
                    position: "Нападающие",
                    matchCount: 35,
                    goalCount: 6,
                    yellowCards: 0,
                    redCards: 0
                }
            ]
        },
        {
            name: "Тоттенхэм",
            gameCount: 38,
            winCount: 18,
            noOneCount: 8,
            looseCount: 12,
            players: [
                {
                    name: "Уго Льорис",
                    nomber: 1,
                    position: "Вратар",
                    matchCount: 38,
                    goalCount: 0,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    name: "Мэтт Догерти",
                    nomber: 2,
                    position: "Защитники",
                    matchCount: 17,
                    goalCount: 0,
                    yellowCards: 2,
                    redCards: 1
                },
                {
                    name: "Пьер-Эмиль Хейбьерг",
                    nomber: 5,
                    position: "Полузащитники",
                    matchCount: 38,
                    goalCount: 2,
                    yellowCards: 9,
                    redCards: 0
                },
                {
                    name: "Сон Хын Мин",
                    nomber: 7,
                    position: "Нападающие",
                    matchCount: 37,
                    goalCount: 17,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    name: "Харри Кейн",
                    nomber: 10,
                    position: "Нападающие",
                    matchCount: 35,
                    goalCount: 23,
                    yellowCards: 0,
                    redCards: 0
                }
            ]

        },
        {
            name: "Лидс",
            gameCount: 38,
            winCount: 18,
            noOneCount: 5,
            looseCount: 15,
            players: [
                {
                    name: "Уго Илян Мелье",
                    nomber: 1,
                    position: "Вратар",
                    matchCount: 35,
                    goalCount: 0,
                    yellowCards: 0,
                    redCards: 0
                },
                {
                    name: "Робин Кох",
                    nomber: 5,
                    position: "Защитники",
                    matchCount: 17,
                    goalCount: 0,
                    yellowCards: 7,
                    redCards: 1
                },
                {
                    name: "Эзджан Алиоски",
                    nomber: 10,
                    position: "Полузащитники",
                    matchCount: 36,
                    goalCount: 2,
                    yellowCards: 7,
                    redCards: 0
                },
                {
                    name: "Элдер Кошта",
                    nomber: 17,
                    position: "Нападающие",
                    matchCount: 22,
                    goalCount: 3,
                    yellowCards: 3,
                    redCards: 0
                },
                {
                    name: "Джо Гелхардт",
                    nomber: 30,
                    position: "Нападающие",
                    matchCount: 38,
                    goalCount: 17,
                    yellowCards: 3,
                    redCards: 0
                }
            ]
        }

    ]
}

function League(teams) {
    this.teams = teams;
}

const leagueTeams = new League(league.teams)

League.prototype.getBestLeagueScorer = function () {
    let bestScorer = this.teams[0].winCount;
    let name;
    this.teams.map(function (team) {
        if (team.winCount > bestScorer) {
            bestScorer = team.winCount;
            name = team.name;
        }
    });
    console.log(`Best scorer is  ${name} team with ${bestScorer} games!  `)
}
// leagueTeams.getBestLeagueScorer();


League.prototype.getMaxMissedGoals = function () {
    let looser = this.teams[0].looseCount;
    let name;
    this.teams.map(function (team) {
        if (team.looseCount > looser) {
            looser = team.looseCount;
            name = team.name
        }
    });
    console.log(`Maximum missed goals has ${name} team with ${looser} games!  `)
}
//leagueTeams.getMaxMissedGoals()

League.prototype.getAllTeamNames = function () {
    let teamNames = [];
    this.teams.map((team) => teamNames.push(team.name));
    return teamNames;
}
//leagueTeams.getAllTeamNames


function Team(players) {
    this.players = players;

}
const teamPlayers = league.teams;
let teams = new Team(teamPlayers);


Team.prototype.getBestScorer = function () {
    let bestScorer = 0;
    let bestScorerName;
    this.players.forEach(function (el) {
        el.players.forEach(function (player) {
            if (player.goalCount > bestScorer) {
                bestScorer = player.goalCount;
                bestScorerName = player.name
            }
        });
    })
    console.log(`Best scorer is  ${bestScorerName} with ${bestScorer} goals!  `)

}
//teams.getBestScorer();

Team.prototype.getAllPositions = function () {
    let playersPositions = [];

    this.players.forEach(function (el) {
        el.players.forEach(function (player) {
            playersPositions.push(player.position)

        });
    })
    console.log(playersPositions);
}
//teams.getAllPositions();

Team.prototype.getMaxRedCards = function () {
    let redCards = 0;
    let playerName;
    this.players.forEach(function (el) {
        el.players.forEach(function (player) {
            if (player.redCards > redCards) {
                redCards = player.redCards;
                playerName = player.name
            }
        });
    })
    console.log(`Most red cards has ${playerName} with ${redCards} red cards!  `)

}
//teams.getMaxRedCards();

Team.prototype.getMaxYellowCards = function () {
    let yellowCard = 0;
    let playerName;
    this.players.forEach(function (el) {
        el.players.forEach(function (player) {
            if (player.yellowCards > yellowCard) {
                yellowCard = player.yellowCards;
                playerName = player.name
            }
        });
    })
    console.log(`Most yellow cards has ${playerName} with ${yellowCard} yellow cards!  `)

}
//teams.getMaxYellowCards();