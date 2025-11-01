"use client"
import { Avatar, Spin, Card, Row, Col, Divider } from "antd";
import { useEffect, useState } from "react";

export default function WomanPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/woman")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loading) {
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

    return (
        <div className="woman-container">
            <Divider />
            <h2 className="woman-title">Woman Collection</h2>
            <div>
                <Row className="allDivWoman" gutter={[24, 32]} >
                    {data.map((item, index) => (
                        <Col
                            key={index}
                            xs={24}
                            sm={12}
                            md={8}
                            lg={6}
                            xl={5}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <Card
                                hoverable
                                className="woman-card"
                                style={{
                                    width: 260,
                                    borderRadius: 20,
                                    textAlign: "center",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <Avatar
                                    shape="square"
                                    src={item.image}
                                    size={200}
                                    className="woman-avatar"
                                />
                                <p className="woman-name" style={{ marginTop: 10, fontWeight: 500 }}>
                                    {item.name}
                                </p>
                                <p className="woman-price" style={{ fontWeight: 600 }}>
                                    Rp.{item.price}
                                </p>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </div>


        </div>
    );
}
