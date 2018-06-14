import React from "react";

export default class DateComponent extends React.Component {
  showDate = () => {
    let date = new Date();
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = date.getFullYear();
    let fullDate = `${day}/${month}/${year}`;
    return fullDate;
  };
  render() {
    return <React.Fragment>{this.showDate()}</React.Fragment>;
  }
}
