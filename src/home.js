import React, { Component } from 'react';
import ReactTable from "react-table";
import { Link } from 'react-router';
import "react-table/react-table.css";
import StarRatings from "react-star-ratings";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/' + 'http://starlord.hackerearth.com/books')
            .then(res => res.json())
            .then((data) => {
                this.setState({ books: data })
            })
            .catch(console.log)
    }

    goToCart() {
        window.location.href = "/cart";
    }

    checkColumn(index) {
        let { columns } = this.state;
        let newColumns = [...columns];
        newColumns[index].show = !newColumns[index].show;
        this.setState({
            columns: newColumns
        });
    }

    render() {
        let books = this.state.books;
        return (
            <div>
                <div>
                    <div style={{ width: "78%" }}>
                        <center>
                            <table border="2">
                                <tr>
                                    <td colspan="8"><center>Select the columns to display</center></td>
                                </tr>
                                <tr>
                                    <td>
                                        ID <input type="checkbox" />
                                    </td>
                                    <td>
                                        Title <input type="checkbox" />
                                    </td>
                                    <td>
                                        Author <input type="checkbox" />
                                    </td>
                                    <td>
                                        Avg. Rating <input type="checkbox" />
                                    </td>
                                    <td>
                                        ISBN <input type="checkbox" />
                                    </td>
                                    <td>
                                        Language <input type="checkbox" />
                                    </td>
                                    <td>
                                        Ratings Count <input type="checkbox" />
                                    </td>
                                    <td>
                                        Price <input type="checkbox" />
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </div>
                    <div style={{ width: "20%", float: "right" }}>
                        <FontAwesomeIcon icon={faCartPlus} size="3x" color="blue" style={{ position: "fixed", zIndex: "100" }} onClick={this.goToCart} />
                    </div>
                </div>
                <br />
                <div>
                    <ReactTable
                        data={books}
                        filterable={true}
                        columns={[{
                            Header: 'ID',
                            accessor: 'bookID',
                            show: true
                        }, {
                            Header: 'Title',
                            show: true,
                            accessor: 'title'
                        }, {
                            Header: 'Author',
                            show: true,
                            accessor: 'authors'
                        }, {
                            Header: 'Average Rating',
                            show: true,
                            accessor: 'average_rating',
                            Cell: row => {
                                return (<StarRatings
                                    rating={row.value}
                                    starDimension="20px"
                                    starSpacing="5px"
                                    starRatedColor="orange"
                                />);
                            }

                        }, {
                            Header: 'ISBN',
                            show: true,
                            accessor: 'isbn'
                        }, {
                            Header: 'Language',
                            show: true,
                            accessor: 'language_code'
                        }, {
                            Header: 'Ratings Count',
                            show: true,
                            accessor: 'ratings_count'
                        }, {
                            Header: 'Price',
                            show: true,
                            accessor: 'price'
                        }, {
                            Header: 'Cart',
                            filterable: false,
                            Cell: row => {
                                return (
                                    <div>
                                        <center>
                                            <input type="button" value="-" /> <input type="text" value="0" style={{ width: "20px" }} /> <input type="button" value="+" />
                                        </center>
                                    </div>
                                );
                            }
                        }
                        ]
                        }
                    />
                </div>
            </div >
        );
    }
}
export default Home;
