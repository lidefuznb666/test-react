import React,{Component} from 'react'
//定义add添加组件
export default class CommentAdd extends Component{
    constructor(props){
        super(props)
        //初始化状态
        this.state={
            username:'',
            content:''
        }
        this.changeUsername=this.changeUsername.bind(this)
        this.changeContent=this.changeContent.bind(this)
        this.addComment=this.addComment.bind(this)

    }
    changeUsername(event){
        // alert(event.target.value)
        //更新状态
        this.setState({
            username:event.target.value
        })
    }

    changeContent(event){
         //更新状态
         this.setState({
            content:event.target.value
        })
    }
    addComment(){
        //收集username和content
        //解构赋值
        let {username,content}=this.state;
        //封装在变量里
        let comment={username,content}
        // console.log(comment)
        //添加到comments集合里
        //拿父组件添加方法
        this.props.add(comment)
        //清除输入的数据
        this.setState({
            username:'',
            content:''
        })

    }
    render(){
        return(
            <div>
                <div className="col-md-4"> 
                <form className="form-horizontal"> 
                <div className="form-group"> 
                <label>用户名</label> 
                <input type="text" className="form-control" placeholder="用户名" value={this.state.username} onChange={this.changeUsername} /> 
                </div> 
                <div className="form-group"> 
                <label>评论内容</label> 
                <textarea className="form-control" rows="6" placeholder="评论内容" value={this.state.content} onChange={this.changeContent}></textarea> 
                </div> 
                <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-10"> 
                    <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button> 
                </div> 
                </div> 
                </form> 
                </div>
            </div>
        )
    }
}