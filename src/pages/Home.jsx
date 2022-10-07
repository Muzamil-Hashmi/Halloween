import React from "react";
import Hallowin from "../component/element/Hallowin";
import Hero from "../component/element/Hero";
import Tooken from "../component/element/Tooken";
import Documents from "../component/element/Documents";
import Faqs from "../component/utils/Faqs";
import Card1 from "../component/element/Card1";
import Card2 from "../component/element/Card2";
import Card3 from "../component/element/Card3";
import Card4 from "../component/element/Card4";
import Card5 from "../component/element/Card5";
import Timeline from "../component/element/Timeline";
import Fq from "../component/utils/Fq";

export default function () {
  return (
    <>
      <Hero />
      <Hallowin />
      <Tooken />
      <Timeline/>
      {/* <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 /> */}

      <Documents />
      <Faqs />
    
    </>
  );
}
