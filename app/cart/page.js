// 'use client'

import {age, name} from "./data";
import Test from "./test";

//파일 맨 위에 'use client' 넣고 만든건 clint component
// server component
// - html에 자바스크립트 기능넣기 불가능
// - 예를들어 div안에 onClick같은거 넣으면 에러난다.
// - useState, useEffect 사용불가
// - 로딩속도 빠름
// - 검색엔진 노출 유리
// - 큰페이지

// client component
// - 로딩속도 느림(자바스크립트 많이 필요)
// - hydration 필요 (html 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석하는 일)
// - js기능이 필요한 곳

export default function Cart() {

  let items = ['Tomatoes', 'Pasta']
  return (
    <div>
        <Test/>
      <h4 className='title'>Cart</h4>
      <div className='cart-item'>
        <p>{name} {age}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem items={items}/>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className='cart-item'>
      <p>{props.items[0]}</p>
      <p>$40</p>
      <Btn color='blue'/>
    </div>
  );
}


function Btn(props){
  return(<div>
    <button style={{background:props.color}}>버튼입니다.</button>
  </div>);
}