import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import { FormOutlined, FileTextOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import axios from 'axios';


//Align form (to be configured as needed)
const layout = {
    labelCol: {
      span: 2,
    }
  };

  const { Option } = Select;

class ItemForm extends Component {
    constructor(props) {
        super(props);
        const { item = {}} = props;
        this.state = { 
            item
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDropChange = this.handleDropChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('From ItemForm: ', nextProps);
    }

    //Input values from the form 
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleDropChange(event) {
        console.log(event)  
        this.setState({name: event});  }
    

    //Submit and create the item
    handleSubmit(e) {
        e.preventDefault();
        const item = {
            name: this.state.name,
            numero: this.state.numero,
            stock: this.state.stock,
            notas: this.state.notas,
        };
        console.log("Final item: ", item)            
        //const {handleSubmit} = this.props;
        axios.post(`http://localhost:3000/api/item`, item,
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

    handleClose(e) {
        e.preventDefault();
        this.props.history.push('/item');
    }

    render() {
        //Item attributes
        const {item: {name, numero, stock, notas} } = this.state;
        //Attributes received from ItemAdd.js
        const {handleCancel, submitText = 'Create'} = this.props;
        return (
            <div>
                <h2 style={{display:'flex', justifyContent: 'center'}}>New item</h2>
                {/*Form to create a new item*/}
                <Form {...layout}>
                    <Form.Item
                        label="Local de Entrega"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the name!',
                        },
                        ]}
                        >
                        <Select 
                            value={name} 
                            onChange={this.handleDropChange}
                            showSearch
                            style={{ display:'flex' }}
                            placeholder="Search to Select"
                            OptionFilterProp="children"
                            filterOption={(input, Option) =>
                            Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(OptionA, OptionB) =>
                            OptionA.children.toLowerCase().localeCompare(OptionB.children.toLowerCase())
                            }>
                            <Option value="Baixa">Baixa</Option>
                            <Option value="Terço">Terço</Option>
                            <Option value="Ju">JU</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Nº Refeições"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the description!',
                        },
                        ]}
                        ><Input
                            prefix={<FileTextOutlined className="site-form-item-icon" />}
                            type="number"
                            name="numero"
                            value={numero}
                            onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Stock"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the name!',
                        },
                        ]}
                        ><Input
                            prefix={<FormOutlined className="site-form-item-icon" />}
                            type="text"
                            name="stock"
                            value={stock}
                            onChange={this.handleChange}
                            />
                    </Form.Item>
                    <Form.Item
                        label="Notas"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the name!',
                        },
                        ]}
                        ><Input
                            prefix={<FormOutlined className="site-form-item-icon" />}
                            type="text"
                            name="notas"
                            value={notas}
                            onChange={this.handleChange}
                            />
                    </Form.Item>
                    <Form.Item className="float-right">
                        {/* Cancel Button */}
                        <Button key="2" onClick={this.handleClose} type="primary" danger>Cancel</Button>
                        {/* Save Button */}
                        <Button key="1" style={{ background: "green", marginLeft: "5px", borderColor: "green", color: "white"}} type="submit" onClick={this.handleSubmit}>{submitText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default ItemForm;
