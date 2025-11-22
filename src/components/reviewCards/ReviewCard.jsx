import React from 'react';
import qoutes from "../../assets/reviewQuote.png"


//   {
//     "id": "5f47ac10b4f1c03e8c123456",
//     "user_email": "john.doe@example.com",
//     "userName": "John Doe",
//     "delivery_email": "delivery1@example.com",
//     "ratings": 4.5,
//     "review": "Smooth delivery and polite staff.",
//     "parcel_id": "5f47ac10b4f1c03e8c654321",
//     "pick_up_email": "pickup1@example.com",
//     "user_photoURL": "https://randomuser.me/api/portraits/men/10.jpg",
//     "date": "2024-05-08T14:30:00.000Z"
//   },

const ReviewCard = ({review}) => {
    return (
        <div>
            <div className="max-w-sm bg-white shadow-xl mx-auto rounded-xl p-6 border border-gray-100">
      
      
      <div className="text-teal-300"><img src={qoutes} alt="" /></div>

      
      <p className="text-gray-600 mt-3 leading-relaxed text-sm">
        {review.review}
      </p>

      
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-teal-900 rounded-full">
            <img src={review.user_photoURL} alt="" />
        </div>

        <div>
          <h4 className="text-[#003C3C] text-[15px] font-semibold">
            {review.userName}
          </h4>
          <p className="text-gray-500 text-xs">{review.date}</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ReviewCard;