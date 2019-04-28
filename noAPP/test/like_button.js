'use strict';

const e = React.createElement;

const jsonData = [
  {
    id: 1,
    title: 'همه اگهی ها',
    children: [
      {
        id: 2,
        title: 'opt1',
        children: [{ id: 6, title: 'op1-1' }, { id: 7, title: 'op1-2' }]
      },
      { id: 3, title: 'املاک', children: null },
      { id: 4, title: 'opt2', children: null },
      { id: 5, title: 'opt3', children: [{ id: 8, title: 'op2-1' }] }
    ]
  }
];

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    if (this.props.idStart == 1) {
      this.state = {
        items: [
          { id: 1, title: 'opt1' },
          { id: 2, title: 'opt1' },
          { id: 3, title: 'opt2' },
          { id: 4, title: 'opt3' }
        ]
      };
    } else if (this.props.idStart == 2) {
      this.state = {
        items: [{ id: 1, title: 'opt1' }, { id: 2, title: 'opt1' }]
      };
    }
  }
  render() {
    return (
      <div className="ui container">
        <div className="search-bar ui segment">
          <form action="" className="ui form">
            <div className="field">
              <label>جستجوی آگهی ها</label>
              <DropHeader header="همه دسته بندی ها" />
            </div>
            <DropItems items={this.state.items} />
          </form>

          <div>{this.props.tips}</div>
        </div>
      </div>
    );
  }
}

class DropHeader extends React.Component {
  state = { header: this.props.header };

  onHeaderClick = () => {
    console.log('clicke', this.props.header);
    this.setState({ header: 'saeed' });
  };

  render() {
    return <div onClick={this.onHeaderClick}>{this.state.header}</div>;
  }
}

class DropItems extends React.Component {
  state = {
    items: this.props.items
  };

  renderlist(item) {
    return (
      <li key={item.id} id={item.id}>
        {item.title}
      </li>
    );
  }

  render() {
    const { items } = this.state;
    return <ul>{items.map(item => this.renderlist(item))}</ul>;
  }
}

ReactDOM.render(
  <DropDown tips="hello" idStart="1" />,
  document.querySelector('#ilya-box')
);
