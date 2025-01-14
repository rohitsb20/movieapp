import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import { Card as UICard, CardContent, CardHeader } from "@/components/ui/card";

export default function Card({ result }:{result:any}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-rose-500 
    sm:shadow-md rounded-lg sm:border sm:border-rose-500 sm:m-2 transition-shadow duration-200">
      <UICard>
        <CardHeader>
          <Link href={`/movie/${result.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
              }`}
              alt={result.title}
              width={500}
              height={300}
              className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
            ></Image>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="p-2 flex flex-col justify-center ">
            <p className="line-clamp-2 text-md">{result.overview}</p>
            <h2 className="text-lg font-bold truncate">
              {result.title || result.name}
            </h2>
            <p className="flex items-center justify-center">
              {result.release_date || result.first_air_date}
              <FiThumbsUp className="h-5 mr-1 ml-3" />
              {result.vote_count}
            </p>
          </div>
        </CardContent>
      </UICard>
      
    </div>
  );
}
