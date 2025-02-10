[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/vAeyM3iT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18128615&assignment_repo_type=AssignmentRepo)
React Sightreader
---

> Welcome to the real world. You've been accepted as a new full-stack developer at a music tech startup. 
> Your first task is to rebuild the company's sheet music sight reading app using modern tools and a simplified architecture. The current system is a mix of Flask, ABCjs, and custom JavaScript logic.
> Your job is to convert it into a React-based application that focuses only on the core functionality: displaying sheet music and providing real-time pitch detection to allow users to play along.
> You were given this job because you listed yourself as a React expert on your resume.
> Unfortunately, you lied.
> Thankfully you have ChatGPT to help you out.
> Good luck!

---

### Welcome to the Project  

This project is a browser-based sheet music player that uses ABC notation (via ABCjs) to display sheet music and allows users to play along in real time using pitch detection. The goal is to create an interactive tool for musicians to practice sight-reading while getting real-time feedback.

The existing app is viewable at: 

   [abcsightreader.com](https://abcsightreader.com/)

#### Current Tech Stack  
Right now, the application is built with:  

- **Backend**: Flask (Python) + uWSGI  
- **Frontend**: A mix of server-rendered templates (Jinja2) and vanilla JavaScript  
- **Styling**: Bootstrap + Flat UI  
- **JavaScript Libraries**:  
  - ABCjs for rendering ABC notation  
  - p5.js, ml5.js for creative coding and machine learning features  
  - jQuery for DOM interactions  
  - Various other JavaScript utilities, some of which may no longer be needed  
- **Audio Processing**: Custom pitch detection and volume metering scripts  
- **Build & Deployment**: Shell scripts for managing dependencies, formatting, and deployment  
- **Dependency Management**:  
  - Python dependencies managed with pip  
  - JavaScript dependencies managed with npm

#### The Road Ahead: Major Overhaul Incoming  
The plan is to rebuild this project using a modern frontend stack while removing unnecessary complexity. The key changes include:  

- Replacing the Flask backend with a Node.js-based system  
- Using Vite as the build system for faster development and simpler dependency management  
- Converting the frontend into a fully client-side React application  
- Cleaning up unused dependencies and refactoring the core functionality  

Many of the package files in the current repository are outdated or unnecessary. The rebuild should focus on **only the core functionality**, without worrying about user profiles, score tracking, playlists, or complex styling.  

#### What to Expect as You Explore the Code  
- The core music rendering and pitch detection logic will need to be refactored for React  
- Many shell scripts (especially those for deployment) will become irrelevant after removing Flask and uWSGI  
- The ABC notation files in the `music/` directory will remain useful  
- CSS and JavaScript files are somewhat scattered, and the rebuild should streamline them into a modern structure  

If you come across anything that seems unnecessary or outdated, note it. The goal is to strip things down to the essentials and simplify the overall architecture.  

---

### Rebuild Instructions & Suggestions  

This rebuild is not intended to be production-ready. The priority is to get the core functionality working in a simple, maintainable way. There is no need for code verification, auto-formatting, test suites, or anything beyond the basic application. The new system should rely on Vite’s dev server to handle everything locally without additional backend logic.

The current implementation handles user profiles, stats tracking, music playlists, and possibly other features that are not essential for the core functionality. These can be ignored for now.

#### Suggested Rebuild Plan  

Rather than modifying the existing codebase incrementally, it is likely easier to start fresh with a clean Node.js project and bring in only the essential parts.  

1. **Set Up a New Node.js Project**  
   - Use Vite as the build system with a React-based frontend  
   - Install only the necessary dependencies  

2. **Bring in the Core Code**  
   - Convert the main HTML structure from `templates/index.html` for use in React
   - Refactor the core JavaScript logic from `js/sightreader.js` into modular React components
   - Include the relevant JavaScript libraries, either through npm or by manually importing scripts from `js/ext/`  
   - Load and display ABC notation files from the `music/` directory  

3. **Ensure Basic Functionality Works**  
   - The application should load an ABC notation file and display it in the browser  
   - Pitch detection should work in real time to allow users to play along  
   - No additional backend should be required; everything should function as a static client-side app  

#### Additional Notes  
- Vite’s dev server should be sufficient for local development, eliminating the need for custom server logic  
- A modern CSS framework should replace Bootstrap and Flat UI, but without spending time on detailed styling  
- The old imperative JavaScript logic may need to be rewritten to fit within a React component-based structure  
- Any unnecessary dependencies should be removed rather than carried over  

#### What Success Looks Like  
- Running the project in development mode launches a React-based application  
- The app successfully displays an ABC notation file and provides pitch detection  
- The codebase is significantly simplified, containing only what is necessary for the core functionality  
