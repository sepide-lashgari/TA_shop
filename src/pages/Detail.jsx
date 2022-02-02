import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../redux/productDetail/productDetail-actions";
import { useDispatch, useSelector } from "react-redux";
import DetailImage from "../components/DetailImage";
import DetailDescription from "../components/detailDescription/DetailDescription";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.productDetailReducer.product
  );

  console.log(productDetail)
  useEffect(() => {
    axios
      .get(`http://localhost:4000/suggestion/${params.productId}`)
      .then((res) => dispatch(fetchProductDetail(res.data)))
      .catch((e) => console.log(e));
  }, [params.productId]);

  return (
    <div>
      <div>
        <div className="d-flex">
          <DetailDescription productDetail={productDetail} />
          <DetailImage productDetail={productDetail}/>
        </div>
      </div>
     
    </div>
  );
};

export default Detail;
