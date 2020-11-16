import React, {Component} from 'react'
//定义item组件
export default class CommentItem extends Component{
    constructor(props){
        super(props)
        this.deleteComment=this.deleteComment.bind(this)
    }

    deleteComment(){
        //获取用户名
        let username=this.props.comment.username
        //判断
        if(window.confirm(`确定删除${username}评价吗?`)){
            //调用父组件app的删除方法
            this.props.delete(this.props.index)
        }
    }
    render(){
        // console.log(comments)
        return(
            <li className="list-group-item"> 
                <div className="handle"> 
                    <a href="javascript:void(0)" onClick={this.deleteComment}>删除</a> 
                </div>
        <p className="user"><span>{this.props.comment.username}</span><span>说:</span></p> <p className="centence">{this.props.comment.content}</p> </li> 
        )
    }
}