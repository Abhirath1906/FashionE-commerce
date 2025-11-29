"use client"
import { Layout, Avatar, Button, Row, Col, Spin, message, Divider, Card, Drawer, Menu } from "antd"
import "../app/styles/global.css"
import Link from "next/link"
import gsap from 'gsap';
import Image from "next/image";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MenuOutlined, SketchOutlined, RadarChartOutlined, TeamOutlined, ThunderboltOutlined, ArrowRightOutlined, GlobalOutlined, AimOutlined, RiseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react"
const { Header, Content, Footer } = Layout

export default function Home() {
  const [Thetime, setThetime] = useState(true)
  const [Username, setUsername] = useState("");
  const [Openn, setOpenn] = useState(false)




  useEffect(() => {
    const timer = setTimeout(() => setThetime(false), 1500)
    return () => clearTimeout(timer)
  }, [])



  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      try {
        const user = JSON.parse(data);
        setUsername(user.username || "Guest");
      } catch {
        console.error("Data user tidak valid di localStorage");
        setUsername("Guest");
      }
    } else {
      message.warning("Please login first!");
      setUsername("Guest");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);


    const anim = setTimeout(() => {
      const headerEl = document.querySelector(".TheHeader");

      if (headerEl) {
        gsap.fromTo(
          headerEl,
          { y: -80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        );
      }


      gsap.fromTo(
        ".TitleCont, .TextCont, .Explore, .ThePicture",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",

        }


      );
    }, 400);


    gsap.fromTo(".stats-section .stat-box", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, stagger: {
        grid: "auto",
        amount: 1
      }
    })


    gsap.fromTo(".TheFooter", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: "power3.inOut", delay: 0.5, scrollTrigger: {
        trigger: ".TheFooter",

      }
    });


    gsap.fromTo(".AllHeaderAbout", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, scrollTrigger: {
        trigger: ".AllHeaderAbout",
        scrub: true
      }
    })

    gsap.fromTo(".CardModeren", { x: -100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.4, ease: "elastic.inOut", scrollTrigger: {
        trigger: ".CardModeren",

      }
    })

    gsap.fromTo(".CardValues", { x: 100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.4, ease: "elastic.inOut", scrollTrigger: {
        trigger: ".CardValues",

      }
    })

    gsap.fromTo(".CardJourney", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.4, ease: "elastic.inOut", scrollTrigger: {
        trigger: ".CardJourney",

      }
    })




    gsap.fromTo(".DivPading .divTexttt", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, stagger: {
        grid: "auto",
        amount: 1
      }
    })

    gsap.fromTo(".CardVission", { x: -100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.4, ease: "elastic.inOut", scrollTrigger: {
        trigger: ".CardVission",

      }
    })
    gsap.fromTo(".CardMission", { x: 100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.4, ease: "elastic.inOut", scrollTrigger: {
        trigger: ".CardMission",

      }
    })
    gsap.fromTo(".AlldivinText", { x: 100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.4, scrollTrigger: {
        trigger: ".AlldivinText",

      }
    })


    gsap.fromTo(".DivLogos",{x:100,opacity:0},{x:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".DivLogos"
    }})

    gsap.fromTo(".Textvalues",{x:-100,opacity:0},{x:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".Textvalues"
    }})


    gsap.fromTo(".DivPading .divTexttt",{y:500,opacity:0},{y:0,opacity:1,duration:1.2,ease:"power1.out",stagger:{
      grid:"auto",amount:1
    },
      scrollTrigger:{
      trigger:".DivPading "
    }})


    gsap.fromTo(".DivBoldText",{x:-100,opacity:0},{x:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".DivBoldText"
    }})

    gsap.fromTo(".AllTextJour",{x:100,opacity:0},{x:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".AllTextJour"
    }})

    gsap.fromTo(".DivFirstTextLea",{y:-100,opacity:0},{y:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".DivFirstTextLea"
    }})


    


    gsap.fromTo(".MeetLeader",{y:100,opacity:0},{y:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".MeetLeader"
    }})

    gsap.fromTo(".secondTextLea",{y:100,opacity:0},{y:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".secondTextLea"
    }})



    gsap.fromTo(".InCardLea .Card1Avatar",{y:200,opacity:0},{y:0,opacity:1,duration:1.2,ease:"power1.out",stagger:{
      grid:"auto",amount:1
    },
      scrollTrigger:{
      trigger:".InCardLea"
    }})



    gsap.fromTo(".DivOurDirect",{y:-100,opacity:0},{y:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".DivOurDirect"
    }})

    gsap.fromTo(".OurVission",{y:-100,opacity:0},{y:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".OurVission"
    }})

    gsap.fromTo(".VissionText",{y:100,opacity:0},{y:0,opacity:1,duration:1.2,scrollTrigger:{
      trigger:".VissionText"
    }})


    return () => clearTimeout(anim);
  }, [Thetime]);




  if (Thetime) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    )
  }

  return (
    <>
      <Layout className="TheAll">

        <Layout className="TheHeader" style={{ padding: "15px" }}>
          <div className="DivHeader111">



            <Drawer
              open={Openn}
              placement="left"
              onClose={() => setOpenn(false)}
              style={{ backgroundColor: "white" }}
            >
              <Menu theme="light" mode="inline" style={{ backgroundColor: "white", color: "black" }}>
                <Menu.Item>
                  <Link href="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/Contact">Contact</Link>
                </Menu.Item>

                <Menu.Item>
                  <Link href="/Login">Login</Link>
                </Menu.Item>

                <Menu.Item>
                  <Link href="shop">Shop</Link>
                </Menu.Item>

              </Menu>
            </Drawer>



            <div className="isiDivHeader111">

              <div className="Testt22">
                <div>
                  <MenuOutlined className="TheMenuOutHome" onClick={() => setOpenn(true)} />
                </div>

                <Link className="Sora2" style={{ color: "black" }} href="/">
                  <div className="divsora3">
                    <Image style={{ marginTop: "-5px" }} src="/theLogos.jpg" width={70} height={70} />

                    <p style={{ fontWeight: "500" }} className="TheTextLogos3"><span style={{ color: "rgb(7, 43, 80)" }}>Sora</span> <span style={{ color: "rgb(1, 102, 203)" }}>&
                      <span className="TheCo">Co.</span></span></p>

                  </div>
                </Link>


              </div>

              <div className="Header3">
                {Username === "Guest" ? (
                  <Link href="/Login">
                    <Button className="Loginn" style={{ fontWeight: "500" }}>
                      Login
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="Loginn"
                    style={{ fontWeight: "500" }}
                    onClick={() => {
                      localStorage.removeItem("user");
                      message.success("Logged out successfully!");
                      setUsername("Guest");
                    }}
                  >
                    Logout
                  </Button>
                )}



                <Button className="ShopButton1">
                  <Link style={{ fontWeight: "500" }} href="/shop">
                    Shop Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Layout>

        <Content >

          <div className="animated-bg">
            <div className="allDivCont">
              <div>
                <div className="TitleCont">
                  <p className="collect">New Collection 2025</p>
                  <p>
                    Discover Your<br />
                    <span className="gradient-text">Perfect Style</span>
                  </p>
                </div>

                <div className="TextCont">
                  <p>
                    Explore the latest fashion collection with exclusive<br />
                    designs and premium quality. Find your perfect<br />
                    style for every moment.
                  </p>
                </div>

                <div>
                  <Button type="primary" className="Explore">
                    <Link href="/shop">Explore Collection</Link>
                  </Button>
                </div>

                <div className="stats-section">

                  <div className="stat-box">
                    <h2>60+</h2>
                    <p>Products</p>
                  </div>

                  <div className="stat-box">
                    <h2>10K+</h2>
                    <p>Happy Customers</p>
                  </div>

                  <div className="stat-box">
                    <h2>4.8</h2>
                    <p>Rating</p>
                  </div>

                </div>
              </div>

              <div className="ThePicture">
                <Avatar shape="square" className="gambarr" src="/gambar1.png" />
              </div>

            </div>


            <div className="TheAllDiv">



              <div className="AlldivAbout">


                <div className="AllHeaderAbout">
                  <div className="divStory">
                    <p className="OurStory">Our Story</p>
                  </div>

                  <p className="AboutUs">About us

                  </p>

                  <p className="TextUnderAbout">Where every style tells a unique story</p>

                </div>


                <div className="AlldivCardMO">
                  <Card className="CardModeren">
                    <SketchOutlined className="SketchLogo" />
                    <p className="Moderen">Modern Simplicity</p>

                  </Card>


                  <div className="AlldivinText">

                    <p className="TextModren">PT. SORA & CO., founded on July 22, 2025 by three creative young people, aims to bring new<br />
                      colors to Indonesia's fashion and lifestyle industry.</p>

                    <p className="TextModren">With the philosophy that every style has a unique story, the company embraces the<br />
                      concept of modern simplicity — presenting elegant, minimalist products that follow trends<br />
                      without losing identity.</p>
                  </div>

                </div>



                <div className="AlldivValuess">

                  <div className="DivValues">
                    <div className="DivLogos">
                      <RadarChartOutlined className="LogoValues" />
                      <p className="Values">Our Values</p>
                    </div>
                    <p className="Textvalues">SORA & CO. expands its reach through wholesale partners, retail, and digital platforms, building<br />
                      customer trust through innovative and consumer-oriented approaches.</p>
                  </div>


                  <div className="DivPading">
                    <Card className="divTexttt">
                      <div>
                        <SketchOutlined className="AllLogos" />
                        <p className="TheTexttt">Creativity</p>
                        <p>Innovative design thinking</p>
                      </div>
                    </Card>


                    <Card className="divTexttt">


                      <div >
                        <RadarChartOutlined className="AllLogos" />
                        <p className="TheTexttt">Integrity</p>
                        <p>Honest and transparent</p>
                      </div>
                    </Card>

                    <Card className="divTexttt">
                      <div >
                        <TeamOutlined className="AllLogos" />
                        <p className="TheTexttt">Collaboration</p>
                        <p>Together we achieve</p>
                      </div>
                    </Card>


                    <Card className="divTexttt">

                      <div >
                        <ThunderboltOutlined className="AllLogos" />
                        <p className="TheTexttt">Consistency</p>
                        <p>Quality in every detail</p>
                      </div>
                    </Card>
                  </div>

                </div>


                <div className="AlldivJourneyy">

                  <div className="DivBoldText">
                    <ArrowRightOutlined className="ArrowLogos" />
                    <p className="Journey">Our Journey</p>
                  </div>

                  <div className="AllTextJour">
                    <p className="TextJourney">As an early achievement, the company has established<br />
                      partnerships with various suppliers and major e-<br />
                      commerce platforms, and formed a loyal customer<br />
                      community.
                    </p>

                    <p className="TextJourney">Moving forward, SORA & CO. is committed to continuous<br />
                      innovation and strengthening its position as a <span style={{ fontWeight: "bold" }}>modern<br />
                        local fashion brand</span> that brings stories to every style.</p>
                  </div>



                </div>




                <div className="AlldivLeader">
                  <div className="DivFirstTextLea">
                    <p className="FIrstTextLea">Leadership Team</p>
                  </div>
                  <p className="MeetLeader">Meet Our Founders</p>
                  <p className="secondTextLea">Three passionate individuals united by a vision to revolutionize modern fashion</p>

                  <div>
                    <div className="InCardLea">
                      <Card className="Card1Avatar">
                        <div className="AlldivInCard">
                          <Avatar
                            shape="circle"
                            src="/Orang11.png"
                            className="Orang123"
                          />

                          <p className="Name1Lea">Vanessa Lovianus</p>
                          <p className="TheTitleLea">Co-Founder & CEO</p>
                          <p className="CardTextLea">Visionary leader with 2+ years in fashion<br/>
                          <span className="SpanTextLea"> School</span></p>
                        </div>
                      </Card>
                      <Card className="Card1Avatar">
                        <div className="AlldivInCard">
                          <Avatar
                            shape="circle"
                            src="/Orang2.jpg"
                            className="Orang123"
                          />

                          <p className="Name1Lea">Nicholas Nelson Huang</p>
                          <p className="TheTitleLea2">Co-Founder & Creative Director</p>
                          <p className="CardTextLea">Visionary leader with 2+ years in fashion<br/>
                          <span className="SpanTextLea"> School</span></p>
                        </div>
                      </Card>
                      <Card className="Card1Avatar">
                        <div className="AlldivInCard">
                          <Avatar
                            shape="circle"
                            src="/Orang3.jpg"
                            className="Orang123"
                          />

                          <p className="Name1Lea">Billy Glen</p>
                          <p className="TheTitleLea">Co-Founder & COO</p>
                          <p className="CardTextLea">Visionary leader with 2+ years in fashion<br/>
                          <span className="SpanTextLea"> School</span></p>
                        </div>
                      </Card>

                    </div>
                  </div>
                </div>

              </div>




              <div className="AllDivVisiMisi">

                <div className="alldivCard">

                  <div className="AllHeaderAbout">
                    <div className="DivOurDirect">
                      <p className="OurDirect">Our Direction</p>
                    </div>

                    <p className="AboutUs">Vision & Mission

                    </p>

                    <p className="TextUnderAbout">Leading the future of Indonesian fashion with innovation and dedication</p>
                    <Divider />
                  </div>

                </div>



                <div>

                  <div className="alldivCard">

                    <Card className="CardVission">

                      <div>
                        <AimOutlined className="AimLogos" />
                        <p className="OurVission">Our Vision</p>
                      </div>
                      <p className="VissionText">To become a leading fashion trading<br />
                        business that provides trendy products<br />
                        at affordable prices, trusted quality, and<br />
                        the best service for the Indonesian<br />
                        people.</p>
                    </Card>

                    <Card className="CardMission">

                      <div>
                        <GlobalOutlined className="GlobalLogos" />
                        <p className="ourMission">Our Mission</p>
                      </div>

                      <div className="alldivNumber">

                        <div className="DivOneText">
                          <SketchOutlined className="SkecthLogosText" />
                          <p>
                            Provide various latest fashion choices from trusted suppliers to<br />
                            meet the lifestyle needs of the younger generation.
                          </p>
                        </div>

                        <div className="DivOneText">
                          <TeamOutlined className="SkecthLogosText" />
                          <p>
                            Establish long-term partnerships with credible suppliers and vendors to<br />
                            maintain product availability.
                          </p>
                        </div>

                        <div className="DivOneText">
                          <ThunderboltOutlined className="SkecthLogosText" />

                          <p>
                            Provide fast, friendly, and professional service to every customer.
                          </p>
                        </div>

                        <div className="DivOneText">
                          <RiseOutlined className="SkecthLogosText" />
                          <p>
                            Manage the business with a neat and efficient system, including stock and<br />
                            financial recording.
                          </p>
                        </div>

                        <div className="DivOneText">
                          <GlobalOutlined className="SkecthLogosText" />
                          <p>
                            Develop creative digital marketing to reach a wider market.


                          </p>

                        </div>
                      </div>


                    </Card>

                  </div>

                </div>
              </div>









            </div>




            <Footer className="TheFooter">
              <div className="FooterText1">
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>About us</p>
                  <p style={{ opacity: 0.5 }}>
                    Your trusted fashion destination for<br />
                    premium brands and timeless style.
                  </p>
                </div>

                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>Quick Links</p>
                  <div className="Link1">
                    <Link style={{ color: "white" }} href="/">Home</Link>
                    <Link style={{ color: "white" }} href="/Login">Login</Link>
                    <Link style={{ color: "white" }} href="/shop">Shop</Link>
                    <Link style={{ color: "white" }} href="/Contact">Contact</Link>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>Follow Us</p>
                  <div className="Link2">
                    <a style={{ color: "white" }} href="https://www.instagram.com">Instagram</a>
                    <a style={{ color: "white" }} href="https://www.facebook.com/?locale=id_ID">Facebook</a>
                    <a style={{ color: "white" }} href="https://x.com">Twitter</a>
                  </div>
                </div>
              </div>

              <Divider />
              <div className="lastFooter">
                <p>© 2025 Fashion Store. All rights reserved.</p>
              </div>
            </Footer>
          </div>






        </Content>









      </Layout >
    </>
  )
}
