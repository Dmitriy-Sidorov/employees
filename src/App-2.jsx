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

class Table extends Component {

    addRow = () => {
        let newRow = this.state.rows;
        let countColumn = this.state.head_names.length;
        let td = [];
        for (let i = 0; i < countColumn; i++) {
            let value = this.state.value;
            td.push(value);
        }
        newRow.push(td);
        this.setState({rows: newRow});
    };

    render() {
        return (
            <div className="table">
                <div>
                    <TableHeader/>
                    <TableRow/>

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

class TableHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            head_names: ['Имя', 'Фамилия', 'Возраст', 'Работ', 'Опыт'],
        };
    }

    genHead = () => {
        let head = this.state.head_names;
        return head.map((th, i) => {
            return (
                <TD key={'th' + i} name={th}/>
            );
        });
    };

    render() {
        return (
            <div className="table--header table__row">
                {this.genHead()}
            </div>
        );
    }
}

class TableRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: [],
        };
    }

    genRow = () => {
        let rows = this.state.rows;

        return rows.map((tr, i) => {
            let row = tr.map((td, j) => {
                return (
                    <TD key={'td' + i + '_' + j} name={td}/>
                );
            });

            return (
                <div key={'tr' + i} index={i} className="table__row">
                    {row}
                    <div className="table__buttons">
                        <Buttons color="primary" name="edit"/>
                        <Buttons onClick={this.remove.bind(this)} color="danger" name="remove"/>
                    </div>
                </div>
            )
        });
    };

    remove = () => {
        let rows = this.props.state.rows;
        console.log(rows);
    };

    render() {
        return (
            this.genRow()
        );
    }
}

class TD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '-'
        };
    }
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
