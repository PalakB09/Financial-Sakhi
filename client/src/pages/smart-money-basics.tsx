import React, { useState } from "react";

const SmartMoneyBasics = () => {
  const [budget, setBudget] = useState("");
  const [savingGoal, setSavingGoal] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Your budget is: ${budget}, and your saving goal is: ${savingGoal}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-purple-600">
        Smart Money Basics: Managing Your Finances
      </h1>

      {/* Hero Section */}
      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Welcome to the "Smart Money Basics" course! Learn to budget, save, and
          manage your daily expenses effectively. This course is designed for
          beginners who want to gain control over their finances.
        </p>
      </div>

      {/* Interactive Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Let’s Get Started!
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              What's your monthly budget?
            </label>
            <input
              type="number"
              placeholder="Enter your budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              What’s your savings goal this year?
            </label>
            <input
              type="number"
              placeholder="Enter your savings goal"
              value={savingGoal}
              onChange={(e) => setSavingGoal(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Save Your Goals
          </button>
        </form>
      </div>

       {/* Embed YouTube Video */}
       <div className="video-container mb-6">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sVKQn2I4HDM"
          title="Smart Money Basics Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Key Takeaways */}
      <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Understand the importance of budgeting</li>
          <li>Learn techniques for saving money</li>
          <li>Set achievable financial goals</li>
          <li>Manage daily and unexpected expenses</li>
        </ul>
      </div>
    </div>
  );
};

export default SmartMoneyBasics;
