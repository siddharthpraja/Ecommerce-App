import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-4">
             Welcome to CROP CART! We are dedicated to helping you find the perfect
        accommodation that fits your needs. Whether you’re traveling for
        business, leisure, or a special occasion, our app provides you with a
        seamless way to discover hotels nearby.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Key Features:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          ✨ <strong>Search Nearby Hotels</strong>: Instantly find hotels close
          to your location.
        </li>
        <li>
          💲 <strong>Compare Prices</strong>: Easily compare prices across
          different hotels to get the best deal.
        </li>
        <li>
          🛏️ <strong>Filter Options</strong>: Refine your search by price,
          location, amenities, and number of bedrooms.
        </li>
        <li>
          ⭐ <strong>User Reviews</strong>: Read reviews from previous guests to
          help you make an informed decision.
        </li>
        <li>
          📸 <strong>Images & Descriptions</strong>: View detailed information
          and photos of each property.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Our Mission
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to simplify your travel planning process by providing a
        user-friendly platform to find hotels that meet your criteria. We strive
        to deliver the most accurate and up-to-date information to enhance your
        booking experience.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        If you have any questions or feedback, feel free to reach out to us
        through our contact page. We’re here to help you!
      </p>
    </div>
  );
};

export default About;
