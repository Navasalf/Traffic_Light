import React, { useState } from 'react';

export function TrafficLight() {
  const [boton1, setBoton1] = useState(false);
  const [boton2, setBoton2] = useState(false);
  const [boton3, setBoton3] = useState(false);
  const [boton4, setboton4] = useState(0);
  const [boton5, setboton5] = useState(0);


  const Boton1Click = () => {
    setBoton1(true);
    setBoton2(false);
    setBoton3(false);
    setboton4(false)
  };

  const Boton2Click = () => {
    setBoton1(false);
    setBoton2(true);
    setBoton3(false);
    setboton4(false)
  };

  const Boton3Click = () => {
    setBoton1(false);
    setBoton2(false);
    setBoton3(true);
    setboton4(false)
  };
  const Boton4Click = () => {
    setBoton1(false);
    setBoton2(false);
    setBoton3(false);
    setboton4(true)

    const option1 = document.querySelector('.button1').style.backgroundColor = 'orange';
    const option2 = document.querySelector('.button2').style.backgroundColor = 'orange';
    const option3 = document.querySelector('.button3').style.backgroundColor = 'orange';
  }

  const Boton5Click = () => {
    const boton = document.querySelector(`.button${boton5}`);

    if (boton === document.querySelector('.button1')) {
      setBoton1(false);
      setBoton2(true);
    } else if (boton === document.querySelector('.button2')) {
      setBoton2(false);
      setBoton3(true);
    } else if (boton === document.querySelector('.button3')) {
      setBoton3(false);
      setBoton1(true);
    }
    setboton5((boton5 + 1) % 4);
  };

  return (
    <div className='container'>
      <div className='base'></div>
      <div className='boddy'>
        <div className='light'>
          <button
            style={{
              backgroundColor: boton1 ? 'green' : 'hsl(95, 88%, 77%)',
              boxShadow: boton1 ? '0px 0px 12px 12px hsl(115, 86%, 70%)' : 'none',
            }}
            className='button1' onClick={Boton1Click} ></button>
        </div>
        <div className='light'>
          <button
            style={{
              backgroundColor: boton2 ? 'yellow' : 'hsl(62, 86%, 78%)',
              boxShadow: boton2 ? '0px 0px 12px 12px hsl(65, 95%, 70%)' : 'none',
            }} className='button2' onClick={Boton2Click} ></button>
        </div>
        <div className='light'>
          <button
            style={{
              backgroundColor: boton3 ? 'red' : 'hsl(26, 84%, 78%)',
              boxShadow: boton3 ? '0px 0px 12px 12px hsl(0, 90%, 64%)' : 'none',
            }} className='button3' onClick={Boton3Click} ></button>
        </div>
      </div>
      <div className='secondsbutton'>
        <button
          className='button4' onClick={Boton4Click} type='text'  >CLICK</button>
        <button
          className='button5' onClick={Boton5Click} type='text'  >CLICK</button>
      </div>
    </div>
  );
}