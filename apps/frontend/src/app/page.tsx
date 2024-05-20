'use client'

import { useState } from "react"
import { PitchType } from "@/types/pitch"
import Pitch from "./Pitch"

export default function Home() {
  const [cityName, setCityName] = useState('')
  const [pitches, setPitches] = useState<PitchType[]>([])

  function onSubmit() {
    setPitches([...pitches, { cityName }])
  }

  return (
    <main>
      <h2>Get your city pitch 🌆</h2>
      <div className="mt-2 flex gap-4">
        <input 
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? onSubmit() : ''}
          value={cityName} className="border border-black p-1"
          type="text" 
          placeholder="Enter a city name..." 
        />
        <button onClick={onSubmit} className="bg-blue-400 text-white p-2">Get city pitch</button>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {pitches.map((pitch, idx) => <Pitch key={idx} cityName={pitch.cityName} />).reverse()}
      </div>
    </main>
  );
}
