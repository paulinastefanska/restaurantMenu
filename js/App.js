class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "coffee latte", active: true },
      { id: 2, name: "hamburger", active: false },
      { id: 3, name: "pizza hawaii", active: false },
      { id: 4, name: "ice cream", active: true },
      { id: 5, name: "green tea", active: false },
      { id: 6, name: "chocolate cake", active: false }
    ]
  };

  handleChangeStatus = id => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });

    this.setState({
      items
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
