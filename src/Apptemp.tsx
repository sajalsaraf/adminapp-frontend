import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>

        {/* <div id="navbarSearch" className="navbar-search w-100 collapse">
          <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search">
        </div> */}
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-lg offcanvas-end bg-body-tertiary" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">

                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      {/* <svg className="bi"><use xlink:href="#people" /></svg> */}
                      Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      {/* <svg className="bi"><use xlink:href="#graph-up" /></svg> */}
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      {/* <svg className="bi"><use xlink:href="#puzzle" /></svg> */}
                      Integrations
                    </a>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>Saved reports</span>
                  <a className="link-secondary" href="#" aria-label="Add a new report">
                    {/* <svg className="bi"><use xlink:href="#plus-circle" /></svg> */}
                  </a>
                </h6>

                {/* <hr className="my-3"> */}

                  <ul className="nav flex-column mb-auto">
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        {/* <svg className="bi"><use xlink: href="#gear-wide-connected"/></svg> */}
                        Settings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        {/* <svg className="bi"><use xlink: href="#door-closed"/></svg> */}
                        Sign out
                      </a>
                    </li>
                  </ul>
                {/* </hr> */}
              </div>
            </div>
          </div>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
