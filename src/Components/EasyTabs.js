import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames'

const EasyTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('0');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <Nav tabs style={{ 'marginBottom': '25px' }}>
        {React.Children.map(children, (child, index) => (
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === `${index}` })}
              onClick={() => { toggle(`${index}`); }}
            >
              {child.props.label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {React.Children.map(children, (child, index) => (
          <TabPane tabId={`${index}`}>
            {child}
          </TabPane>
        ))}
      </TabContent>
    </>
  )
}

const EasyTab = ({children}) => {
  return (
    <>{children}</>
  )
}

export { EasyTab, EasyTabs }