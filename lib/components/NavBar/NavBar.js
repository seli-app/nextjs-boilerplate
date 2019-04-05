import React from 'react';
import './NavBar.scss';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import Brand from './Brand/Brand';
import Divider from './Divider/Divider';
import Item from './Item/Item';

export const NavBar = (props) => {
  const {
    sections, expanded, expand, collapse
  } = props;

  const toggle = () => (expanded ? collapse() : expand());

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion${expanded ? '' : ' toggled'}`}
      id="accordionSidebar"
    >
      <Brand
        className="sidebar-brand d-flex align-items-center justify-content-center"
        brandName="Seli React Boilerplate"
      />

      <Divider />

      {sections.map((section) => {
        const { heading } = section;

        return (
          <div key={`section-${heading}`}>
            {heading ? (
              <div className="sidebar-heading">
                <Trans>{heading}</Trans>
              </div>
            ) : null}

            {section.items.map((item, index) => {
              const {
                href, items, icon, name
              } = item;
              return (
                <Item key={`item-${name}`} id={index} href={href} items={items} icon={icon} name={name} />
              );
            })}
          </div>
        );
      })}

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggle} type="button" />
      </div>
    </ul>
  );
};

NavBar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          icon: PropTypes.string,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              itemName: PropTypes.string.isRequired,
              itemIcon: PropTypes.string,
              itemHref: PropTypes.string.isRequired
            })
          )
        })
      )
    })
  ),
  expanded: PropTypes.bool.isRequired,
  expand: PropTypes.func.isRequired,
  collapse: PropTypes.func.isRequired
};

NavBar.defaultProps = {
  sections: []
};

export default NavBar;
