"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[35rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Libélula Soft <br /> Prueba Front-END
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Dannyel Alulema
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              App de Películas
            </Typography>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Hero;
