import React from "react";
import Select from "react-select";

class StartMenu extends React.Component {
  render() {
    const gameDimensions = [
      {
        label: "Três",
        value: "3"
      },
      {
        label: "Quatro",
        value: "4"
      },
      {
        label: "Cinco",
        value: "5"
      },
      {
        label: "Seis",
        value: "6"
      }
    ];

    return (
      <div>
        <label className={"dimension-label"}>Escolha a dimensão</label>
        <br />
        <Select
          options={gameDimensions}
          onChange={this.props.setGameDimension}
        />
      </div>
    );
  }
}

export default StartMenu;