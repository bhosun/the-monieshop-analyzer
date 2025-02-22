import * as fs from "fs";
import * as path from "path";

export function getHighestDailySalesVolume() {
  const transactionsPath = path.join("test-case-1");
  const dailyTransactions = fs.readdirSync(transactionsPath);

  let greatestVolume: Number = 0;
  let dayOfTransaction: string = "";

  dailyTransactions.forEach((file) => {
    const data = fs.readFileSync(path.join(transactionsPath, file), "utf8");
    const transactions = data.split("\n");
    const dailyTransactionVolume: Number = transactions.length;

    if (dailyTransactionVolume > greatestVolume) {
      greatestVolume = dailyTransactionVolume;
      dayOfTransaction = path.basename(file, ".txt");
    }
  });

  const data = {
    greatestVolume,
    dayOfTransaction
  };

  return data;
}
