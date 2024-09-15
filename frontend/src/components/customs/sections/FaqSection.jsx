import { MinusCircle, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';


const FaqSection = () => {
      const [openIndex, setOpenIndex] = useState(null); 

      const toggleAnswer = (index) => {
            if (openIndex === index) {
                  setOpenIndex(null); 
            } else {
                  setOpenIndex(index); 
            }
      };

      const faqData = [
            { question: "What is your clinic's appointment process?", answer: "Our appointment process is simple. You can book online through our app or call the clinic directly. Our team will assist you with all your needs." },
            { question: "Do you offer online consultations?", answer: "Yes, we offer online consultations for various conditions. You can schedule an online consultation just like a regular appointment." },
            { question: "What are your clinic's working hours?", answer: "We are open Monday to Friday from 9 AM to 6 PM and on Saturdays from 10 AM to 4 PM." },
            { question: "How can I access my medical records?", answer: "Your medical records are securely stored in our system. You can access them anytime by logging into your account on our website or mobile app." },
      ];

      return (
            <div className="faq-section p-6 flex flex-col items-center gap-8">
                  <h1 className="text-5xl text-center font-semibold font-kameron text-[#1B4965] mb-6">Frequently Asked Questions</h1>
                  <div className='bg-[#1B4965] w-[80%] p-6 rounded-lg'>
                        {faqData.map((item, index) => (
                              <div key={index} className="faq-item my-4">
                                    <div className="flex flex-col justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-lg shadow-lg" onClick={() => toggleAnswer(index)}>
                                          <div className='w-full flex items-center justify-between'>
                                                <h3 className="text-lg font-semibold">{item.question}</h3>
                                                <button className="text-xl">
                                                      {openIndex === index ? <MinusCircle /> : <PlusCircle />}
                                                </button>
                                          </div>

                                          <div
                                                className={`faq-answer w-full overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'
                                                      }`}
                                          >
                                                <p className="mt-2 px-4 ">
                                                      {item.answer}
                                                </p>
                                          </div>
                                    </div>

                              </div>
                        ))}
                  </div>

            </div>
      );
};

export default FaqSection;
