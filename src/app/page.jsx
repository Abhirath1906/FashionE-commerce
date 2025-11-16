"use client"
import { Layout, Avatar, Button, Row, Col, Spin, message, Divider, Card, Drawer, Menu } from "antd"
import "../app/styles/global.css"
import Link from "next/link"
import gsap from 'gsap';
import Image from "next/image";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MenuOutlined } from "@ant-design/icons";
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

        <Header className="TheHeader">
          <div className="DivHeader" style={{ marginTop: "10px" }}>



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

            <div className="DivHeaader111">

              <div>

                <MenuOutlined
                  onClick={() => setOpenn(true)}
                  className="theMenuotlinedd"

                />
              </div>
              <Link className="Sora1" style={{ color: "black" }} href="/">
                <Image style={{ marginTop: "-5px" }} src="/Sora.jpg" width={150} height={150} />
              </Link>
            </div>

            <div className="Header2">
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
        </Header>

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
                  <p className="OurStory">Our Story</p>

                  <p className="AboutUs">About us

                  </p>

                  <p className="TextUnderAbout">Where every style tells a unique story</p>
                  <Divider />
                </div>


                <Card className="CardModeren">
                  <p className="Moderen">✨  Modern Simplicity</p>
                  <p className="TextModren">PT. SORA & CO., founded on July 22, 2025 by three creative young people, aims to bring new colors<br />
                    to Indonesia's fashion and lifestyle industry. With the philosophy that every style has a unique<br />
                    story, the company embraces the concept of modern simplicity — presenting elegant, minimalist<br />
                    products that follow trends without losing identity.</p>
                </Card>


                <Card className="CardValues">
                  <p className="Values">🤝  Our Values</p>
                  <p className="Textvalues">SORA & CO. expands its reach through wholesale partners, retail, and digital platforms, building<br />
                    customer trust through innovative and consumer-oriented approaches.</p>

                  <div className="DivPading">
                    <div className="divTexttt">
                      <p className="TheTexttt">Creativity</p>
                    </div>
                    <div className="divTexttt">
                      <p className="TheTexttt">Integrity</p>
                    </div>
                    <div className="divTexttt">
                      <p className="TheTexttt">Collaboration</p>
                    </div>

                    <div className="divTexttt">
                      <p className="TheTexttt">Consistency</p>
                    </div>
                  </div>
                </Card>


                <Card className="CardJourney">
                  <p className="Journey">🚀  Our Journey</p>
                  <p className="TextJourney">As an early achievement, the company has established partnerships with various suppliers and major e-commerce platforms, and<br />
                    formed a loyal customer community. Moving forward, SORA &<br />
                    CO. is committed to continuous innovation and strengthening its position as a modern local<br />
                    fashion brand that brings stories to every style.</p>

                </Card>

              </div>




              <div className="alldivCard">

                <div className="AllHeaderAbout">
                  <p className="OurStory">Our Direction</p>

                  <p className="AboutUs">Vision & Mission

                  </p>

                  <p className="TextUnderAbout">Leading the future of Indonesian fashion</p>
                  <Divider />
                </div>

              </div>


              <div>

                <div className="alldivCard">

                  <Card className="CardVission">

                    <p className="OurVission">Our Vision</p>
                    <p className="VissionText">To become a leading fashion trading<br />
                      business that provides trendy products<br />
                      at affordable prices, trusted quality, and<br />
                      the best service for the Indonesian<br />
                      people.</p>
                  </Card>

                  <Card className="CardMission">


                    <p className="ourMission">Our Mission</p>

                    <div className="alldivNumber">
                      <p><span className="TheSpanNum">1</span>
                        Provide various latest fashion choices from<br />
                        trusted suppliers to meet the lifestyle needs of<br />
                        the younger generation.
                      </p>

                      <p><span className="TheSpanNum">2</span>
                        Establish long-term partnerships with credible<br />
                        suppliers and vendors to maintain product<br />
                        availability.
                      </p>

                      <p><span className="TheSpanNum">3</span>
                        Provide fast, friendly, and professional service<br />
                        to every customer.
                      </p>

                      <p><span className="TheSpanNum">4</span>
                        Manage the business with a neat and efficient<br />
                        system, including stock and financial<br />
                        recording.
                      </p>

                      <p><span className="TheSpanNum">5</span>
                        Develop creative digital marketing to reach a<br />
                        wider market.
                      </p>
                    </div>


                  </Card>

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
                    <Link style={{ color: "black" }} href="/">Home</Link>
                    <Link style={{ color: "black" }} href="/Login">Login</Link>
                    <Link style={{ color: "black" }} href="/shop">Shop</Link>
                    <Link style={{ color: "black" }} href="/Contact">Contact</Link>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>Follow Us</p>
                  <div className="Link2">
                    <a style={{ color: "black" }} href="https://www.instagram.com">Instagram</a>
                    <a style={{ color: "black" }} href="https://www.facebook.com/?locale=id_ID">Facebook</a>
                    <a style={{ color: "black" }} href="https://x.com">Twitter</a>
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









      </Layout>
    </>
  )
}
