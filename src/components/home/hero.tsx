import Photo from "../../assets/3.jpg";

export const Hero = () => {
  return (
    <div className="has-background-info">
      <div className="container">
        <section
          style={{ position: "relative" }}
          className="hero is-medium is-info"
        >
          <div
            style={{ display: "relative", zIndex: 1 }}
            className="hero-body p-0"
          >
            <div className="columns m-0 p-0">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 24,
                }}
                className="column is-6"
              >
                <p className="title">
                  There Are 9 Million Employment Openings In Canada That Need To
                  Be Filled
                </p>
                <p className="subtitle">
                  With the Help of Canadian Visa Expert, You Can Simplify Your
                  Immigration Process.
                </p>
                <button className="button is-fullwidth">APPLY NOW</button>
              </div>
              <div className="column is-6 p-0">
                <img style={{ height: "100%", width: "100%" }} src={Photo} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
