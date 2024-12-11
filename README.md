# Snapistan - Social Media Web Application

🚀 **Project Overview**  
Snapistan is a modern, full-featured social media web application designed to empower users to connect, share, and engage with their communities. Built with cutting-edge web technologies, Snapistan offers a seamless and interactive platform for sharing posts, connecting with others, and managing their social experience. Whether you're looking to share your thoughts, follow friends, or discover new content, Snapistan provides the tools you need to enhance your social interactions.

## 📋 Table of Contents

- [Snapistan - Social Media Web Application](#snapistan---social-media-web-application)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
    - [User Features](#user-features)
    - [Technical Features](#technical-features)
  - [🛠 Technologies](#-technologies)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Development Tools](#development-tools)
  - [🔧 Prerequisites](#-prerequisites)
  - [📦 Installation](#-installation)
  - [🔐 Configuration](#-configuration)
  - [🏃 Running the Application](#-running-the-application)
    - [Development Mode:](#development-mode)
    - [Production Build:](#production-build)
  - [📂 Project Structure](#-project-structure)
  - [🌐 API Endpoints](#-api-endpoints)
    - [Authentication](#authentication)
    - [Posts](#posts)
    - [Users](#users)
  - [🔐 Authentication](#-authentication)
  - [🧩 State Management](#-state-management)
  - [🚀 Performance Optimization](#-performance-optimization)
  - [🌍 Deployment](#-deployment)
    - [Recommended Platforms:](#recommended-platforms)
    - [Deployment Steps:](#deployment-steps)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [🙏 Acknowledgements](#-acknowledgements)
  - [📞 Contact](#-contact)
  - [📷 Usage Examples](#-usage-examples)
  - [🛠 Troubleshooting](#-troubleshooting)
  - [🧪 Testing](#-testing)

## ✨ Features

### User Features

- 🔐 **Secure Authentication**: Users can create accounts and log in securely, ensuring their data is protected.
- 📝 **Create, Edit, and Delete Posts**: Users can easily share their thoughts and manage their content.
- 💬 **Comment on Posts**: Engage with others by commenting on their posts, fostering community interaction.
- 👍 **Like and Bookmark Posts**: Users can express appreciation for posts and save them for later.
- 🔔 **Real-time Notifications**: Stay updated with real-time notifications for interactions and updates.
- 👤 **User Profile Management**: Users can customize their profiles and manage their personal information.
- 🖼️ **Profile Picture Upload**: Personalize your profile with a custom profile picture.
- 🔍 **User Search**: Easily find and connect with other users on the platform.
- 📊 **Followers/Following System**: Build your network by following other users and gaining followers.

### Technical Features

- 🚀 **Server-Side Rendering (SSR)**: Improve performance and SEO with server-side rendering capabilities.
- 📱 **Responsive Design**: The application is designed to work seamlessly on various devices, including mobile and desktop.
- 🔒 **Protected Routes**: Ensure that sensitive areas of the application are accessible only to authenticated users.
- 🧩 **Modular Component Architecture**: The application is built using reusable components, promoting maintainability and scalability.
- 📡 **RESTful API Integration**: Interact with a robust API for data management and retrieval.
- 🔄 **Real-time Updates**: Users receive instant updates without needing to refresh the page.
- 📝 **Form Validation**: Ensure data integrity with built-in form validation.
- 🖼️ **Image Optimization**: Automatically optimize images for faster loading times and better performance.

## 🛠 Technologies

### Frontend

- **Next.js 13**: A powerful React framework that enables server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces, allowing for a component-based architecture.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development with a focus on customization.
- **Shadcn UI**: A component library that provides pre-built UI components for faster development.
- **React Query**: A library for managing server state in React applications, simplifying data fetching and caching.
- **Zod (Validation)**: A TypeScript-first schema declaration and validation library.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, allowing for server-side development.
- **Prisma ORM**: A modern database toolkit that simplifies database access and management.
- **PostgreSQL**: A powerful, open-source relational database system.
- **NextAuth.js**: A complete open-source authentication solution for Next.js applications.
- **Uploadthing (File Upload)**: A service for handling file uploads efficiently.

### Development Tools

- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter that enforces consistent style across the codebase.
- **Webpack**: A module bundler that compiles JavaScript modules and assets.
- **Babel**: A JavaScript compiler that allows you to use next-generation JavaScript features.

## 🔧 Prerequisites

Ensure you have the following installed:

- **Node.js (v18+)**: Required to run the application.
- **npm or Yarn**: Package managers for managing dependencies.
- **PostgreSQL**: The database system used for storing application data.
- **Git**: Version control system for managing code changes.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/snapistan.git
cd snapistan
```

Install dependencies:

```bash
npm install
# or
yarn install
```

## 🔐 Configuration

Create a `.env` file in the project root and add the following environment variables:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/snapistan
NEXTAUTH_SECRET=your_nextauth_secret
UPLOADTHING_SECRET=your_uploadthing_secret
NEXT_PUBLIC_UPLOADTHING_APP_ID=your_NEXT_PUBLIC_UPLOADTHING_APP_ID
```

## 🏃 Running the Application

### Development Mode:

```bash
npm run dev
# or
yarn dev
```

### Production Build:

```bash
npm run build
npm start
```

## 📂 Project Structure

The project is organized into several key directories, each serving a specific purpose:

```plaintext
snapistan/
├── prisma/            # Database schema and migrations
│   ├── schema.prisma  # Defines the database schema and relations
│   └── migrations/     # Contains migration files for database changes
├── public/            # Static assets
│   ├── file-text.svg   # SVG file for text representation
│   ├── globe.svg       # SVG file for globe representation
│   ├── next.svg        # SVG file for Next.js logo
│   ├── vercel.svg      # SVG file for Vercel logo
│   └── window.svg      # SVG file for window representation
├── src/               # Main application source code
│   ├── app/           # Next.js app directory
│   │   ├── api/       # API routes for server-side logic
│   │   ├── globals.css # Global CSS styles
│   │   ├── layout.tsx  # Main layout component
│   │   └── ...        # Other app-related files
│   ├── components/     # Reusable UI components
│   │   ├── comments/   # Components related to comments
│   │   ├── posts/      # Components related to posts
│   │   └── ...        # Other UI components
│   ├── lib/           # Utility functions and libraries
│   ├── styles/        # Global styles and CSS files
│   └── types/         # TypeScript types and interfaces
└── README.md          # Project documentation
```

## 🌐 API Endpoints

### Authentication

- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.

### Posts

- `GET /api/posts`: Retrieve a list of posts.
- `POST /api/posts`: Create a new post.
- `PUT /api/posts/:id`: Update an existing post.
- `DELETE /api/posts/:id`: Delete a post.

### Users

- `GET /api/users`: Retrieve a list of users.
- `PUT /api/users/profile`: Update user profile information.

## 🔐 Authentication

- **JWT-based authentication**: Securely manage user sessions with JSON Web Tokens.
- **NextAuth.js for session management**: Simplify authentication flows with a robust library.
- **Protected routes for authenticated users**: Ensure sensitive data is only accessible to logged-in users.
- **Role-based access control**: Manage user permissions based on roles.

## 🧩 State Management

- **React Query for server state**: Efficiently manage server data and caching.
- **Zustand for client-side state**: A small, fast state management solution for React.
- **Context API for global state**: Share state across components without prop drilling.

## 🚀 Performance Optimization

- **Server-Side Rendering (SSR)**: Improve SEO and initial load times with server-rendered pages.
- **Static Site Generation (SSG)**: Pre-render pages at build time for faster delivery.
- **Incremental Static Regeneration (ISR)**: Update static content without rebuilding the entire site.
- **Code splitting**: Load only the necessary code for each page, improving performance.
- **Lazy loading**: Delay loading of non-essential resources until needed.
- **Image optimization**: Automatically optimize images for faster loading times.

## 🌍 Deployment

### Recommended Platforms:

- **Vercel**: Ideal for deploying Next.js applications with minimal configuration.
- **Netlify**: A powerful platform for deploying static sites and serverless functions.
- **DigitalOcean App Platform**: A flexible platform for deploying applications with full control.

### Deployment Steps:

1. Push to GitHub.
2. Connect the repository to your deployment platform.
3. Set environment variables.
4. Configure build settings.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

- Next.js Team
- Vercel
- React Community
- Prisma
- Tailwind CSS

## 📞 Contact

For any questions or support, please reach out to [Hamza](mailto:hamzaisadev@gmail.com).

## 📷 Usage Examples

Here are some examples of how to use the application:

1. **Creating a Post**: After logging in, navigate to the "Create Post" section and fill out the form to share your thoughts with the community.
2. **Searching for Users**: Use the search bar to find users by their username or profile information.

## 🛠 Troubleshooting

If you encounter issues, consider the following solutions:

- Ensure all environment variables are correctly set.
- Check the console for any error messages.
- Restart the application if changes are not reflected.

## 🧪 Testing

To run tests, use the following command:

```bash
npm test
# or
yarn test
```
