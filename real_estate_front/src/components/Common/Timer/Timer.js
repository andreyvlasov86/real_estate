import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { formatTimeSec } from '../../../service/date';
import { collectDataPing } from "../../../store/files/actions";
import Loader from 'react-loader-spinner';
import './TimerStyles.scss';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        this.timerID = setInterval(
              () => {
                  //const token_obj = accessToken(this.props.data.token);
                  //const { token } = token_obj;
                  //const nowInSeconds = (new Date()).getTime() / 1000;
                  //const expirationTimeInSeconds = token.expires_at.getTime() / 1000;
                  this.setState({
                      time: Date.now(),
                      //token_time: (expirationTimeInSeconds - nowInSeconds).toFixed(),
                      //token_exp: token_obj.expired()
                  });

                  if (this.props.filesData.loading && this.props.filesData.id) {
                      const processId = this.props.filesData.id
                      console.log('PING', processId)
                      this.props.collectDataPing(processId)
                  }

              },
              1000
            );
      }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {

        //console.log('Timer', this.props.filesData)
        this.props.filesData && this.props.filesData.loading && console.log('collectDataPing', this.props.filesData)
        const loading = this.props.filesData && this.props.filesData.id && this.props.filesData.loading
        //const loading = true;
        const msg = this.props.filesData && this.props.filesData.data.msg && this.props.filesData.data.msg;
        return (
            <>
                <div className='row' style={{color: 'white', fontSize: '0.7em'}}>
                    <div className='col-lg-4'>
                        <div>
                            local time:
                        </div>
                        <div>
                            {formatTimeSec(this.state.time)}
                        </div>
                    </div>
                </div>
                {loading &&
                    <div className='layout'>
                        <div className='spinnerLayout'>
                            <span>{msg && msg}</span>
                            <Loader
                                type="Oval"
                                color="#00BFFF"
                                height="100"
                                width="100"
                            />
                        </div>
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return ({
        data: state.auth,
        filesData: state.filesData.collectData
    })
};

const mapDispatchToProps = dispatch => bindActionCreators({
    collectDataPing
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
