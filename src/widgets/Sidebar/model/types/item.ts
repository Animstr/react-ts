import { FunctionComponent, SVGAttributes } from "react";


export interface SidebarItemType {
    path: string;
    text: string;
    icon: FunctionComponent<SVGAttributes<SVGElement>>;
    authOnly?: boolean;
}
