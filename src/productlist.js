import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProductList(){
    let [productList, setProductList] = useState([]);

    useEffect(()=>{
        async function fetchmyAPI() {
      let products = await  fetch("https://60926a0185ff510017212b19.mockapi.io/products");
      let productData = await products.json();
      console.log(productData);
      setProductList([...productData])
    }
    fetchmyAPI()
    }, [])
    return <>
        <h1>Product Create</h1>
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                        
                        <Link to="productcreate">Create Product</Link>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Department</th>
                                            <th>Price</th>
                                            <th>Colour</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>Product Name</th>
                                            <th>Department</th>
                                            <th>Price</th>
                                            <th>Colour</th>
                                            <th>
                                            <Link to="productedit/3">Edit Product</Link>
                                            </th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    {
                                            productList.map((obj)=>{
                                                return <tr>
                                                <td>{obj.productname}</td>
                                                <td>{obj.productdepartment}</td>
                                                <td>{obj.price}</td>
                                                <td>{obj.colour}</td>
                                                <th>
                                                <Link to={`/productedit/${obj.id}`}>Edit Product</Link>
                                                </th>
                                            </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div> : <>
                            <h1>Loading</h1>
                            </>
                        </div>
                    </div>
    </>
}