export interface DailySalesVolume {
  greatestVolume: number;
  dayOfTransaction: string;
}

export interface DailySalesValue {
  highestSaleAmount: number;
  dayOfTransaction: string;
}

export interface hourlySales { 
    highestTimeSlot: string, 
    highestAverageVolume: number
}

export interface MostSoldProduct {
  mostSoldProductId: string;
  highestVolume: number;
}

export interface StaffWithMostSales {
    [month: string]: {
        staffId: string;
        totalSales: number;
    };
}
