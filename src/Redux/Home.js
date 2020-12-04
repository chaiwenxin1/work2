import React,{useState} from 'react'
import { connect } from 'react-redux'
import {ActivityIndicator} from 'antd-mobile'
import {login} from './actionCreators'
const Home = (props) => {
    const [isShow,setShow]=useState(false);
    const lost = () => {
        props.dispatch(login());
        // setShow(true);
        // alert();
        // let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
        // fetch(url, {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         props.dispatch(login(res.data.name));
        //         setShow(false);
        //     })
    }
    return (
        <div>
            {
                props.username
                    ? <div>
                        { props.username }
                        <button
                            onClick={ lost }
                        >退出</button>
                    </div>
                    : <button
                        onClick={ lost }
                    >登录</button>
            }
            <ActivityIndicator
               toast
               text='登录中...'
               animating={isShow} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    username: state.home.username
})
export default connect(mapStateToProps)(Home);
