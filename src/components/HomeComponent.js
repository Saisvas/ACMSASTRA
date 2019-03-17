import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <body style={{width:"100%",height:"100%",backgroundImage: url("/images/chith.png"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
      // </body>
      <img
        style={{
          width: "100%",
          height: 450
        }}
        src="/images/chith.png"
      />
    );
  }
}
export default Home;
