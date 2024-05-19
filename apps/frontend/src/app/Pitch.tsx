import { PitchType } from "@/types/pitch"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { OrbitProgress } from "react-loading-indicators"

const Pitch = ({ cityName, pitch }: PitchType ) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pitchState, setPitchState] = useState(pitch)

  useEffect(() => {
    const socket = io('http://localhost:5000');
    socket.emit('place-details', cityName)
    socket.on('place-details', (pitch) => {
      setPitchState(pitch)
      setIsLoading(false)
    });
  }, []);
  
  return (
    <div className="border rounded-3xl border-black py-3 px-5">
      <p className="font-semibold">{cityName}</p>
        <div className="mt-2 max-h-52 overflow-auto w-full">
        { isLoading ? (
            <OrbitProgress size="small" color="black" />
          ) : (
            <>{pitchState}</>
        )}
        </div>

    </div>
  )
}

export default Pitch