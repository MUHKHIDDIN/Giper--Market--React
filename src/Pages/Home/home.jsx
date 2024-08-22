import React from "react";
import { Bunnor } from "../../Components/Bunnor";
import { Catalog } from "../../Pages/Catalog/catalog";
import { Phone } from "../../Components/Phones";
import { Ads } from "../../Components/Ads/ads";
import { ComputersProduct } from "../../Components/computers -Product/computers-product";
import { Brend } from "../../Components/Brend/brend";
export const Home = () => {
  return (
    <div className=" ">
      <section className="">
        <Bunnor />
      </section>
      <section className="">
        <Catalog />
      </section>
      <section className="">
        <Phone />
      </section>
      <section className="">
        <Ads />
      </section>
      <section className="">
        <Phone />
      </section>
      <section className="">
        <ComputersProduct />
      </section>
      <section className="">
        <Brend />
      </section>
    </div>
  );
};
