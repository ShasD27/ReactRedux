import React from "react";
import List from "./List";
import { useDispatch, useSelector} from "react-redux";
import { getUserList } from "../actions/userAction";

const UsersList = () => {
    const dispatch = useDispatch()
    const { userList }= useSelector((state) => state.userReducer)
  const getUsers = () => {
    dispatch(getUserList())
  }
  return (
    <div>
        <button onClick={getUsers}>Get Users</button>
        <List list = {userList}/>
    </div>
  );
};

export default UsersList;
