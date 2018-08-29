import React, { Component } from 'react'; // 只要写React.js组件就必须要引入这两个东西
import ReactDOM from 'react-dom'; // ReactDOM可以帮我们把React组件渲染到页面上去
import './index.css'
// import App from './App'
// import registerServiceWorker from './registerServiceWorker'
class Title extends Component {
    handerClickOnTitle(e){
        // console.log(e.target.innerHTML)
        console.log(this)
    }
  render () {
    const isGood = true
    return (
      <div>
        <h1 onClick={this.handerClickOnTitle.bind(this)}>react 小书{isGood ? <strong>is good</strong> : <span>is not good</span>}</h1>
      </div>
    )
  }
}
class Header extends Component {
  render () {
    return (
      <div>
        <Title/>
        <h2>This is Header</h2>
      </div>

    )
  }
}
class Main extends Component {
  render () {
    return (
      <div>
        <h3>This is main content</h3>
      </div>
    )
  }
}
class Footer extends Component {
  render () {
    return (
      <div>
        <h4>This is footer</h4>
      </div>
    )
  }
}
class LikeButton extends Component{
    constructor(){
        super()
        this.state={isLiked:false}
    }
    handleClickOnLikeButton(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render(){
        return(
            <button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.isLiked?'取消':'点赞'}<span>👍</span></button>
        )
    }
}
const users=[
     {
        username:'jerry',
        age:21,
        gender:'male'
    },{
         username: 'tomy',
         age: 18,
         gender: 'male'
     }, {
         username: 'hally',
         age: 23,
         gender: 'female'
     }, {
         username: 'dell',
         age: 222,
         gender: 'female'
     },
]
// 列表的第一种写法 push 
/*class TodoOne extends Component{
    render(){
        const userElements=[]
        for (let user of users) {
            userElements.push(
                <div>
                  <div>姓名:{user.username}</div>
                  <div>年龄:{user.age}</div>
                  <div>性别:{user.gender}</div>
                </div>
            )
        }
        return(
            <div>{userElements}</div>
        )
    }
}*/
// 列表的第二种写法 map 优化
/*class TodoOne extends Component{
    render(){
        return(
            <div>{users.map((user)=>{
                return(
                    <div>
                      <div>姓名:{user.username}</div>
                      <div>年龄:{user.age}</div>
                      <div>性别:{user.gender}</div>
                      <hr/>
                    </div>
                     )
            })}</div>
        )
    }
}*/
// 列表的第三种写法  继续优化
class User extends Component{
    render(){
        const {user}=this.props
        return(
            <div>
              <div>姓名:{user.username}</div>
              <div>年龄:{user.age}</div>
              <div>性别:{user.gender}</div>
              <hr/>
            </div>
            )
        
        
    }
}
class TodoOne extends Component{
    render(){
        return(
            <div>{users.map((user,i)=><User user={user} key={i}/>)}</div>
        )
    }
}
class Index extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <LikeButton/>
        <TodoOne/>
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
// registerServiceWorker()
