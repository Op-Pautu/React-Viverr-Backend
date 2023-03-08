import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";
function Orders() {
  const currentUser = {
    id: 1,
    username: "Jane Doe",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>13</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;
