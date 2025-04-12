
# 💼 Job Board Platform (MERN Stack)

A full-stack Job Board web application built with the MERN stack (MongoDB, Express, React, Node.js). Users can browse and filter job listings, and employers can post job opportunities. It features a responsive UI, filtering by category and search, and basic contact form functionality.

---

## 🧱 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **API Testing**: Postman (recommended)
- **Version Control**: Git + GitHub

---

## 📁 Project Structure

JobSite/ 
│ ├── client/JobPortal# Frontend (React) 
│ ├── public/
│ ├── .gitignore 
│ └── src/ │ ├── assets
             ├── components/
                   ├── Footer.jsx
                   ├── Header.jsx
                   ├── Hero.jsx
                   ├── JobList.jsx
             ├── pages/
                   ├── Home.jsx
                   ├── Contact.jsx
                   ├── JobForm.jsx
                   ├── Jobs.jsx
             │
             └── App.jsx
             └── main.jsx
             └── index.css           
             
├── Server/ # Backend (Express + MongoDB) 
│
├── controller/ 
│         ├── job.controller.js 
├── db/
│   ├── connectToMongoDB.js
├── models/
│  ├── addjob.js
├── router/ 
│   ├── job.router.js 
├── .env 
│ 
└── server.js │ 
├── .gitignore 
└── package.json



---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DhanyaUpendran/JOBSEARCH.git

cd jobsite
2️⃣ Install Dependencies

📦 Backend (/Server)

cd Server
npm install

📦 Frontend (/client)

cd ../client
npm install
3️⃣ Create Environment File
In /Server, create a .env file with:


PORT=3000
MONGO_URL=your_mongodb_connection_string


4️⃣ Run the Application
▶️ Start Backend
cd Server
nodemon server.js
▶️ Start Frontend

cd client
npm run dev
Visit http://localhost:5173

📦 Dependencies
✅ Client (React)
      npm create vite@latest 
     react-router-dom – Routing between pages
      axios – API calls to backend
      tailwindcss – Styling framework



✅Server (Node.js + Express)

            npm install express mongoose cors dotenv nodemon
             express – Server framework
              mongoose – MongoDB object modeling

              cors – Cross-origin resource sharing

              dotenv – Load environment variables

             nodemon – Auto restart on changes (dev only)

✨ Features
💼 Add & view job listings

🔎 Search & filter by category

📬 Contact page

🌐 Responsive design

🛠️ Modular codebase (MVC structure)

📬 Contact
For any queries or feedback, feel free to reach out via the Contact Us page in the app!

