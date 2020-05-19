import React from 'react';
import './App.css';

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have",
    author: "Thomas Jefferson"
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.randomQuote = this.randomQuote.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
    this.randomColor = this.randomColor.bind(this);

    this.state = {
      quote: this.randomQuote()
    };
  }

  randomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }

  randomColor() {
    return (
      "rgb(" +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      ")"
    );
  }

  getNewQuote() {
    let root = document.documentElement;
    root.style.setProperty("--main-color", this.randomColor());

    this.setState({
      quote: this.randomQuote()
    });
  }

  render() {
    return (
      <div>
        <div className="shadow-lg font-weight-light" id="quote-box">
          <h1 id="text" className="text-center">
            {this.state.quote.quote}
          </h1>
          <h2 id="author">{"- " + this.state.quote.author}</h2>
          <div id="buttonContainer">
            <a
              className="btn btn-default"
              href={
                'https://twitter.com/intent/tweet?text="' +
                this.state.quote.quote +
                '" ' +
                this.state.quote.author
              }
              id="tweet-quote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <button
              className="btn btn-default"
              id="new-quote"
              onClick={this.getNewQuote}
            >
              New quote
            </button>
          </div>
        </div>
        <h2 className="text-center" id="creator">
        </h2>
      </div>
    );
  }
}



export default App;
