import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Header } from 'semantic-ui-react';
import apac from "./apac";

export default class SearchExampleStandard extends Component {
  state = {
    source: apac.apac("")
  }

  componentWillMount() {
    this.resetComponent()
  }
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

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
      </div>
    )
  }
};