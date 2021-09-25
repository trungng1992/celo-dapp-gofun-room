import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({data}) {
    if (data.length == 0) {
      return (
        <div className="error">
          <h3>Uh Oh! No have history!</h3>
          <Link to="/rooms" className="btn-primary-back">
            Back to rooms
          </Link>
        </div>
      )
    }

    console.log(data)


    return (
        <section className="addroom-container">
            <div className="roomlist-center">
                <div className="section-addroom"><h4>History</h4></div>
                <div>
                    <table className="">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>RoomName</th>
                                <th>Cost</th>
                                <th>Booking</th>
                                <th>Date</th>
                                <th>Renter Address Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(room =>
                              <tr>
                                <td>{room.index}</td>
                                <td>{room.name}</td>
                                <td>$ {room.price/1000000000000000000}</td>
                                <td>{room.isBooking == 0 ? "No" : "Yes"}</td>
                                <td>{(new Date(room.availableDate*1000)).toLocaleDateString("en-US")}</td>
                                <td>{room.renter}</td>
                              </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}


function History({historyRoom}) {
    
    return (
      <Styles>
        <Table data={historyRoom}/>
      </Styles>
    )
  }

export default History;