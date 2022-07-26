import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {validateRol} from "../../helpers/validateRoles";

const ValidateRolRector = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  useEffect(() => {
    validateRol("ROLE_RECTOR", user.tokeDeAcceso, user.id, user.tipoRol, user.estado)
      .then(resp => { if(resp) return navigate(resp) });
  }, [navigate, user]);

  return (<></>);
};

export default ValidateRolRector;
