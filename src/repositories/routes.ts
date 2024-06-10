import { repository } from ".";
import { runInLaravel, template } from "../support/php";

interface RouteItem {
    method: string;
    uri: string;
    name: string;
    action: string;
    parameters: string[];
}

export const getRoutes = repository<RouteItem[]>(
    () => {
        return runInLaravel<RouteItem[]>(template("routes"), "HTTP Routes");
    },
    "{,**/}{[Rr]oute}{,s}{.php,/*.php,/**/*.php}",
    [],
);