const moneyBox = () => {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4); // 4
myMoneyBox(10); // 14
myMoneyBox(6); // 20
myMoneyBox(21); // 41