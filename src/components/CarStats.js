import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarStats.css";
const CarStats = ({posts}) => {
   return (
    <div className="car-info-container flex-column flex-md-row">
                <div className="car-info-card  mb-3 mb-md-0 me-0 me-md-4">
                  {/* Shows "EXTRIOR" in the task i think they wanted to say EXTERIOR */}
                  <h4 className="car-info-card-title">EXTERIOR</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-muted">Cylinders</td>
                        <td className="font-weight-bold">{posts.cylinders}</td>
                      </tr>
                      <tr>
                        <td className="text-muted">City MPG</td>
                        <td className="font-weight-bold">{posts.cityMPG}</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Highway MPG</td>
                        <td className="font-weight-bold">{posts.highwayMPG}</td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0 text-muted">Engine</td>
                        <td className="border-bottom-0 font-weight-bold">{posts.engine}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="car-info-card ms-0 ms-md-4">
                  <h4 className="car-info-card-title">PERFORMANCE</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-muted">Cylinders</td>
                        <td className="font-weight-bold">{posts.cylinders}</td>
                      </tr>
                      <tr>
                        <td className="text-muted">City MPG</td>
                        <td className="font-weight-bold">{posts.cityMPG}</td>
                      </tr>
                      <tr>
                        <td className="text-muted">Highway MPG</td>
                        <td className="font-weight-bold">{posts.highwayMPG}</td>
                      </tr>
                      <tr>
                        <td className="border-bottom-0 text-muted">Engine</td>
                        <td className="border-bottom-0 font-weight-bold">{posts.engine}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
  );
};

export default CarStats;
