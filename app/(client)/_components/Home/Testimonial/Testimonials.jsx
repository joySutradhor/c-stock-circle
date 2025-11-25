"use client";
import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import Tooltip from "../../utilities/Tooltip";
import { IoIosPeople } from "react-icons/io";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("Capsule");

  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = {
    Capsule: {
      name: "Alice Smith",
      position: "CEO, Capsule",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "Aimate transformed the way we handle customer relations. The automation features save us hours every week and our clients are happier than ever.",
      stats: [
        { value: "72%", label: "Increase in customer engagement" },
        { value: "41%", label: "Increase in productivity" },
      ],
    },
    Spherule: {
      name: "John Doe",
      position: "Managing Director, Spherule",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "Aimate has revolutionized our operations. The AI-driven support exceeds expectations, enhancing efficiency and satisfaction. A true game-changer, highly recommended for businesses.",
      stats: [
        { value: "87%", label: "Increase in customer satisfaction" },
        { value: "38%", label: "Increase in operational efficiency" },
      ],
    },
    Galileo: {
      name: "Michael Green",
      position: "Head of Innovation, Galileo",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 4,
      text: "Thanks to Aimate, our innovation team has more time to focus on R&D. It reduced our repetitive workload by a significant margin.",
      stats: [
        { value: "64%", label: "Reduction in repetitive tasks" },
        { value: "29%", label: "Boost in innovation focus" },
      ],
    },
    Segment: {
      name: "Sophia Lee",
      position: "Operations Manager, Segment",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "The analytics and automation features of Aimate made our decision-making faster and more accurate. A vital tool for scaling operations.",
      stats: [
        { value: "93%", label: "Improvement in decision-making" },
        { value: "47%", label: "Scaling efficiency" },
      ],
    },
    Google: {
      name: "Lee thomas",
      position: "Operations Manager, Segment",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "The analytics and automation features of Aimate made our decision-making faster and more accurate. A vital tool for scaling operations.",
      stats: [
        { value: "93%", label: "Improvement in decision-making" },
        { value: "47%", label: "Scaling efficiency" },
      ],
    },
    usa: {
      name: "Sophia Lee",
      position: "Operations Manager, Segment",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "The analytics and automation features of Aimate made our decision-making faster and more accurate. A vital tool for scaling operations.",
      stats: [
        { value: "93%", label: "Improvement in decision-making" },
        { value: "47%", label: "Scaling efficiency" },
      ],
    },
    mn: {
      name: "Sophia shen",
      position: "Operations Manager, Segment",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "The analytics and automation features of Aimate made our decision-making faster and more accurate. A vital tool for scaling operations.",
      stats: [
        { value: "93%", label: "Improvement in decision-making" },
        { value: "47%", label: "Scaling efficiency" },
      ],
    },
    Microsoft: {
      name: "Sophia jhong",
      position: "Operations Manager, Segment",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "The analytics and automation features of Aimate made our decision-making faster and more accurate. A vital tool for scaling operations.",
      stats: [
        { value: "93%", label: "Improvement in decision-making" },
        { value: "47%", label: "Scaling efficiency" },
      ],
    },
    Gemini: {
      name: "Sophia Leon",
      position: "Operations Manager, Segment",
      avatar:
        "https://pub-338f0345bf6c431fbd5bd8d3f2174595.r2.dev/student%20placement/1-1.png",
      rating: 5,
      text: "The analytics and automation features of Aimate made our decision-making faster and more accurate. A vital tool for scaling operations.",
      stats: [
        { value: "93%", label: "Improvement in decision-making" },
        { value: "47%", label: "Scaling efficiency" },
      ],
    },
  };

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="">
      <div>
        <div className="text-center max-w-3xl mx-auto ">
          <Tooltip
            icon={IoIosPeople}
            text="Testimonial"
            headerText="Real Students. Real "
            colorText=" Outcomes ."
            des="From first chart to first profit, they did the work—and it shows."
          />
        </div>
      </div>

      <div className="md:bg-white md:py-5 md:px-10 lg:px-10   lg:py-14 xl:px-0 rounded-md section_topSpace ">
        {/* Tabs */}
        <div
          ref={scrollRef}
          className="tes__container scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {Object.keys(testimonials).map((company) => {
            const testimonial = testimonials[company];
            return (
              <button
                key={company}
                onClick={() => setActiveTab(company)}
                className={`tes__tab__parent transition cursor-pointer ${
                  activeTab === company
                    ? "bg-[#2AA169] !text-white"
                    : "bg-green-100 text-gray-700 hover:bg-green-200"
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-6 h-6 rounded-full border border-black/10"
                />
                <span className=" whitespace-nowrap">{testimonial.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="tes__content__parent">
          {/* Testimonial card */}
          <div className="tes__card__parent card__border">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[activeTab].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="base__para mb-4">{testimonials[activeTab].text}</p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[activeTab].avatar}
                alt={testimonials[activeTab].name}
                className="size-10 p-1 rounded-full object-cover card__border"
              />
              <div>
                <h4 className="sub__para">{testimonials[activeTab].name}</h4>
                <p className="text-sm text-gray-600">
                  {testimonials[activeTab].position}
                </p>
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="tes__card__parent card__border flex flex-col justify-center">
            {testimonials[activeTab].stats.map((stat, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <p className="sub__title">{stat.value}</p>
                <p className="base__para">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
