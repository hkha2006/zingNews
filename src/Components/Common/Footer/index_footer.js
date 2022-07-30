import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-center text-lg-start bg-light text-muted">
          <div className="text-center p-4">
            © 2022 Copyright:
            <a className="text-reset fw-bold" href="#">
              Dang Hoang Kha
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
