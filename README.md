![GitHub Repo Stars](https://img.shields.io/github/stars/JumaQasimiM/hzrfood?style=social)
<div align="center">
  <img src="https://images.unsplash.com/photo-1512058564366-c9e3e0464c35" alt="Recipe Banner" style="width:100%; max-height:320px; object-fit:cover;" />

  <h1>🍲 RecipeHub — A Modern Cooking Experience</h1>
  <p><strong>Discover. Cook. Enjoy. A beautifully designed recipe platform built with React + Vite.</strong></p>

  <p>
    <a href="#features">✨ Features</a> |
    <a href="#pages">📄 Pages</a> |
    <a href="#getting-started">🚀 Getting Started</a> |
    <a href="#tech-stack">🛠 Tech Stack</a> |
    <a href="#screenshots">📸 Screenshots</a> |
    <a href="#contact">📞 Contact</a>
  </p>
</div>

---

## 🍴 Overview

**RecipeHub** is a fast, responsive, and professional recipe website built using **React, Vite, and Tailwind CSS**. Users can explore delicious recipes, learn about the creator, and securely log in to access personalized features.

---

## ✨ Features

- ⚛️ React + Vite for lightning-fast performance
- 🎨 Tailwind CSS for modern and scalable UI
- 🔐 Login page (email & password or social integration ready)
- 🌐 Real-time recipe data from an external API
- 🍽️ Beautiful recipe (Foods) page with filtering
- 🔔 Toast notifications using React Toastify
- 🔠 Google Fonts integration via React Fonts
- 📱 Fully responsive across all devices
- 💡 Ready to deploy on Netlify, Vercel, or any static host

---

## 📄 Pages

| Page        | Description                                             |
|-------------|---------------------------------------------------------|
| 🏠 **Home**      | Welcoming intro with featured recipes and CTA         |
| ℹ️ **About**     | Mission, story, and chef/creator introduction         |
| 🔐 **Login**     | User login form with toast feedback & validation     |
| 🍽️ **Foods**     | Displays recipes fetched from API with search/filter |

---

## 📁 Project Structure

src/
├── components/ # Reusable components (Navbar, Footer, Cards)
├── pages/ # Home.jsx, About.jsx, Login.jsx, Foods.jsx
├── api/ # API logic (e.g., fetchRecipes.js)
├── App.jsx # Main app routing
├── main.jsx # Vite entry
└── index.css # Tailwind and font imports


---

## 🚀 Getting Started

### ⚙️ Prerequisites

- Node.js ≥ 16
- npm or yarn

### 📦 Install & Run

```bash
git clone https://github.com/your-username/recipehub.git
cd recipehub
npm install
npm run dev

🔐 Authentication (Login Page)

The login form includes:

Email & password fields

Basic validation

Toast notifications for success/error

Can be integrated with Firebase/Auth0/custom backend


toast.success("Welcome back, chef!");
toast.error("Invalid login credentials");

🌐 API Integration

We use a public recipe API (e.g., TheMealDB or Spoonacular).

Example usage in fetchRecipes.js:   
export async function getRecipes() {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`);
  const data = await res.json();
  return data.meals;
}

| Tool/Library        | Description                        |
| ------------------- | ---------------------------------- |
| ⚛️ React            | UI library for building components |
| ⚡ Vite              | Fast dev server and bundler        |
| 🎨 Tailwind CSS     | Utility-first CSS framework        |
| 🔠 React Fonts      | Google Fonts integration           |
| 🔔 React Toastify   | Toast notifications                |
| 🌐 Public API       | Real-time recipe data              |
| 🧪 Vite Environment | .env for secrets & keys            |

📞 Contact

Made with 🍳 by Alex Rivera

🌐 Website: recipehub.com

📧 Email: hello@recipehub.com

🐦 Twitter: @alexcodes

💼 LinkedIn: linkedin.com/in/alexrivera