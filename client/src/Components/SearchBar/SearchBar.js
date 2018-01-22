import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Header } from 'semantic-ui-react';
import apac from "./apac";
import Modal from "./Modal";

export default class SearchExampleStandard extends Component {
  state = {
    source: apac.apac(""),
    item : "",
    price : "",
    image : "",
    accountId: "",
    accountName: ""
  }

  componentWillMount() {
    this.resetComponent()
  }
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {

    let selected = {
      item : result.title,
      price : result.price,
      image : result.image,
      accountId: sessionStorage.getItem("userId") || 1,
      accountName : sessionStorage.getItem("userName") || "Sahm"
    };
    this.setState(selected);
  }
  setSearch = () => {
    this.setState({ source: apac.apac(this.state.value) })
  }

  debounced = _.debounce(this.setSearch, 1000);
  handleSearchChange = (e, { value }) => {

    this.setState({ isLoading: true, value })
    this.debounced();
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      })
    }, 5000);
  };


  render() {
    const { isLoading, value, results } = this.state

    return (
      <div>
        <Header as='h2' color='blue' textAlign='center'>Search Amazon</Header>
        <Search
          fluid
          input={{ fluid: true }}
          aligned='center'
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
          style={{ overflow: true }}
        />
        <Modal {...this.state}/>
      </div>
    )
  }
};