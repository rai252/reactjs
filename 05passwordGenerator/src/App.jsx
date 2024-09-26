import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("gray"); // Added color state

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // Function to copy password to clipboard
  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => {
          alert("Password copied to clipboard!");
        })
        .catch(() => {
          alert("Failed to copy the password.");
        });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: color }}>
        <div className='w-full max-w-md shadow-md rounded-lg px-4 py-6 bg-gray-200'>
          {/* Title */}
          <h1 className='text-xl font-semibold text-center mb-4 text-gray-700'>
            Password Generator
          </h1>

          {/* Password Display Input */}
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              className='outline-none w-full py-2 px-3 bg-white text-gray-800'
              placeholder='Generated password will appear here'
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >
              Copy
            </button>
          </div>

          <div className='flex text-sm gap-x-2 mb-4'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={4}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>
          </div>

          {/* Control Buttons */}
          <div className='flex justify-between items-center mb-4'>
            <label className='text-gray-700'>
              <input
                type='checkbox'
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
              />
              Include Numbers
            </label>
            <label className='text-gray-700'>
              <input
                type='checkbox'
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
              />
              Include Special Characters
            </label>
          </div>

          {/* Generate Button */}
          <button
            onClick={passwordGenerator}
            className='w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition'
          >
            Generate Password
          </button>
        </div>
      </div>

      {/* Color Picker Section */}
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("DarkSlateGray")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "DarkSlateGray" }}>DarkSlateGray</button>
          <button onClick={() => setColor("SlateGray")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "SlateGray" }}>SlateGray</button>
          <button onClick={() => setColor("RosyBrown")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "RosyBrown" }}>RosyBrown</button>
          <button onClick={() => setColor("Pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Pink" }}>Pink</button>
          <button onClick={() => setColor("DarkKhaki")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "DarkKhaki" }}>DarkKhaki</button>
          <button onClick={() => setColor("Coral")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Coral" }}>Coral</button>
          <button onClick={() => setColor("DarkCyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "DarkCyan" }}>DarkCyan</button>
        </div>
      </div>
    </>
  );
}

export default App;
