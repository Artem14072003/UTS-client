const Sad = ({title = "грузовиков"}) =>
    <div className={'message_card sad'}>
        <img className={'sad_image'} src="/image/not_trucks/sad.png" alt="Приносим свои извинения!"
             draggable={false}/>
        <span className={'sad_text'}></span>Увы пока {title} нет в наличии, приносим свои
        извенения!</div>

export default Sad;