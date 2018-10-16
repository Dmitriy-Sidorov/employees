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
    render() {
        return (
            <div className="table">
                <div>

                    <div className="table--header table__row">
                        <div className="table__td">Имя</div>
                        <div className="table__td">Фамилия</div>
                        <div className="table__td">Возраст</div>
                        <div className="table__td">Работа</div>
                        <div className="table__td">Опыт</div>
                    </div>
                    <div className="table__row">
                        <div className="table__td">Иван</div>
                        <div className="table__td">Иванов</div>
                        <div className="table__td">33</div>
                        <div className="table__td">Хирург</div>
                        <div className="table__td">6</div>
                        <div className="table__buttons">
                            <Button outline color="primary">edit</Button>
                            <Button outline color="danger">remove</Button>
                        </div>
                    </div>
                    <div className="table__row">
                        <div className="table__td">Петр</div>
                        <div className="table__td">Петров</div>
                        <div className="table__td">23</div>
                        <div className="table__td">IT</div>
                        <div className="table__td">1</div>
                        <div className="table__buttons">
                            <Button outline color="primary">edit</Button>
                            <Button outline color="danger">remove</Button>
                        </div>
                    </div>
                    <div className="table__row mt-1">
                        <Buttons type="outline" color="secondary" name="Add" className="col"/>
                    </div>
                </div>
            </div>
        );
    }
}

class Buttons extends Component {

    render() {
        return (
            <Button _props={this.props.type} color={this.props.color}
                    className={this.props.className}>{this.props.name}</Button>
        );
    }
}

export default App;
