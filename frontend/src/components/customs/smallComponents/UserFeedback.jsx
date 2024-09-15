import React from 'react';

function UserFeedback() {
  const feedbacks = [
    { id: 1, text: 'Great service, very friendly staff!', user: 'John Doe', date: '2024-09-01' },
    { id: 2, text: 'The waiting time was a bit long, but overall good experience.', user: 'Jane Smith', date: '2024-09-02' },
    { id: 3, text: 'Clean facilities and professional doctors.', user: 'Mark Johnson', date: '2024-09-03' },
  ];

  return (
    <div className='bg-white rounded-lg p-4 shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>User Feedback</h2>
      <ul className='space-y-2'>
        {feedbacks.map(feedback => (
          <li key={feedback.id} className='border-b pb-2'>
            <p className='text-sm italic'>" {feedback.text} "</p>
            <p className='text-xs text-gray-500'>- {feedback.user}, {feedback.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserFeedback;
