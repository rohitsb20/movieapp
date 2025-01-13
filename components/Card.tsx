import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

export default function MovieCard({result}:{result:any}) {
  return (
    <div>
      <Card>
        <CardContent>
          <Link href={`/movie/${result.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                result.backdrop_path || result.poster_path
              }`}
              alt={result.title}
                width={300}
                height={300}
            ></Image>
          </Link>
        </CardContent>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
