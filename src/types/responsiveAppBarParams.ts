import { ResponsiveAppBarMenuItem } from "./responsiveAppBarMenuItem";
import { User } from "./user";

export type ResponsiveAppBarParams = {
    label: string;
    navMenuItems: ResponsiveAppBarMenuItem[];
    userMenuItems: ResponsiveAppBarMenuItem[];
    getNavigateFn: () => (url: string) => void;
    user?: User;
}