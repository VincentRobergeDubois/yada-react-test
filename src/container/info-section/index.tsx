import * as React from "react";

import InfoCard from "./component/info-card";

class InfoSection extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
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
    );
  }
}

export default InfoSection;
