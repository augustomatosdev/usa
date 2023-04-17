import React, { useRef, useState } from "react";

export const Password = ({ setPassword }: { setPassword: any }) => {
  const [error, setError] = useState("");
  const ref: any = useRef();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ref.current = e.target.value;
  };

  const onSubmit = () => {
    if (!ref.current) return;
    if (ref.current === "100") {
      localStorage.setItem("hadja-password", "100");
      setPassword("100");
    } else {
      setError("Resultado incorreto por favor tente novamente!");
      console.log(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      className="column is-4 container is-max-desktop has-background-danger-light"
    >
      <div className="box">
        <div className="field">
          <label className="label">
            Responda a seguinte questão para aceder
          </label>
          <label className="label has-text-weight-normal">
            Qual é o resultado de <strong>10x10?</strong>
          </label>
          <div className="control">
            <input
              onChange={onChange}
              className="input"
              type="number"
              placeholder="Escreva aqui o resultado..."
            />
            {error && <p className="help has-text-danger">{error}</p>}
          </div>
        </div>
        <button onClick={onSubmit} className="button is-fullwidth is-info">
          ENTRAR
        </button>
      </div>
    </div>
  );
};
