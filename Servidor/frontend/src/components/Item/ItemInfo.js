import React, { Component } from 'react';
import {Button, Form, Input} from 'antd';
import axios from 'axios';
import {DeleteOutlined, FileTextOutlined, FormOutlined} from "@ant-design/icons";
import { Select } from 'antd';

const layout = {
    labelCol: {
        span: 2,
    }
};


const { Option } = Select;

//Individual information for each Item (View button)
class ItemInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item: [],
            name: "", 
            numero: "",
            stock: "",
            notas: "",
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDropChange = this.handleDropChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Get info about an specific item
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`http://localhost:3000/api/item/${params.itemId}`)
        .then(({data}) => {
            const item = data.results[0];
            this.setState ({
                item: item,
                name: item.name,
                numero: item.numero,
                stock: item.stock,
                notas: item.notas
              }); 
            });
    }

    //Edit item information
    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value,
        });
    }

    handleDropChange(event) {
        console.log(event)  
        this.setState({name: event});  }

    //Remove item
    handleDelete() {
        const { match: { params } } = this.props;
        axios.delete(`http://localhost:3000/api/item/${params.itemId}`)
        .then(() => {
            console.log('item deleted');
            this.props.history.push('/item');
        });
    }

    //Submit and update item
    handleSubmit(e) {
        e.preventDefault();
        const { match: { params } } = this.props;
        const item = {
            name: this.state.name,
            numero: this.state.numero,
            stock: this.state.stock,
            notas: this.state.notas
        };
        axios.post(`http://localhost:3000/api/item/${params.itemId}`, item,
        {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(({data: item}) => {
            console.log('Item updated: ', item);
            const { history } = this.props;
            history.push('/item');
        });
    }

    //Close page and get back to Items.js
    handleClose(e) {
        e.preventDefault();
        this.props.history.push('/item');
    }

    //Edit form
    render() {
        const { item } = this.state;
        return (
        <div className="">
            <h2 style={{display:'flex', justifyContent: 'center'}}>{this.state.name}</h2>
            <Form {...layout}>
                <Form.Item>
                    {/* Delete item button */}
                    <Button style={{ float: 'right', margin: '5px'}} type="danger" onClick={this.handleDelete}><DeleteOutlined style={{ display: 'inline-block', verticalAlign: 'middle' }} /></Button>
                </Form.Item>
                <Form.Item
                    label="Local de Entrega"
                >
                <Select
                    value={this.state.name} 
                    onChange={this.handleDropChange}
                    showSearch
                    style={{ display:'flex' }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }>
                    <Option value="Baixa">Baixa</Option>
                    <Option value="Terço">Terço</Option>
                    <Option value="Ju">JU</Option>
                </Select>
                </Form.Item>
                <Form.Item
                    label="Nº Refeições"
                ><Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    type="text"
                    name="numero"
                    value={this.state.numero}
                    onChange={this.handleChange} />
                </Form.Item>
                <Form.Item
                    label="Stock"
                ><Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    type="text"
                    name="stock"
                    value={this.state.stock}
                    onChange={this.handleChange} />
                </Form.Item>
                <Form.Item
                    label="Notas"
                ><Input
                    prefix={<FileTextOutlined className="site-form-item-icon" />}
                    type="text"
                    name="notas"
                    value={this.state.notas}
                    onChange={this.handleChange} />
                </Form.Item>
            </Form>
            <div className="float-right mt-5">
                <Button onClick={this.handleClose} type="primary" danger>Cancel</Button>
                <Button onClick={this.handleSubmit} style={{ background: "green", marginLeft: "5px", borderColor: "green", color: "white"}} type="submit">Update Item</Button>
            </div>
        </div>
        )
    }
}

export default ItemInfo;
