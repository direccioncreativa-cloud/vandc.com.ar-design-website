import { redirect } from "next/navigation";

export default function ElegirsePage() {
  redirect("/obras?coleccion=elegirse");
}
