# PulseVote

PulseVote is a secure, full-stack polling web application. The project consists of a Node.js/Express backend API and a React (Vite) frontend. 

## Prerequisites

Before running the application, ensure you have the following set up:
* **Node.js** installed on your machine.
* **MongoDB** running locally or a valid remote MongoDB connection string.
* **SSL Certificates:** You must have a valid `key.pem` and `cert.pem` file located inside an `ssl` folder in **both** the `pulsevote-backend` and `pulsevote-frontend` directories.

## How to Run the Application

To run PulseVote, you must start the backend API and the frontend client simultaneously in two separate terminal windows.

### 1. Start the Backend API

Open your first terminal window, navigate to the backend directory, and start the server:

# Navigate to the backend folder
cd pulsevote-backend

# Install dependencies (only needed the first time)
npm install

# Start the Node server
npm start
The API will establish a connection to MongoDB and run securely on https://localhost:5000.

### 2. Start the Frontend Client
Open a second, separate terminal window, navigate to the frontend directory, and start the Vite development server:

# Navigate to the frontend folder
cd pulsevote-frontend

# Install dependencies (only needed the first time)
npm install

# Start the Vite development server
npm run dev
The frontend will run securely on https://localhost:5173/.

### 3. Access the Application
Once both servers are running, hold Ctrl and click the https://localhost:5173/ link in your frontend terminal to open the application in your web browser.

Note on Browser Security Warnings:
Because this local development environment uses self-signed SSL certificates, your browser will likely display a "Connection is not private" or "Potential Security Risk" warning. This is expected. Click Advanced and select Proceed to localhost (unsafe) to access the app.

## Activity 07: Role-Based Access Control (RBAC) Summary

Role-Based Access Control (RBAC) is an authorization mechanism that restricts system access based on assigned user roles and privileges. In modern web applications, RBAC ensures the principle of least privilege, preventing regular users from executing sensitive administrative operations. In PulseVote, Admins manage platform roles, Managers oversee organizations and polls, and regular Users are restricted to joining organizations and submitting votes. Without robust RBAC enforcement, unauthorized privilege escalation can expose protected data, as seen in real-world breaches like the Optus 2022 API incident where improper authorization controls allowed unauthenticated data harvesting. Implementing strict route middleware and controller checks ensures secure, role-segmented operations across the entire application.
