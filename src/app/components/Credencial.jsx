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
  const generarCredencial = (e) => {
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
      
      router.push("/")
      router.refresh
      ;
    }
  };

  return (
    <div className="flex justify-center w-screen flex-col items-center  mt-6 ">
      <div className="m-4 ">
        <button
          onClick={generarCredencial}
          className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white mx-2">
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
        className="form  relative flex flex-col  rounded   bg-white  mx-4 lg:overflow-x-auto">
        <div className="">
          <section className="relative flex flex-row overflow-hidden rounded-lg border border-gray-100 p-4  bg-white ">
            <div className="relative h-1/2 w-full sm:full  lg:h-full lg:w-1/2 ">
              <Image alt="Welcome" src={sector.img} className="px-4 " />
            </div>
            <span
              className="lg:relative lg:right-1/3 inset-y-4 right-1/2  w-0.5 bg-black  "
              style={{ color: sector.color }}></span>

            <div className="w-full px-4 lg:w-1/2    flex flex-col gap-2">
              <div className=" max-w-lg text-center text-black ">
                <div className="flex justify-start">
                  <h1
                    className="text-xl font-bold  "
                    style={{ color: sector.color }}>
                    {nombre} {apellido} 
                  </h1>
                  <h1 className="text-xl font-bold  text-gray-500 ms-2">
                     - {posicion}
                  </h1>
                </div>
                <div className="flex gap-4 justify-start my-2">
                  <p className=" text-gray-500">
                    <strong
                      className="text-black me-1 font-normal "
                      style={{ color: sector.color }}>
                      m.
                    </strong>
                    {telefono}
                  </p>
                  <p className=" text-gray-500 ">
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
                <p className=" text-gray-500 my-2">
                  <strong
                    className="text-black me-1 font-normal"
                    style={{ color: sector.color }}>
                    w.
                  </strong>
                  {web}
                </p>
              </div>

              <div>
                <p className=" text-gray-500 my-2">
                  <strong
                    className="text-black me-1 font-normal"
                    style={{ color: sector.color }}>
                    a.
                  </strong>
                  {businessAddress}
                </p>
              </div>
              <div className="w-full flex justify-start   mt-10 gap-4">
                <a href={sector.ig}>
                  <FaInstagram className="text-black text-2xl" />
                </a>
                <a href={sector.linkedin}>
                  <FaLinkedinIn className="text-black text-2xl" />
                </a>
                <a href={sector.fb}>
                  <FaFacebook className="text-black text-2xl" />
                </a>
              </div>
            </div>
          </section>{" "}
          <div>
            <p className=" text-gray-500 m-4 min-w-96">
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
