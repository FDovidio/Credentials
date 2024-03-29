import React from "react";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Credencial.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Credencial = ({
  nombre,
  apellido,
  email,
  telefono,
  posicion,
  sector,
  web,
  businessAddress,
  setComponenteCredencial,
}) => {
  const router = useRouter();
  const generarCredencial =  (e) => {
    e.preventDefault();
    const formulario = document.getElementById("credencial")
    formulario.id= "credencialFinal"

    try {
  ;
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
      formulario.id = "credencial";
      router.push("/")
      router.refresh
      ;
    }
  };

  return (
    <div className="flex justify-center w-screen  flex-col items-center  mt-6">
      <div className="m-4 ">
        <button
          onClick={generarCredencial}
          className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mx-2 ">
          Download
        </button>
        <button
          onClick={() => setComponenteCredencial(false)}
          className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
          Edit
        </button>
      </div>
      <form
        id="credencial"
        className="relative flex flex-col  rounded   bg-white  mx-4  min-w-72 max-w-5xl">
        <div className="">
          <section className="relative flex flex-row overflow-hidden rounded-lg border border-gray-100 p-4  bg-white ">
            <div
              className="relative h-full  sm:full  lg:h-full  "
              id="imagenLogo">
              <Image
                alt="Welcome"
                src={sector.img}
                className="px-4 min-w-xs max-w-sm "
              />
            </div>
            <span
              className=" lg:right-1/3 inset-y-4 right-1/2  w-0.5  "
              style={{ backgroundColor: sector.color }}></span>

            <div className="w-full h-full ps-2 pb-2 lg:w-1/2    flex flex-col items-start justify-start ">
              <div className=" max-w-lg text-center text-black text-nowrap flex flex-col items-start justify-start ">
                <div className="flex min-w-full flex-row whitespace-nowrap">
                  <h1
                    className="text-2xl font-bold  mb-2    "
                    style={{ color: sector.color }}>
                    {nombre} {apellido}
                  </h1>
                  <h1 className="text-2xl font-bold  text-gray-500 ms-2 ">
                    - {posicion}
                  </h1>
                </div>
                <div className="flex gap-4 justify-start ">
                  <p className=" text-gray-500 text-2xl">
                    <strong
                      className="text-black me-1 font-normal "
                      style={{ color: sector.color }}>
                      m.
                    </strong>
                    {telefono}
                  </p>
                  <p className=" text-gray-500 text-2xl">
                    <strong
                      className="text-black me-1 font-normal"
                      style={{ color: sector.color }}>
                      e.
                    </strong>
                    {email}
                  </p>
                </div>
              </div>

              <div>
                <p className=" text-gray-500 text-2xl">
                  <strong
                    className="text-black me-1 font-normal"
                    style={{ color: sector.color }}>
                    w.
                  </strong>
                  {web}
                </p>
              </div>

              <div>
                <p className=" text-gray-500 text-2xl">
                  <strong
                    className="text-black me-1 font-normal"
                    style={{ color: sector.color }}>
                    a.
                  </strong>
                  {businessAddress}
                </p>
              </div>
              <div className="w-full flex justify-start mt-4 gap-4">
                <a href={sector.ig} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-black text-2xl" />
                </a>
                <a
                  href={sector.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn className="text-black text-2xl" />
                </a>
                <a href={sector.fb} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-black text-2xl" />
                </a>
              </div>
            </div>
          </section>{" "}
          <div>
            <p className=" text-gray-500 m-4 min-w-96 text-xl">
              This email and any fies transmitted with it are confidential and
              intended solely for the use of the Individual or entity to whom
              they are addressed. If you have received this email in error
              please notify the system manager This message may contain
              confidential information and is intended only for the Individual
              named, if vou are not the named addresses you should not
              disseminate, ostribute or copy this e-mail
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Credencial;
