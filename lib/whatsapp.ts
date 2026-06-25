const phone = "5491160008048";

export function whatsappLink(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
