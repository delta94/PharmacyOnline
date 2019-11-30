import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown, Table, Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import DrugTable from './DrugTable';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'react-bootstrap-table/css/react-bootstrap-table.css';
import './react-bootstrap-table-all.min.css';
import './table.scss';

const FirstCol = styled.div`
    width: 60%;
    padding: 0 20px 0 0;
    float: left;
    background-color: rgb(230, 230, 230);
`
const SecondCol = styled.div`
    width: 40%;
    padding-top: 10px;
    float: right;
    // background-color: red;
`
const Title = styled.h1`
    font-size: 28px;
    color: #0091ea;
    float: center;
    display:flex;
    justify-content: center;
    align-content: center;
`
class Pharmacist extends React.Component{

    render(){
        return(
            <>
            <FirstCol>
                yuh
            </FirstCol>

            <SecondCol>
                <Title> Drugs In Stock </Title>
                <DrugTable/>
            </SecondCol>
            </>
        )
    }

}

export default Pharmacist;