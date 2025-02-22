import * as fs from "fs";
import * as path from "path";

export function getHighestDailySalesValue() {
  const transactionsPath = path.join("test-case-1");
  const dailyTransactions = fs.readdirSync(transactionsPath);

  let highestSaleAmount = 0;
  let dayOfTransaction = "";

  dailyTransactions.forEach((file) => {
    const data = fs.readFileSync(path.join(transactionsPath, file), "utf8");
    const transactions = data.split("\n");

    transactions.forEach((transaction) => {
      if (transaction.trim() === "") return;

      const transactionLine = transaction.split(",");
      const saleAmount = parseFloat(transactionLine[3]);

      if (saleAmount > highestSaleAmount) {
        highestSaleAmount = saleAmount;
        dayOfTransaction = path.basename(file, ".txt");
      }
    });
  });

  const data = {
    highestSaleAmount,
    dayOfTransaction
  };

  return data;
}
