# Pet Health App – React (Vite) + Spring Boot

Hero Dog is a full‑stack pet‑wellness application designed to support daily health tracking, BG curve logging, recipes, resources, reminders, and a dedicated Hero Dog board that celebrates diabetic dogs and their stories. The platform provides a clean, modular, and responsive interface built with React and powered by a Spring Boot API, allowing users to create, view, and manage pet‑health data with ease. By integrating structured wellness tools with an uplifting community feature, the project demonstrates practical full‑stack development skills, RESTful API design, database modeling, and thoughtful UI/UX for real‑world pet care.

## Features
- Multi‑page navigation using React Router
- Modular component structure
- Hero Dog form + board connected to backend API
- Health check‑in tools and BG curve tracking
- Recipes, resources, and reminders pages
- Custom CSS modules for styling

## Tech Stack 
# Frontend
- React (Vite)
- Axios
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
# Backend
- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL
- Maven

localhost:8080

## Tools & Infrastructure
- Netlify (Frontend Deployment)
- MySQL Workbench
- Postman (API Testing)
- Git & GitHub

## Installation & Setup (Run Locally)
1. Clone the repository 
git clone <your-repo-url>
cd <project-folder>

2. Backend Setup (Spring Boot)
# A. Configure MySQL
1. Create a database
CREATE DATABASE hero_dog_db;

2. Update your application.properties: 
spring.datasource.url=jdbc:mysql://localhost:3306/hero_dog_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# B. Run the Backend 
./mvnw spring-boot:run

Your API will run at: http://localhost:8080/api/herodogs

3. Frontend Setup (React/Vite)
# A. Install Dependencies
npm install 
# B. Run the Frontend 
npm run dev

Your app will run at: http://localhost:5173

## Wireframes
Homepage Wireframe: https://1drv.ms/o/c/83d78e3f7eff39bc/IgDoPns8YA6AQpGHHLSbTMCqAVrTqKEO2omN5ui7X2jfFQU?e=FJxHeA							
HeroDog Card Wireframe: https://drive.google.com/file/d/19RYNQV0TixG-HzA2IIv8ihg-jcNtCVlu/view?usp=sharing	

## ER Diagram 
![ER Diagram](./public/ER Diagram.png)

## Future Features
- Edit/Update Hero Dog entries: Add a form and PUT endpoint for updating dog details.
- Search & filtering: Filter dogs by breed, age, or years diabetic.
- Pagination or infinite scroll: Improve performance as the list grows.
