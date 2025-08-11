# SnappyChat

SnappyChat is a modern, full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. It supports instant messaging, media sharing, user authentication, profile management, and live online status updates.

---

## Features

- **User Authentication:** Sign up, login, and secure session management using JWT.
- **Profile Management:** Update profile details and upload profile pictures.
- **Real-Time Messaging:** Instant chat powered by Socket.IO.
- **Media Sharing:** Send images in chat, view shared media in the sidebar.
- **Online Status:** See which users are online in real-time.
- **Sidebar User List:** View all users except yourself, with unseen message counts.
- **Responsive UI:** Optimized for desktop and mobile screens.
- **Protected Routes:** Only authenticated users can access chat and profile pages.
- **Cloudinary Integration:** Store and serve user-uploaded images securely.

---

## Project Structure

```
SnappyChat/
│
├── client/         # React frontend
│   ├── src/
│   ├── public/
│   ├── context/
│   ├── .env
│   └── ...
│
├── server/         # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   ├── middleware/
│   ├── .env
│   └── ...
│
├── README.md       # Project documentation
└── ...
```

---

## Getting Started

### 1. Fork & Clone the Repository

```sh
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/kushagras22/SnappyChat.git
cd SnappyChat
```

### 2. Install Dependencies

#### Server

```sh
cd server
npm install
```

#### Client

```sh
cd ../client
npm install
```

---

## Environment Variables

### Server (`server/.env`)

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Client (`client/.env`)

```
VITE_BACKEND_URL=http://localhost:5000
```

---

## Running the Project Locally

### 1. Start the Server

```sh
cd server
npm start
```

### 2. Start the Client

```sh
cd ../client
npm run dev
```

- The client will run on [http://localhost:5173](http://localhost:5173) (default Vite port).
- The server will run on [http://localhost:5000](http://localhost:5000).

---

## Deployment

- Both client and server are configured for deployment on [Vercel](https://vercel.com/).
- See `vercel.json` in both folders for custom routing and build settings.

---

## Live Project

Access the live deployed version here:  
**[SnappyChat Live](https://snappy-chat-chi.vercel.app/)**

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request detailing your changes.
