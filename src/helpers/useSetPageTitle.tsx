import { useEffect } from "react";
import settings from "../Settings";

export default function useSetPageTitle(pageTitle: string) {
    useEffect(() => {
        (async function() { try { document.title = "[ " + pageTitle + " ] " + settings.applicationTitle; } catch (e) { console.error(e); } })();
    }, []);
}