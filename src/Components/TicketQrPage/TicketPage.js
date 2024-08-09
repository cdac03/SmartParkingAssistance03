import React from 'react';
import ParkingImage from '../../Assets/Parking.png';
import QRCode from 'qrcode.react'; 

const TicketPage = ({ date, fromTime, toTime, duration, amountPaid, token }) => {
  
  const qrCodeValue = `https://example.com/booking/${token}`;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white max-w-full">
      <div className="flex-1 flex items-center justify-center hidden md:flex p-4">
        <div className="w-full h-full max-w-sm max-h-sm">
          <img 
            src={ParkingImage} 
            alt="Parking Ticket" 
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center w-full p-5 ">
        <div className="text-center p-16 bg-gray-900 rounded-lg shadow-xl">
          <p className="mb-4 text-2xl font-bold text-yellow-400">THANK YOU!</p>
          <div className="bg-gray-700 p-4 rounded-lg my-5">
            <QRCode value={qrCodeValue} size={150} className="w-[150px] h-[150px] max-w-full max-h-full" />
          </div>
          <p className="font-bold my-2 text-yellow-400">Date: {date}</p>
            <div className="my-2">
              <p>From: {fromTime}</p>
              <p>To: {toTime}</p>
              <p>Duration: {duration}</p>
            </div>
          <p className="font-bold my-2 text-yellow-400">Amount: {amountPaid} Rs.</p>
          <p className="mt-5 text-2xl text-yellow-400">Token: {token}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;