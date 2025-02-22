# The MonieShop Analyzer
The Monieshop Analyzer is a simple application that analyzes the transaction data of the monieshop to provide insights such as the highest sales volume, highest sales value etc.

## Description
This project is built with Node.js, express and Typescript it uses the inbuilt fs and path to read each daily transaction txt in the transactions folder.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/bhosun/the-monieshop-analyzer.git
    cd monieshop
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```
    
## Usage
1. Start the server:
    ```bash
    npm run dev
    ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

- **GET /highest-sales-volume**
    - Returns the highest sales volume in a day.
    - Example response:
      ```json
      "The Highest sales volume in a day in the year is 12345 on 2025-01-01"
      ```

- **GET /highest-sales-value**
    - Returns the highest sales value in a day.
    - Example response:
      ```json
      "The Highest sales value in a day in the year is 67890 on 2025-01-01"
      ```

- **GET /most-sold-product**
    - Returns the most sold product by volume.
    - Example response:
      ```json
      "The most sold product in the year is Product with ID:123456 with a total volume of 789"
      ```

- **GET /most-sales-staffs**
    - Returns the staff with the most sales per month.
    - Example response:
      ```json
      {
          "message": "Successfully gotten the staffs with the most sales for all the months in the year",
          "data": {
              "2025-01": { "staffId": "8", "totalSales": 12345 },
              "2025-02": { "staffId": "9", "totalSales": 67890 }
          }
      }
      ```

- **GET /hour-with-most-transactions-volume**
    - Returns the highest hour of the day by average transaction volume.
    - Example response:
      ```json
      "The highest hour by average transaction volume is 14:00 with an average volume of 1234.56"
      ```

