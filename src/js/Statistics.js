class Statistics {

    constructor() {
        this.gameResults = [];

    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid,
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }
}

const stats = new Statistics();
console.log(stats);
