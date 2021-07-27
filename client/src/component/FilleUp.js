import React, { Component } from 'react';
import axios from 'axios';

class FilleUp extends Component {
    state={file:'null'};
   
    render() {
        return (
            <div>
                <form onSubmit={async(e)=>{
                        e.preventDefault();
                        const form=new FormData();
                        if(this.state.file){
                            for(let i=0;i<this.state.file.length;i++){
                                form.append(`photos`,this.state.file[i]);
                            }
                        }
                        if(this.state.file.length>0){
                            await axios.post('http://localhost:3000/photos',form)
                        }
                        
                   
                    }}>
                    <input type="file" multiple name="images" ref={fileinput=>this.fileinput=fileinput} style={{display:'none'}} onChange={(e)=>{
                        this.setState({file:e.target.files});
                    }}/>
                    <button onClick={()=>{
                        this.fileinput.click()
                    }}>Select Files</button>
                    <button>Upload</button>
                </form>
            </div>
        );
    }
}

export default FilleUp;