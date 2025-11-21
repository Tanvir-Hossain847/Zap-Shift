import React from 'react';
import service from "../../../assets/live-tracking.png"
import safe from "../../../assets/safe-delivery.png"
import tiny from "../../../assets/tiny-deliveryman.png"

const InfoSection = () => {
     const features = [
    {
      img: service,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    },
    {
      img: safe,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: tiny,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

    return (
         <div className="max-w-6xl mx-auto py-12 space-y-10">
      {features.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-[180px_1fr] items-center gap-8 pb-10 border-b border-gray-200 last:border-none bg-white p-5 rounded-xl"
        >
          <img
            src={item.img}
            alt=""
            className="w-40 h-auto mx-auto md:mx-0 border-r-2 border-secondary border-dashed pr-5"
          />

          <div>
            <h3 className="text-xl font-semibold text-[#003C3C]">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
    );
};

export default InfoSection;