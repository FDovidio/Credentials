import React from "react";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";

const Credencial = ({
  nombre,
  apellido,
  email,
  telefono,
  sector,
  miniatura,
  setComponenteCredencial,
}) => {
  const router = useRouter();
  const generarCredencial = (e) => {
    e.preventDefault()
    const formulario = document.getElementById("credencialFinal");

    try {
      const elementosAOcultar = formulario.querySelectorAll("button");
      elementosAOcultar.forEach((elemento) => {
        elemento.style.display = "none";
      })

      html2canvas(formulario)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");

          // Crear un enlace temporal y simular un clic para descargar la imagen
          const enlaceDescarga = document.createElement("a");
          enlaceDescarga.href = imgData;
          enlaceDescarga.download = "credencial.png";
          enlaceDescarga.click();
        })
        .catch((error) => {
          console.error("Error al generar la imagen:", error);
        })
    } finally {
     
        router.push('/')
    

    }
  };
  return (
    <div className="flex justify-start items-center h-screen flex-col m-6">
      <form
        
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white  "
        id="credencialFinal">
        <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 "></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {nombre} {apellido}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">{sector}</p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="miniatura"
              src={miniatura}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">{sector}</dt>
            <dd className="text-xs text-gray-500">Sector</dd>
          </div>
        </dl>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">{email}</dt>
            <dd className="text-xs text-gray-500">Email</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">{telefono}</dt>
            <dd className="text-xs text-gray-500">Phone</dd>
          </div>
        </dl>

        <div className="flex mt- gap-2">
          <button
            onClick={(e) => generarCredencial(e)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Download
          </button>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={()=> setComponenteCredencial(false)}>
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Credencial;
