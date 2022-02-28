import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

import { DataContext } from "../../context/DataContext";

import AuthService from "../../services/AuthService";

const Logout = (props) => {

  const history = useHistory();

  const { data, setData } = useContext(DataContext);

  const handlerLogout = () => {
    Swal.fire({
      title: "Are you sure you want to leave?",
      showCancelButton: true,
      cancelButtonColor: "#CC0000",
      confirmButtonColor: "#4880D3",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then(result => {
      if (result.value) {
        logout();
        setData({auth_token: '', user: {}});
        history.push('/');
      }
    });
  }

  const logout = async () => {
    try {
      await AuthService.logout(data.auth_token);
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <Link onClick={() => handlerLogout()} to='#'>
      Logout
    </Link>
  );
  
};

export default Logout;
