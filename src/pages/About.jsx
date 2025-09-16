import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <main className="bg-white min-h-screen px-6 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elevating home cooking with thoughtfully curated, step-by-step recipes that balance flavor, health, and simplicity.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-medium">[Your Website Name]</span>, we believe cooking is more than just preparing meals—it's an experience, a tradition, and a connection. Our mission is to empower people to cook confidently at home by offering reliable recipes, clear instructions, and nutritional guidance. Whether you're a beginner or a seasoned cook, our platform is designed to inspire creativity in the kitchen.
          </p>
        </section>

        {/* The Chef / Founder */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Chef portrait"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Meet the Creator</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              <span className="font-medium">Alex Rivera</span>, a self-taught chef and food writer, started this platform to share a lifelong passion for real, approachable cooking. With a background in nutrition and over a decade of experimenting in the kitchen, Alex's vision is simple: make delicious food that anyone can cook at home, no matter their experience level.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every recipe is tested, refined, and written with clarity to ensure success on the first try. You won’t find shortcuts—only honest cooking made easy.
            </p>
          </div>
        </section>

        {/* Optional CTA */}
        <section className="bg-gray-50 p-8 rounded-xl text-center shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore Our Recipes</h3>
          <p className="text-gray-600 mb-4">Browse our latest dishes, from weeknight dinners to seasonal favorites.</p>

          <Link to="/foods" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"> View Recipes</Link>


        </section>

      </div>
    </main>
  );
};

export default About;
