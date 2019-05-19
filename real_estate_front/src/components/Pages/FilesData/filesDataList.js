import React, {Component} from 'react';
import DataTableView from '../../Common/DataTable/DataTable';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { collectData, deleteData } from "../../../store/files/actions";


class filesDataList extends Component {

    // url variable is required (need to add only api url without '?format=datatables' param)
    // dt_headers is required
    constructor(props) {
        super(props)
    }

    handleGetData = () => {
      console.log('handleGetData')
      this.props.collectData()
    }

    handleDelData = () => {
      console.log('handleDelData')
      this.props.deleteData()
    }

    render() {
        const dt_headers =
            <tr>
              <th></th>
              <th data-data='doc_name'>Doc Name</th>
              <th data-data='id'>ID</th>
              <th data-data='status'>Status</th>
              <th data-data='resource'>Resource</th>
              <th data-data='group_name'>Group Name</th>
              <th data-data='doc_link'>Doc Link</th>
              <th data-data='text'>File Text</th>
              <th data-data='create_date'>Data Created</th>
            </tr>;

        const dt_config = {
            processing: true,
            columnDefs: [
                {
                    targets: 1,
                    visible: false
                },
                {
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    defaultContent: '',
                    className: 'select-checkbox'
                },
                {
                    targets: 6,
                    data: "doc_link",
                    render: function (data, type, full, meta) {
                        return '<a target="_blank" href="' + data + '">"' + full.doc_name + '"</a>';
                    }
                },
                {
                    targets: 7,
                    data: "text",
                    searchable: true,
                },

            ],
        };

        const func_config = {
            SingleColumnSearch: {target: 7},
            regexSearch: true
        };

        console.log('filesData', this.props.filesData)

        const tableActions = {
            reload: this.props.filesData.deleteData.status || this.props.filesData.collectData.status ? true : false
        }

        console.log('tableActions', tableActions)

        return (
            <div>
                <div style={{float: 'right'}}>
                    <button
                            className='btn btn-primary btn-sm '
                            type="submit"
                            onClick={this.handleGetData}
                    >
                        Collect Data
                    </button>
                    <button
                            className='btn btn-danger btn-sm '
                            onClick={this.handleDelData}
                    >
                        Remove Data
                    </button>
                </div>
                <div style={{minHeight: '50px', fontSize: '0.8em'}}>
                    Data collection resources:
                    <p>
                        <a target="_blnak" href="https://www.bamble.kommune.no/status-planer/planer-pa-horingtil-offentlig-ettersyn/">
                            https://www.bamble.kommune.no/status-planer/planer-pa-horingtil-offentlig-ettersyn/
                        </a>
                    </p>
                    <p>
                        <a target="_blnak" href="https://www.bamble.kommune.no/status-planer/kunngjoringvarsel-om-oppstart/">
                            https://www.bamble.kommune.no/status-planer/kunngjoringvarsel-om-oppstart/
                        </a>
                    </p>
                    <p>
                        <a target="_blnak" href="https://www.bamble.kommune.no/status-planer/kunngjoring-av-vedtatte-reguleringsplaner/">
                            https://www.bamble.kommune.no/status-planer/kunngjoring-av-vedtatte-reguleringsplaner/
                        </a>
                    </p>
                    <p>
                        <a target="_blnak" href="https://www.bamble.kommune.no/kunngjoringer/">
                            https://www.bamble.kommune.no/kunngjoringer/
                        </a>
                    </p>
                </div>
                <div></div>
                <DataTableView
                    url='http://104.248.27.0/api/v1/data/'
                    dt_headers={dt_headers}
                    dt_config={dt_config}
                    func_config={func_config}
                    tableActions={tableActions}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    collectData,
    deleteData
    }, dispatch);

const mapStateToProps = state => {
    return (
        {filesData: state.filesData }
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(filesDataList);
