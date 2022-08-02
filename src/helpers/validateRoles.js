export const validateRol = (baseRole, token, id, role, status) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (token && id) {
        if (baseRole !== "ROLE_ADMIN" && role === "ROLE_ADMIN" && status === "A") resolve('/inicio_admin');
        if (baseRole !== "ROLE_CONTRATISTA" && role === "ROLE_CONTRATISTA" && status === "A") resolve('/inicio_contratista');
        if (baseRole !== "ROLE_RECTOR" && role === "ROLE_RECTOR" && status === "A") resolve('/inicio_rector');
        if (baseRole !== "ROLE_COORDINADOR" && role === "ROLE_COORDINADOR" && status === "A") resolve('/inicio_coordinador');
        if (baseRole !== "ROLE_PROFESOR" && role === "ROLE_PROFESOR" && status === "A") resolve('/inicio_profesor');
        else resolve(null);
      } else resolve('/');
    }, 10);
  });
}