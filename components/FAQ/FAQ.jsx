import { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "How do I upgrade / downgrade my workplace plan?",
      answer: "We offer a wide range of services including web development, mobile app development, and digital marketing solutions."
    },
    {
      question: "Can I add other information be added to an invoice?",
      answer: "Getting started is easy! Simply contact us through our contact form or give us a call, and we'll schedule a free consultation."
    },
    {
      question: "When should I use a new table vs. a view?",
      answer: "Our pricing varies depending on project requirements. We offer flexible packages to suit different budgets and needs."
    },
    {
      question: "How can I transfer data from one base to another?",
      answer: "Project timelines vary based on complexity and scope. A typical website project can take 4-8 weeks from start to finish."
    },
    {
        question: "How can I transfer data from one base to another?",
        answer: "Project timelines vary based on complexity and scope. A typical website project can take 4-8 weeks from start to finish."
      },
      {
        question: "How can I transfer data from one base to another?",
        answer: "Project timelines vary based on complexity and scope. A typical website project can take 4-8 weeks from start to finish."
      },
      {
        question: "How can I transfer data from one base to another?",
        answer: "Project timelines vary based on complexity and scope. A typical website project can take 4-8 weeks from start to finish."
      },
    {
      question: "How do I change my account email address?",
      answer: "You can change your account email address in your profile settings."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[90%] w-full mx-auto px-4 py-12">
      <h1 className="text-center text-5xl font-bold mb-8">Frequently Asked <span className="text-orange-500">Questions</span></h1>
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 w-full shadow rounded-sm"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-gray-600 text-lg">{faq.question}</span>
              <span className="text-2xl text-gray-400">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
