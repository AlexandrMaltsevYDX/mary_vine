
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback="Loading..."> //! в отдельный компонент суспенс или вставлять в hoc
            {component()}
        </Suspense>
    </BrowserRouter>
);

