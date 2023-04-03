// "react-router-dom" 라이브러리에서 "useParams" 훅을 import 합니다.
import { useParams } from 'react-router-dom';
import shImg from './shimg.jpg';

// 사용자 정보를 담은 객체입니다.
const data = {
    Kyj: {
        name: '김유진',
        description: '파드의 웹파트 파트장',
    },
    Ysh: {
        name: '윤성현',
        description: '파드의 웹파트',
        age: 21,
        pictrue: "/img/shimg.jpg",
    },
};

// 프로필 정보를 표시하는 컴포넌트입니다.
function Profile() {
    // "useParams" 훅을 사용하여 URL에서 전달된 username 파라미터를 가져옵니다.
    const params = useParams();

    // username 파라미터에 해당하는 사용자 정보를 "data" 객체에서 가져옵니다.
    const profile = data[params.username];

    // 사용자 정보가 존재하면 해당 정보를 화면에 표시하고, 그렇지 않으면 존재하지 않는 프로필임을 알리는 메시지를 표시합니다.
    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                    <p>{profile.age}</p>
                    <img src={shImg} width="600" height="400" alt=' ' />
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
}

// Profile 컴포넌트를 모듈의 기본 내보내기(default export)로 내보냅니다.
export default Profile;