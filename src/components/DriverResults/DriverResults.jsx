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

  const [defaultColor, setDefaultColor] = useState(true);
  const [mode, setMode] = useState("Dark");

  const redbull = "#1f2fff";
  const ferrari = "#ff3f3f";
  const mercedes = "#3fef9f";
  const mclaren = "#ffaf0f";
  const alpine = "#4f9fff";
  const astonMartin = "#1f6f3f";
  const alphaTauri = "#6f7f8f";
  const alfaRomeo = "#8f2f3f";
  const williams = "#3f4f7f";
  const haas = "#bfbfbf";

  const lineWidth = 3;
  const time = 2100;

  return (
    <div className="main__div__DriverResults">
      <h1>Drivers Results 2022</h1>
      <ResponsiveContainer aspect={3.7} className='responsive__container'>
        <LineChart
          data={data}
          className="lineChart"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="raceCode" />
          <YAxis reversed={true} domain={[1, 20]} scale="linear" />
          <Tooltip isAnimationActive={false} />

          <Line type="basic" dataKey="Verstappen" stroke={redbull} fill={redbull} strokeWidth={lineWidth} animationDuration={time} hide={verState} />
          <Line type="basic" dataKey="Pérez" stroke={redbull} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={perState} />

          <Line type="basic" dataKey="Leclerc" stroke={ferrari} fill={ferrari} strokeWidth={lineWidth} animationDuration={time} hide={lecState} />
          <Line type="basic" dataKey="Sainz" stroke={ferrari} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={saiState} />

          <Line type="basic" dataKey="Hamilton" stroke={mercedes} fill={mercedes} strokeWidth={lineWidth} animationDuration={time} hide={hamState} />
          <Line type="basic" dataKey="Russell" stroke={mercedes} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={rusState} />

          <Line type="basic" dataKey="Norris" stroke={mclaren} fill={mclaren} strokeWidth={lineWidth} animationDuration={time} hide={norState} />
          <Line type="basic" dataKey="Ricciardo" stroke={mclaren} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={ricState} />

          <Line type="basic" dataKey="Ocon" stroke={alpine} fill={alpine} strokeWidth={lineWidth} animationDuration={time} hide={ocoState} id="Ocon" />
          <Line type="basic" dataKey="Alonso" stroke={alpine} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={aloState} />

          <Line type="basic" dataKey="Stroll" stroke={astonMartin} fill={astonMartin} strokeWidth={lineWidth} animationDuration={time} hide={strState} />
          <Line type="basic" dataKey="Vettel" stroke={astonMartin} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={vetState} />

          <Line type="basic" dataKey="Gasly" stroke={alphaTauri} fill={alphaTauri} strokeWidth={lineWidth} animationDuration={time} hide={gasState} />
          <Line type="basic" dataKey="Tsunoda" stroke={alphaTauri} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={tsuState} />

          <Line type="basic" dataKey="Bottas" stroke={alfaRomeo} fill={alfaRomeo} strokeWidth={lineWidth} animationDuration={time} hide={botState} />
          <Line type="basic" dataKey="Zhou" stroke={alfaRomeo} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={zhoState} />

          <Line type="basic" dataKey="Albon" stroke={williams} fill={williams} strokeWidth={lineWidth} animationDuration={time} hide={albState} />
          <Line type="basic" dataKey="Latifi" stroke={williams} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={latState} />

          <Line type="basic" dataKey="Magnussen" stroke={haas} fill={haas} strokeWidth={lineWidth} animationDuration={time} hide={magState} />
          <Line type="basic" dataKey="Schumacher" stroke={haas} strokeWidth={lineWidth} animationDuration={time} strokeDasharray="8 3" hide={schState} />

        </LineChart>

      </ResponsiveContainer>

      <div className="hide">
        <button className="hideBtn" style={{ border: `solid 1px #333` }} onClick={hide}>Clear</button>
        <button
          className="hideBtn" style={{ border: `solid 1px #333` }}
          id="colors"
          onClick={() => {

            if (defaultColor) {
              document.documentElement.style.setProperty('--bG-c', '#000');
              document.documentElement.style.setProperty('--text', '#fff');
              document.documentElement.style.setProperty('--btn-bG-c', '#818181');
              setMode("Light");
              setDefaultColor(!defaultColor);
            } else {
              document.documentElement.style.setProperty('--bG-c', '#fff');
              document.documentElement.style.setProperty('--text', '#000');
              document.documentElement.style.setProperty('--btn-bG-c', '#d1d1d1');
              setMode("Dark");
              setDefaultColor(!defaultColor);
            }

          }}
        >
          {mode}
        </button>
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