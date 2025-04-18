    import {Link} from 'react-router-dom'
    import { Outlet } from 'react-router-dom';
    import "bootstrap-icons/font/bootstrap-icons.css";

    function Dashboard()
    {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">

                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <Link
                                to="/admin-dashboard"
                                className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
                                >
                                <span className="fs-5 fw-bolder d-none d-sm-inline">
                                    Admin Dashboard
                                </span>
                                </Link>

                                <ul
                                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                id="menu"
                                >
                                <li className="w-100">
                                    <Link
                                    to="/admin-dashboard"
                                    className="nav-link text-white px-0 align-middle"
                                    >
                                    <i className="fs-4 bi-speedometer2 ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                    </Link>
                                </li>

                                <li className="w-100">
                                    <Link
                                    to="/admin-dashboard/clubmanage"
                                    className="nav-link px-0 align-middle text-white"
                                    >
                                    <i className="fs-4 bi-columns ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">
                                        Manage Clubs
                                    </span>
                                    </Link>
                                </li>

                                <li className="w-100">
                                    <Link
                                    to="/admin-dashboard/membermanage"
                                    className="nav-link px-0 align-middle text-white"
                                    >
                                    <i className="fs-4 bi-people ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Manage Members</span>
                                    </Link>
                                </li>

                                <li className="w-100">
                                    <Link
                                    to="/admin-dashboard/notices"
                                    className="nav-link px-0 align-middle text-white"
                                    >
                                    <i className="fs-4 bi-person ms-2"></i>
                                    <span className="ms-2 d-none d-sm-inline">Notices</span>
                                    </Link>
                                </li>

                                <li className="w-100" >
                                    <Link
                                        to="/adminlogin"
                                        className='nav-link px-0 align-middle text-white'
                                        >
                                        <i className="fs-4 bi-power ms-2"></i>
                                        <span className="ms-2 d-none d-sm-inline">Logout</span>   
                                        </Link>
                                </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col p-0 ">
                            <div className="p-2 d-flex justify-content-center shadow mb-4">
                                <h4>Club Management System</h4>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>

            </div>
            
        )
    }

    export default Dashboard ;