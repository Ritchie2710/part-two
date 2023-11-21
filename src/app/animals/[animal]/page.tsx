type animalParam = { params: { animal: string } };
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Ritchies favourite Animals - ${PathParamsContext.animals}",
    description: "Ritchies Favourite animals"[0],
  };
}

export default function page({ params }: animalParam) {
  return (
    <div>
      <h2>this is a dynamoic route</h2>
    </div>
  );
}
