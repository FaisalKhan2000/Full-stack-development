# Tip Calculator App

Welcome to the Tip Calculator App! This web application is built using React and allows you to quickly and easily calculate tips based on your bill amount, selected tip percentage, and the number of people sharing the bill.

## Live Demo

Check out the live demo of the Tip Calculator App: [Tip Calculator App Demo](https://tip-calculator-app-flash.netlify.app/)

## How to Use

1. **Bill Input:**

   - Enter the total bill amount in the provided input field.

2. **Select Tip Percentage:**

   - Use the SelectTip component to choose the desired tip percentage. You can select from predefined tip percentages.

3. **Number of People:**

   - Adjust the number of people sharing the bill using the People component.

4. **Calculate Tip:**
   - Click the Calculate Tip button to instantly get the calculated tip amount and the total amount per person.

## Project Structure

The project is organized into several components:

1. **App.js:**

   - The main component that ties together all other components and manages the state of the application.

2. **BillInput.js:**

   - Component responsible for accepting the total bill amount input.

3. **SelectTip.js:**

   - Component that allows users to choose a tip percentage from a predefined list.

4. **People.js:**

   - Component to specify the number of people sharing the bill.

5. **Output.js:**

   - Component that displays the calculated tip amount and total amount per person.

6. **Button.js:**
   - Component for the Calculate Tip button.

## Getting Started

To run the Tip Calculator App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/FaisalKhan2000/Full-stack-development.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Full-stack-development/react/react-projects/tip-calculator-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running locally on [http://localhost:3000](http://localhost:3000).

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

Happy tipping! 🎉
