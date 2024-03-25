import React, { useEffect, useState } from 'react';
import logo from "../images/logo512.png";
import { useNavigate } from 'react-router-dom';

const SecurityPin = () => {
  const navigate = useNavigate()
  const [pin, setPin] = useState(['', '', '', '']);
  const token = localStorage.getItem("token") || '';

  const handleInput = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  useEffect(() => {
    if (pin.every(val => val !== '')) {
      // Call your API here
      callApi(pin);
    }
  }, [pin]);

  const callApi = async (myPin: any) => {
    const formData = new URLSearchParams();
    console.log({ myPin, join: myPin.join("") });

    formData.append("pin", myPin.join(""));
    try {
      const response = await fetch("https://smapidev.co.in/api/Api/login_pin", {
        method: "POST",
        headers: {
          'token': token,
          'Content-Type': 'application/json',
        },
        body: formData,
      });
      response.json().then((data: any) => {
        alert(data.message);
        navigate("/")
      }).catch((error: any) => {
        console.log("err", error);

        alert(error);
      })

    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className='container mx-auto security-pin'>
      <img src={logo} alt="Logo" className="flex mx-auto" />
      <h1 className='text-white'>Please Enter your security pin</h1>

      {/* Input Fields */}
      <div className="inline-grid grid-cols-4 gap-4 mt-6 w-30">
        {pin.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            // maxLength="1"
            onChange={(e) => handleInput(index, e.target.value)}
            className="text-center bg-white text-black font-bold py-8 px-8 rounded"
            style={{ width: "20px", height: "20px" }}
          />
        ))}
      </div>

      {/* Numeric Keyboard */}
      <div className="inline-grid grid-cols-3 gap-4 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            className="bg-white flex items-center hover:bg-blue-700 text-black font-bold py-8 px-8 rounded-full"
            style={{ width: "20px", height: "20px" }}
            onClick={() => handleInput(pin.findIndex(val => val === ''), num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="bg-red-500 flex items-center hover:bg-red-700 text-white font-bold py-8 px-8 rounded-full"
          style={{ width: "80px", height: "80px" }}
          onClick={() => setPin(['', '', '', ''])}
        >
          CLR
        </button>
        <button className="bg-gray-500 flex items-center hover:bg-gray-700 text-white font-bold py-8 px-8 rounded-full" style={{ width: "80px", height: "80px" }}>0</button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-8 px-8 rounded-full"
          style={{ width: "80px", height: "80px" }}
          onClick={() => {
            const newPin = [...pin];
            const emptyIndex = newPin.findIndex(val => val === '');
            if (emptyIndex !== -1) {
              newPin[emptyIndex] = 'DEL';
              setPin(newPin);
            }
          }}
        >
          DEL
        </button>
      </div>
    </div>
  );
}

export default SecurityPin;
