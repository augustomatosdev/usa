import React from "react";

export const ApplicationForm = () => {
  return (
    <div className="form container is-max-desktop">
      <h1 className="title has-text-centered mb-6">
        Fill in the form to start your visa process
      </h1>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">From</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="First Name" />
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Last Name" />
            </p>
          </div>
          {/* <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="email"
                placeholder="Email"
                value="alex@smith.com"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div> */}
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Date of birth</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Date of birth"
              />
            </p>
          </div>
          <div className="field">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Marital Status</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Occupation</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Ocuppation" />
            </p>
          </div>
          <div className="field">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Education level</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Birth country</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Birth country</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Current city" />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field is-expanded">
            <div className="field has-addons">
              <p className="control">
                <a className="button is-static">+44</a>
              </p>
              <p className="control is-expanded">
                <input
                  className="input"
                  type="tel"
                  placeholder="Your phone number"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input is-danger"
                type="text"
                placeholder="e.g. Partnership opportunity"
              />
            </div>
            <p className="help is-danger">This field is required</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Question</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Explain how we can help you"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
