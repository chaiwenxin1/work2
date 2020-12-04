import React, { Component } from 'react'
import './slideshow.css'
import {Carousel} from 'antd-mobile'

export default class Slideshow extends Component {
    render() {
        return (
            <div className='body'>
                <div className='slideshow'>
                    <Carousel 
                      autoplay={true}
                      infinite>
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://gw.alicdn.com/imgextra/i3/191/O1CN01VWfpT01DHWHQurTZ7_!!191-0-lubanu.jpg'
                            alt="" 
                           />
                        </div>
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://gw.alicdn.com/imgextra/i3/111/O1CN01fhP0rv1CgsatV3Imq_!!111-0-lubanu.jpg'
                            alt="" 
                           />
                        </div>  
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://gw.alicdn.com/imgextra/i2/69/O1CN012kgqDf1CNdxWjfTPO_!!69-0-lubanu.jpg'
                            alt="" 
                           />
                        </div>
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg'
                            alt="" 
                           />
                        </div>                                      
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://gw.alicdn.com/imgextra/i2/87/O1CN015w4ZpM1CVt5SJMwF8_!!87-0-lubanu.jpg'
                            alt="" 
                           />
                        </div>       
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000004027/O1CN01dTRyPp1fcPaQwt7s4_!!6000000004027-0-octopus.jpg'
                            alt="" 
                           />
                        </div>       
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://gw.alicdn.com/imgextra/i2/104/O1CN010jvtis1Cdfp5OSQOA_!!104-0-lubanu.jpg'
                            alt="" 
                           />
                        </div>       
                        <div >
                            <img style={{width:'100%'}} 
                            src='https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
                            alt="" 
                           />
                        </div>       
                    </Carousel>

                </div>     
            </div>
        )
    }
}


