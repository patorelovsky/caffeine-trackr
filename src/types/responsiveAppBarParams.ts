import { ResponsiveAppBarMenuItem } from "./responsiveAppBarMenuItem";

export type ResponsiveAppBarParams = {
    label: string;
    navMenuItems: ResponsiveAppBarMenuItem[];
    userMenuItems: ResponsiveAppBarMenuItem[];
    getNavigateFn: () => (url: string) => void;
}