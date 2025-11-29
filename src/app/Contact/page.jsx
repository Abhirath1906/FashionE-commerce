"use client"
import "../styles/global.css"
import { Layout, Button, Card, Form, Input, Divider, Spin, message, Modal, Drawer, Menu, Avatar } from "antd"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from 'gsap';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, MenuOutlined } from "@ant-design/icons";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const { Content, Header, Footer } = Layout

export default function LoginPage() {
    const [Thetime, setThetime] = useState(true)
    const [form] = Form.useForm()
    const [Open, setOpen] = useState(false)
    const [Openn, setOpenn] = useState(false)

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


            gsap.fromTo(".backgroundContact", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power1.inOut" })

            gsap.fromTo(".GambarContact", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power1.inOut" })


            gsap.fromTo(".DIvMessCard", { x: -100, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1.4, ease: "circ.inOut", scrollTrigger: {
                    trigger: ".DIvMessCard",
                    start: "-1200,300",
                    // markers:true

                }
            })

            gsap.fromTo(
                [".TheDivtextMess", ".thedivvv"],
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: {
                        amount: 1
                    },
                    scrollTrigger: {
                        trigger: ".thedivvv",
                        start: "-1200,300",
                        toggleActions: "play none none reverse"
                    }
                }
            )


            gsap.fromTo(".DivTextCOntct", { y: -100, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1.4, ease: "circ.inOut",
                scrollTrigger: {
                    trigger: ".DivTextCOntct",
                    start: "-1200,300"
                }
            })


            gsap.fromTo(".TheFooterContact", { y: 100, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1.4, ease: "circ.inOut",
                scrollTrigger: {
                    trigger: ".TheFooterContact",
                    start: "-1200,300",
                }

            })

            gsap.fromTo(".AlldivTextpic", { x: -100, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                    trigger: ".AlldivTextpic",
                    start: "-1200,300",
                }
            })

            gsap.fromTo(".Gedungpic", { x: 100, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                    trigger: ".Gedungpic",
                    // markers:true,
                    start: "-1200,300",
                }
            })


            return () => clearTimeout(timer);
        }
    }, [Thetime]);

    useEffect(() => {
        const timer = setTimeout(() => setThetime(false), 1500)
        return () => clearTimeout(timer)
    }, [])


    const handleSubmit = async (values) => {
        try {
            const response = await fetch("https://formspree.io/f/mdkykekj", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                message.success("Message sent successfully!");
                form.resetFields();
                setOpen(true)
            } else {
                message.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            message.error("An error occurred while sending the message.");
        }
    };






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
                                    <Image style={{ marginTop: "-5px" }} src="/TheLogos.jpg" width={70} height={70} />

                                    <p className="TheTextLogos3"><span style={{ color: "rgb(28, 58, 88)" }}>Sora</span> <span style={{ color: "rgb(1, 102, 203)" }}>&
                                        <span className="TheCo">Co.</span></span></p>

                                </div>
                            </Link>


                        </div>

                        <div className="Header3">




                            <Button className="ShopButton1" style={{ marginLeft: "80px" }}>
                                <Link style={{ fontWeight: "500", }} href="/shop">
                                    Shop Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Layout>

            <Content className="AllCOntent">


                <div className="backgroundContact">

                    <div className="TheBackgrounddd">

                        <div className="alldivtextCont">

                            <div className="contactText">
                                Contact Us
                            </div>

                            <div className="TheTextCon">
                                <p>We're here to help. Send us a message or reach out through<br />
                                    <span className="texttwo">our contact information below.</span></p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/Contact.png"
                        alt="background"
                        width={1350}
                        height={1350}
                        className="GambarContact"


                    />


                </div>



                <div className="AllDivFirst">

                    <div className="AlldivTextpic">

                        <div className="Premiumtxt">
                            <p>Premium Office Solutions</p>
                        </div>
                        <div className="FirstText">
                            <p><span>Our Office</span><br />
                                <span className="lastColor" >Residence</span>
                            </p>
                        </div>

                        <div>
                            <p>Discover premium office spaces in the heart of Jakarta.<br />
                                Experience world-class facilities and modern architecture at<br />
                                Office Residence.</p>
                        </div>
                    </div>

                    <div>
                        <Avatar
                            shape="square"

                            className="Gedungpic"
                            src='/office8-building.png'

                        />

                    </div>



                </div>


                <Divider />




                <div className="DivMess">

                    <div className="DIvMessCard">
                        <Card className="MessCard">
                            <p className="SendAM">Send a Message</p>
                            <p className="TextMess">Fill out the form below and we'll get back to you shortly</p>
                            <Divider />
                            <Form form={form} onFinish={handleSubmit}>
                                <p style={{ fontWeight: "500" }}>Full Name</p>
                                <Form.Item name="username" rules={[{ required: true, message: "Please type the full name" }]}>
                                    <Input className="InputName" placeholder="Full Name" />
                                </Form.Item>

                                <p style={{ fontWeight: "500" }}>Email</p>
                                <Form.Item name="email" rules={[{ required: true, message: "Please type the email" }]}>
                                    <Input className="InputName" placeholder="Email" type="email" />
                                </Form.Item>

                                <p style={{ fontWeight: "500" }}>Message</p>
                                <Form.Item name="Message" rules={[{ required: true, message: "Please type the Message" }]}>
                                    <Input className="InputMess" placeholder="Message" />
                                </Form.Item>

                                <Divider />

                                <Form.Item>
                                    <Button className="ButtonSubmitLogin" type="primary" htmlType="submit" block>
                                        Send Message
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </div>







                    <div className="AlldivTextMess">
                        <div className="DivTextCOntct">
                            <p className="ContactInfor">Contact Information</p>
                            <p className="TextInfor" style={{ color: "black" }}>Or reach out to us directly via</p>
                        </div>


                        <div className="TheDivtextMess">

                            <div className="thedivvv">
                                <Card className="PhoneCard">

                                    <div className="AlldvPhone">
                                        <div>
                                            <PhoneOutlined className="PhoneLogo" />
                                        </div>
                                        <div className="DivTextPhone">
                                            <p className="PhoneText">Phone</p>
                                            <p style={{ opacity: "0.5", marginTop: "5px" }}>+62-857-7924-9737</p>
                                            <p style={{ opacity: "0.5" }}>+62-857-7924-9737</p>
                                        </div>
                                    </div>

                                </Card>
                            </div>


                            <div className="thedivvv">
                                <Card className="EmailCard">

                                    <div className="AlldvPhone">
                                        <div>
                                            <MailOutlined className="PhoneLogo" />
                                        </div>
                                        <div className="DivTextPhone">
                                            <p className="PhoneText">Email</p>
                                            <p style={{ opacity: "0.5", marginTop: "5px" }}>soraandco42@gmail.com</p>
                                        </div>
                                    </div>

                                </Card>
                            </div>



                            <div className="thedivvv">
                                <Card className="EmailCard">

                                    <div className="AlldvPhone">
                                        <div>
                                            <EnvironmentOutlined className="PhoneLogo" />
                                        </div>
                                        <div className="DivTextAddress">
                                            <a target="_" href="https://www.bing.com/ck/a?!&&p=919ad3ffb2c750591dccf9f41aca8cc48c65079c2fc544d64a19ec523b847c18JmltdHM9MTc2NDIwMTYwMA&ptn=3&ver=2&hsh=4&fclid=22e8073c-d935-6585-0816-1251d828648b&u=a1L21hcHM_Jm1lcGk9MH5-RW1iZWRkZWR-QWRkcmVzc19MaW5rJnR5PTE4JnE9QmFkaWxhJTIwSUkmc3M9eXBpZC5ZTjc5OTl4MTU5MjU5NjYxNjcyOTE4MDM5NiZwcG9pcz0tNi4xNDUxMjc3NzMyODQ5MTJfMTA2LjgyMzQ4NjMyODEyNV9CYWRpbGElMjBJSV9ZTjc5OTl4MTU5MjU5NjYxNjcyOTE4MDM5Nn4mY3A9LTYuMTQ1MTI4fjEwNi44MjM0ODYmdj0yJnNWPTEmRk9STT1NUFNSUEw">

                                                <p className="PhoneText">Address</p>
                                                <p style={{ opacity: "0.5", marginTop: "5px" }}> Jl. Badila II, Tangki, Taman Sari, Kota Jakarta Barat</p>
                                                <p style={{ opacity: "0.5", }}>DKI Jakarta, Indonesia, 11170</p>
                                            </a>

                                        </div>
                                    </div>

                                </Card>
                            </div>

                        </div>
                    </div>
                </div>


                <Footer className="TheFooterContact">
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
                        <p style={{ color: "white" }}>© 2025 Fashion Store. All rights reserved.</p>
                    </div>
                </Footer>
            </Content>

            <Modal
                open={Open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                title="Message Sent!"
                okText="OK"
                centered
            >
                <p>Thank you for contacting us! We'll get back to you shortly.</p>
            </Modal>


        </Layout>
    )
}
