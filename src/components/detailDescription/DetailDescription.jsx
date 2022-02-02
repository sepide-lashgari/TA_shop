import "./DetailDescription.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { calc } from "../../redux/Count/count-actions";
import { modalAction } from "../../redux/modal/modal-action";

const DetailDescription = ({ productDetail }) => {
  const [sizeState, setSizeState] = useState();
  const [colorState, setcolorState] = useState();

  const [sizeEror, setsizeEror] = useState(null);
  const [colorEror, setcolorEror] = useState(null);
  const [errors, seterrors] = useState({});

  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (sizeState) {
      if (colorState) {
        const sendData = {
          name: productDetail.name,
          price:
            productDetail.price -
            (productDetail.discount * productDetail.price) / 100,
          count:count,
          color: productDetail.colors.find((item) => colorState === item.id),
          size: productDetail.sizes.find((item) => sizeState === item.id),
        };
        localStorage.setItem("cart", JSON.stringify(sendData));
        dispatch(modalAction(<div>succssful</div>))
        
          //  axios.post('http://localhost:4000/cart',sendData)
      }else{
        setcolorEror("لطفا رنگ را انتخاب کنید")

        }
      }
     else {
        setsizeEror("لطفا سایز را انتخاب کنید");
      }
      
    }

  
  ;

  return (
    <div className=" col-6">
      <h2 className="name">{productDetail.name}</h2>
      <div className=" d-flex justify-content-end align-items-center">
        <h6 style={{ textDecoration: "line-through" }}>
          {Number(productDetail?.price).toLocaleString()}
        </h6>

        <div className="discount">
          {Number(productDetail?.discount).toLocaleString}%
        </div>
      </div>

      <div className=" d-flex justify-content-end">
        <h3 className="mb-0">
          {productDetail.discount > 0
            ? Number(
                +productDetail.price -
                  (+productDetail.discount * +productDetail.price) / 100
              ).toLocaleString()
            : null}
        </h3>
      </div>

      <div className="product-size my-5">
        <h5 className="text-end">سایز</h5>
        {
          <div className="text-end" style={{color:"red"}}>{sizeEror}</div>
        }
        <ul className={"d-flex justify-content-end"}>
          {productDetail?.sizes?.map((item, index) => (
            <li
              className={`py-2 px-3 ${
                item.id === sizeState ? `active-size` : ""
              }`}
              key={index}
              onClick={() => setSizeState(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-color my-3">
        <h5 className="text-end">رنگ</h5>
        {
          colorEror&&
          <div className="w-100 text-end" style={{color:"red"}} >{colorEror}</div>
        }
        <ul className={"product-ul d-flex justify-content-end"}>
          {productDetail?.colors?.map((item, index) => (
            <li
              className={`py-2 px-3 ${
                item.id === colorState ? `active-color` : ""
              }`}
              key={index}
              onClick={() => setcolorState(item.id)}
            >
              <div
                className={"product-color-item"}
                style={{ backgroundColor: item.code }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 me-0 ms-auto d-flex justify-content-between">
        <button onClick={()=>dispatch(calc(+1))}>+</button>
        <div>{count}</div>
        <button onClick={()=>dispatch(calc(-1))}>-</button>
      </div>
      <div className="d-flex justify-content-end align-item-center">
        <button onClick={addToCartHandler}>افزودن به سبد خرید</button>
      </div>
    </div>
  );}
export default DetailDescription;
