import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "./Tips.scss";
import Table from "../components/Table";

const Tips = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(11);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resolve) => setInfo(resolve.data))
      .catch((error) => console.log(error));
  }, []);

  var ids = 1;

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        })
      );
      nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== info[0].id));
    console.log(info);
    ids += 1;
    // console.log(idx);
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
  };

  const handleCancel = () => {
    setModalOn(false);
  };
  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  };

  return (
    <div className="frame">
      <h2 className="title">고객정보 리스트</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Table
          info={info}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      </table>
      <button onClick={() => handleRemove(1)}></button>
    </div>
  );
};

export default Tips;
