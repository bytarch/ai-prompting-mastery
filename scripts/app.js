"use strict";

// Show hero -> courses
function showCourses() {
  document.getElementById('heroSection').classList.add('hidden');
  document.getElementById('courses').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Course data with quizzes based on lesson content
const courses = {
  fundamentals: {
    title: "AI Prompting Fundamentals",
    description: "Learn the basics of communicating with AI",
    lessons: [
      { title: "Introduction to AI Prompting", content: `<h2 class="text-2xl font-bold mb-4 text-white">What is AI Prompting?</h2><p class="mb-4 text-white">AI prompting is the art of communicating effectively with artificial intelligence systems to get the desired output.</p>` },
      { title: "Understanding AI Language Models", content: `<h2 class="text-2xl font-bold mb-4 text-white">How AI Language Models Work</h2><p class="mb-4 text-white">They learn patterns from vast text data.</p>` },
      { title: "Basic Prompt Structure", content: `<h2 class="text-2xl font-bold mb-4 text-white">Anatomy of a Good Prompt</h2><p class="mb-4 text-white">Include clear context, specific task, and desired format.</p>` },
      { title: "Common Prompting Mistakes", content: `<h2 class="text-2xl font-bold mb-4 text-white">Avoid Common Pitfalls</h2><p class="mb-4 text-white">Don’t use vague instructions or assume context.</p>` },
      { title: "Simple Prompt Techniques", content: `<h2 class="text-2xl font-bold mb-4 text-white">Easy Techniques</h2><p class="mb-4 text-white">Use role prompting, examples, and step-by-step instructions.</p>` },
      { 
        title: "Course Quiz", 
        isQuiz: true, 
        content: `
        <form id="quizForm" class="space-y-6 text-white">
          <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 class="text-lg font-semibold mb-3 text-white">1. What is the main goal of AI prompting?</h3>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q1" value="a" class="h-4 w-4 text-blue-600"> To communicate effectively with AI to get desired output
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q1" value="b" class="h-4 w-4 text-blue-600"> To confuse the AI
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q1" value="c" class="h-4 w-4 text-blue-600"> To write code for AI
            </label>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 class="text-lg font-semibold mb-3 text-white">2. What do AI language models learn from?</h3>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q2" value="a" class="h-4 w-4 text-blue-600"> Patterns from vast text data
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q2" value="b" class="h-4 w-4 text-blue-600"> Only images
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q2" value="c" class="h-4 w-4 text-blue-600"> Random numbers
            </label>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 class="text-lg font-semibold mb-3 text-white">3. What should a good prompt include?</h3>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q3" value="a" class="h-4 w-4 text-blue-600"> Clear context, specific task, and desired format
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q3" value="b" class="h-4 w-4 text-blue-600"> Vague instructions
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q3" value="c" class="h-4 w-4 text-blue-600"> No context at all
            </label>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 class="text-lg font-semibold mb-3 text-white">4. Which is a common prompting mistake?</h3>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q4" value="a" class="h-4 w-4 text-blue-600"> Using vague instructions
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q4" value="b" class="h-4 w-4 text-blue-600"> Giving clear examples
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q4" value="c" class="h-4 w-4 text-blue-600"> Breaking tasks into steps
            </label>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 class="text-lg font-semibold mb-3 text-white">5. What is a simple technique to improve prompts?</h3>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q5" value="a" class="h-4 w-4 text-blue-600"> Use role prompting and examples
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q5" value="b" class="h-4 w-4 text-blue-600"> Use complex jargon
            </label>
            <label class="flex items-center space-x-3">
              <input type="radio" name="q5" value="c" class="h-4 w-4 text-blue-600"> Avoid giving instructions
            </label>
          </div>
          <button type="button" onclick="submitQuiz()" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">Submit Quiz</button>
        </form>
        <div id="quizResults" class="hidden mt-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white"></div>
      `
      }
    ]
  },
  vibe: {
    title: "Vibe Coding Mastery",
    description: "Master how to set up prompts and explain yourself clearly to AI",
    lessons: [
      {
        title: "Setting Up Your Prompt",
        content: `
          <p class="text-white">Learn how to prepare your prompt to give the AI clear instructions and context.</p>
          <h3 class="text-xl font-semibold mb-2 text-white">Tips:</h3>
          <ul class="list-disc pl-6 mb-4 text-white">
            <li>Start with a clear goal or question.</li>
            <li>Provide necessary background information.</li>
            <li>Specify the format or style you want.</li>
          </ul>
          <h3 class="text-xl font-semibold mb-2 text-white">Example:</h3>
          <pre class="bg-gray-800 p-4 rounded text-sm overflow-x-auto text-white">"Write a friendly email to a customer explaining the new product features."</pre>
        `
      },
      {
        title: "Explaining Yourself Clearly",
        content: `
          <p class="text-white">Tips for communicating your intent effectively to the AI.</p>
          <h3 class="text-xl font-semibold mb-2 text-white">Tips:</h3>
          <ul class="list-disc pl-6 mb-4 text-white">
            <li>Use simple, direct language.</li>
            <li>Break complex tasks into smaller steps.</li>
            <li>Give examples to illustrate your point.</li>
          </ul>
          <h3 class="text-xl font-semibold mb-2 text-white">Example:</h3>
          <pre class="bg-gray-800 p-4 rounded text-sm overflow-x-auto text-white">
"Step 1: Summarize the article.
Step 2: List key points.
Step 3: Provide a conclusion."</pre>
        `
      },
      {
        title: "Refining Your Communication",
        content: `
          <p class="text-white">How to adjust your prompts based on AI responses for better results.</p>
          <h3 class="text-xl font-semibold mb-2 text-white">Tips:</h3>
          <ul class="list-disc pl-6 mb-4 text-white">
            <li>Review AI output carefully.</li>
            <li>Clarify or add details if needed.</li>
            <li>Iterate until the response matches your expectations.</li>
          </ul>
          <h3 class="text-xl font-semibold mb-2 text-white">Example:</h3>
          <pre class="bg-gray-800 p-4 rounded text-sm overflow-x-auto text-white">
Initial prompt: "Write a summary."
Refined prompt: "Write a concise summary in bullet points."</pre>
        `
      },
      {
        title: "Vibe Coding Quiz",
        isQuiz: true,
        content: `
          <form id="quizForm" class="space-y-6 text-white">
            <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <h3 class="text-lg font-semibold mb-3 text-white">1. What is the first step in setting up a good prompt?</h3>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q6" value="a" class="h-4 w-4 text-blue-600"> Start with a clear goal or question
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q6" value="b" class="h-4 w-4 text-blue-600"> Use complex language
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q6" value="c" class="h-4 w-4 text-blue-600"> Avoid giving examples
              </label>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <h3 class="text-lg font-semibold mb-3 text-white">2. Which of these helps the AI understand your intent?</h3>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q7" value="a" class="h-4 w-4 text-blue-600"> Providing background information
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q7" value="b" class="h-4 w-4 text-blue-600"> Using only one word
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q7" value="c" class="h-4 w-4 text-blue-600"> Being as vague as possible
              </label>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <h3 class="text-lg font-semibold mb-3 text-white">3. What is a good way to explain a multi-step task to AI?</h3>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q8" value="a" class="h-4 w-4 text-blue-600"> Break it into clear, numbered steps
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q8" value="b" class="h-4 w-4 text-blue-600"> Write everything in one long sentence
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q8" value="c" class="h-4 w-4 text-blue-600"> Leave out important details
              </label>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <h3 class="text-lg font-semibold mb-3 text-white">4. If the AI's response isn't what you want, what should you do?</h3>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q9" value="a" class="h-4 w-4 text-blue-600"> Refine your prompt or add more details
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q9" value="b" class="h-4 w-4 text-blue-600"> Ignore the result
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q9" value="c" class="h-4 w-4 text-blue-600"> Keep repeating the same prompt
              </label>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
              <h3 class="text-lg font-semibold mb-3 text-white">5. Why is it helpful to give examples in your prompt?</h3>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q10" value="a" class="h-4 w-4 text-blue-600"> It shows the AI exactly what you want
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q10" value="b" class="h-4 w-4 text-blue-600"> It confuses the AI
              </label>
              <label class="flex items-center space-x-3">
                <input type="radio" name="q10" value="c" class="h-4 w-4 text-blue-600"> It wastes time
              </label>
            </div>
            <button type="button" onclick="submitQuiz()" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">Submit Quiz</button>
          </form>
          <div id="quizResults" class="hidden mt-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white"></div>
        `
      }
    ]
  }
};

// Quiz answers
const quizAnswers = {
  q1: "a", q2: "a", q3: "a", q4: "a", q5: "a",
  q6: "a", q7: "a", q8: "a", q9: "a", q10: "a"
};

// State
let currentCourse = null;
let currentLessonIndex = 0;

// Navigation and rendering functions remain unchanged
function navigateToCourse(id) {
  currentCourse = id;
  currentLessonIndex = 0;
  document.getElementById('courses').classList.add('hidden');
  document.getElementById('courseContainer').classList.remove('hidden');
  document.getElementById('backButton').classList.remove('hidden');
  loadLesson();
}

function loadLesson() {
  const course = courses[currentCourse];
  const lesson = course.lessons[currentLessonIndex];
  const container = document.getElementById('courseContainer');
  container.innerHTML = `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-2 text-red-600">${course.title}</h1>
      <p class="text-white mb-6">${course.description}</p>
      <div class="bg-gray-900 p-8 rounded-lg shadow mb-6 text-white">
        <h2 class="text-2xl font-bold mb-4 text-red-600">${lesson.title}</h2>
        <div class="prose text-white">${lesson.content}</div>
      </div>
      <div class="flex justify-between">
        <button onclick="previousLesson()" ${currentLessonIndex===0?'disabled':''} class="px-4 py-2 border border-gray-700 rounded disabled:opacity-50">Previous</button>
        ${lesson.isQuiz
          ? ''
          : `<button onclick="nextLesson()" ${currentLessonIndex===course.lessons.length-1?'disabled':''} class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">Next</button>`}
      </div>
    </div>
  `;
  lucide.createIcons();
}

function previousLesson() {
  if (currentLessonIndex > 0) { currentLessonIndex--; loadLesson(); }
}
function nextLesson() {
  if (currentLessonIndex < courses[currentCourse].lessons.length - 1) { currentLessonIndex++; loadLesson(); }
}

function backToCourses() {
  document.getElementById('courseContainer').classList.add('hidden');
  document.getElementById('backButton').classList.add('hidden');
  document.getElementById('courses').classList.remove('hidden');
  document.getElementById('heroSection').classList.remove('hidden');
}

function submitQuiz() {
  const form = document.getElementById('quizForm');
  let score = 0, total = 0;
  const feedback = [];
  Array.from(form.elements).forEach(el => {
    if (el.name && el.type==='radio') {
      total++;
      const user = el.checked ? el.value : null;
      const correct = quizAnswers[el.name];
      if (user===correct) score++;
      feedback.push({ question: el.name, correct, user });
    }
  });
  showQuizResults({ score, total, feedback });
}

function showQuizResults({ score, total, feedback }) {
  const percent = (score/total)*100;
  const resultsEl = document.getElementById('quizResults');
  resultsEl.classList.remove('hidden');
  resultsEl.innerHTML = `
    <h3 class="text-xl font-bold mb-4 text-red-600">Quiz Results</h3>
    <div class="mb-4">
      <div class="flex justify-between mb-1"><span>Your Score:</span><span>${score}/${total}</span></div>
      <div class="w-full bg-gray-700 rounded-full h-2"><div class="bg-red-600 h-2 rounded-full" style="width:${percent}%"></div></div>
    </div>
    <div class="space-y-3">
      ${feedback.map((f,i)=>`
        <div class="${f.user===f.correct?'bg-green-700 text-green-200':'bg-red-700 text-red-200'} p-3 rounded">
          Q${i+1}: ${f.user===f.correct?'Correct':'Incorrect'} - Your: ${f.user||'None'}, Correct: ${f.correct}
        </div>
      `).join('')}
    </div>
    <div class="flex space-x-4 mt-6">
      <button onclick="retryQuiz()" class="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">Retry Quiz</button>
      <button onclick="backToCourses()" class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">Finish Course</button>
    </div>
  `;
}

function retryQuiz() {
  const form = document.getElementById('quizForm');
  if (!form) return;
  form.reset();
  const resultsEl = document.getElementById('quizResults');
  if (resultsEl) {
    resultsEl.classList.add('hidden');
    resultsEl.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => lucide.createIcons());