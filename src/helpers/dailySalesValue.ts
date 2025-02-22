import * as fs from "fs";
import * as path from "path";
import { DailySalesValue } from "../interfaces";

export function getHighestDailySalesValue(): DailySalesValue {
  const transactionsPath = path.join("test-case-1");
  const dailyTransactions = fs.readdirSync(transactionsPath);

  let highestSaleAmount: number = 0;
  let dayOfTransaction: string = "";

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

  const data: DailySalesValue = {
    highestSaleAmount,
    dayOfTransaction
  };

  return data;
}
