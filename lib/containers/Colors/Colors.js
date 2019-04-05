import React from 'react';
import './Colors.scss';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import PageHeader from '../../components/PageHeader/PageHeader';

export const colors = (props) => {
  const { t } = useTranslation();
  const columns = [
    {
      Header: t('id'),
      accessor: 'id'
    }, {
      Header: t('name'),
      accessor: 'name',
    }, {
      Header: t('year'),
      accessor: 'year'
    }, {
      Header: t('hexadecimal value'),
      accessor: 'color'
    }, {
      Header: t('pantone value'),
      accessor: 'pantone_value'
    }
  ];
  const data = props.reqres.colors;

  return (
    <div className="container-fluid">
      <PageHeader title="colors" />
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

colors.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      pantone_value: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(state => state)(colors);
