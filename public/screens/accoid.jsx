// Accordion.js
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="accordion-item">
    <button className="accordion-header" onClick={onToggle}>
      <h3>

      {title}
      </h3>
    </button>
    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
      <p>{content}</p>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: ' What is Green legacy Alliance?', content: ' Green Legacy Alliance is a non-profit organization dedicated to combating climate change, with a particular focus on addressing deforestation and environmental degradation in Karachi. We aim to create sustainable solutions that align with the United Nations Agenda 2030 Sustainable Development Goals (SDGs), particularly Goal 13: Climate Action.' },
    { title: ' What is the vision and mission of Green Legacy?' 
, content: 'Our vision is to sustain our planet and shape a green legacy for future generations. We aim to reduce the impact of climate change by promoting tree planting, environmental awareness, and community-driven green initiatives in urban areas,'
 },
    { title: '  Can I collaborate with (GLA) as an organization or business?'

,
       content: 
      'Yes! We welcome collaborations with organizations, educational institutions, and businesses that share our vision for environmental sustainability. Whether through joint initiatives, sponsorship, or knowledge-sharing, we believe that partnerships are key to making a lasting impact.'

 },
    { title: ' What projects and activities does Green Legacy Alliance undertake?'

, content: 'Tree plantation drives in urban areas.Educational workshops on environmental sustainability.Collaborations with local communities to promote green practices.Advocacy campaigns to highlight the importance of climate action.'
},
    { title: '  How can I get involved with Green Legacy Alliance?'

, content: 'Volunteering: Join us in our tree plantation drives and other environmental activities. Donations: Support our initiatives through donations that help fund our projects. Spreading Awareness: Share our mission and engage your network in climate action. '



},
    { title: 'What areas does Green Legacy Alliance focus on for tree plantation?'
, content: 'Our primary focus is on areas within Karachi that have been most affected by deforestation and urbanization. We aim to plant trees in parks, public spaces, and communities that face environmental challenges, while also working to expand our reach in other regions.'
  }
  ];

  return (<>
          <div className="accordion-container1">
      <h1 id='h11'>FREQUENTLY ASKED QUESTION'S?</h1>
<div className='accordion-container'>

      <div className="accordion-column">
        {items.slice(0, 3).map((item, index) => (
          <AccordionItem
          key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => toggleItem(index)}
            />
        ))}
      </div>
       
      <div className="accordion-column">
        {items.slice(3).map((item, index) => (
          <AccordionItem
            key={index + 3}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index + 3}
            onToggle={() => toggleItem(index + 3)}
            />
        ))}
      </div>
        </div>
    </div>
        </>
  );
};

export default Accordion;
