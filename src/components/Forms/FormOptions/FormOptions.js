import FontPicker from "font-picker-react";
import React from "react";

export const FormOptions = props => (
  <div className="col-sm-3">
    <div className="block-height">
      <div className="space1" />
      <div className="d-flex flex-row mt-2">
        <ul
          className="nav nav-tabs nav-tabs--vertical nav-tabs--left"
          role="navigation"
        >
          <li className="nav-item">
            <a
              href="#blocks"
              className="nav-link active"
              data-toggle="tab"
              role="tab"
              aria-controls="blocks"
            >
              <span className="glyphicon glyphicon-th-large">blocks</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#style"
              className="nav-link"
              data-toggle="tab"
              role="tab"
              aria-controls="style"
            >
              <span className="glyphicon glyphicon-cog">design</span>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="blocks"
            role="tabpanel"
          >
            <div className="card bg-light text-dark">
              <div className="card-body">Thank You Screen</div>
            </div>
            <div className="card bg-light text-dark">
              <div className="card-body">Welcome Screen</div>
            </div>
            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("shortText")}
              >
                Short Text
              </div>
            </div>
            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("title")}
              >
                Section Title
              </div>
            </div>

            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("longText")}
              >
                Long Text
              </div>
            </div>

            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("yesOrNo")}
              >
                Yes/No
              </div>
            </div>

            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("multiChoice")}
              >
                Multiple Choice
              </div>
            </div>

            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("email")}
              >
                Email
              </div>
            </div>

            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("bvn")}
              >
                BVN Number
              </div>
            </div>

            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("number")}
              >
                Phone Number
              </div>
            </div>

            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("pasport")}
              >
                Picture
              </div>
            </div>
            <div className="card bg-light text-dark">
              <div
                className="card-body"
                onClick={() => props.prepareElement("signature")}
              >
                Signature
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="style" role="tabpanel">
            <div>
              <input
                type="number"
                placeholder="font size"
                className=" form-control"
                onChange={props.setFontSize}
              />
            </div>
            <div>
              <FontPicker
                apiKey="AIzaSyDJmW0IqI90vCu5z661kwJJpkbeBx77OPo"
                activeFont={props.activeFont}
                onChange={nextFont => props.changeFont(nextFont.family)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
