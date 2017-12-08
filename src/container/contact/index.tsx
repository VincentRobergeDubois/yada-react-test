import * as React from "react";

import { Column, Row } from "react-foundation";

import SideBar from "component/side-bar";
import TopBar from "container/top-bar";

import InfoCard from "./component/info-card";

class Contact extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Row id="contact-container" isExpanded={true}>
        <SideBar />
        <Column id="content">
          <TopBar isGuestPage={true} />
          <div className="columns">
            <div className="row expanded">
              <p>Text Example</p>
            </div>
            <div className="row expanded">
              <div className="columns large-6">
                <div className="row">
                  <InfoCard
                    name="Mathieu Courreault"
                    title="Conseiller"
                    email="m.courreault@yada.services"
                  />
                </div>
                <div className="row">
                  <InfoCard
                    name="Vincent Brazeau"
                    title="Conseiller"
                    email="vincent.brazeau@yada.services"
                  />
                </div>
                <div className="row">
                  <InfoCard
                    name="Vincent Roberge-Dubois"
                    title="Développeur Web"
                    email="vincent.robergedubois@yada.services"
                  />
                </div>
              </div>
            </div>
          </div>
        </Column>
      </Row>
    );
  }
}

export default Contact;
