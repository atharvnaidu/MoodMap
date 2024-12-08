import React, { useState } from 'react';
import axios from 'axios';

const SentimentAnalyzer = () => {
  const [username, setUsername] = useState('');
  const [sentimentData, setSentimentData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset any previous errors

    try {
      const response = await axios.post('http://127.0.0.1:5000/', { username });
      setSentimentData(response.data);
    } catch (error) {
      setError('Error fetching sentiment data. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Reddit Sentiment Analyzer</h1>

      {/* Input form for Reddit username */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          placeholder="Enter Reddit username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={styles.input} 
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>

      {/* Display loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Display sentiment data */}
      {sentimentData && (
        <div style={styles.results}>
          <h2>Sentiment Analysis Results</h2>
         


          {/* Display the plot image */}
          <img 
            src={`http://127.0.0.1:5000/static/${sentimentData.plot_url}`} 
            alt="Sentiment Analysis Plot" 
            style={{ width: '100%', marginTop: '20px' }} 
          />
        </div>
      )}
    </div>
  );
};

// Simple CSS-in-JS styles for the component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '250px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  results: {
    marginTop: '20px',
    textAlign: 'left',
  }
};

export default SentimentAnalyzer;
