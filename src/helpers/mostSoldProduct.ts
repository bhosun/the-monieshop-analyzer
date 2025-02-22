import * as fs from "fs";
import * as path from "path";

export function getMostSoldProductByVolume() {
  const transactionsPath = path.join("test-case-1");
  const dailyTransactions = fs.readdirSync(transactionsPath);

  const productVolumes: { [productId: string]: number } = {};

  dailyTransactions.forEach((file) => {
    const data = fs.readFileSync(path.join(transactionsPath, file), "utf8");
    const transactions = data.split("\n");

    transactions.forEach((transaction) => {
      if (transaction.trim() === "") return;

      const transactionLine = transaction.split(",");
      const products = transactionLine[2].slice(1, -1).split("|");

      products.forEach((product) => {
        const [productId, quantity] = product.split(":");
        const quantityNumber = parseInt(quantity, 10);

        if (productVolumes[productId]) {
          productVolumes[productId] += quantityNumber;
        } else {
          productVolumes[productId] = quantityNumber;
        }
      });
    });
  });

  let mostSoldProductId = "";
  let highestVolume = 0;

  for (const productId in productVolumes) {
    if (productVolumes[productId] > highestVolume) {
      highestVolume = productVolumes[productId];
      mostSoldProductId = productId;
    }
  }

  const data = {
    mostSoldProductId,
    highestVolume
  };
  return data;
}
