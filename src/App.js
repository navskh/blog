import './App.css';
import React, { useState } from 'react';

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

	let [입력값, 입력값변경] = useState('');

	return (
		<div className="App">
			<div className="black-nav">
				<h4>{logo}</h4>
			</div>
			{title.map(function (v, k) {
				return (
					<div className="list">
						<h4>
							<span
                href=""
                style={{cursor: 'pointer'}}
								onClick={() => {
									setModalTitle(k);
									setModal(!modal);
								}}
							>
								{title[k]}
							</span>
							<span
								onClick={() => {
									let cpGood = [...good];
									cpGood[k] = cpGood[k] + 1;
									setGood(cpGood);
                }}
                style={{cursor: 'pointer'}}
							>
								👍
							</span>
							{good[k]}
							<button
								style={{ float: 'right', marginRight: '25px' }}
								onClick={() => {
									let cpTitle = [...title];
									let cpGood = [...good];

									cpTitle.splice(k, 1);
									cpGood.splice(k, 1);

									setTitle(cpTitle);
									setGood(cpGood);
								}}
							>
								{' '}
								글 삭제{' '}
							</button>
						</h4>

						<p>2월 17일 발행</p>
					</div>
				);
			})}

			<input
				type="text"
				onInput={e => {
					입력값변경(e.target.value);
					console.log(입력값);
				}}
			/>
      <button onClick={(e) => {
        let cpTitle = [...title];
        let cpGood = [...good];
        cpTitle.unshift(입력값);
        cpGood.unshift(0);

        setTitle(cpTitle);
        setGood(cpGood);
      }}> 발행 </button>

			{modal ? (
				<Modal
					title={title}
					color={'skyblue'}
					setTitle={setTitle}
					index={modalTitle}
				/>
      ) : null}
      
      <Modal2></Modal2>
    </div>
	);
}

// const Modal = () => {} 이렇게 만들어도 됨
function Modal(props) {
	return (
		<div className="modal" style={{ background: props.color }}>
			<h4>{props.title[props.index]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button
				onClick={() => {
					let strTitle = [...props.title];
					strTitle[props.index] = '여자코트추천';
					props.setTitle(strTitle);
				}}
			>
				글 수정
			</button>
		</div>
	);
}

class Modal2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'kim',
			age: 20,
		};
	}
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({ age: 21 });
					}}
				>
					{' '}
					나이 변경{' '}
				</button>
				안녕 {this.state.name} {this.state.age}{' '}
			</div>
		);
	}
}

export default App;
