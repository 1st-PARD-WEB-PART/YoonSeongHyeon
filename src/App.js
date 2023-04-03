<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import MyPage from './pages/Mypage';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/:username" element={<Profile />} />
                <Route path="/mypage" element={<MyPage />} />
            </Route>
            <Route path="/articles" element={<Articles />}>
                <Route path=":id" element={<Article />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
=======
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// 입력 라벨을 나타내는 함수
function Label(props) {
  return (
    <label style={{ margin: '30px' }}>
      {props.labelText}
      {props.children}
    </label>
  );
}

// 입력 라벨과 입력 필드를 포함하는 함수
function InputLabel(props,) {
  return (
    <Label labelText={props.labelText}>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </Label>
  );
}

// 메인 함수
function App() {
  //name, email, message 생성 및 빈 문자열로  초기화
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //정보를 제출했을 때 호출되는 함수
  function handleSubmit(event) {
    event.preventDefault(); // 폼 제출 이벤트를 취소하고 console.log()를 호출하도록 합니다.
    console.log('Submitted:', name, email, message);
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  //
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* InputLabel 컴포넌트를 사용하여 입력 필드와 라벨을 그룹화 */}
        <InputLabel labelText="Name:" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <InputLabel labelText="Email:" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <InputLabel labelText="Message:" value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
>>>>>>> ca6978adca18d5cacf83eaf53625fcc0015dd7d0

export default App;