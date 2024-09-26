import { useState } from "react"

function App() {
  const [color, setcolor] = useState("LightSlateGray")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setcolor("Brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Brown" }}>Brown</button>
          <button onClick={() => setcolor("Pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Pink" }}>Pink</button>
          <button onClick={() => setcolor("DarkKhaki")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "DarkKhaki" }}>DarkKhaki</button>
          <button onClick={() => setcolor("Coral")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Coral" }}>Coral</button>
          <button onClick={() => setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "green" }}>Green</button>
        </div></div>
    </div>
  )
}

export default App
