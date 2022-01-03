import useAxios from "../../hooks/useAxios";
import GlobalStyle from "../../global.module.css"
const Category = () => {
  const { data, error, loading } = useAxios("category");
  console.log({ data, error, loading });

  return (
    <div className="d-flex">
      <div className="d-flex col-5 flex-wrap">

        <div className="`${GlobalStyle.test} col-12`col-12 ">
          <img className={`${GlobalStyle.test} col-12`} src={data?.kids?.image} alt="" />
        </div>

        <div className="col-6 ">
          <img className={`${GlobalStyle.test} col-12`} src={data?.sport?.image} alt="" />
        </div>

        <div className="col-6 ">
          <img className={`${GlobalStyle.test} col-12`} src={data?.women?.image} alt="" />
        </div>
      </div>
      <div className="test d-flex col-7 flex-wrap">

        <div className="`${GlobalStyle.test} col-12`">
          <img className={"col-12"} src={data?.men?.image} alt="" />
        </div>

        <div className="col-4">
          <img className={"col-12"} src={data?.accessories?.image} alt="" />
        </div>

        <div className="`${GlobalStyle.test} col-12`">
          <img className={"col-12"} src={data?.shoes?.image} alt="" />
        </div>

        <div className="col-8">
          <img className={"col-12"} src={data?.shirt?.image} alt="" />
        </div>
        
      </div>
    </div>
  );
};
export default Category;
