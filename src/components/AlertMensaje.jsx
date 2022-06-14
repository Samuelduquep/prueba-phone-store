import React from "react";

const AlertMensaje = ({ alertMensaje }) => {
  return (
    <div
      className={`${
        alertMensaje.err ? "text-red-700" : "text-sky-600 text-sm"
      } bg-gradient-to-br text-center rounded-xl p-2`}
    >
      {alertMensaje.msg}
    </div>
  );
};

export default AlertMensaje;
