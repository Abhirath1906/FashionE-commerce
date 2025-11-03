"use client"
import { Avatar, Spin, Card, Row, Col, Divider, Button, Input } from "antd";
import { useEffect, useState } from "react";

export default function ManPage({onBuy}) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/apii/man")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setFilteredData(json);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);


    const handleSearch = (value) => {
        setSearchTerm(value);
        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

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
            <h2 className="woman-title">Man Collection</h2>
            <div style={{ textAlign: "center", marginBottom: 30 }}>
                <Input
                    placeholder="Search Products..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{
                        width: 250,
                        borderRadius: 10,
                        height: 40,
                    }}
                />
            </div>
            <div>
                <Row className="allDivWoman" gutter={[24, 32]} >
                    {filteredData.map((item, index) => (
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
                                    width: 280,
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
                                <p className="man-price" style={{ fontWeight: 600 }}>
                                    Rp. {item.price.toLocaleString("id-ID")}
                                </p>
                                <Button style={{ marginTop: "10px", backgroundColor: "#0a3475" }} type="primary"
                                    onClick={() => onBuy && onBuy(item.name, item.price)}
                                >Buy +</Button>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </div>


        </div>
    );
}
