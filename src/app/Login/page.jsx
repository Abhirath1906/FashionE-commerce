"use client"
import "../styles/global.css"
import { Layout, Button, Card, Form, Input, Divider, Spin, message } from "antd"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const { Content, Header } = Layout

export default function LoginPage() {
  const [Thetime, setThetime] = useState(true)
  const [form] = Form.useForm()
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setThetime(false), 1500)
    return () => clearTimeout(timer)
  }, [])

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


  const handleLogin = (values) => {
    const { username, gmail, password } = values

    localStorage.setItem("user", JSON.stringify({ username, gmail, password }))

    message.success(`Selamat datang, ${username}!`)
    router.push("/shop") 
  }

  return (
    <Layout>
      <Header className="TheHeader">
        <div className="DivHeader">
          <div>
            <p className="Sora">
              <Link style={{ color: "black" }} href="/">
                Sora & Co
              </Link>
            </p>
          </div>
          <div className="Header2">
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
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        <div className="DivLogin">
          <Card className="LoginCard">
            <p className="welcomeLogin">Welcome</p>
            <p className="continueLogin">Sign in to your account to continue</p>
            <Divider />

            <Form form={form} onFinish={handleLogin}>
              <p style={{ fontWeight: "bold" }}>Username</p>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please type the username" }]}
              >
                <Input className="InputLogin" placeholder="Username" />
              </Form.Item>

              <p style={{ fontWeight: "bold" }}>Gmail</p>
              <Form.Item
                name="gmail"
                rules={[{ required: true, message: "Please type the gmail" }]}
              >
                <Input className="InputLogin" placeholder="Gmail" type="email" />
              </Form.Item>

              <p style={{ fontWeight: "bold" }}>Password</p>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please type the password" }]}
              >
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
