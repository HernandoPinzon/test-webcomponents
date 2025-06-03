import React from "react";
import ReactDOM from "react-dom/client";
import MyComponent from "./MyComponent.jsx";

class MyWebComponent extends HTMLElement {
  static get observedAttributes() {
    return ["userid"];
  }

  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
    this._reactRoot = null;
  }

  connectedCallback() {
    this.renderReact();
  }

  attributeChangedCallback() {
    this.renderReact();
  }

  renderReact() {
    const userId = this.getAttribute("userid") || "1";

    if (!this._reactRoot) {
      this._reactRoot = ReactDOM.createRoot(this._root);
    }

    this._reactRoot.render(<MyComponent userId={userId} />);
  }
}

customElements.define("my-web-component", MyWebComponent);
