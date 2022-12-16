import React, {useRef, useState} from "react";
import style from "./writteMassage.module.scss";
import LoginBtn from "../../components/LoginBtn/LoginBtn";
import {useContext} from "react";
import {AuthContext} from "../../context/authContext";
import {logoutIcon, sendIcon} from "../../assets/icons";


interface props {
    send: (text: string) => Promise<void>
}


const WriteMessage:React.FC<props> = ({send}) => {

    const {auth, setAuth} = useContext(AuthContext);
    const textAreaRed = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState(false);

    const SendComments = () => {
        setLoading(true);
        send(textAreaRed.current!.value).then(()=>{
            textAreaRed.current!.value = '';
            setLoading(false)
        })
    }

    return (
        <>
            <div style={auth ? {backgroundColor: '#59667633', padding: '0.6rem'} : {}} className={style.writeMessage}>
                {
                    auth ? <div className={style.messageForm}>
                        <form>
                            <textarea ref={textAreaRed} spellCheck={false} name="massage"></textarea>
                        </form>
                        <div className={style.btnWrapper}>
                            <div onClick={SendComments} className={style.send}>
                                <p>Send</p> <span> <img className={`${loading ? style.loading : ''}`} src={sendIcon} alt={""}/> </span>
                            </div>
                            <div className={style.logout}>
                                <p>Logout</p> <span> <img src={logoutIcon} alt={""}/> </span>
                            </div>
                        </div>
                    </div> : <div>
                        <div className={style.text}>
                            <h4>You can leave a little message too !</h4>
                            <p>You need to be signed with Github to post a message.</p>
                        </div>
                        <div className={style.btn}>
                            <LoginBtn/>
                        </div>
                    </div>
                }

            </div>
        </>
    );
};

export default WriteMessage;
