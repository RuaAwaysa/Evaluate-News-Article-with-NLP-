
# **Evaluating News Article with NLP**

This project is a web tool that allows users to evaluate the sentiment and subjectivity of news articles using Natural Language Processing (NLP). The application takes a URL input, analyzes the content of the article, and returns the polarity (positive/negative) and subjectivity (subjective/factual) along with a snippet of the analyzed text.

## **Table of Contents**

1. [Project Structure](#project-structure)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Development](#development)
7. [Testing](#testing)
8. [License](#license)

## **Project Structure**

\`\`\`bash
src/
│
├── client/
│   ├── views/
│   │   └── index.html                # Main HTML file
│   ├── styles/
│   │   ├── base.scss                 # Base styles
│   │   ├── form.scss                 # Styles for the form
│   │   ├── header.scss               # Styles for the header
│   │   ├── footer.scss               # Styles for the footer
│   │   ├── resets.scss               # CSS resets
│   │   └── styles.scss               # Main SCSS file
│   ├── js/
│   │   ├── formHandler.js            # Handles form submission and data fetching
│   │   ├── urlChecker.js             # Validates the entered URL
│   │   └── __test__/                 # Test files for Jest
│   │       ├── testFormHandler.spec.js  # Tests for formHandler.js
│   │       └── testUrlChecker.spec.js   # Tests for urlChecker.js
│   └── index.js                      # Entry point for Webpack, imports all JS and SCSS files
│
├── server/
│   └── index.js                      # Express server setup and API route handling
│
├── .babelrc                          # Babel configuration
├── .env                              # Environment variables (API keys)
├── webpack.dev.js                    # Webpack configuration for development
├── webpack.prod.js                   # Webpack configuration for production
├── package.json                      # Project dependencies and scripts
└── README.md                         # Project README file (this file)
\`\`\`

## **Features**

- **URL Validation**: Ensures the input is a valid URL before sending it to the server.
- **Sentiment Analysis**: Utilizes MeaningCloud API to evaluate the sentiment (polarity) and subjectivity of the article.
- **Service Workers**: Implements offline functionality using Workbox.
- **Responsive Design**: The app is styled using SCSS for a responsive and modern user interface.

## **Installation**

### **Prerequisites**

- Node.js (v14 or above)
- npm (v7 or above)
- A MeaningCloud API key

### **Setup**

1. **Clone the Repository**
   ```bash
    git clone https://github.com/RuaAwaysa/Evaluate-News-Article-with-NLP.git
   cd evaluate-news-article-with-nlp
   cd evaluate-news-article-with-nlp
   ```

2. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set Up Environment Variables**
   - Create a \`.env\` file in the root directory and add your MeaningCloud API key:
     \`\`\`
     API_KEY=your_meaningcloud_api_key
     \`\`\`

4. **Build the Project**
   - For development:
     \`\`\`bash
     npm run build-dev
     \`\`\`
   - For production:
     \`\`\`bash
     npm run build-prod
     \`\`\`

## **Usage**

1. **Start the Server**
   \`\`\`bash
   npm start
   \`\`\`
   The application will be available at \`http://localhost:8000\`.

2. **Evaluate an Article**
   - Open the application in your browser.
   - Enter the URL of a news article you want to analyze in the input field.
   - Click "Submit" to receive the sentiment and subjectivity results.

## **Technologies Used**

- **Frontend**: HTML, SCSS, JavaScript
- **Backend**: Node.js, Express
- **API**: MeaningCloud API
- **Build Tools**: Webpack, Babel
- **Testing**: Jest

## **Development**

### **File Structure**

- **SCSS**: The styles are organized into multiple SCSS files (\`base.scss\`, \`form.scss\`, etc.) and imported into \`styles.scss\`.
- **JavaScript**: The core logic for handling form submissions and URL validation is in \`formHandler.js\` and \`urlChecker.js\`.
- **Server**: The server code in \`index.js\` sets up an Express server and handles the POST request to analyze the article.

### **Service Workers**

- The project uses Workbox to generate service workers that enable offline functionality. The service worker is registered in the main \`index.html\` file.

## **Testing**

- The project includes unit tests written with Jest. The test files are located in \`src/client/js/__test__/\`.
- To run the tests, use the following command:
  \`\`\`bash
  npm run test
  \`\`\`

## **License**

The project is licensed under the MIT License. See the LICENSE file for details.