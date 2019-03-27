import React, { Component } from "react";
import { Table } from "reactstrap";
import "./Table.css";

import { Link } from "react-router-dom";

class Leader extends Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <h3 className="heading" style={{ fontFamily: "Trebuchet MS" }}>
            Leaderboard
          </h3>
          {/* <i class="fa fa-search" aria-hidden="true" /> */}
          <Table bordered className="blue">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Codechef ID</th>
                <th>Rating(Cumulative)</th>
                <th>Change in rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
              <tr>
                <th>1</th>
                <td>saisvas</td>
                <td>1519</td>
                <td>0</td>
              </tr>
            </tbody>
          </Table>
        </center>
      </div>
    );
  }
}
export default Leader;
