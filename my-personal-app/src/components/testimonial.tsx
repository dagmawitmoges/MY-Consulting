import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    feedback: 'MY Consulting transformed our strategy with innovative solutions and exceptional service.',
    rating: 5,
  },
  {
    name: 'Brian Lee',
    feedback: 'The team at MY Consulting exceeded our expectations, delivering results with clarity and professionalism.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionStyle = {
    backgroundColor: '#f7f7f7', // Light gray background
    padding: '60px 20px',
    textAlign: 'center',
    borderRadius: '20px',
    position: 'relative',
    overflow: 'hidden',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#4a4a4a', // Lighter gray (gray 800)
  };

  const subHeaderStyle = {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#6b6b6b', // Medium gray
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    position: 'relative',
    overflow: 'hidden',
  };

  const starsStyle = {
    color: '#ffb300', // Amber 300
    marginBottom: '10px',
  };

  const feedbackStyle = {
    fontSize: '1rem',
    color: '#333', // Dark gray for feedback
  };

  const nameStyle = {
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#2c3e50', // Blue black
  };

  const ctaStyle = {
    marginTop: '30px',
    fontWeight: 'bold',
  };

  const ctaNumberStyle = {
    fontSize: '2.5rem',
    color: '#4a4a4a', // Lighter gray (gray 800)
  };

  const ctaTextStyle = {
    color: '#555',
  };

  return (
    <div style={sectionStyle as React.CSSProperties}>
      <h2 style={headerStyle}>
        Hear From Our Satisfied Clients 
      </h2>
      <p style={subHeaderStyle}>What Clients Say About MY Consulting</p>
      <div style={cardContainerStyle}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={cardStyle}>
            <div style={starsStyle}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p style={feedbackStyle}>{testimonial.feedback}</p>
            <h3 style={nameStyle}>{testimonial.name}</h3>
          </div>
        ))}
      </div>
      <div style={ctaStyle}>
        <h3 style={ctaNumberStyle}>15.2K+</h3>
        <p style={ctaTextStyle}>Join the success with MY Consulting!</p>
      </div>
    </div>
  );
};

export default TestimonialsSection;