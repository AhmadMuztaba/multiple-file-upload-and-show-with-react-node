import React, { Component } from 'react';
import axios from 'axios';
import './style.scss';
class GetImages extends Component {
    state={images:[],im:[],count:0}
    componentDidMount(){
        const search=async()=>{
            try{
                const response=await axios.get('http://localhost:3000/photo');
                this.setState({images:response.data});
                response.data.map((image)=>{
                    image.file.map((image)=>{
                        let im=new Buffer.from(image.data).toString('base64');
                        im=`data:image/png;base64,${im}`;
                        this.setState({im:[...this.state.im,im]})
                    })
                }
                )
            }catch(err){
                console.log(err);
            }
        }
        search();
    }
    render() {
            if(this.state.im.length>0){
                return (<div className="try">
                     {
                     this.state.im.map((i,index)=>{
                         if(index===this.state.count){
                            return <img className="back" src={i}/>
                         }else{
                            return <img src={i}/>
                         }
                       
                    })
                }
                 <button disabled={this.state.im.length-1===this.state.count?true:false}onClick={()=>{
                     this.setState({count:this.state.count+1})
                 }}>+</button>
                    <button disabled={this.state.count===0?true:false}onClick={()=>{
                     this.setState({count:this.state.count-1})
                 }}>-</button>
                </div>)
               
            }else{
               return <div>Loading...</div>
            }
    }
}

export default GetImages;