import { decodeToken } from "../utils/decodeToken";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: JSX.Element | JSX.Element[];
  allowedRoles: string[];
}) => {
  const { roles } = decodeToken();
  const hasPermission = allowedRoles.some((role) => roles.includes(role));

  if (hasPermission) {
    return children;
  }

  return <Navigate to="/" />;
};
