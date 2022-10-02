import group81 from '../../assets/Group 81.png';
import AI from '../../assets/Illustration.png';
import './header.css';



let Header = () => {
    return (
        <div className="gpt3__header section__padding" id='home'>
            <div className="gpt3__header-content">
                <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='gpt3_header-content__input'>
                    <input type="email" />
                    <button>get started</button>
                </div>
                <div className="gpt3_header-content_people">
                    <img src={group81} alt="group81" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
                <div className="gpt3_header-image">
                    <img src={AI} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
