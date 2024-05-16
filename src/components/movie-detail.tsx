import React from 'react';
import { Button } from "@material-tailwind/react";
import Link from 'next/link';

interface MovieCardProps {
  id : string;
  title : string;
  year : string;
  genre : string;
  image : string;
  sinopsis : string;
}

export function MovieDetail({ id, title, year, genre, image }: MovieCardProps) {
  return (
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-4"> <div class="md:w-1/3 md:shrink-0">
        <img
          src={image}
          alt={title}
          class="w-full rounded-lg shadow-md object-cover"
        />
      </div>
        <div class="md:w-2/3">
          <h1 class="text-3xl font-bold mb-4">{title}</h1>
          <div class="flex items-center mb-2">
            <p class="text-gray-700 mr-2">Año: {year}</p>
            <div class="inline-flex items-center text-sm text-gray-500">
              <span>{genre}</span>
            </div>
          </div>
          <p class="text-gray-700 mb-4">{sinopsis}</p>
        </div>
      </div>
      </div>
  );
};

export default MovieDetail;
