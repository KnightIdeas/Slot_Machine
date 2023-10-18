document.addEventListener("DOMContentLoaded", function () {
    const spinButton = document.getElementById("spinButton");
    const reelsElement = document.getElementById("reels");
    const balanceElement = document.getElementById("balance");
    const messageElement = document.getElementById("message");
    const betAmountInput = document.getElementById("betAmount");

    const SYMBOLS = ["A", "B", "C", "D"];
    let balance = 1000;
    balanceElement.textContent = "Balance: $" + balance;
    const NUM_REELS = 3;
    const NUM_ROWS = 3;

    function initializeReels() {
        for (let i = 0; i < NUM_REELS; i++) {
            const reel = document.createElement("div");
            reel.classList.add("reel");

            for (let j = 0; j < NUM_ROWS; j++) {
                const symbol = document.createElement("div");
                symbol.textContent = "-";
                reel.appendChild(symbol);
            }

            reelsElement.appendChild(reel);
        }
    }

    function spinReel() {
        const betAmount = Number(betAmountInput.value);

        // Validate bet amount
        if (isNaN(betAmount) || betAmount <= 0) {
            messageElement.textContent = "Invalid bet amount!";
            return;
        }
        if (betAmount > balance) {
            messageElement.textContent = "You don't have enough money!";
            return;
        }

        balance -= betAmount;

        // Clear current reels
        reelsElement.innerHTML = "";

        const allResults = [];

        // Spin reels
        for (let i = 0; i < NUM_REELS; i++) {
            const reel = document.createElement("div");
            reel.classList.add("reel");
            const result = [];

            for (let j = 0; j < NUM_ROWS; j++) {
                const randomSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                result.push(randomSymbol);

                const symbol = document.createElement("div");
                symbol.textContent = randomSymbol;
                reel.appendChild(symbol);
            }

            allResults.push(result);
            reelsElement.appendChild(reel);
        }

        // Check for a win
        let won = false;
        const winnings = betAmount * 2;
    
        // Check row for win
        for (let i = 0; i < NUM_ROWS; i++) {
            const rowSymbols = allResults.map(reelResults => reelResults[i]);
            if (new Set(rowSymbols).size === 1) {
                won = true;
                balance += winnings;
                messageElement.textContent = `Row ${i + 1} win! You won ${winnings}!`;
                break;
            }
        }
        if (!won) {
            messageElement.textContent = "You lost!";
        }

        balanceElement.textContent = "Balance: £" + balance;
    }

    initializeReels();
    spinButton.addEventListener("click", spinReel);
});