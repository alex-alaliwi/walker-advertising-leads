# Walker Advertising Leads Management System

## Project Overview
This project provides an API and a dashboard UI for managing leads purchased from third-party providers. 
- The API allows providers to send leads via a webhook.  
- The Angular dashboard enables viewing and managing leads.  

### Technologies Used
- Backend: C#, ASP.NET Core  
- Frontend: Angular  
- Database: In-memory collection (no external DB required)  
- CORS: Configured for frontend-backend communication  

---

## 1. Prerequisites

Before running the project, ensure you have the following installed on your system:

### Backend Requirements (ASP.NET API)
- **.NET SDK (6.0 or later)**  
  - Check if installed:  
    ```sh
    dotnet --version
    ```
  - If not installed, download and install from:  
    [https://dotnet.microsoft.com/en-us/download](https://dotnet.microsoft.com/en-us/download)

### Frontend Requirements (Angular UI)
- **Node.js and npm** (Required for Angular)  
  - Check if installed:  
    ```sh
    node -v
    npm -v
    ```
  - If not installed, download and install from:  
    [https://nodejs.org/en/download](https://nodejs.org/en/download)

---

## 2. Setup & Installation

### Backend (ASP.NET API)
1. Navigate to the backend folder:
   ```sh
   cd WalkerAdvertising.API
   ```
2. Restore dependencies:
   ```sh
   dotnet restore
   ```
3. Run the API:
   ```sh
   dotnet run
   ```
4. The API will start at:  
   **http://localhost:5000** (Change in `Program.cs` if needed).  
5. Swagger Documentation:  
   Open **http://localhost:5000/** in your browser.

### Frontend (Angular UI)
1. Navigate to the frontend folder:
   ```sh
   cd walker-advertising-ui
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the UI:
   ```sh
   ng serve --open
   ```
4. The UI will open at: **http://localhost:4200**  

---

## 3. API Endpoints

### Webhook Endpoint (Receive Leads)
```
POST /api/leads
Content-Type: application/json
```

Example Request:
```json
{
  "name": "John Doe",
  "phoneNumber": "123-456-7890",
  "zipCode": "12345",
  "canReceiveText": true,
  "canReceiveEmail": true,
  "email": "johndoe@example.com"
}
```

Example Response (201 Created):
```json
{
  "id": 1,
  "name": "John Doe",
  "phoneNumber": "123-456-7890",
  "zipCode": "12345",
  "canReceiveText": true,
  "canReceiveEmail": true,
  "email": "johndoe@example.com"
}
```

### Get All Leads
```
GET /api/leads
```

Example Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "zipCode": "12345",
    "canReceiveText": true,
    "canReceiveEmail": true,
    "email": "johndoe@example.com"
  }
]
```

---

## 4. UI User Guide

### Leads Dashboard
- View Leads: All leads appear in a table.
- Click "View": Opens lead details in a popup.
- Click outside the modal or "Close": Closes the popup.

### Add a New Lead
1. Fill in the name, phone number, zip code (required).
2. (Optional) Add email & select communication preferences.
3. Click "Add Lead" – The new lead appears in the list.