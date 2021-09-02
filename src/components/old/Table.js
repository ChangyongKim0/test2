import React from "react";

const Item = ({ item, handleRemove, handleEdit }) => {
  const onRemove = () => {
    handleRemove(item.id);
    console.log("clicked");
  };

  const onEdit = () => {
    handleEdit(item);
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.website}</td>
      <td>
        <i onClick={onEdit}>수정</i>
      </td>
      <td onRemove={onRemove}>
        <i>삭제</i>
      </td>
    </tr>
  );
};

const Table = ({ info, handleRemove, handleEdit }) => {
  return (
    <tbody>
      {info.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        );
      })}
    </tbody>
  );
};

export default Table;
