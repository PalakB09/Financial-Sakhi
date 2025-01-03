import React from "react";

const InvestingFundamentals = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-600">
        Investing Fundamentals: Building Wealth Over Time
      </h1>

      {/* Hero Section */}
      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Learn the basics of investing and start your journey to financial
          independence. This course will guide you through key concepts, tools,
          and strategies to grow your wealth over time.
        </p>
      </div>

      {/* Quiz Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Quick Quiz: What Do You Know About Investing?
        </h2>
        <p className="text-gray-700 mb-4">Test your knowledge below:</p>
        <br />
        <ul className="space-y-4">
          <li>
            <p className="font-medium">1. What is compounding?</p>
            <ul className="space-y-2">
              <li>
                <label>
                  <input type="radio" name="q1" className="mr-2" />
                  A. A type of investment strategy
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="q1" className="mr-2" />
                  B. Earning interest on your interest
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="q1" className="mr-2" />
                  C. A method of reducing risk
                </label>
              </li>
              <li>
                <br />
    <p className="font-medium">2. What is diversification?</p>
    <ul className="space-y-2">
        <li>
            <label>
                <input type="radio" name="q2" className="mr-2" />
                A. A technique to manage investment risks by spreading them across various assets
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="q2" className="mr-2" />
                B. A type of high-risk investment
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="q2" className="mr-2" />
                C. A method to maximize returns from a single investment
            </label>
        </li>
        <li>
            <br />
    <p className="font-medium">3. What does the term "risk tolerance" refer to in investing?</p>
    <ul className="space-y-2">
        <li>
            <label>
                <input type="radio" name="q3" className="mr-2" />
                A. The amount of time you plan to hold an investment
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="q3" className="mr-2" />
                B. Your ability and willingness to withstand investment losses
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="q3" className="mr-2" />
                C. The expected rate of return on an investment
            </label>
        </li>
    </ul>
</li>

    </ul>
</li>

            </ul>
          </li>
        </ul>
      </div>

      {/* Embed YouTube Video */}
      <div className="video-container mb-6">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JUtes-k-VX4"
          title="Smart Money Basics Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Key Takeaways */}
      <div className="bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Basics of investing and compounding</li>
          <li>Understanding risk and reward</li>
          <li>Introduction to stocks, bonds, and mutual funds</li>
          <li>Long-term investment strategies</li>
        </ul>
      </div>
    </div>
  );
};

export default InvestingFundamentals;
