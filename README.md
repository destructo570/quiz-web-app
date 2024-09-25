## Quiz App
This project is a quiz application built with Next.js 14. It features a timer that tracks the time taken by a user to answer each question and resets for each new question. The app also stores the time spent on each question, allowing for analysis of quiz performance.

## Technologies Used
- Next.js: Framework for server-rendered React applications.
- TailwindCss: CSS Framework for styling the application.
- TypeScript
- React Hooks: Used for state management and side effects (useState, useEffect).
- clsx: For managing class strings.
- react-circular-progressbar: To show progress.
- react-rewards: For confetti animations.
- Axios: HTTP client.

## Run the project locally

1. First, clone the repository into your local machine.
   ```bash
     git clone https://github.com/destructo570/quiz-web-app.git
   ```
2. Change directory into the project folder:
   ```bash
     cd quiz-web-app
   ```
3. Open root directory in terminal and run
   ```bash
      npm install
   ```
4. Then run the development server
  ```bash
     npm run dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints
```/api/quiz/[id]```: [GET] Fetch a specific quiz by ID.\
```/api/quiz/[id]/submission```: [PUT] Save a submission for particulat question by quiz ID.\
```/api/quiz/[id]/score```: [GET] Fetch final score for the quiz by ID.\
