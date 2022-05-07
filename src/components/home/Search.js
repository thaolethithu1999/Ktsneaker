import { Button, Card, Col, Pagination, Row } from "antd";
import "../../App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HeartFilled, SmileOutlined } from "@ant-design/icons";

const Search = () => {
  let nav = useNavigate();

  const products = useSelector((state) => state.products.searchProducts);
  console.log(products);

  return (
    <div className="block" style={{ marginTop: "70px" }}>
      <div className="products" style={{ margin: "10px" }}>
        <Row gutter={[16, 16]}>
          {products.length === 0 ? (
            <div style={{ minHeight: "400px", textAlign: "center" }}>
              <h4 className="emptySearch">
                We don't have this product in store! We will be update soon!
                <HeartFilled />
              </h4>
              <h5 className="emptySearch">
                Continue shopping?  
                <a href="/#home"> Yes </a>
                
              </h5>
            </div>
          ) : (
            products.map((product) => {
              return (
                <Col
                  sx={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 6 }}
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
                        onClick={() => nav(`/${product.key}`)}
                      >
                        VIEW
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })
          )}

          {/* <Pagination
              defaultCurrent={1}
              defaultPageSize={numEachPage} //default size of page
              //onChange={() => handleChange}
              total={length} //total number of card data available
            /> */}
        </Row>
      </div>
    </div>
  );
};

export default Search;
