import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SectionTitle from './SectionTitle';
import PortfolioTwoItem from './PortfolioTwoItem';

const PORTFOLIO_ALL = [
  {
    portfolioImg: "/assets/images/portfolio/p-1.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Zeta",
    portfolioText:
      "No more concerns about gas mileage, gasoline prices, insurance, or vehicle breakdowns! Zeta has made driving around cities more convenient for commuters, and it is rapidly increasing its reach to places such as Delhi-NCR. Customers enjoy greater control, privacy, and freedom thanks to Zeta's self-driving automobiles. With the Zeta app on your phone, you can book a self-drive automobile in whatever city you visit and feel right at home.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-2.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Xpay+",
    portfolioText:
      "A Fintech SAAS Platform offering Payment Solutions for Commercial Transport Industry & Corporates through prepaid loadable Rupay cards. Companies can manage fleet expenses, toll expenses, fuel expense and lending to transport companies.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-3.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "HealthDBi",
    portfolioText:
      "Leads Management Platform for healthcare industry in the United States. Companies can onboard and create teams and meticulously find leads from a database of more than 1 million records",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-4.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Joya",
    portfolioText:
      "DOne of the top companies in baby food products in Thailand selling D2C through their website and getting the customers onboarded for their subscriptions",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-5.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Flicksbuddy",
    portfolioText:
      "A social networking platform for Movies, TV show and Web Series fans to connect with each other. Not only can you rate and review all that you watch, but you also get to share and discuss with your friends and the Flicksbuddy community.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-6.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Hiloramart",
    portfolioText:
      "An e-commerce app that allows vendors to sell and advertise their items using short films. Users can post their favourite short videos and purchase items through the same app. Whereas sellers can sell and they can show their product advertisement.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-7.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Triponvo",
    portfolioText:
      "Plan your trip with real human beings. Travel experts can onboard and create itineraries for travellers from over 50+ destinations. Travellers can also schedule one on one sessions with travel experts",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-8.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Bachat Cards - Earnest",
    portfolioText:
      "Bachat cards is one stop destination for offers, vouchers and Reloadable cards, once loadable cards real time and use them anywhere online.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-9.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "ERP App",
    portfolioText:
      "Logic ERP App is designed to solve the challenges of Retail, Distribution and Manufacturing business that keeps entrepreneurs tied to their desks. LOGIC ERP has been designed for Apparel and Footwear, FMCG, F&B, Electronics & Telecommunication and Pharmaceutical businesses that need complete visibility over their entire organisational structure.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-10.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Cafe Express",
    portfolioText:
      "It' s a B2B project deals with retailer and wholeseller , in webstore where different type of campaing for different customer",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-11.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Mega Grain",
    portfolioText:
      "B2B where buyer can create negotiations and seller can bid for negotiation and buyer accept best offer .",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-12.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Flywise",
    portfolioText:
      "Flywise is India ' s best overseas education platform which unlike any traditional consultancies travel with you till you land your dream job in North America and Europe",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-13.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "iMoney",
    portfolioText:
      "iMoney wallet started its journey in July 2017 headquartered in New Delhi, India. Our strength lies in Digital Payments, Prepaid Cards, Cashback' s and Analytics. I Money Wallet is considered as one of the most vibrant start-ups among peers. It has attracted top talents in the past two years",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-14.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Keto India",
    portfolioText:
      "Keto India is India ’ s largest Ketogenic consulting company that helps clients better manage their weight loss, PCOS, diabetes and thyroid through a personalized Ketogenic diet protocol.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-15.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "SOS Children's Villages India",
    portfolioText:
      "SOS Children ' s Village India uses social media and SOS Children ' s Village India websites to connect investors and entrepreneurs, with the potential to encourage entrepreneurship by broadening the pool of investors beyond the conventional circle of owners, family, and venture capitalists.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-16.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "Hermann Gmeiner Schools & Training Institutions",
    portfolioText:
      "Hermann Gmeiner Schools & Training Institutions are under one the largest non profit organisations in the world SOS Children ' s Villages of India and has over 12 institutions across India.",
  },
  {
    portfolioImg: "/assets/images/portfolio/p-17.png",
    portfolioLink: "/single-portfolio",
    portfolioTitle: "BillBerry",
    portfolioText:
      "A restaurant management software for users to track orders of different outlets, analytical performance on different metrics. The app is available on Web, Android and IOS",
  },
];



const PortfolioTwo = ({extraClass}) => {
    return (
        <section className={`portfolio__area fix p-relative pt-115 ${extraClass}`}>
            <div className="portfolio__shape-2">
                <img className="p-s-1  d-none d-sm-block" src="/assets/images/shape/portfolio/p-s-1.png" alt=""/>
                <img className="p-s-2" src="/assets/images/shape/portfolio/p-s-2.png" alt=""/>
                <img className="p-s-3 d-none d-sm-block" src="/assets/images/shape/portfolio/p-s-3.png" alt=""/>
                <img className="p-s-4" src="/assets/images/shape/portfolio/p-s-4.png" alt=""/>
                <img className="p-s-5 d-none d-xxl-block" src="/assets/images/shape/portfolio/p-s-5.png" alt=""/>
            </div>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="portfolio__title-2 text-center">
                            <SectionTitle subTitle="Portfolio"
                            titleFirst="Some of our amazing works"
                            />                                 
                        </div>
                    </Col>
                </Row>
                <div className="portfolio-2">
                        {/* <Tabs
                        defaultActiveKey="all"
                        transition={false}
                        id="noanim-tab-example"
                        className="portfolio__menu portfolio__menu-2"
                        >
                          <Tab eventKey="all" title="Show All"> */}
                            <Row className="mt-70">
                            {PORTFOLIO_ALL.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          {/* </Tab>  
                          <Tab eventKey="ui" title="UI/UX Design">
                            <Row className="mt-70">
                            {PORTFOLIO_UI.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="marketing" title="Marketing">
                            <Row className="mt-70">
                            {PORTFOLIO_MARKETING.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="development" title="Development">
                            <Row className="mt-70">
                            {PORTFOLIO_DEVELOPMENT.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioLink={portfolioLink}
                                  portfolioTitle={portfolioTitle}
                                  portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                      </Tabs>   */}
                    </div> 
            </Container>      
        </section>
    );
};

export default PortfolioTwo;