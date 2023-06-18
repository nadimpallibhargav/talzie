import React from "react";
import "./Clients.scss";

const Clients = ({clients}) => {
  return (
    <section className="clients" ref={clients}>
      <div className="container">
        <div className="heading">
          <h2>We’ve worked with some cool people.</h2>
          <p>Teamed up with some digital tycoons</p>
        </div>
        <div className="clientsContent">
          <div className="clientsWrapper">
            <div className="clientsColumn">
              <div className="clientCard">
                <img
                 width={90}
                  src="/clients-logo/tvs.png"
                  alt="clinet"
                />
              </div>
              <div className="clientCard">
                <img
                                width={90}
                  src="/clients-logo/ather.png"
                  alt="clinet"
                />
              </div>
            </div>
            <div className="clientsColumn">
              <div className="clientCard">
                <img
                                width={70}

                  src="/clients-logo/2hub.png"
                  alt="clinet"
                />
              </div>
              <div className="clientCard">
                <img
                                width={70}
                                src="/clients-logo/indigg.svg"
                  alt="clinet"
                />
              </div>
              <div className="clientCard">
                <img
                                width={90}
                                src="/clients-logo/wise-drive.svg"
                  alt="clinet"
                />
              </div>
            </div>
            <div className="clientsColumn">
              <div className="clientCard">
                <img
                                width={70}
               src="/clients-logo/captain-fresh.svg"
                  alt="clinet"
                />
              </div>
              <div className="clientCard">
                <img
                                width={70}
                  src="/clients-logo/hope.png"
                  alt="clinet"
                />
              </div>
            </div>
            <div className="clientsColumn">
              <div className="clientCard">
                <img
                                width={80}
                                src="/clients-logo/becon.png"
                  alt="clinet"
                />
              </div>
              <div className="clientCard">
                <img
                                width={70} style={{borderRadius: 6}}
               src="/clients-logo/onDway.webp"
                  alt="clinet"
                />
              </div>
              <div className="clientCard">
                <img
                                width={90}


       src="/clients-logo/magnum-honda.png"
                  alt="clinet"
                />
              </div>
            </div>
            <div className="clientsColumn">
              <div className="clientCard">
                <img
                                width={80}
             src="/clients-logo/sirovate.png"
                  alt="clinet"
                />
              </div>
              <div className="clientCard">
                <img
                                width={80}
                                src="/clients-logo/revise.svg"
                  alt="clinet"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
