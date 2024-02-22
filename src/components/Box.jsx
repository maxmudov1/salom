import React from "react";

export default function Box({ cart }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">sarlavha </th>
            <th scope="col">count</th>
            <th scope="col">fovourit</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={item.id}>
                <th> {index + 1} </th>
                <td> {item.sarlavha} </td>
                <td> {item.count} </td>
                <td> {item.like ? "yoqtirilgan" : "yoqtirilmagan"} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
