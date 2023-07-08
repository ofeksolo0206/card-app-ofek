# Ofek Card App React Project

This is a simple React project that allows you to create and display business cards. It provides a user-friendly interface for entering contact information and generates a visually appealing business card layout.

## Features

- Input fields for name, adress, phone number, email and biz number.
- Upload a profile image for your card.
- A map that will show your business exact location 
- Pages to manage your own cards by CRUD actions and to save the cards you liked.
- Search Bar to find the Business you're looking for by its biz number or name.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ofeksolo0206/card-app-ofek.git
   ```

2. Navigate to the project directory:

   ```bash
   cd card-app-ofek
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Connecting the API 

- To work with this website you will need to use the Cards API:

1. On new VScode folder create a new file and clone the server repository:
   ```bash
   git clone https://github.com/ofeksolo0206/server---card---ofek.git
   ```

2. Navigate to the project directory:
   ```bash
   cd server---card---ofek
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   
4. Start the API Server
   ```bash
   node app
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000` to access the application.

3. New User? Go to http://localhost:3000/signup and Enter your personal information in the input fields provided to register the website. 

4. Already sigend? Go to http://localhost:3000/login and enter your user details. Once logged in you'll be able to create, edit or delete cards. 

5. You can also log in with the defaults user details from the API: 
   email: "admin@admin.com"
   password: "Abc123!".
   This user is an admin, which means you'll be able to visit the sandbox of my project.

    

## Customization

You can customize the project to fit your specific needs:

- Modify the layout and styling in the `src/components` directory.
- Extend the functionality by adding new features or components.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it for your own purposes.

## Acknowledgements

- This project was inspired by the need for a simple and intuitive business card creation tool.
- The React framework and its ecosystem made it possible to develop this application quickly and efficiently.

## Contact

If you have any questions, suggestions, or feedback, please feel free to contact the project maintainer at ofekifargan3@gmail.com.

Happy business card designing!
