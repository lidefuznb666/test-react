import React, {Component} from 'react'
import CommentItem from "../comment-item/comment-item"
import './comment-list.css'
//定义list组件
export default class CommentList extends Component{
    render(){
        //获取app组件传递的数据
        let comments=this.props.comments;
        let display=comments.length >0 ?'none':'block'
        // console.log(comments)
        return(
            <div className="col-md-8"> 
            <h3 className="reply">评论：</h3> 
            <h2 style={{display: display}}>暂无评论，请点击左侧添加评论！！！</h2> 
            <ul className="list-group"> 
            {
                comments.map((comment,index)=>{
                    return  <CommentItem comment={comment} key={index} index={index} delete={this.props.delete}/>
                })
            }
           
            </ul> 
            </div>
        )
    }
}