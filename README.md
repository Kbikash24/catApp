# Cat Paradise React App

## Project Overview

This project is a simple React application that demonstrates fetching data from The Cat API using two buttons. The fetched data is displayed in table form. One button shows data in card form and the other in table form.

## Features

- Buttons to fetch random cat data and cat details.
- Use of state to manage and display data.
- Display fetched data in both card and table forms.
- Responsive design for optimal viewing on various devices.
- State management using React hooks.

## APIs Used

1. **Get a Random Cat ID & Image**
    - **Endpoint**: `https://api.thecatapi.com/v1/images/search?has_breeds=1`
    - **Description**: Fetches a random cat image with breed information.

2. **Get Complete Details of the Cat with ID**
    - **Endpoint**: `https://api.thecatapi.com/v1/images/<ID>`
    - **Description**: Fetches complete details of a cat using the provided ID from the previous API.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cat-paradise.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cat-paradise
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the development server, run:
```bash
npm start
