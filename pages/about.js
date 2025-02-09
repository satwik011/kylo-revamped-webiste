import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Experience from "../components/Experience";
import TeamHome from "../components/TeamHome";
import Project from "../components/Project";
import BlogHome from "../components/BlogHome";
import LetsWork from "../components/LetsWork";
import Footer from "../components/Footer";
import WhatWePromise from "../components/WhatWePromise";

const AboutPage = () => {
  return (
    <Layout pageTitle="Kylo Apps | Business & Digital Agency">
      <PageHeader title="About us" crumbTitle="About us" />
      <Header
        heroLogo="/assets/images/logo/kylo-image.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <About
          subTitle="We are Kylo Apps"
          titleFirst="We are a visionary team  "
          titleSecond="helping companies across all industries and countries expand their businesses and build software through powerful engineering and execution."
        />
        <Experience extraClass="mt-70" />
        <WhatWePromise />
        <TeamHome subTitle="Team Members" />
        <Project extraClass="project__area-pt" subTitle="Get Started" />
        <BlogHome extraClass="pt-110" />
        <LetsWork />
      </main>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
