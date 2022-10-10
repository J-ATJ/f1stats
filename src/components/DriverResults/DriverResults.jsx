import React, { useState } from "react";
import data from '../../db/2022/data.js';
import './DriverResults.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


export function DriverResults() {
  const [albState, setAlbState] = useState(false);
  const [aloState, setAloState] = useState(false);
  const [botState, setBotState] = useState(false);
  const [gasState, setGasState] = useState(false);
  const [hamState, setHamState] = useState(false);
  const [latState, setLatState] = useState(false);
  const [lecState, setLecState] = useState(false);
  const [magState, setMagState] = useState(false);
  const [norState, setNorState] = useState(false);
  const [ocoState, setOcoState] = useState(false);
  const [perState, setPerState] = useState(false);
  const [ricState, setRicState] = useState(false);
  const [rusState, setRusState] = useState(false);
  const [saiState, setSaiState] = useState(false);
  const [schState, setSchState] = useState(false);
  const [strState, setStrState] = useState(false);
  const [tsuState, setTsuState] = useState(false);
  const [verState, setVerState] = useState(false);
  const [vetState, setVetState] = useState(false);
  const [zhoState, setZhoState] = useState(false);

  function hide() {
    setAlbState(true);
    setAloState(true);
    setBotState(true);
    setGasState(true);
    setHamState(true);
    setLatState(true);
    setLecState(true);
    setMagState(true);
    setNorState(true);
    setOcoState(true);
    setPerState(true);
    setRicState(true);
    setRusState(true);
    setSaiState(true);
    setSchState(true);
    setStrState(true);
    setTsuState(true);
    setVerState(true);
    setVetState(true);
    setZhoState(true);
  }

  return (
    <div className="main__div__DriverResults">
      <h1>Drivers Results 2022</h1>
      <ResponsiveContainer aspect={3.5} className='responsive__container'>
        <LineChart
          data={data}
          className="lineChart"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="round" />
          <YAxis reversed={true} domain={[1, 20]} scale="linear" />
          <Tooltip />

          <Line type="basic" dataKey="Verstappen" stroke="#0210cf" fill="#0210cf" strokeWidth={2} animationDuration={1000} hide={verState} id="Verstappen" />
          <Line type="basic" dataKey="Pérez" stroke="#0210cf" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={perState} id="Perez" />

          <Line type="basic" dataKey="Leclerc" stroke="#ff3333" fill="#ff3333" strokeWidth={2} animationDuration={1000} hide={lecState} id="Leclerc" />
          <Line type="basic" dataKey="Sainz" stroke="#ff3333" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={saiState} id="Sainz" />

          <Line type="basic" dataKey="Hamilton" stroke="#3bed9a" fill="#3bed9a" strokeWidth={2} animationDuration={1000} hide={hamState} id="Hamilton" />
          <Line type="basic" dataKey="Russell" stroke="#3bed9a" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={rusState} id="Russell" />

          <Line type="basic" dataKey="Norris" stroke="#faaa00" fill="#faaa00" strokeWidth={2} animationDuration={1000} hide={norState} id="Norris" />
          <Line type="basic" dataKey="Ricciardo" stroke="#faaa00" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={ricState} id="Ricciardo" />

          <Line type="basic" dataKey="Ocon" stroke="#4184f0" fill="#4184f0" strokeWidth={2} animationDuration={1000} hide={ocoState} id="Ocon" />
          <Line type="basic" dataKey="Alonso" stroke="#4184f0" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={aloState} id="Alonso" />

          <Line type="basic" dataKey="Stroll" stroke="#07542b" fill="#07542b" strokeWidth={2} animationDuration={1000} hide={strState} id="Stroll" />
          <Line type="basic" dataKey="Vettel" stroke="#07542b" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={vetState} id="Vettel" />

          <Line type="basic" dataKey="Gasly" stroke="#647482" fill="#647482" strokeWidth={2} animationDuration={1000} hide={gasState} id="Gasly" />
          <Line type="basic" dataKey="Tsunoda" stroke="#647482" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={tsuState} id="Tsunoda" />

          <Line type="basic" dataKey="Bottas" stroke="#94132f" fill="#94132f" strokeWidth={2} animationDuration={1000} hide={botState} id="Bottas" />
          <Line type="basic" dataKey="Zhou" stroke="#94132f" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={zhoState} id="Zhou" />

          <Line type="basic" dataKey="Albon" stroke="#01154a" fill="#01154a" strokeWidth={2} animationDuration={1000} hide={albState} id="Albon" />
          <Line type="basic" dataKey="Latifi" stroke="#01154a" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={latState} id="Latifi" />

          <Line type="basic" dataKey="Magnussen" stroke="#bababf" fill="#bababf" strokeWidth={2} animationDuration={1000} hide={magState} id="Magnussen" />
          <Line type="basic" dataKey="Schumacher" stroke="#bababf" strokeWidth={2} animationDuration={1000} strokeDasharray="8 3" hide={schState} id="Vettel" />

        </LineChart>

      </ResponsiveContainer>

      <div className="hide">
        <button className="hideBtn" onClick={hide}>Hide All</button>
      </div>

      <div className="btns">
        <button className="btn" onClick={() => { console.log("toggle"); setVerState(!verState); }}>Verstappen</button>
        <button className="btn" onClick={() => { console.log("toggle"); setPerState(!perState); }}>Perez</button>
        <button className="btn" onClick={() => { console.log("toggle"); setLecState(!lecState); }}>Leclerc</button>
        <button className="btn" onClick={() => { console.log("toggle"); setSaiState(!saiState); }}>Sainz</button>
        <button className="btn" onClick={() => { console.log("toggle"); setHamState(!hamState); }}>Hamilton</button>
        <button className="btn" onClick={() => { console.log("toggle"); setRusState(!rusState); }}>Russell</button>
        <button className="btn" onClick={() => { console.log("toggle"); setNorState(!norState); }}>Norris</button>
        <button className="btn" onClick={() => { console.log("toggle"); setRicState(!ricState); }}>Ricciardo</button>
        <button className="btn" onClick={() => { console.log("toggle"); setOcoState(!ocoState); }}>Ocon</button>
        <button className="btn" onClick={() => { console.log("toggle"); setAloState(!aloState); }}>Alonso</button>
        <button className="btn" onClick={() => { console.log("toggle"); setStrState(!strState); }}>Stroll</button>
        <button className="btn" onClick={() => { console.log("toggle"); setVetState(!vetState); }}>Vettel</button>
        <button className="btn" onClick={() => { console.log("toggle"); setGasState(!gasState); }}>Gasly</button>
        <button className="btn" onClick={() => { console.log("toggle"); setTsuState(!tsuState); }}>Tsunoda</button>
        <button className="btn" onClick={() => { console.log("toggle"); setBotState(!botState); }}>Bottas</button>
        <button className="btn" onClick={() => { console.log("toggle"); setZhoState(!zhoState); }}>Zhou</button>
        <button className="btn" onClick={() => { console.log("toggle"); setAlbState(!albState); }}>Albon</button>
        <button className="btn" onClick={() => { console.log("toggle"); setLatState(!latState); }}>Latifi</button>
        <button className="btn" onClick={() => { console.log("toggle"); setMagState(!magState); }}>Magnussen</button>
        <button className="btn" onClick={() => { console.log("toggle"); setSchState(!schState); }}>Schumacher</button>
      </div>


    </div >
  )
}