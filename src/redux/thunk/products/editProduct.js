import { editProduct } from "../../actions/productAction"

const updatedProduct = (updatedProduct) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method : "PUT",
            body : JSON.stringify(updatedProduct),
            headers : {
                "Content-type" : "application/json"
            }
        })
        const data = await res.json()

        if(data.acknowledged){
            dispatch(editProduct({

            }))
        }
    };
};

export default updatedProduct;