import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const error = useRouteError();;

    useEffect(() => {
        if (error instanceof Error) {
            setErrorMessage(error.message);
        } else {
            setErrorMessage("Page not found");
        }
    }, [error]);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred!</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
}