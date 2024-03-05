import { SITE_NAME } from "@/constants";

const GlobalFooter = () => {
    return (
        <div className="flex items-center justify-center my-10">
            <div className="font-mono text-xl">{SITE_NAME}</div>
        </div>
    );
};

export default GlobalFooter;
