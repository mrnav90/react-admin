import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import classnames from 'classnames';
import {ShowIf} from 'components/utils';
import menu from './menu';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleMenu(idx) {
    if (this.state.active && this.state.active === idx) {
      this.setState({active: false});
    } else {
      this.setState({active: idx});
    }
  }

  render() {
    return (
      <aside className="sidebar-container">
        <header className="logo"></header>
        <div className="container">
          <ul className="navbar-menu">
            {
              menu.map((item, idx) => {
                return (
                  <li className={classnames('nav-item', {'toggle-menu': this.state.active === idx})} key={idx} onClick={item.subMenu && this.toggleMenu.bind(this, idx)}>
                    <ShowIf condition={item.subMenu.length === 0}>
                      <NavLink className="nav-link" to={item.link} activeClassName="active">
                        <i className={item.icon}></i>
                        <span className="title">{item.name}</span>
                      </NavLink>
                    </ShowIf>
                    <ShowIf condition={item.subMenu.length > 0}>
                      <a className="nav-link nav-toggle">
                        <i className={item.icon}></i>
                        <span className="title">{item.name}</span>
                        <span className="arrow"></span>
                      </a>
                      <ul className="sub-menu">
                        {
                          item.subMenu.map((subItem, subKey) => {
                            return (
                              <li className="nav-item" key={subKey}>
                                <NavLink className="nav-link" to={subItem.link} activeClassName="active">
                                  <span className="title">{subItem.name}</span>
                                </NavLink>
                              </li>
                            );
                          })
                        }
                      </ul>
                    </ShowIf>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </aside>
    );
  }
}
