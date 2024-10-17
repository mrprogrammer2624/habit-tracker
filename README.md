# Habit Tracker

Habit Tracker is a web application designed to help users create, manage, and track their daily habits. Built with React and Vite, this application offers a responsive and user-friendly interface for habit management.

## Project Structure

```
HABIT-TRACKER/
├── public/
├── src/
│   ├── Assets/
│   ├── Components/
│   │   ├── Header/
│   │   └── Title/
│   ├── Hooks/
│   ├── Layouts/
│   │   ├── AuthLayout/
│   │   └── MainLayout/
│   ├── Pages/
│   │   ├── Auth/
│   │   │   ├── Login/
│   │   │   └── SignUp/
│   │   ├── NotFound/
│   │   ├── User/
│   │   │   ├── HabitManagement/
│   │   │   ├── HabitTracking/
│   │   │   ├── Home/
│   │   │   ├── Notification/
│   │   │   └── Profile/
│   │   └── index.js
│   ├── Providers/
│   ├── Routes/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Features

- User authentication (Login and SignUp)
- Habit creation and management
- Daily habit tracking
- User profile management
- Notifications for habit reminders
- Responsive design for various device sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/mrprogrammer2624/habit-tracker
   cd habit-tracker
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to see the application running.

## Building for Production

To create a production build, run:

```
npm run build
```

This will generate optimized files in the `dist` directory.

## Technologies Used

- React
- Vite
- TailwindCSS
- ESLint
- PostCSS

## License

This project is licensed under the [MIT License](LICENSE).
