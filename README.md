# 🍕 React Pizza Order App [Responsive]

Welcome to the React Pizza Order App, a professional-level web application that takes you through the entire process from user registration to order confirmation. This app is built using the latest technologies and follows best practices in React development.

## 🛠️ Tech Stack

- **React.js**: The core library for building the user interface.
- **React Router**: For seamless navigation and a smooth user experience.
- **Redux Toolkit**: State management made easy with Redux Toolkit.
- **Redux Thunks**: Asynchronous actions for handling complex logic.
- **Tailwind CSS**: A utility-first CSS framework for building responsive designs.
- **Best Practices of React Router and Redux Toolkit**: Following industry standards for clean and efficient code.

## 🚀 Live Demo

Check out the live demo [here](https://pushpraj-react-pizza-ordering-app.netlify.app/)

## 🌟 Flow and Features

### 1. Home Page

- Collects user name and order ID for a personalized experience.

### 2. Menu Page

- Logo and a search feature for quick order retrieval.
- Display user name for a personalized touch.
- Fetches pizza data from an API.
  
  **Features Implemented:**
  
  - **Add to Cart Button:** Easily add items to the cart.
  - **Cart Management:** Dynamically displays delete, increase, and decrease options upon adding an item.
  - **Cart Details:** Clear visibility of cart contents with quantities and prices.

### 3. Cart Page

- Allows users to go back to the menu for additional items.
- Displays added items in the cart with quantity, along with options to increase, decrease, and delete.

### 4. Form Page

- Collects user details: username, phone number, and address.
- Offers two options for address input: manual input or geolocation.
- Priority option for express delivery.
- Error handling for geolocation and phone number format.
- Disable buttons while fetching geolocation.

### 5. Order Page

- Shows the order status and detailed product information.
- Displays the total price of all items.
- Provides a priority button for express orders, with an extra cost.

## How to Install and Run

1. Clone the repository:

    ```bash
    gh repo clone https://github.com/Pushpraj733/React-Pizza-Order-App-
    ```

2. Install dependencies:

    ```bash
    cd Pizza_ordering_app
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

