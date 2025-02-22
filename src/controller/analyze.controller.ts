import express, { Request, Response } from 'express';
import { 
    getHighestSalesVolume, 
    getHighestDailySales, 
    getMostSoldProduct, 
    getStaffsWithMostSales, 
    getHourWithMostTransactionsVolume 
} from '../../src/service/analyze.service';

const router = express.Router();

router.get("/highest-sales-volume", (req: Request, res: Response) => {
    const salesVolumeData = getHighestSalesVolume();
    res.status(200).json(`The Highest sales volume in a day in the year is ${salesVolumeData.greatestVolume} on ${salesVolumeData.dayOfTransaction}`);
});

router.get("/highest-sales-value", (req: Request, res: Response) => {
    const salesData = getHighestDailySales();
     res.status(200).json(`The Highest sales value in a day in the year is ${salesData.highestSaleAmount} on ${salesData.dayOfTransaction}`);
});

router.get("/most-sold-product", (req: Request, res: Response) => {
    const productData = getMostSoldProduct(); 
    res.status(200).json(`The most sold product in the year is Product with ID:${productData.mostSoldProductId} with a total volume of ${productData.highestVolume}`);
});

router.get("/most-sales-staffs", (req: Request, res: Response) => {
    const salesData = getStaffsWithMostSales();
    res.status(200).json({
        message: "Successfully gotten the staffs with the most sales for all the months in the year",
        data: salesData
    });
});

router.get("/hour-with-most-transactions-volume", (req: Request, res: Response) => {
    const transactionData = getHourWithMostTransactionsVolume();
    res.status(200).json(`The hour with the most transactions volume in the year is ${transactionData.highestTimeSlot} with a total volume of ${transactionData.highestAverageVolume}`);         
});

export default router;