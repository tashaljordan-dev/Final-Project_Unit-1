# Pet Health App – React (Vite) + Spring Boot

This project is a full‑stack application designed to support pet health tracking, daily check‑ins, BG curve logging, recipes, resources, reminders, and a Hero Dog feature connected to a Spring Boot backend API. The goal is to create a clean, modular, and responsive interface for managing pet wellness.

## Features
- Multi‑page navigation using React Router
- Modular component structure
- Hero Dog form + board connected to backend API
- Health check‑in tools and BG curve tracking
- Recipes, resources, and reminders pages
- Custom CSS modules for styling

## Tech Stack 
- React (Vite)
- JavaScript 
- React Router
- Fetch API for backend communication 

## Running the Frontend 
bash
- npm install 
- npm run dev

The app will start at: 
http://localhost:5173

🐾 Backend – Spring Boot API
The backend is built using Spring Boot, providing RESTful endpoints for Hero Dog data and future pet‑health features.

## Features
- Full CRUD API for Hero Dog entries
- MySQL database integration
- JPA/Hibernate entity models
- Service + Repository architecture
- CORS enabled for Vite frontend

## Tech Stack
- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL
- Maven

localhost:8080

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
