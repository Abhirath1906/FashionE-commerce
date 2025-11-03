"use client"
import { Layout, Avatar, Button, Row, Col, Spin, message,Divider } from "antd"
import "../app/styles/global.css"
import Link from "next/link"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState, useEffect } from "react"
const { Header, Content, Footer } = Layout

export default function Home() {
  const [Thetime, setThetime] = useState(true)
  const [Username, setUsername] = useState("");




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


    gsap.fromTo(".stats-section .stat-box",{y:100,opacity:0},{y:0,opacity:1,duration:1.2,stagger:{
      grid:"auto",
      amount:1
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
        <div>
          <Header className="TheHeader">
            <div className="DivHeader">
              <div>
                <p className="Sora">
                  <Link style={{ color: "black" }} href="/">
                    Sora & Co.
                  </Link>
                </p>
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

                <Button className="ShopButton">
                  <Link style={{ fontWeight: "500" }} href="/shop">
                    Shop Now
                  </Link>
                </Button>
              </div>
            </div>
          </Header>

          <Content className="animated-bg">
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
                  <Row justify="center" gutter={[50, 20]}>
                    <Col xs={24} sm={8} className="stat-box">
                      <h2>60+</h2>
                      <p>Products</p>
                    </Col>

                    <Col xs={24} sm={8} className="stat-box">
                      <h2>10K+</h2>
                      <p>Happy Customers</p>
                    </Col>

                    <Col xs={24} sm={8} className="stat-box">
                      <h2>4.8</h2>
                      <p>Rating</p>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="ThePicture">
                <Avatar shape="square" className="gambarr" src="/gambar1.png" />
              </div>
            </div>
          </Content>

          
        </div>

        
      </Layout>
    </>
  )
}
