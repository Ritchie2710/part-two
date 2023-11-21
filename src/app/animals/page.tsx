import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourite animals",
  description: "A list of my favourite animals",
};

type animalsSearchQuery = {
  sortBy: string;
};

type animalsType = {
  Type: string;
  id: number;
  source: string;
};

let animals: animalsType[] = [
  {
    Type: "Red Panda",
    id: 1,
    source: "/images/Red-Panda.jpg",
  },
  {
    Type: "Tiger",
    id: 2,
    source: "/images/tiger.jpg",
  },
  {
    Type: "Penguin",
    id: 3,
    source: "/images/penguin.jpg",
  },
  {
    Type: "Panda",
    id: 4,
    source: "/images/panda.jpg",
  },
  {
    Type: "Meerkat",
    id: 5,
    source: "/images/meerkat.jpg",
  },
  {
    Type: "Sloth",
    id: 6,
    source: "/images/sloth.jpg",
  },
  {
    Type: "Orca",
    id: 7,
    source: "/images/orca.jpg",
  },
  {
    Type: "LLama",
    id: 8,
    source: "/images/llama.jpg",
  },
  {
    Type: "Dog",
    id: 9,
    source: "/images/lab.jpeg",
  },
  {
    Type: "Otters",
    id: 10,
    source: "/images/otter.jpg",
  },
];

function compareAnimals(a: animalsType, b: animalsType) {
  if (a.Type < b.Type) {
    return -1;
  } else if (a.Type > b.Type) {
    return 1;
  } else {
    return 0;
  }
}
export default function Page({
  searchParams,
}: {
  searchParams: animalsSearchQuery;
}) {
  let sortedAnimals = [...animals];

  if (searchParams.sortBy == "asc") {
    sortedAnimals.sort(compareAnimals);
  } else if (searchParams.sortBy == "desc") {
    animals.sort(compareAnimals).reverse();
  }
  return (
    <div>
      <Link href="/">About me</Link>
      <h4>My favourite animals </h4>
      <br />
      <Link href="/animals">remove the sort</Link>
      <br />
      <Link href="/animals?sortBy=asc">Sort by ascending </Link>
      <br />
      <Link href="/animals?sortBy=desc">Sort by ascending </Link>
      <br />
      <br />
      <br />
      {sortedAnimals.map((animal) => {
        return (
          <div key={animal.id}>
            <br />
            <Link href={`/animals/${animal.Type.toLowerCase()}`}>
              {animal.Type}
              <img
                className="w-24 h-20 md:w-40 md:h-auto md:rounded-xl rounded-full "
                src={animal.source}
                alt=""
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
