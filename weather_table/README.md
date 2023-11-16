# Weather table

Course Node.js Project

## Description

This project is a simple Node.js application that provides location and weather information for a list of users. The application uses Express.js to handle HTTP requests, EJS as the templating engine, and makes use of external APIs to fetch geolocation and weather data.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/course-nodejs.git

2. Navigate to the Project directory:

   ```bash
   cd weather_table
   
3. Install dependencies:
   ```bash
   npm install

## Usage
### Starting the Server
To start the server, run the following command:

   ```bash
   npm start
  ```

The server will run on http://localhost:3500 or the port specified by the PORT environment variable.

## Endpoints

### Home Page

- **URL:** `/` or `/index.html`
- **Method:** GET
- **Description:** Renders a page displaying user information, including their address and current weather.
