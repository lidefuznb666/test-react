//定义app组件
import React,{Component} from 'react'
import CommentList from '../comment-list/comment-list'
import CommentAdd from '../comment-add/comment-add'
export default class App extends Component{
    constructor(props){
        super(props)
        //初始化状态
        this.state={
            comments:[]
        }

        this.add=this.add.bind(this)
        this.delete=this.delete.bind(this)
    }

    //添加方法 comment要添加的数据
    add=(comment)=>{
        //读取comments
        let comments=this.state.comments;
        comments.unshift(comment)
        //更新状态
        this.setState({comments:comments})
    }

    //删除方法  index=>要删除数据的索引
    delete(index){
        //读取数据状态
        let comments=this.state.comments;
        //直接做删除
        comments.splice(index,1)
        //更新下状态数据
        this.setState({comments:comments})
    }

    //异步数据获取
    componentDidMount(){
        setTimeout(()=>{
            const comments=[
                {
                    username:'小黄',
                    content:'react太难了',
                    id:Date.now()
                },
                {
                    username:'大黄',
                    content:'react我只会写增删改查',
                    id:Date.now()+1 
                },
                {
                    username:'小红',
                    content:'其实我是写VUE的啊',
                    id:Date.now()+2 
                }
            ]

            //更新状态
            this.setState({comments:comments})
        })
    }
    render(){
        // console.log(this.state.comments)
        return(
            <div> 
            <header className="site-header jumbotron"> 
                <div className="container"> 
                <div className="row"> 
                <div className="col-xs-12"> 
                <h1>请发表对React的评论</h1> 
                </div> 
                </div> 
                </div> 
            </header> 
            <div className="container">
            <CommentAdd add={this.add}/> 
            <CommentList comments={this.state.comments} delete={this.delete}/>
            </div> 
            </div>
        )
    }
}