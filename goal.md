1. Project Overview
QuizApp is a single-page web application that allows users to take a multiple-choice quiz. The application runs entirely in the browser. It reads questions from a hardcoded JavaScript array (Question Bank) and does not require an internet connection or a database.
2. Core Features & Scope
Static Question Bank: A predefined array of question objects stored directly in a JavaScript file.
Dynamic Question Rendering: Questions and choices are injected into the HTML using JavaScript DOM manipulation.
Real-time Feedback: The app checks the user's answer immediately or at the end of the quiz.
Score Tracking: Calculates and displays the total score once the quiz is completed.
Restart Functionality: Allows the user to reset the quiz and start over without refreshing the page.
3. User Interface (UI) States
The application should flow through three main visual states on a single page:

Screen State
Required Elements & UI Components
1. Start Screen


Quiz TitleBrief instructionsA "Start Quiz" button
2. Quiz Screen
Progress indicator (e.g., "Question 3 of 10")The current question textFour clickable buttons/radios for choicesA "Next" button (disabled until an answer is picked)
3. Results Screen
Final score display (e.g., "You scored 7/10!")A personalized message based on performanceA "Restart Quiz" button

4. Technical Architecture (File Structure)
The student should organize the project into exactly three files:
Sample Question Bank Format (To copy-paste into app.js)
const questionBank = [
{
question: "What does CSS stand for?",
choices: [
"Creative Style Sheets",
"Cascading Style Sheets",
"Computer Style Sheets",
"Colorful Style Sheets"
],
correctAnswer: 1 },
{
question: "Which language provides structure to a webpage?",
choices: ["Java", "CSS", "HTML", "Python"],
correctAnswer: 2
}
];

5. Functional Requirements (Step-by-Step Logic)

Step 1: Initialization
Hide the Quiz Screen and Results Screen using CSS (display: none).
Show only the Start Screen.
Step 2: Game Loop Logic
When "Start Quiz" is clicked, hide the Start Screen and show the Quiz Screen.
Initialize two variables in JavaScript: currentQuestionIndex = 0 and score = 0.
Load the question at the currentQuestionIndex.
Step 3: Handling Answers
When a user clicks a choice, highlight the selected choice.
Enable the "Next" button.
When "Next" is clicked:
Check if the selected choice matches correctAnswer. If yes, increment score by 1.
Increment currentQuestionIndex by 1.
If there are more questions, load the next one.
If no questions remain, proceed to the Results Screen.
Step 4: Ending & Resetting
Hide the Quiz Screen and show the Results Screen.
Display the final score over the total length of the array (questionBank.length).
When "Restart Quiz" is clicked, reset variables to 0 and show the Start Screen or directly start the quiz again.
6. Suggested Growth Milestones (Optional Challenges)
If the student finishes early, you can challenge them to add these without breaking the "no-backend" rule:Shuffle Questions: Use JavaScript to randomize the question order when the quiz starts.Immediate Feedback: Change the choice background color to green (correct) or red (incorrect) immediately upon clicking.Local Storage High Score: Save their best score in the browser's localStorage so it persists after a page reload.