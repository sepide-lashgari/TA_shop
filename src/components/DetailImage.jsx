
const DetailImage=({productDetail})=>{
    console.log(productDetail)
    return(
        <div className="col-6 d-flex flex-wrap">
            {
            productDetail?.images?.map(item=>(
                <div className="col-6">
                    <img className="w-100" src={item} alt={"item.title"}/>
                </div>
                 
                )        
            )
            }
        </div>
    )
}
export default DetailImage;