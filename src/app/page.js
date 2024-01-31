'use client'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Credencial from "./components/Credencial";
import groupImg from "./multimedia/Group.png";
import sportainmentImg from "./multimedia/Sportainment.png";
import mediaImg from "./multimedia/Media.png";

export default function Home() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sector, setSector] = useState({});
  const [logo, setLogo] = useState(null);
  const [businessAddress, setBusinessAddress] = useState('');
  const [posicion, setPosicion] = useState(''); 
  const [componenteCredencial, setComponenteCredencial] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 630 });

  const sectores = [
    { id: 1, value: 'VANQUISH GROUP', label: 'VANQUISH GROUP', img: groupImg },
    { id: 2, value: 'VANQUISH SPORTAIMENT', label: 'VANQUISH SPORTAIMENT', img: sportainmentImg },
    { id: 3, value: 'VANQUISH MEDIA', label: 'VANQUISH MEDIA', img: mediaImg },
  ];

  const manejarEnvioFormulario = (evento) => {
    evento.preventDefault();
    setComponenteCredencial(true);
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
    // Este efecto se ejecutará cuando el estado de 'sector' cambie
    console.log("Nuevo valor de sector:", sector);

    if (sector) {
      console.log("Logo en Credencial:", sector.img);
      setLogo(sector.img);
    } else {
      console.error("Sector no encontrado");
    }
  }, [sector]);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg flex flex-col justify-center items-center w-screen">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Create a credential
          </p>
        
          {componenteCredencial ? (
            <Credencial
              nombre={nombre}
              apellido={apellido}
              email={email}
              telefono={telefono}
              businessAddress={businessAddress}
              sector={sector}
              posicion={posicion}
              logo={logo}
              setComponenteCredencial={setComponenteCredencial}
            />
          ) : (
            <div className='flex justify-start items-center h-screen flex-col m-4' >
              <form
                id="formularioConImagen"
                onSubmit={manejarEnvioFormulario}
                className="relative block  rounded-lg border border-gray-100 sm:p-8 p-8 bg-white text-black  "
              >
                <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>
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
                <label className="block ">
                  Sector
                </label>
                <div className="mt-2">
                  <select
                    id="Sector"
                    name="Sector"
                    autoComplete={sector}
                    onChange={(e) => handleSector(e)}
                    className="mt-2 p-2 border rounded w-full">
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
                    className="bg-blue-500 text-white py-2 px-4  rounded hover:bg-blue-600"
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
