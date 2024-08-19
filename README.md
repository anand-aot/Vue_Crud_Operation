# Vue CRUD Application

This is a Vue.js application for performing CRUD (Create, Read, Update, Delete) operations with Firebase. It includes components for creating, updating, and listing users, and utilizes Vue Router for navigation.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Development](#development)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

## Features

- Create new users
- Update existing users
- List all users
- Delete users
- Real-time updates with Firebase Firestore

## Technologies

- Vue 3
- Vue Router
- Firebase
- Bootstrap

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/anand-aot/vue_crud_operation.git
    ```

2. Navigate to the project directory:

    ```bash
    cd vue_crud_operation
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```
4. Create your .env file inside root directory and add following code with replace of your firebase key
   ```bash
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_firebase_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   ```

## Development

### Running the Development Server

To start the development server, run:

```bash
npm run dev
