
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../../styles/App.css';
import {Table, Button} from 'antd';
import axios from 'axios';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const { Column } = Table;
const totalPerPage = 10;

//Table with all items from item table (backoffice_feralbyte DB)
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      page:0,
      totalPages: 0,
      selectedRowKeys: []
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
   
  componentDidMount() {
      this.getItem();
    }

  componentDidUpdate({location = {} }) {
    if (location.pathname === '/item' && location.pathname !== this.props.location.pathname) {
      this.getItem();
    }
  }

  //Get items information
  getItem() {
    axios.get('http://localhost:3000/api/item')
    .then(({data}) => {
      const item = data.results;
      const totalPages = Math.ceil(item.length / totalPerPage);
      this.setState ({
        item: item,
        page: 0, 
        totalPages,
      });
    })
    .catch( err => {
      console.log('Error: ', err)
    })
  }

  //Table manipulation
  setPage(page) {
    return() => {
      this.setState({page});
    };
  }

  decrementPage() {
    const {page} = this.state;
    this.setState({ page: page - 1 });
  }

  incrementPage() {
    const {page} = this.state;
    this.setState({ page: page + 1});
  }

  //Select the item to be seen or to be removed
  onSelectChange = selectedRowKeys => {
    console.log('SelectedRowKeys: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  //Remove item
  handleDelete(itemId) {
    const {selectedRowKeys} = this.state;
    const id = selectedRowKeys[0]
    axios.delete(`http://localhost:3000/api/item/${id}`)
        .then(() => {
          console.log('item deleted');
          window.location.reload(true);
        });
    this.setState({
      selectedRowKeys: selectedRowKeys.filter(u => u.selectedRowKeys !== itemId),
    });
  }

  //Table with all items
  render() {
    const { item, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };

    return (
      <div>
        {/* Item information */}
        <Link to={`/item/${selectedRowKeys}`}>
          <Button type="primary" style={{float: 'right'}}><EyeOutlined style={{ display: 'inline-block', verticalAlign: 'middle'}} /></Button>
        </Link>
        {/* Delete item button */}
          <Button type="danger" onClick={this.handleDelete}><DeleteOutlined style={{ display: 'inline-block', verticalAlign: 'middle' }} /></Button>
        {/* Table with all items */}
          <Table scroll={{ x: 400 }} rowSelection={rowSelection} dataSource={item} rowKey="id">
              <Column
                title="Local de Entrega"
                dataIndex="name"
                >
              </Column>
            <Column
              title="Nº Refeições"
              dataIndex="numero"
            />
            <Column
              title="Stock"
              dataIndex="stock"
            />
            <Column
              title="Notas"
              dataIndex="notas"
            />
          </Table>
          <Link to="/item/new">
            <Button type="primary" style={{ background: "green", borderColor: "green"}}>New Item</Button>
          </Link>
      </div>
      )
    }
  }
export default Items;  