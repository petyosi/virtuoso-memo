import React from "react";

export function trackPerformance(name: string) {
  const start = performance.now();
  setTimeout(() => {
    const duration = performance.now() - start;
    console.log(name, duration);
  });
}

const _cacheMap = new Map<number, React.JSX.Element>()

function memoize(fn: (index: number) => React.JSX.Element) {
  return function (index: number) {
    const cacheContent = _cacheMap.get(index) 
    if (!cacheContent) {
      _cacheMap.set(index, fn(index))
    }
    return _cacheMap.get(index)
  }
}

export const itemContent = memoize((subIndex) => {
  trackPerformance(`itemContent ${subIndex}`);
  if (subIndex % 2 === 0) {
    return (
      <div>
        <div
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            borderBottom: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "4px",
              alignItems: "center",
              position: "relative",
              maxWidth: "1100px",
              margin: "0px auto",
            }}
          >
            <div style={{color: 'white'}}>{subIndex}:</div>
            <div
              className="sentence-row"
              style={{
                width: "100%",
                background: "rgba(46, 49, 54, 0.533)",
                display: "flex",
                justifyContent: "center",
                padding: "0px",
                margin: "2px 0px",
                borderRadius: "5px",
              }}
            >
              <div
                className="sentence-wrap"
                style={{
                  transition: "background-color 0.4s ease 0s",
                  width: "100%",
                  padding: "0px 2px",
                  position: "relative",
                }}
              >
                <div style={{ padding: "0px" }}>
                  <span className="lr-play-btn">
                    <span style={{ opacity: 1 }}>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-colorSecondary MuiSvgIcon-fontSizeMedium css-6gmp6y"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PlayCircleFilledSharpIcon"
                        style={{ opacity: 1, color: "rgb(145, 60, 160)" }}
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "54%", padding: "4px 14px 5px 0px" }}>
                    <span className="sentence-view" lang="en">
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>I</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>felt</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>like</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>thinking</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>of</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>parents</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        ,
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>I</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>felt</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>terrible</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>asking</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>for</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                    </span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div
                      lang="nl"
                      style={{ padding: "4px 3px 4px 0px", fontSize: "16px" }}
                    >
                      <span>
                        <span className="dc-orig dc-lang-nl">
                          <span
                            lang="nl"
                            style={{ color: "rgba(255, 255, 255, 0.667)" }}
                          >
                            Ik dacht aan ouders. Ik voelde me vreselijk om te
                            vragen
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="star-and-menu-buttons default"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span className="btn inactive" aria-label="Save phrase">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="StarOutlineIcon"
                    style={{ fontSize: "22px" }}
                  >
                    <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                  </svg>
                </span>
                <span className="btn">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="MoreVertIcon"
                    style={{ fontSize: "22px", transform: "translateY(-1%)" }}
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            borderBottom: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "4px",
              alignItems: "center",
              position: "relative",
              maxWidth: "1100px",
              margin: "0px auto",
            }}
          >
            <div style={{color: 'white'}}>{subIndex}:</div>
            <div
              className="sentence-row"
              style={{
                width: "100%",
                background: "rgba(46, 49, 54, 0.533)",
                display: "flex",
                justifyContent: "center",
                padding: "0px",
                margin: "2px 0px",
                borderRadius: "5px",
              }}
            >
              <div
                className="sentence-wrap"
                style={{
                  transition: "background-color 0.4s ease 0s",
                  width: "100%",
                  padding: "0px 2px",
                  position: "relative",
                }}
              >
                <div style={{ padding: "0px" }}>
                  <span className="lr-play-btn">
                    <span style={{ opacity: 1 }}>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-colorSecondary MuiSvgIcon-fontSizeMedium css-6gmp6y"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PlayCircleFilledSharpIcon"
                        style={{ opacity: 1, color: "rgb(145, 60, 160)" }}
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "54%", padding: "4px 14px 5px 0px" }}>
                    <span className="sentence-view" lang="en">
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>Because</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>that</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>now</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>leaves</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>limited</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>flights</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>to</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>where</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>the</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>parents</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>can</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>get</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        {" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(255, 255, 255)",
                          whiteSpace: "nowrap",
                          position: "relative",
                          cursor: "pointer",
                          display: "inline",
                          lineHeight: "1.4",
                          background: "transparent",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "transparent",
                            borderBottom: "1px solid transparent",
                            borderTop: "1px solid transparent",
                            margin: "0px",
                            transition: "background-color 0.2s ease 0s",
                            borderRadius: "3px",
                            position: "relative",
                            boxSizing: "border-box",
                            fontSize: "1em",
                          }}
                        >
                          <span>on</span>
                          <span
                            style={{
                              position: "absolute",
                              top: "-1px",
                              left: "-1px",
                              width: "calc(100% + 2px)",
                              height: "calc(100% + 2px)",
                              pointerEvents: "none",
                              borderRadius: "2px",
                              borderWidth: "calc(0.6px + 0.065em)",
                              borderStyle: "solid",
                              borderColor: "transparent",
                              transition: "border-color 0.2s ease 0s",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          lineHeight: "1.4",
                          color: "rgb(204, 204, 204)",
                        }}
                      >
                        .
                      </span>
                    </span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div
                      lang="nl"
                      style={{ padding: "4px 3px 4px 0px", fontSize: "16px" }}
                    >
                      <span>
                        <span className="dc-orig dc-lang-nl">
                          <span
                            lang="nl"
                            style={{ color: "rgba(255, 255, 255, 0.667)" }}
                          >
                            Want dat laat nu beperkte vluchten over. waar de
                            ouders kunnen instappen.
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="star-and-menu-buttons default"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span className="btn inactive" aria-label="Save phrase">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="StarOutlineIcon"
                    style={{ fontSize: "22px" }}
                  >
                    <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                  </svg>
                </span>
                <span className="btn">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="MoreVertIcon"
                    style={{ fontSize: "22px", transform: "translateY(-1%)" }}
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
})
