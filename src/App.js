import './App.css';
import { useState } from 'react';

function App() {
	let [logo, setLogo] = useState('리액트 블로그');
	let [title, setTitle] = useState([
		'남자 코트 추천',
		'파이썬 강의 정리',
		'리액트 강의',
	]);

	let [good, setGood] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false); // 모달 창, 보이고 안보임
  let [modalTitle, setModalTitle] = useState(0);

	return (
		<div className="App">
			<div className="black-nav">
				<h4>{logo}</h4>
			</div>
			{[0, 1, 2].map(function (v, k) {
				return (
					<div className="list">
						<h4
              onClick={() => {
                setModalTitle(k);
								setModal(!modal);
							}}
						>
              {title[k]} <span onClick={() => {
                let cpGood = [...good];
                cpGood[k] = cpGood[k] + 1;
                setGood(cpGood);
              }}>👍</span> {good[k]}{' '}
						</h4>
						<p>2월 17일 발행</p>
					</div>
				);
			})}

      {modal ? <Modal title={title} color={'skyblue'} setTitle={setTitle} index={modalTitle} /> : null}
		</div>
	);
}

// const Modal = () => {} 이렇게 만들어도 됨
function Modal(props) {
	return (
		<div className="modal" style={{background: props.color}}>
			<h4>{props.title[props.index]}</h4>
			<p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let strTitle = [...props.title];
        strTitle[props.index] = '여자코트추천';
        props.setTitle(strTitle);
      }}>글 수정</button>
		</div>
	);
}

export default App;
