import React, {Component} from 'react';
import {Container, Row, Button} from 'reactstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <Container>
                <Table/>
            </Container>
        );
    }
}

let value = 0;

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            head_names: ['Имя', 'Фамилия', 'Возраст', 'Работ', 'Опыт'],
            rows: [],
            value: [],
            input: false
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    genHead = () => {
        let head = this.state.head_names;
        return head.map((th, i) => {
            return (
                <TD key={'th' + i} name={th}/>
            );
        });
    };

    genRow = () => {
        const {rows, input, value} = this.state;
        let val = value;
        return rows.map((tr, i) => {
            let row = tr.map((td, j) => {
                val = td;
                return (
                    <div onDoubleClick={this.editTD} key={'td' + i + '_' + j} className="table__td"
                         name={val}>{(input && <input value={val} onChange={this.handleChange}/>) || val
                    }
                    </div>
                );
            });

            return (
                <div key={'tr' + i} id={i} className="table__row">
                    {row}
                    <div className="table__buttons">
                        <Buttons onClick={this.editTD} color="primary" name="edit"/>
                        <Button onClick={this.remove.bind(this.props.id)} color="danger" name="remove">remove</Button>
                    </div>
                </div>
            )
        });
    };

    editTD = () => {
        const {input} = this.state;

        this.setState({input: !input});
    };

    addRow = () => {
        let newRow = this.state.rows;
        let countColumn = this.state.head_names.length;
        let td = [];

        for (let i = 0; i < countColumn; i++) {
            //let value = this.state.value;

            td.push(value);
            value++
        }
        newRow.push(td);
        this.setState({rows: newRow});
    };

    remove = (i) => {
        const {rows} = this.state;
        rows.splice(i, 1);
        console.log(i);

        this.setState({rows: rows});
    };

    render() {
        return (
            <div className="table">
                <div>
                    <div className="table--header table__row">
                        {this.genHead()}
                    </div>
                    {this.genRow()}
                    <div className="table__row mt-1">
                        <Buttons onClick={this.addRow.bind(this)}
                                 type="outline" color="secondary" name="Add"
                                 className="col"/>
                    </div>
                </div>
            </div>
        );
    }
}

class TD extends Component {
    render() {
        return (
            <div className="table__td">{this.props.name}</div>
        );
    }
}

class Buttons extends Component {

    render() {
        return (
            <Button onClick={this.props.onClick}
                    outline color={this.props.color}
                    className={this.props.className}>{this.props.name}</Button>
        );
    }
}


export default App;
