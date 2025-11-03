"use client";
import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Layout,
  Button,
  Input,
  Tabs,
  Spin,
  message,
  Divider,
  Modal,
  Badge
} from "antd";
import "../styles/global.css";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import WomanPage from "../Woman/page";
import ManPage from "../Man/page";
import ShoesPage from "../Shoes/page";
import JewerlyPage from "../Jewerly/page";
import AccessoriesPage from "../Accessories/page";
import AllPage from "../All/page";

const { Header, Content, Footer } = Layout;

export default function ShopPage() {
  const [Thetime, setThetime] = useState(true);
  const [Username, setUsername] = useState("");
  const [products, setProducts] = useState([]);
  const [Total, setTotal] = useState(0);
  const [Items, setItems] = useState([]);
  const [Show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    const timer = setTimeout(() => setThetime(false), 1500);
    return () => clearTimeout(timer);
  }, []);


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
            duration: 1.4,
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

    gsap.fromTo(".DivTextAwal", { x: -100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: "power3.inOut"
    });

    gsap.fromTo(".gambarr22", { x: 100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: "power3.inOut"
    });

    gsap.fromTo(".IsiCont", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.4, ease: "power3.inOut"
    });

    gsap.fromTo(".divTextTabs2", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.4, ease: "power3.inOut"
    });

    gsap.fromTo(".tabs-wrapper", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.4, scrollTrigger: {
        trigger: ".tabs-wrapper",
        start: "-900,400"
      }
    });

    gsap.fromTo(".TheFooter", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: "power3.inOut", delay: 0.5, scrollTrigger: {
        trigger: ".TheFooter",
        start: "800,100"
      }
    });

    return () => clearTimeout(anim);
  }, [Thetime]);


  const handlebuy = (item, harga) => {
    setTotal((prev) => prev + harga);
    setItems((prev) => [...prev, { item, harga }]);
    setCartCount(cartCount + 1);
  };


  const handleCheckout = () => {
    if (Items.length === 0) {
      message.warning("Your cart is empty!");
      return;
    }
    setIsModalOpen(true);
  };

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
    );
  }

  const items = [
    { key: "1", label: "Woman", children: <WomanPage onBuy={handlebuy} /> },
    { key: "2", label: "Man", children: <ManPage onBuy={handlebuy} /> },
    { key: "3", label: "Shoes", children: <ShoesPage onBuy={handlebuy} /> },
    { key: "4", label: "Jewerly", children: <JewerlyPage onBuy={handlebuy} /> },
    { key: "5", label: "Accessories", children: <AccessoriesPage onBuy={handlebuy} /> },
    { key: "6", label: "All", children: <AllPage onBuy={handlebuy} /> },
  ];

  return (
    <Layout className="TheAll" style={{ backgroundColor: "white" }}>
      <Layout className="TheHeader" style={{ padding: "15px" }}>
        <div className="DivHeader2">
          <div className="isiDivHeader2">
            <Link className="Sora2" style={{ color: "black" }} href="/">
              Sora & Co.
            </Link>
          </div>

          <div className="Header2">
            <div className="headerrr2">
              <p
                style={{ fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}
              >
                {Username ? `${Username}` : "Guest"}
              </p>
            </div>

            {Username === "Guest" ? (
              <Link href="/Login">
                <Button className="sign-in" style={{ fontWeight: "500" }}>
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                className="sign-in"
                style={{ fontWeight: "500", marginTop: "8px" }}
                onClick={() => {
                  localStorage.removeItem("user");
                  message.success("Logged out successfully!");
                  setUsername("Guest");
                }}
              >
                Logout
              </Button>
            )}
            <Badge count={cartCount} offset={[0, 0]}>
              <ShoppingCartOutlined
                onClick={() => setShow(true)}
                className="Keranjang"
              />
            </Badge>
          </div>
        </div>
      </Layout>

      {Show && (
        <div className="DivShow" onMouseLeave={() => setShow(false)}>

          <p style={{ fontWeight: "bold" }}>Product List:</p>



          {Items.length > 0 ? (
            <>
              {Items.map((item, index) => (
                <p key={index}>
                  {index + 1}. {item.item} — Rp. {item.harga.toLocaleString("id-ID")}
                </p>
              ))}
              <Divider />
              <p style={{ fontWeight: "bold" }}>
                Total: Rp. {Total.toLocaleString("id-ID")}
              </p>
              <Button
                type="primary"
                style={{ marginTop: 10 }}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </>
          ) : <div>
            <p style={{ opacity: 0.5 }}>No Item</p>
          </div>}

        </div>
      )}

      <Content className="animated-bg2" style={{ position: "relative", zIndex: 1 }}>
        <div className="IsiCont">


          <div className="AlldivAwal">
            <div className="DivTextAwal">
              <p className="IsiText2">
                Discover fashion that<br />defines your style.
              </p>
              <p style={{ opacity: "0.8" }}>Create your collection</p>
            </div>
            <div>
              <Image
                className="gambarr22"
                src="/gambar2.png"
                width={650}
                height={850}
                alt="Fashion model"
              />
            </div>
          </div>
        </div>

        <div className="divTextTabs2">
          <p>
            The finest fashion for every occasion—<br />
            <span className="span2">find them on Style</span>
          </p>
        </div>

        <div className="divTabs">
          <div className="tabs-wrapper">
            <Tabs className="tabss" centered items={items} />
          </div>
        </div>
      </Content>

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

      {/* MODAL CHECKOUT */}
      <Modal
        title="Checkout Summary"
        open={isModalOpen}
        onOk={() => {
          message.success("Checkout successful!");
          setItems([]);
          setTotal(0);
          setIsModalOpen(false);
        }}
        onCancel={() => setIsModalOpen(false)}
        okText="Confirm"
        cancelText="Cancel"
      >
        <div>
          {Items.map((item, index) => (
            <p key={index}>
              {index + 1}. {item.item} — Rp. {item.harga.toLocaleString("id-ID")}
            </p>
          ))}
          <Divider />
          <p style={{ fontWeight: "bold" }}>
            Total: Rp. {Total.toLocaleString("id-ID")}
          </p>
        </div>
      </Modal>
    </Layout>
  );
}
