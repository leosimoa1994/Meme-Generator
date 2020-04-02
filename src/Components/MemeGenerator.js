import React, {Component} from 'react'

class Meme extends Component {
    constructor(){
        super()
        this.state = {
            top: "",
            bottom: "",
            image: "http://i.imgflip.com/1bij.jpg",
            allMemesImgs: [],
            topMT: 0,
            topML: 0,
            bottomMT: 0,
            bottomML: 0,
        }
        this.updateState = this.updateState.bind(this)
        this.randomImg = this.randomImg.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(resp => resp.json())
        .then(resp => {
            const {memes} = resp.data
            this.setState({
                allMemesImgs: memes
            })
        })
    }


    updateState(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    randomImg(e){
        e.preventDefault();
        const randomImage = Math.floor(Math.random() * this.state.allMemesImgs.length)
        const imgRandom = this.state.allMemesImgs[randomImage].url
        this.setState({
            image: imgRandom
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.randomImg}>
                    <div className="topmenu">
                        <div>
                            <input 
                                type="text" 
                                name="top" 
                                value={this.state.top}
                                placeholder="Top"
                                onChange={this.updateState}
                            />
                            <label>Top</label>
                            <input 
                                type="number" 
                                name="topMT" 
                                value={this.state.topMT} 
                                onChange={this.updateState}
                            />
                            <label>Left</label>
                            <input 
                                type="number" 
                                name="topML" 
                                value={this.state.topML}
                                onChange={this.updateState}
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                name="bottom" 
                                value={this.state.bottom}
                                placeholder="Bottom"
                                onChange={this.updateState}
                            />
                            <label>Bottom</label>
                            <input 
                                type="number" 
                                name="bottomMT" 
                                value={this.state.bottomMT} 
                                onChange={this.updateState}
                            />
                            <label>Left</label>
                            <input 
                                type="number" 
                                name="bottomML" 
                                value={this.state.bottomML}
                                onChange={this.updateState}
                            />
                        </div>
                        
                        <button>Generator</button>
                    </div>

                    <div className="meme">
                        <img 
                        src={this.state.image} 
                        alt="Meme Image"
                        />  
                        <p className="topcss" style={{ marginTop: `${this.state.topMT}px`, marginLeft: `${this.state.topML}px`}}>{this.state.top} </p>
                        <p className="bottomcss" style={{ marginBottom: `${this.state.bottomMT}px`, marginLeft: `${this.state.bottomML}px`}}>{this.state.bottom}</p>
                    </div>

                </form>
            </div>
        )
    }
}

export default Meme