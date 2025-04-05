import { Link } from "react-router-dom";

function ManageMember()
{
    return (
      <div>
        <div className="px-5 mt-5">
            <div className="d-flex justify-content-center">
                <h3 className="text-primary">Manage Members</h3>
            </div>

            <div className="px-5 mt-5">
                <div className="row gx-4 gy-4">

                    <div className="col-lg-4 col-sm-12 col-12 border">
                      <div className="m-2 p-2">
                          <div>
                            <h2 className="text-center">Add members</h2><hr></hr>
                            <div className="d-flex justify-content-center gap-2">
                              <i className="fa-solid fa-user-plus mt-1"></i> 
                              <p>Do you want to add Anyone ?</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <Link to="/admin-dashboard/addmember" className="btn btn-primary">Add</Link>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-12 border">
                      <div className="m-2 p-2">
                          <div>
                            <h2 className="text-center">Delete members</h2><hr></hr>
                            <div className="d-flex justify-content-center gap-2">
                            <i class="fa-solid fa-user-slash mt-1"></i>
                              <p>Do you want to remove Anyone ?</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <Link to="/admin-dashboard/deletemember" className="btn btn-primary">Delete</Link>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-12 border">
                      <div className="m-2 p-2">
                          <div>
                            <h2 className="text-center">Add members</h2><hr></hr>
                            <div className="d-flex justify-content-center gap-2">
                            <i class="fa-solid fa-users-viewfinder mt-1"></i> 
                              <p>Do you want to view Members</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <Link to="/admin-dashboard/viewmember" className="btn btn-primary">View</Link>
                            </div>
                          </div>
                      </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    )
}

export default ManageMember ;