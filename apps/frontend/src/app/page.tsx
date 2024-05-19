import Pitch from "./Pitch"

export default function Home() {
  return (
    <main>
      <h2>Get your city pitch 🌆</h2>
      <div className="mt-2 flex gap-4">
        <input className="border border-black p-1" type="text" placeholder="Enter a city name..." />
        <button className="bg-blue-400 text-white p-2">Get city pitch</button>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <Pitch />
        <Pitch />
        <Pitch />
      </div>
    </main>
  );
}
