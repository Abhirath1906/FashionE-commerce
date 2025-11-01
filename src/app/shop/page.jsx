"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React, { useState, useEffect } from 'react';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Button, Input, Tabs, Spin, message } from "antd";
import "../styles/global.css";
import Link from "next/link";
import Image from "next/image";
import WomanPage from '../Woman/page';
import ManPage from "../Man/page"
import ShoesPage from "../Shoes/page"
import JewerlyPage from "../Jewerly/page"
import AccessoriesPage from "../Accessories/page"
import AllPage from "../All/page"

const { Header, Content } = Layout;

export default function ShopPage() {
  const [Thetime, setThetime] = useState(true);
  const [Username, setUsername] = useState("");

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
    );
  }

  const items = [
    { key: "1", label: "Woman", children: <WomanPage /> },
    { key: "2", label: "Man", children: <ManPage /> },
    { key: "3", label: "Shoes", children: <ShoesPage /> },
    { key: "4", label: "Jewerly", children: <JewerlyPage /> },
    { key: "5", label: "Accessories", children: <AccessoriesPage /> },
    { key: "6", label: "All", children: <AllPage /> },
  ];

  return (
    <Layout className="TheAll">
      <Layout className="TheHeader">
        <div className="DivHeader2">
          <div className="isiDivHeader2">
            <Link className="Sora" style={{ color: "black" }} href="/">
              Sora & Co
            </Link>
          </div>

          <div>
            <Input className="inputt2" placeholder="Search products" />
          </div>

          <div className='headerrr2'>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {Username ? `${Username}` : "Guest"}
            </p>
          </div>

          <div className="Header2">
            {Username === "Guest" ? (
              <Link href="/Login">
                <Button className="sign-in" style={{ fontWeight: "500" }}>
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                className="sign-in"
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

            <ShoppingCartOutlined className='Keranjang' />
          </div>
        </div>
      </Layout>

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
              <Image src="/gambar2.png" width={650} height={850} alt="Fashion model" />
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
    </Layout >
  );
}
