import { redirect } from "next/navigation";

export default function BlackCatCollectionPage() {
  redirect("/obras?coleccion=black-cat");
}
