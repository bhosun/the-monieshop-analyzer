import * as fs from "fs";
import * as path from "path";
import { DailySalesVolume } from "../interfaces";

export function getHighestDailySalesVolume(): DailySalesVolume{
  const transactionsPath = path.join("test-case-1");
  const dailyTransactions = fs.readdirSync(transactionsPath);

  let greatestVolume: number = 0;
  let dayOfTransaction: string = "";

  dailyTransactions.forEach((file) => {
    const data = fs.readFileSync(path.join(transactionsPath, file), "utf8");
    const transactions = data.split("\n");
    const dailyTransactionVolume: number = transactions.length;

    if (dailyTransactionVolume > greatestVolume) {
      greatestVolume = dailyTransactionVolume;
      dayOfTransaction = path.basename(file, ".txt");
    }
  });

  const data: DailySalesVolume = {
    greatestVolume,
    dayOfTransaction
  };

  return data;
}
