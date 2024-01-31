import React from "react";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";
import Image from "next/image";
import './Credencial.css'

const Credencial = ({
  nombre,
  apellido,
  email,
  telefono,
  posicion,
  sector,
  businessAddress,
  setComponenteCredencial,
}) => {

  const router = useRouter();
  const generarCredencial = (e) => {
    e.preventDefault();
    const formulario = document.getElementById("credencialFinal");

    try {
      const elementosAOcultar = formulario.querySelectorAll("button");
      elementosAOcultar.forEach((elemento) => {
        elemento.style.display = "none";
      });

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
        });
    } finally {
      router.push("/");
    }
  };


  return (
    <div className="flex justify-center w-screen ">
      <form
        onSubmit={generarCredencial}
        id="credencialFinal"
        className="relative flex flex-col overflow-hidden rounded  bg-white  ">
        <section className="relative flex flex-row overflow-hidden rounded-lg border border-gray-100 p-4  bg-white ">
          <div className="relative h-1/2 w-full sm:full  lg:h-full lg:w-1/2 ">
            <Image alt="Welcome" src={sector.img} className="px-4 " />
          </div>
          <span className="absolute inset-y-4 right-1/2  w-0.5 bg-black  "></span>

          <div className="w-full px-4  sm:px-6  lg:w-1/2 lg:px-8  felx ">
            <div className="mx-auto max-w-lg text-center text-black">
              <h1 className="text-2xl font-bold sm:text-3xl">
                {nombre} {apellido} - {posicion}
              </h1>
              <div className="flex gap-4 justify-start my-2">
                <p className=" text-gray-500">
                  <strong className="text-black me-1">m.</strong>
                  {telefono}
                </p>
                <p className=" text-gray-500 ">
                  <strong className="text-black me-1">e.</strong>
                  {email}
                </p>
              </div>
            </div>

            <div>
              <p className=" text-gray-500 my-2">
                <strong className="text-black me-1">w.</strong>
                {sector.mail}
              </p>
            </div>

            <div>
              <p className=" text-gray-500 my-2">
                <strong className="text-black me-1">a.</strong>
                {businessAddress}
              </p>
            </div>
          </div>
        </section>{" "}
        <div>
          <p className=" text-gray-500 m-4 min-w-96">
            This email and any fies transmitted with it are confidential and
            intended solely for the use of the Individual or entity to whom they
            are addressed. If you have received this email in error please
            notify the system manager This message may contain confidential
            information and is intended only for the Individual named, if vou
            are not the named addresses you should not disseminate, ostribute or
            copy this e-mail
          </p>
          <div className="m-4 ">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white mx-2">
              Download
            </button>
            <button
              onClick={setComponenteCredencial}
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Credencial;
