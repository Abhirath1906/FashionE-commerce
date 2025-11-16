"use client"
import "../styles/global.css"
import { Layout, Button, Card, Form, Input, Divider, Spin, message } from "antd"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from "next/navigation"

const { Content, Header } = Layout

export default function LoginPage() {
  const [Thetime, setThetime] = useState(true)
  const [form] = Form.useForm()
  const router = useRouter()


  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    if (!Thetime) {
      const timer = setTimeout(() => {
        gsap.fromTo(".TheHeader",
          { y: -80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
        );

        gsap.fromTo(".LoginCard",
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
        );

        gsap.fromTo(".welcomeLogin, .continueLogin",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out", delay: 0.6 }
        );

        gsap.fromTo(".ButtonSubmitLogin",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.9 }
        );
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [Thetime]);

  useEffect(() => {
    const timer = setTimeout(() => setThetime(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleLogin = (values) => {
    const { username, gmail, password } = values
    localStorage.setItem("user", JSON.stringify({ username, gmail, password }))
    message.success(`Selamat datang, ${username}!`)
    router.push("/shop")
  }

  if (Thetime) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Spin size="large" />
      </div>
    )
  }

  return (
    <Layout>
      <Header className="TheHeader">

        <div className="DivHeader3">
          <div>
            <Link style={{ color: "black" }} href="/">
              <Image className="Sora55" src="/Sora.jpg" width={150} height={150} />
            </Link>
          </div>
          <div className="Header3">
            <Button className="ShopButton">
              <Link style={{ fontWeight: "500" }} href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>

      </Header>

      <Content style={{ position: "relative", height: "100vh" }}>
        <Image
          src="/gambar4.png"
          alt="background"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div className="DivLogin">
          <Card className="LoginCard">
            <p className="welcomeLogin">Welcome</p>
            <p className="continueLogin">Sign in to your account to continue</p>
            <Divider />
            <Form form={form} onFinish={handleLogin}>
              <p style={{ fontWeight: "bold" }}>Username</p>
              <Form.Item name="username" rules={[{ required: true, message: "Please type the username" }]}>
                <Input className="InputLogin" placeholder="Username" />
              </Form.Item>

              <p style={{ fontWeight: "bold" }}>Gmail</p>
              <Form.Item name="gmail" rules={[{ required: true, message: "Please type the gmail" }]}>
                <Input className="InputLogin" placeholder="Gmail" type="email" />
              </Form.Item>

              <p style={{ fontWeight: "bold" }}>Password</p>
              <Form.Item name="password" rules={[{ required: true, message: "Please type the password" }]}>
                <Input.Password className="InputLogin" placeholder="Password" />
              </Form.Item>

              <Divider />

              <Form.Item>
                <Button className="ButtonSubmitLogin" type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
    </Layout>
  )
}
