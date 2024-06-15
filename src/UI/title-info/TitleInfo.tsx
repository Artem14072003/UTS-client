
interface ITitleInfo {
    title: string;
    desc: string;
    prevTitle: string;
    className: string
}

const TitleInfo = ({prevTitle, title, desc, className}: ITitleInfo) => {
    return (
        <>
            <span className={`${className}-prev prev-title`}>{prevTitle}</span>
            <h2 className={`${className}-title titleInfo`}>{title}</h2>
            <p className={`${className}-desc descInfo`}>{desc}</p>
        </>
    );
};

export default TitleInfo;