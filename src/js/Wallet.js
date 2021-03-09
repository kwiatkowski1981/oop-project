class Wallet {

    constructor(money) {
        let _money = money;
       // checking the current content of the wallet
        this.getWalletValue = () => _money;

        // checking that the user has the appropriate amount of funds
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            return false;
        }
        this.changeWallet = (value, type ="+") => {
            if (typeof value === "number" && !isNaN(value)) {

                if (type === "+"){
                    return _money += value;
                }else if (type === "-"){
                    return _money -= value;
                }else {
                    throw new Error("nieprawidłowy typ działania");
                }
            } else {
                console.log(typeof value);
                throw new Error("nieprawidłowa liczba");
            }
        }

    }


}

const wallet = new Wallet(200);
console.log(wallet);
console.log(wallet.checkCanPlay(201));
console.log(wallet.checkCanPlay(21));
console.log('yo wallet');

