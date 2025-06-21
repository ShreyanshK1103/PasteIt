#  PasteIt — A Pastebin-Style Text Sharing App

**PasteIt** is a simple, clean, full-stack web app for sharing text or code snippets via unique URLs — like Pastebin, but minimal and custom-built using the MERN stack.

![PasteIt Banner](https://your-screenshot-link-or-banner.png)

---

##  Live Demo
 [https://pasteit.vercel.app](https://pasteit.vercel.app)

---

##  Tech Stack

**Frontend**:
- React.js
- Tailwind CSS
- React Router

**Backend**:
- Node.js
- Express.js
- MongoDB (with Mongoose)

**Other Tools**:
- Axios
- Dotenv
- UUID

---

##  Features

-  Paste text or code in one click
-  Instantly get a shareable link (e.g., `/paste/4fd92`)
-  View any paste by link — no login required
-  Clean, responsive UI with modern color scheme
-  MongoDB stores all pastes securely

---

##  Getting Started (Local Setup)

### 1. Clone the repo

```bash
git clone https://github.com/ShreyanshK1103/PasteIt.git
cd PasteIt
```

### 2. Setup the Backend

```bash
cd Back-End
npm install
```

Create a `.env` file:

```env
PORT=7000
MONGO_URI=your-mongo-uri-here
```

Start the server:

```bash
npm start
```

### 3. Setup the Frontend

```bash
cd ../Front-End
npm install
npm run dev
```

---

##  Folder Structure

```bash
PasteIt/
├── Front-End/       # React frontend
├── Back-End/       # Node + Express backend
└── README.md     # This file
```

---

##  To-Do / Future Features

- [ ] Paste expiration time (auto-delete after X hours)
- [ ] Code syntax highlighting
- [ ] Auth system for “My Pastes” section
- [ ] Dark mode toggle

---

##  Author

**Shreyansh Kaushal**  
2nd Year B.Tech @ NIT Agartala  
 [GitHub](https://github.com/ShreyanshK1103) | [LinkedIn] 

---

## 📝 License

MIT License — free to use and modify.
