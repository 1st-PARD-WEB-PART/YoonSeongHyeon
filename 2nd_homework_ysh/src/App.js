// <<<<<<< HEAD
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
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// �Է� ���� ��Ÿ���� �Լ�
function Label(props) {
  return (
    <label style={{ margin: '30px' }}>
      {props.labelText}
      {props.children}
    </label>
  );
}

// �Է� �󺧰� �Է� �ʵ带 �����ϴ� �Լ�
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

// ���� �Լ�
function App() {
  //name, email, message ���� �� �� ���ڿ���  �ʱ�ȭ
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //������ �������� �� ȣ��Ǵ�? �Լ�
  function handleSubmit(event) {
    event.preventDefault(); // �� ���� �̺�Ʈ�� ����ϰ�? console.log()�� ȣ���ϵ��� �մϴ�.
    console.log('Submitted:', name, email, message);
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  //
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        {/* InputLabel ������Ʈ�� ����Ͽ�? �Է� �ʵ��? ���� �׷�ȭ */}
        <InputLabel labelText="Name:" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <InputLabel labelText="Email:" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <InputLabel labelText="Message:" value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// >>>>>>> ca6978adca18d5cacf83eaf53625fcc0015dd7d0

export default App;