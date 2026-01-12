import React from "react";

export default function AboutUS(props) {


  return (
    <div className="container my-5" style={props.stylemode}>
      <h1 className="mb-4">About Text Analyzer</h1>

      <p>
        <strong>Text Analyzer</strong> is a simple yet practical React-based web
        application designed to help users analyze, transform, and understand
        text efficiently.
      </p>

      <p>
        The goal of this app is not to look fancy, but to solve real text-related
        problems quickly while practicing modern React concepts like state
        management, routing, and UI theming.
      </p>

      <p>
        This project is built as a learning-focused application, but the features
        are intentionally chosen to reflect what real-world utility apps do.
      </p>

      <hr />

      <h3>🚀 Features</h3>
      <ul>
        <li>Convert text to Uppercase and Lowercase</li>
        <li>Word count and character count</li>
        <li>Estimated reading time</li>
        <li>Palindrome checker</li>
        <li>Copy text to clipboard</li>
        <li>Dark Mode / Light Mode toggle</li>
      </ul>

      <hr />

      <h3>👨‍💻 Developer Info</h3>
      <p>
        <strong>Developer:</strong> Chandan <br />
        <strong>Tech Stack:</strong> React, JavaScript (ES6+), Bootstrap
      </p>

      <p className="text-muted mt-4">
        This project is built for learning and skill development. Clarity and
        correctness matter more than visual hype.
      </p>
    </div>
  );
}
