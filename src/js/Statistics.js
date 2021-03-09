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

    showGameStatistics() {
        let games = this.gameResults.length; // ilosc gier łącznie
        let wins = this.gameResults.filter(result => result.win).length; // szukam wartosci true za pomoca filter
        let losses = this.gameResults.filter(result => !result.win).length; // szukam wartosci false za pomoca filter
        console.log(games, wins, losses);
        return [games, wins, losses];
    }
}

// const stats = new Statistics();
// console.log(stats);
