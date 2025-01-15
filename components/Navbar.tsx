
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import{ Button} from "@/components/ui/button"; // Adjust the import based on your project structure

const items = [
  {
    title: "Top Rated",
    param: "fetchTopRated",
  },
  {
    title: "Top Trending",
    param: "fetchTrending",
  },
];

export default function Navbar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarContent />
    </Suspense>
  );
}

function NavbarContent() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="bg-rose-500 flex justify-center items-center gap-x-4">
      {items.map((item) => (
        <Button
          className={` ${genre === item.param ? "bg-rose-500" : ""}`}
          key={item.title}
        >
          <Link href={`/?genre=${item.param}`}>{item.title}</Link>
        </Button>
      ))}
    </div>
  );
}