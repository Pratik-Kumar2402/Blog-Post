# Blog-Post

A simple blog post web application built with React (frontend) and Node.js/Express (backend), using MongoDB for data storage.

## Features

- User registration and login
- Create, edit, and delete blog posts
- Upload images for posts and user profiles
- Categorize posts
- Responsive UI

## Project Structure

```
.
├── client                     # React frontend
│   ├── public                 # Public files
│   └── src                    # Source files
│       ├── components          # React components
│       ├── pages               # Page components
│       ├── App.js             # Main app component
│       └── index.js           # App entry point
└── server                     # Node.js backend
    ├── config                 # Configuration files
    ├── controllers            # Route controllers
    ├── middleware             # Express middleware
    ├── models                 # Mongoose models
    ├── routes                 # API routes
    ├── .env                   # Environment variables
    ├── server.js              # Entry point for the backend
    └── package.json           # Backend dependencies
```

## Installation

1. Clone the repository
2. Navigate to the `client` and `server` directories and run `npm install` to install dependencies
3. Update the MongoDB URL in the server `.env` file
4. Run `npm run dev` in the server directory to start the backend server
5. Run `npm start` in the client directory to start the React app

## Usage

- Register a new user or log in with an existing account
- Create a new blog post, including a title, content, and optional image upload
- Edit or delete your own posts
- Browse posts by category
- View posts in a responsive layout, optimized for both desktop and mobile devices

## Technologies Used

- Frontend: React, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, bcrypt, dotenv
- File Upload: Multer
- Development: Nodemon, concurrently

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various blogging platforms
- Thanks to the contributors and open-source community

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)

### Backend Setup

1. Navigate to the `api` directory:

    ```sh
    cd api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `api` directory and add your MongoDB connection string:

    ```
    MONGO_URL=your_mongodb_connection_string
    ```

4. Start the backend server:

    ```sh
    npm start
    ```

   The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Open a new terminal and navigate to the `blog_post` directory:

    ```sh
    cd blog_post
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the React development server:

    ```sh
    npm start
    ```

   The frontend will run on [http://localhost:3000](http://localhost:3000).

## Configuration

- Update the MongoDB URL in `api/.env`.
- The frontend is configured to use a proxy for API requests in [`blog_post/package.json`](blog_post/package.json).

## Dependencies

**Backend:**
- express
- mongoose
- mongodb
- dotenv
- bcrypt
- multer
- nodemon
- path

**Frontend:**
- react
- react-dom
- react-router-dom
- axios

## Notes

- Uploaded images are stored in the `api/images` directory.
- Make sure both backend and frontend servers are running for full functionality.
- For production, update API URLs in the frontend as needed.

## License

This project is for learning purposes.
