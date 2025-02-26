# Linktree/Bento style Backend with Referral System

## Overview
A backend system for a Linktree/Bento.me-style platform with user authentication, referral tracking, and secure API endpoints.

## Tech Stack
- **Node.js** – Backend runtime  
- **Express.js** – API framework  
- **MongoDB + Mongoose** – Database & ORM  
- **JWT** – Authentication  
- **Bcrypt** – Password hashing  
- **Jest + Supertest** – Testing  

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/shreeraamvishaal/VomyChat-Backend-Assignment.git
cd VomyChat-Backend-Assignment
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the Server
```sh
npm start
```
API will be available at `http://localhost:5000`.

## API Endpoints

### Authentication
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Login and get JWT token  
- `POST /api/auth/forgot-password` – Request password reset  

### Referral System
- `GET /api/referrals` – Get users referred by logged-in user  
- `GET /api/referral-stats` – Get referral statistics  

## Testing
Run unit and integration tests:
```sh
npm test
```

## Future Enhancements
- Email verification for referrals  
- Reward system for referrers  
- OAuth (Google, GitHub login)  
- Performance optimizations with caching  

### Author  
**Shree Raam Vishaal K**  
[GitHub](https://github.com/shreeraamvishaal) | [LinkedIn](https://www.linkedin.com/in/shree-raam-vishaal-1b6128263/)  
