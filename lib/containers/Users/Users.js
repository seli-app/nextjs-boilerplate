import React from 'react';
import { connect } from 'react-redux';
import './Users.scss';
import { useTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import PageHeader from '../../components/PageHeader/PageHeader';

export const users = (props) => {
  const { t } = useTranslation();
  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    },
    {
      Header: t('first name'),
      accessor: 'first_name'
    },
    {
      Header: t('last name'),
      accessor: 'last_name'
    },
    {
      Header: t('avatar'),
      accessor: 'avatar'
    }
  ];
  const data = props.reqres.users;

  return (
    <div className="container-fluid">
      <PageHeader title="users" />
      <ReactTable
        data={data}
        columns={columns}
        previousText={t('previous')}
        nextText={t('next')}
        loadingText={t('loading')}
        noDataText={t('no rows found')}
        pageText={t('page')}
        ofText={t('of')}
        rowsText={t('rows')}
        pageJumpText={t('jump to page')}
        rowsSelectorText={t('rows per page')}
      />
    </div>
  );
};

export default connect(state => state)(users);
