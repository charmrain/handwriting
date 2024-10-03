import React, { useState } from 'react';

const SimpleQuestionPost = () => {
  // State for POST request input (question_about_life)
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Function to handle POST request to SmythOS API
  const handlePostRequest = async (e) => {
    e.preventDefault();

    const postData = {
      question_about_life: question
    };

    try {
      const response = await fetch('https://cm1tg3cc10fqhe4cb0ocysdfe.agent.a.smyth.ai/api/simple_question', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        const data = await response.json();
        setAnswer(data.result.Output.answer.answer); // Update state with the returned answer
        setErrorMessage(null); // Clear error if successful
      } else {
        setErrorMessage('Error creating post');
      }
    } catch (error) {
      setErrorMessage('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Ask a Simple Question about Life</h2>
      {/* Form for POST request */}
      <form onSubmit={handlePostRequest}>
        <label>
          Question about Life:
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Ask Question</button>
      </form>

      {/* Display the Answer or any error messages */}
      {answer && <p>Answer: {answer}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SimpleQuestionPost;