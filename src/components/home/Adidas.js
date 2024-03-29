import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { getListProduct } from "../redux/slice/ProductsSlice";

const AppAdidas = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  let count = 0;

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  return (
    <div id="adidas" className="block adidasBlock">
      <div className="titleHolder">
        <h2 className="prosName">ADIDAS</h2>
        <p className="paraPart">
          Adidas to be the design leaders with a focus on getting the best out
          of the athletes with performance guaranteed products in the sports
          market globally
        </p>
      </div>

      <div className="products" style={{ margin: "10px" }}>
        <Row gutter={[16, 16]} >
          {products.map((product) => {
            if (product.type.toLowerCase() === "adidas") {
              count++;
              if (count <= 8) {
                return (
                  <Col
                    sx={{ span: 24}} sm={{ span: 12 }} md={{ span: 6 }}
                    key={product.key}
                    onClick={() => nav(`/${product.key}`)}
                  >
                    <Card
                      hoverable
                      bordered={false}
                      cover={<img alt="example" src={product.img.mainImg} />}
                    >
                      <h4 className="prosName">{product.name}</h4>
                      <div className="currency">
                        <h4>
                          {product.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </h4>
                        <Button
                          className="btnView"
                          onClick={() => {
                            <Link to={`/${product.key}`} />;
                          }}
                        >
                          VIEW
                        </Button>
                        {/* <img src="abc" /> */}
                      </div>
                    </Card>
                  </Col>
                );
              }
            }
          })}
        </Row>
        <Button className="btnViewMore" onClick={() => nav("/products")}>
          SEE MORE <ArrowRightOutlined color="blue" />
        </Button>
      </div>
    </div>
  );
};

export default AppAdidas;
