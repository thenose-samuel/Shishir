import star from "../../public/Star.svg";

import Image from "next/image";

export default function Banner() {
  return (
    <div class="relative flex overflow-x-hidden overflow-hidden bg-[#186B80] text-white font-bernier">
      <div class="animate-marquee whitespace-nowrap flex">
        <span class="mx-4 text-2xl">NIT</span>
        <Image src={star} width={20} height={20}></Image>
        <span class="mx-4 text-2xl">MEGHALAYA</span>
        <Image src={star} width={20} height={20}></Image>
        <span class="mx-4 text-2xl">PRESENTS</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">SHISHIR</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">2024</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">1st - 3rd</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">April</span>
      </div>

      <div class="absolute top-0 animate-marquee2 flex whitespace-nowrap">
        <span class="mx-4 text-2xl">NIT</span>
        <Image src={star} width={20} height={20}></Image>
        <span class="mx-4 text-2xl">MEGHALAYA</span>
        <Image src={star} width={20} height={20}></Image>
        <span class="mx-4 text-2xl">PRESENTS</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">SHISHIR</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">2024</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">1st - 3rd</span>
        <Image src={star} width={20} height={20}></Image>

        <span class="mx-4 text-2xl">April</span>
      </div>
    </div>
  );
}
