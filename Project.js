// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Determine if the user won or lost
// 6. Update the balance
// 7. Play again?

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true){
        const depositAmount = prompt("How much would you like to deposit?: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0)
    {
        console.log("Please enter a valid amount.");
        
    }
    else
    {
        return numberDepositAmount;
    }
}
    
};

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("How many lines would you like to bet on?: ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3)
    {
        console.log("Please enter a valid line amount.");
        
    }
    else
    {
        return numberOfLines;
    }
}
};

const getBet = (balance, lines) => {
    while (true){
        const bet = prompt("How much would you like to bet per line?: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines)
    {
        console.log("Please enter a valid bet amount.");
        
    }
    else
    {
        return numberBet;
    }
}
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

