import { React } from "react";
import SwiperCard from "./SwiperCard";
import UploadSide from "./UploadSide";
import AddButton from "./AddButton";
import { observer } from "mobx-react-lite";

function UploadPic() {
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-start-1 col-end-10 bg-slate-400">
                <SwiperCard />
                <AddButton />
            </div>
            <div className="col-start-10 col-span-3 bg-slate-100">
                <UploadSide />
            </div>
        </div>
    );
}

export default observer(UploadPic);
