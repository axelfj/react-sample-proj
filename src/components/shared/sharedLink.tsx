
import { Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";

import {FC} from "react";

interface SharedLinkProps {
    to: string;
    text: string;
}

const SharedLink: FC<SharedLinkProps> = ({to, text}) => {

    return (
        <Link component={RouterLink} {...to}>{text}</Link>
    )
}

export default SharedLink;