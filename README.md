# EduPlan - AI-Powered Lesson Planner 📚

## Overview
EduPlan is a React.js-based lesson planner that integrates the **Google Gemini API** to dynamically generate lesson content. Designed for educators, it provides a user-friendly interface to create, edit, and download lesson plans in a structured format. The project leverages **ShadCN UI components**, **TailwindCSS**, and **react-to-print** for seamless UI/UX and PDF generation.

## Features 🚀
- **🔐 Dummy Login System**: Users log in with a pre-defined account (Frontend only).
- **📝 Lesson Plan Form**: Enter key details like Topic, Grade Level, Learning Objectives, and more.
- **🤖 AI-Powered Content Generation**: Uses Google Gemini API to generate lesson plans.
- **🎨 Editable & Structured UI**: Implements **ShadCN UI components** like Cards, Accordions, and Inputs.

## Tech Stack 🛠
- **Frontend**: React.js (Vite/Next.js preferred)
- **UI Components**: ShadCN + TailwindCSS
- **API Integration**: Google Gemini API (free version)
- **State Management**: React State / Context API
- **PDF Handling**: react-to-print / jsPDF

## Installation ⚙️
Follow these steps to set up EduPlan locally:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/eduplan.git
   cd eduplan
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file and add:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. **Run the Development Server**:
   ```sh
   npm run dev
   ```
   Access the application at `http://localhost:3000`

## Usage 💡
1. **Log In**: Use dummy credentials `demouser/demopass` to access the lesson planner.
2. **Fill Out Lesson Details**: Enter the topic, grade level, and learning objectives.
3. **Generate Lesson Plan**: Click 'Generate' to fetch AI-powered content.
4. **Edit & Format**: Modify the structured content within the UI.
5. **Download as PDF**: Save the lesson plan as a PDF using the **Download** button.

## Bonus Features ✨
- **Live Deployment**: Host on **Vercel** and share the live link.

## Evaluation Criteria 🏆
- **UI/UX Quality**: Clean, modern design using ShadCN components.
- **API Integration**: Proper Gemini API interaction & structured content generation.
- **Functionality**: Dummy login, editable AI-generated lesson plan, and PDF download.
- **Code Quality**: Modular, maintainable, and well-documented code.
- **Bonus Points**: Dark mode, local storage, enhanced editing UI.

## License 📄
This project is licensed under the MIT License.

## Contact ✉️
For inquiries or support, reach out at [soniguarav2021@gmail.com](mailto:soniguarav2021@gmail.com) 


