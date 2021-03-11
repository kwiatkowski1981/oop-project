class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById('start').addEventListener('click', this.startGame());
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('score span.result');
        this.spanGames = document.querySelector('score span.number');
        this.spanWins = document.querySelector('score span.win');
        this.spanLosses = document.querySelector('score span.loss');

        this.render();
    }


    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = "", stats = [0,0,0]) {
        console.log('gramy...!!!!!');

        this.boards.forEach((board, index) => {
          board.style.backgroundColor = colors[index];
        })

        this.spanWallet.textContent = money;
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[0];
        this.spanLosses.textContent = stats[0];
    }

    startGame() {

    }
}
