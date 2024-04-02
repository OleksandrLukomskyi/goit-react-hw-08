import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";

import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { DocumentTitle } from "../components/DocumentTitle";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const registerUser = (body) => {
    dispatch(register(body));
  };

  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm register={registerUser} />
    </div>
  );
};

export default RegistrationPage;
