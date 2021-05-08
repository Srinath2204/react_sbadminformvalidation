import {Link} from "react-router-dom";
import { useEffect, useState} from "react";

export default function UserList(){
    let [userList, setUserList] = useState([]);

    useEffect(()=>{
        async function fetchMyAPI() {
      let users = await  fetch("https://60926a0185ff510017212b19.mockapi.io/users");
      let userData = await users.json();
      console.log(userData);
      setUserList([...userData])
        }
        fetchMyAPI()
    }, [])
    return <>
     <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                <Link to="usercreate">Create User</Link>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="card-body">
                            {
                                userList.length > 0 ? <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Company Name</th>
                                            <th>Email</th>
                                            <th>Location</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Company Name</th>
                                            <th>Email</th>
                                            <th>Location</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>
                                            <Link to="useredit/1">Edit User</Link>
                                            </th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            userList.map((obj)=>{
                                                return <tr>
                                                <td>{obj.name}</td>
                                                <td>{obj.companyname}</td>
                                                <td>{obj.email}</td>
                                                <td>{obj.country}</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                                <th>
                                                <Link to={`/useredit/${obj.id}`}>Edit User</Link>
                                                </th>
                                            </tr>
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                            </div> : <>
                            <h1>Loading</h1>
                            </>
                            }
                        </div>
                    </div>
    </>
}