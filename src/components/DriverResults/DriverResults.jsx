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

  const redbull = "#0210cf";
  const ferrari = "#ff3333";
  const mercedes = "#3bed9a";
  const mclaren = "#faaa00";
  const alpine = "#4184f0";
  const astonMartin = "#07542b";
  const alphaTauri = "#647482";
  const alfaRomeo = "#94132f";
  const williams = "#01154a";
  const haas = "#bababf";
  const lineWidth = 3;

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

          <Line type="basic" dataKey="Verstappen" stroke={redbull} fill={redbull} strokeWidth={lineWidth} animationDuration={1000} hide={verState} />
          <Line type="basic" dataKey="Pérez" stroke={redbull} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={perState} />

          <Line type="basic" dataKey="Leclerc" stroke={ferrari} fill={ferrari} strokeWidth={lineWidth} animationDuration={1000} hide={lecState} />
          <Line type="basic" dataKey="Sainz" stroke={ferrari} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={saiState} />

          <Line type="basic" dataKey="Hamilton" stroke={mercedes} fill={mercedes} strokeWidth={lineWidth} animationDuration={1000} hide={hamState} />
          <Line type="basic" dataKey="Russell" stroke={mercedes} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={rusState} />

          <Line type="basic" dataKey="Norris" stroke={mclaren} fill={mclaren} strokeWidth={lineWidth} animationDuration={1000} hide={norState} />
          <Line type="basic" dataKey="Ricciardo" stroke={mclaren} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={ricState} />

          <Line type="basic" dataKey="Ocon" stroke={alpine} fill={alpine} strokeWidth={lineWidth} animationDuration={1000} hide={ocoState} id="Ocon" />
          <Line type="basic" dataKey="Alonso" stroke={alpine} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={aloState} />

          <Line type="basic" dataKey="Stroll" stroke={astonMartin} fill={astonMartin} strokeWidth={lineWidth} animationDuration={1000} hide={strState} />
          <Line type="basic" dataKey="Vettel" stroke={astonMartin} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={vetState} />

          <Line type="basic" dataKey="Gasly" stroke={alphaTauri} fill={alphaTauri} strokeWidth={lineWidth} animationDuration={1000} hide={gasState} />
          <Line type="basic" dataKey="Tsunoda" stroke={alphaTauri} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={tsuState} />

          <Line type="basic" dataKey="Bottas" stroke={alfaRomeo} fill={alfaRomeo} strokeWidth={lineWidth} animationDuration={1000} hide={botState} />
          <Line type="basic" dataKey="Zhou" stroke={alfaRomeo} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={zhoState} />

          <Line type="basic" dataKey="Albon" stroke={williams} fill={williams} strokeWidth={lineWidth} animationDuration={1000} hide={albState} />
          <Line type="basic" dataKey="Latifi" stroke={williams} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={latState} />

          <Line type="basic" dataKey="Magnussen" stroke={haas} fill={haas} strokeWidth={lineWidth} animationDuration={1000} hide={magState} />
          <Line type="basic" dataKey="Schumacher" stroke={haas} strokeWidth={lineWidth} animationDuration={1000} strokeDasharray="8 3" hide={schState} />

        </LineChart>

      </ResponsiveContainer>

      <div className="hide">
        <button className="hideBtn"style={{ border: `solid 1px #000` }}  onClick={hide}>Hide All</button>
      </div>

      <div className="btns">
        <button className="btn" style={{ border: `solid 1px ${redbull}` }} onClick={() => { console.log("toggle"); setVerState(!verState); }}>Verstappen</button>
        <button className="btn" style={{ border: `solid 1px ${redbull}` }} onClick={() => { console.log("toggle"); setPerState(!perState); }}>Perez</button>
        <button className="btn" style={{ border: `solid 1px ${ferrari}` }} onClick={() => { console.log("toggle"); setLecState(!lecState); }}>Leclerc</button>
        <button className="btn" style={{ border: `solid 1px ${ferrari}` }} onClick={() => { console.log("toggle"); setSaiState(!saiState); }}>Sainz</button>
        <button className="btn" style={{ border: `solid 1px ${mercedes}` }} onClick={() => { console.log("toggle"); setHamState(!hamState); }}>Hamilton</button>
        <button className="btn" style={{ border: `solid 1px ${mercedes}` }} onClick={() => { console.log("toggle"); setRusState(!rusState); }}>Russell</button>
        <button className="btn" style={{ border: `solid 1px ${mclaren}` }} onClick={() => { console.log("toggle"); setNorState(!norState); }}>Norris</button>
        <button className="btn" style={{ border: `solid 1px ${mclaren}` }} onClick={() => { console.log("toggle"); setRicState(!ricState); }}>Ricciardo</button>
        <button className="btn" style={{ border: `solid 1px ${alpine}` }} onClick={() => { console.log("toggle"); setOcoState(!ocoState); }}>Ocon</button>
        <button className="btn" style={{ border: `solid 1px ${alpine}` }} onClick={() => { console.log("toggle"); setAloState(!aloState); }}>Alonso</button>
        <button className="btn" style={{ border: `solid 1px ${astonMartin}` }} onClick={() => { console.log("toggle"); setStrState(!strState); }}>Stroll</button>
        <button className="btn" style={{ border: `solid 1px ${astonMartin}` }} onClick={() => { console.log("toggle"); setVetState(!vetState); }}>Vettel</button>
        <button className="btn" style={{ border: `solid 1px ${alphaTauri}` }} onClick={() => { console.log("toggle"); setGasState(!gasState); }}>Gasly</button>
        <button className="btn" style={{ border: `solid 1px ${alphaTauri}` }} onClick={() => { console.log("toggle"); setTsuState(!tsuState); }}>Tsunoda</button>
        <button className="btn" style={{ border: `solid 1px ${alfaRomeo}` }} onClick={() => { console.log("toggle"); setBotState(!botState); }}>Bottas</button>
        <button className="btn" style={{ border: `solid 1px ${alfaRomeo}` }} onClick={() => { console.log("toggle"); setZhoState(!zhoState); }}>Zhou</button>
        <button className="btn" style={{ border: `solid 1px ${williams}` }} onClick={() => { console.log("toggle"); setAlbState(!albState); }}>Albon</button>
        <button className="btn" style={{ border: `solid 1px ${williams}` }} onClick={() => { console.log("toggle"); setLatState(!latState); }}>Latifi</button>
        <button className="btn" style={{ border: `solid 1px ${haas}` }} onClick={() => { console.log("toggle"); setMagState(!magState); }}>Magnussen</button>
        <button className="btn" style={{ border: `solid 1px ${haas}` }} onClick={() => { console.log("toggle"); setSchState(!schState); }}>Schumacher</button>
      </div>


    </div >
  )
}