import Image from "next/image";
import Link from "next/link";

type CollectionCardProps = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export function CollectionCard({ title, subtitle, image, href }: CollectionCardProps) {
  return (
    <Link className="group block" href={href}>
      <div className="relative aspect-[0.707] overflow-hidden border border-[#c99b63]/70 bg-[#f5ece4] p-2 transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
        <Image
          alt={title}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 28vw, 86vw"
          src={image}
        />
      </div>
      <h3 className="mt-7 font-serif text-[38px] font-[520] leading-none tracking-[-0.03em] text-[#744247]">{title}</h3>
      <p className="mt-3 text-lg text-[#8a5d5f]">{subtitle}</p>
    </Link>
  );
}
