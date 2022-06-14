import { useContext } from "react";
import PhoneProvider  from "../context/PhoneProvider";

const usePhone = () => {
    return useContext(PhoneProvider)
}

export default usePhone