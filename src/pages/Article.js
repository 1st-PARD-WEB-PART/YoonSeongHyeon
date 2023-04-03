import { useParams } from 'react-router-dom';

function Article() {
    const { id } = useParams();
    return (
        <div>
            <h2>게시글 {id}</h2> //text 안에서 쓰기 위한 변수용 중괄호
        </div>
    );
};

export default Article;