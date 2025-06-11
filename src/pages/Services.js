import React from 'react';


const services = [
  {
    title: "Web Development",
    description: "Building responsive and interactive websites.",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and modern interfaces.",
  },
  {
    title: "SEO Optimization",
    description: "Improving visibility and ranking in search engines.",
  },
  
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>My Services</h2>
      <div className="card-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
