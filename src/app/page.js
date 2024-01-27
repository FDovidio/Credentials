'use client'
import { useState } from 'react';
import html2canvas from 'html2canvas';
import Credencial from "./components/Credencial"

export default function Home() {
 const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sector, setSector] = useState('');
  const [imagen, setImagen] = useState(null);
  const [miniatura, setMiniatura] = useState(null);
const [componenteCredencial, setComponenteCredencial] = useState(false)
  

  const manejarCambioImagen = (evento) => {
    const archivo = evento.target.files[0];
    setImagen(archivo);

    // Crear miniatura redondeada de la imagen
    const reader = new FileReader();
    reader.onloadend = () => {
      setMiniatura(reader.result);
    };
    reader.readAsDataURL(archivo);
  };

  const manejarEnvioFormulario = (evento) => {
    evento.preventDefault();

    // Lógica para enviar la información y la imagen (si es necesario)

    // Aquí puedes manejar la lógica para enviar la imagen, por ejemplo, a través de una solicitud HTTP.
    if (imagen) {
      // Lógica para enviar la imagen
      console.log('Imagen seleccionada:', imagen);

 setComponenteCredencial(true)
    }
  };



  return (
    <div>


<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
      inventore quaerat mollitia?
    </p>
  {componenteCredencial ? (
        <Credencial
          nombre={nombre}
          apellido={apellido}
          email={email}
          telefono={telefono}
          sector={sector}
          miniatura={miniatura}
          setComponenteCredencial={setComponenteCredencial}
        /> ) : (
  <div className='flex justify-start items-center h-screen flex-col m-4' >

<form
   id="formularioConImagen"
        onSubmit={manejarEnvioFormulario}
  className="relative block  rounded-lg border border-gray-100 sm:p-6 lg:p-8 bg-white text-black "
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>


    <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
        <label className="block">
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-2 p-2 border rounded w-full"
            required
          />
        </label>
    </div>

  
        <div className="hidden sm:block sm:shrink-0">
      <div className="mt-4">
        
          <img
            src={miniatura}
            
            className="h-16 w-16 rounded-lg object-cover shadow-sm border-black"
          />
        
      </div>
    </div>
</div>

        <label className="block">
          Apellido:
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="mt-2 p-2 border rounded w-full"
            required
          />
        </label>

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
          Teléfono:
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="mt-2 p-2 border rounded w-full"
            required
          />
        </label>

        <label className="block">
          Sector:
          <input
            type="text"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="mt-2 p-2 border rounded w-full"
            required
          />
        </label>
{!miniatura &&
        <label className="block my-2 ">
          Subir Foto:
          <input
            type="file"
            onChange={manejarCambioImagen}
            accept="image/*"
            className="mt-2 p-2"
          />
        </label>
        
}
        <div className='mt-2'>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4  rounded hover:bg-blue-600"
        >
          Enviar
        </button>
</div>
</form>
</div>
)
}
   
  </div>
</div>

    
    
</div>
  )
}
