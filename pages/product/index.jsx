import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="flex h-screen">
      <div className="relative flex-1">
        <Image src="/images/f1.png" alt="" layout="fill" />
      </div>
      <div>
        <Title addClass="text-6xl">Good Pizza</Title>
        <span>$10</span>
        <p>
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaqueVeniam debitis quaerat officiis
          quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
          sed eaque
        </p>
        <div>
            <h4>Choose the size</h4>
            <div className="relative">
            <Image src="/images/f1.png"  alt=""   layout="fill"/>
            </div>
            <div className="relative">
            <Image src="/images/f1.png"  alt=""   layout="fill"/>
            </div>
            <div className="relative">
            <Image src="/images/f1.png"  alt=""   layout="fill"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
