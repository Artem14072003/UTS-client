import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <div className={'error-page'}>
                <h1 className={'error-page_text'}>Что-то пошло не так!</h1>
                <h2 className={'error-page_status'}>{error.status}</h2>
                <p className={'error-page_statusText'}>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
                <Link to={'/'} className={'btn'}>На главную</Link>
            </div>
        );
    } else {
        return <div className={'error-page'}>
            <h1 className={'error-page_text title'}>Что-то пошло не так!</h1>
        </div>;
    }
};

export default Error;