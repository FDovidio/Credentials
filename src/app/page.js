'use client'
import { useState, useEffect } from 'react';
import Credencial from "./components/Credencial";
import groupImg from "./multimedia/Group.png";
import sportainmentImg from "./multimedia/Sportainment.png";
import mediaImg from "./multimedia/Media.png";
import Header from './components/Header'


export default function Home() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sector, setSector] = useState({});
  const [logo, setLogo] = useState(null);
  const [businessAddress, setBusinessAddress] = useState('');
  const [posicion, setPosicion] = useState(''); 
  const [web, setWeb] = useState ('')
  const [componenteCredencial, setComponenteCredencial] = useState(false);


  const sectores = [
    { id: 1, value: 'VANQUISH GROUP', label: 'VANQUISH GROUP', img: groupImg, ig:'https://www.instagram.com/letsvanquish', linkedin:'https://www.linkedin.com/company/letsvanquish/mycompany/', fb: 'https://www.facebook.com/%3Cusername%3E', color:"black"},
    { id: 2, value: 'VANQUISH SPORTAIMENT', label: 'VANQUISH SPORTAIMENT', img: sportainmentImg, ig:'https://www.instagram.com/letsvanquish', linkedin:'https://www.linkedin.com/company/letsvanquish/mycompany/', fb: 'https://www.facebook.com/%3Cusername%3E', color:"#eb0045" },
    { id: 3, value: 'VANQUISH MEDIA', label: 'VANQUISH MEDIA', img: mediaImg, ig:'https://www.instagram.com/vanquishmedia.productions', linkedin:'https://www.linkedin.com/company/vanquish-mediaok/', fb: 'https://www.facebook.com/%3Cusername%3E', color:'#4468f1' },
  ];

  const manejarEnvioFormulario = (evento) => {
    evento.preventDefault();
    if(sector.value === 'VANQUISH GROUP' || 'VANQUISH SPORTAIMENT' || 'VANQUISH MEDIA'  ){
    setComponenteCredencial(true);
    }
  };

  const handleSector = (e) => {
    e.preventDefault();

    try {
      // Intenta establecer el sector
      const sectorElegido = sectores.find(
        (sectorObj) => sectorObj.value === e.target.value
      );
      setSector(sectorElegido);
    } catch (error) {
      console.error("Error al establecer el sector", error);
    }
  };

  useEffect(() => {
   
    if (sector) {

      setLogo(sector.img);
    } else {
      console.error("Sector no encontrado");
    }
  }, [sector]);

  return (

    <div className=''>
            <header className=''>
        <Header/>
      </header>
      
      <div className=" px-4 py-10 sm:px-6  lg:px-8 "
      id='page'>
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl ">
            {componenteCredencial ? ("Your credential are ready to download") : ("Get started today")}
            </h1>
          {!componenteCredencial && <p className="mx-auto my-4  text-center text-gray-500">
            Create a credential
          </p>}
        
          {componenteCredencial ? (
            <Credencial
              nombre={nombre}
              apellido={apellido}
              email={email}
              telefono={telefono}
              businessAddress={businessAddress}
              sector={sector}
              posicion={posicion}
              web={web}
              logo={logo}
              setComponenteCredencial={setComponenteCredencial}
            />
          ) : (
            <div className='flex justify-start items-center  flex-col mb-4' >
              <form
                id="formularioConImagen"
                onSubmit={manejarEnvioFormulario}
                className="relative block  rounded-lg border border-gray-100 sm:p-8 p-8 bg-white text-black  "
              >

                <div>
                  <label className="block">
                    Name:
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="mt-2 p-2 border rounded w-full"
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  Last Name:
                  <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    required
                  />
                </label>

          <div>
                  <label className="block">
                    Position:
                    <input
                      type="text"
                      value={posicion}
                      onChange={(e) => setPosicion(e.target.value)}
                      className="mt-2 p-2 border rounded w-full"
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  Email:
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    required
                  />
                </label>
                <label className="block">
                  Phone:
                  <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    required
                  />
                </label>
                <label className="block">
                  Business address:
                  <input
                    type="text"
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    required
                  />
                </label>
                                <label className="block">
                  Institutional Web:
                  <input
                    type="text"
                    value={web}
                    onChange={(e) => setWeb(e.target.value)}
                    className="mt-2 p-2 border rounded w-full"
                    required
                  />
                </label>
                <label className="block ">
                  Sector
                </label>
                <div className="mt-2">
                  <select
                    id="Sector"
                    name="Sector"
                    autoComplete={sector}
                    onChange={(e) => handleSector(e)}
                    className="mt-2 p-2 border rounded w-full"
                    required>
                      <option value="">Select a sector</option>
                    {sectores && 
                    
                    sectores.map((sector) => (
      
                      <option key={sector.id} value={sector.value}>

                        {sector.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='mt-2'>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4  rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
