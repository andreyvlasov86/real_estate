import React, {Component} from 'react';
import DataTableView from '../../Common/DataTable/DataTable';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
//import { collectData, deleteData } from "../../../store/files/actions";


class Announcements extends Component {

    // url variable is required (need to add only api url without '?format=datatables' param)
    // dt_headers is required
    constructor(props) {
        super(props)
    }

    // handleGetData = () => {
    //   console.log('handleGetData')
    //   this.props.collectData()
    // }
    //
    // handleDelData = () => {
    //   console.log('handleDelData')
    //   this.props.deleteData()
    // }

    render() {
        const dt_headers =
            <tr>
              <th></th>
              <th data-data='id'>ID</th>
              <th data-data='status'>Status</th>
              <th data-data='text'>File Text</th>
              <th data-data='created'>Data Created</th>
            </tr>;

        const dt_config = {
            processing: true,
            columnDefs: [
                {
                    targets: 0,
                    orderable: false,
                    searchable: false,
                    defaultContent: '',
                    className: 'select-checkbox'
                },

            ],
        };

        const func_config = {
            SingleColumnSearch: false,
            regexSearch: false
        };

        // const tableActions = {
        //     reload: this.props.filesData.deleteData.status || this.props.filesData.collectData.status ? true : false
        // }

        return (
            <div>
                <DataTableView
                    url='http://104.248.27.0/api/v1/announcements'
                    dt_headers={dt_headers}
                    dt_config={dt_config}
                    func_config={func_config}
                    //tableActions={tableActions}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

    }, dispatch);

const mapStateToProps = state => {
    return;
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
